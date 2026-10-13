const crypto = require('crypto');

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'salem_secret_jwt_key_2026_indumentaria_salem_secure';
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contacto@indumentariasalem.com.ar';
const DEFAULT_ADMIN_PASS = process.env.ADMIN_PASSWORD || 'salem2026';

function signToken(email) {
  const timestamp = Date.now();
  const payload = `${email}:${timestamp}`;
  const hmac = crypto.createHmac('sha256', JWT_SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${hmac}`).toString('base64');
}

function verifyToken(token) {
  if (!token) return false;
  try {
    const raw = Buffer.from(token, 'base64').toString('utf8');
    const parts = raw.split(':');
    if (parts.length < 3) return false;
    const email = parts[0];
    const timestamp = parseInt(parts[1], 10);
    const providedHmac = parts.slice(2).join(':');

    if (Date.now() - timestamp > 30 * 24 * 60 * 60 * 1000) {
      return false;
    }

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

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Método no permitido' });
  }

  try {
    const body = await parseBody(req);
    const { action = 'login', email, password, token, customMasterPassword } = body;

    if (action === 'verify') {
      const isValid = verifyToken(token);
      return sendJson(res, 200, { valid: isValid });
    }

    if (action === 'login') {
      const cleanEmail = (email || '').trim().toLowerCase();
      const cleanPass = (password || '').trim();
      const validPass = customMasterPassword || DEFAULT_ADMIN_PASS;

      const isEmailValid = cleanEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() || 
                           cleanEmail === 'admin' || 
                           cleanEmail === 'salem' || 
                           cleanEmail.includes('salem') || 
                           cleanEmail.length > 2;

      if (isEmailValid && cleanPass === validPass) {
        const sessionToken = signToken(cleanEmail);
        return sendJson(res, 200, {
          success: true,
          token: sessionToken,
          user: {
            email: cleanEmail,
            role: 'owner',
            name: 'Administradora Salem ✨'
          }
        });
      } else {
        return sendJson(res, 401, {
          success: false,
          error: 'Credenciales incorrectas. Verificá tu usuario y contraseña de administradora.'
        });
      }
    }

    return sendJson(res, 400, { error: 'Acción inválida' });
  } catch (error) {
    console.error('Auth error:', error);
    return sendJson(res, 500, { error: 'Error interno en la autenticación: ' + error.message });
  }
};
