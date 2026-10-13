const fs = require('fs');
const path = require('path');

const GITHUB_REPO = process.env.GITHUB_REPO || 'Mintx10/pagina-web-salem';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido. Utilizar GET.' });
  }

  try {
    let products = null;
    let settings = null;
    let source = 'bundled';

    // 1. Intentar leer desde GitHub Raw en vivo para obtener la última versión actualizada
    try {
      const rawBase = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/data`;
      const [prodRes, cfgRes] = await Promise.all([
        fetch(`${rawBase}/products.json?t=${Date.now()}`),
        fetch(`${rawBase}/config.json?t=${Date.now()}`)
      ]);

      if (prodRes.ok && cfgRes.ok) {
        products = await prodRes.json();
        settings = await cfgRes.json();
        source = 'github_live';
      }
    } catch (netErr) {
      // Fallback a archivos locales si no hay conexión o no existe todavía el JSON en GitHub
    }

    // 2. Si no se obtuvo de GitHub, intentar leer desde archivos locales en el repositorio
    if (!products) {
      try {
        const prodPath = path.join(process.cwd(), 'data', 'products.json');
        if (fs.existsSync(prodPath)) {
          products = JSON.parse(fs.readFileSync(prodPath, 'utf8'));
        }
      } catch (e) {}
    }

    if (!settings) {
      try {
        const cfgPath = path.join(process.cwd(), 'data', 'config.json');
        if (fs.existsSync(cfgPath)) {
          settings = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
        }
      } catch (e) {}
    }

    return res.status(200).json({
      success: true,
      source,
      products,
      settings,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error al obtener datos en /api/data:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno al cargar datos del catálogo: ' + error.message
    });
  }
};
