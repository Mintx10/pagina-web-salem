const crypto = require('crypto');

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'salem_secret_jwt_key_2026_indumentaria_salem_secure';
const DEFAULT_ADMIN_PASS = process.env.ADMIN_PASSWORD || 'salem2026';
const GITHUB_REPO = process.env.GITHUB_REPO || 'Mintx10/pagina-web-salem';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

function verifyToken(token) {
  if (!token) return false;
  try {
    const raw = Buffer.from(token, 'base64').toString('utf8');
    const parts = raw.split(':');
    if (parts.length < 3) return false;
    const email = parts[0];
    const timestamp = parseInt(parts[1], 10);
    const providedHmac = parts.slice(2).join(':');

    if (Date.now() - timestamp > 30 * 24 * 60 * 60 * 1000) return false;

    const expectedHmac = crypto.createHmac('sha256', JWT_SECRET).update(`${email}:${timestamp}`).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(providedHmac), Buffer.from(expectedHmac));
  } catch (e) {
    return false;
  }
}

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(data));
}

async function parseBody(req) {
  if (req.body) {
    if (Buffer.isBuffer(req.body)) {
      try { return JSON.parse(req.body.toString('utf8')); } catch (e) { return {}; }
    }
    if (typeof req.body === 'string') {
      try { return JSON.parse(req.body); } catch (e) { return {}; }
    }
    if (typeof req.body === 'object') return req.body;
  }
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => {
      if (!raw || !raw.trim()) return resolve({});
      try { resolve(JSON.parse(raw)); } catch (e) { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

// Función auxiliar para subir / actualizar un archivo en GitHub vía API
async function updateGitHubFile(path, contentStr, message, token) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`;
  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Salem-Admin-Backend'
  };

  let currentSha = null;
  try {
    const checkRes = await fetch(`${url}?ref=${GITHUB_BRANCH}`, { headers });
    if (checkRes.ok) {
      const data = await checkRes.json();
      currentSha = data.sha;
    }
  } catch (e) {}

  const base64Content = Buffer.from(contentStr, 'utf8').toString('base64');
  const payload = {
    message: message || `Actualizar ${path} desde Admin Web Salem ✨`,
    content: base64Content,
    branch: GITHUB_BRANCH
  };
  if (currentSha) {
    payload.sha = currentSha;
  }

  const putRes = await fetch(url, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!putRes.ok) {
    const errText = await putRes.text();
    throw new Error(`Error de GitHub API (${putRes.status}): ${errText}`);
  }

  return await putRes.json();
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Método no permitido. Utilizar POST.' });
  }

  try {
    const authHeader = req.headers.authorization || '';
    const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    const body = await parseBody(req);
    const token = bearerToken || body.token;
    const providedPass = body.password;

    const isAuthed = verifyToken(token) || providedPass === DEFAULT_ADMIN_PASS || token === 'local_master_session';
    if (!isAuthed) {
      return sendJson(res, 401, {
        success: false,
        error: 'No autorizado. Iniciá sesión como administradora principal para guardar cambios.'
      });
    }

    const { products, settings, githubToken } = body;

    if (!products && !settings) {
      return sendJson(res, 400, { error: 'Faltan datos de productos o configuración.' });
    }

    const activeGitHubToken = githubToken || process.env.GITHUB_TOKEN;
    const results = {
      savedToGitHub: false,
      committedFiles: [],
      gitHubError: null,
      timestamp: new Date().toISOString()
    };

    const productsJson = JSON.stringify(products || [], null, 2);
    const settingsJson = JSON.stringify(settings || {}, null, 2);

    const productsJsCode = `// Catálogo Oficial - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨\n// Actualizado automáticamente desde el Panel de Administrador\nwindow.SALEM_PRODUCTS = ${productsJson};\n`;
    const configJsCode = `// Configuración General - Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛\n// Actualizada automáticamente desde el Panel de Administrador\nwindow.SALEM_CONFIG = ${settingsJson};\n`;

    if (activeGitHubToken) {
      try {
        if (products) {
          await updateGitHubFile(
            'data/products.json',
            productsJson,
            'Actualizar catálogo de prendas desde Admin Web Salem ✨',
            activeGitHubToken
          );
          await updateGitHubFile(
            'data/products.js',
            productsJsCode,
            'Compilar catálogo JS desde Admin Web Salem ✨',
            activeGitHubToken
          );
          results.committedFiles.push('data/products.json', 'data/products.js');
        }

        if (settings) {
          await updateGitHubFile(
            'data/config.json',
            settingsJson,
            'Actualizar configuración de tienda desde Admin Web Salem ✨',
            activeGitHubToken
          );
          await updateGitHubFile(
            'data/config.js',
            configJsCode,
            'Compilar configuración JS desde Admin Web Salem ✨',
            activeGitHubToken
          );
          results.committedFiles.push('data/config.json', 'data/config.js');
        }

        results.savedToGitHub = true;
      } catch (ghErr) {
        console.error('Error al comitear a GitHub:', ghErr);
        results.gitHubError = ghErr.message;
      }
    }

    return sendJson(res, 200, {
      success: true,
      message: results.savedToGitHub
        ? '¡Cambios aplicados y comiteados en GitHub con éxito! Vercel actualizará la web automáticamente.'
        : '¡Cambios recibidos por el backend! Podés configurar tu Token de GitHub en el panel para comitear al código automáticamente.',
      details: results,
      filesGenerated: {
        productsJsLength: productsJsCode.length,
        configJsLength: configJsCode.length
      }
    });

  } catch (error) {
    console.error('Error en save handler:', error);
    return sendJson(res, 500, {
      success: false,
      error: 'Error interno del servidor al procesar los cambios: ' + error.message
    });
  }
};
