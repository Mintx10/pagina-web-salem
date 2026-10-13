const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer(async (req, res) => {
  // Manejo de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Enrutar endpoints de /api/
  if (pathname.startsWith('/api/')) {
    const route = pathname.replace('/api/', '');

    if (route === 'ping') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok', server: 'local-node' }));
    }

    if (route === 'auth') {
      const authHandler = require('./api/auth.js');
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          req.body = body ? JSON.parse(body) : {};
        } catch (e) {
          req.body = {};
        }
        await authHandler(req, res);
      });
      return;
    }

    if (route === 'data') {
      const dataHandler = require('./api/data.js');
      return await dataHandler(req, res);
    }

    if (route === 'save') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          req.body = body ? JSON.parse(body) : {};
        } catch (e) {
          req.body = {};
        }

        const { products, settings, token, password } = req.body;

        // Escribir directamente en disco en el entorno local
        if (products) {
          const prodJson = JSON.stringify(products, null, 2);
          fs.writeFileSync(path.join(__dirname, 'data', 'products.json'), prodJson, 'utf8');
          fs.writeFileSync(path.join(__dirname, 'data', 'products.js'), `window.SALEM_PRODUCTS = ${prodJson};\n`, 'utf8');
        }

        if (settings) {
          const cfgJson = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, 'data', 'config.json'), cfgJson, 'utf8');
          fs.writeFileSync(path.join(__dirname, 'data', 'config.js'), `window.SALEM_CONFIG = ${cfgJson};\n`, 'utf8');
        }

        // Recompilar app.bundle.js si existe build.js
        exec('node build.js', (err, stdout, stderr) => {
          if (err) console.error('Error al recompilar localmente:', err);
          else console.log('Bundle recompilado automáticamente tras guardar.');
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Cambios guardados directamente en tus archivos de código locales.',
          savedLocally: true
        }));
      });
      return;
    }
  }

  // Servir archivos estáticos
  let safePath = pathname === '/' ? '/index.html' : pathname;
  let filePath = path.join(__dirname, decodeURIComponent(safePath));

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(__dirname, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Archivo no encontrado');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n========================================================`);
  console.log(`  🚀 Tienda Jeans SLM / Indumentaria Salem`);
  console.log(`  Servidor Node con Backend activo en http://localhost:${PORT}`);
  console.log(`  Endpoints API: /api/auth, /api/data, /api/save`);
  console.log(`========================================================\n`);
});
