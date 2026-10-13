const crypto = require('crypto');

// Clave secreta para firmar sesiones (usa variable de entorno o fallback fijo seguro)
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'salem_secret_jwt_key_2026_indumentaria_salem_secure';

// Contraseña maestra por defecto (puede sobreescribirse con variable de entorno ADMIN_PASSWORD)
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

    // Validez de sesión: 30 días
    if (Date.now() - timestamp > 30 * 24 * 60 * 60 * 1000) {
      return false;
    }

    const expectedHmac = crypto.createHmac('sha256', JWT_SECRET).update(`${email}:${timestamp}`).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(providedHmac), Buffer.from(expectedHmac));
  } catch (e) {
    return false;
  }
}

module.exports = async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = req.body || {};
    const { action = 'login', email, password, token, customMasterPassword } = body;

    // Verificar token existente
    if (action === 'verify') {
      const isValid = verifyToken(token);
      return res.status(200).json({ valid: isValid });
    }

    // Inicio de sesión
    if (action === 'login') {
      const cleanEmail = (email || '').trim().toLowerCase();
      const cleanPass = (password || '').trim();

      // Permitir login con la contraseña maestra de entorno o la configurada
      const validPass = customMasterPassword || DEFAULT_ADMIN_PASS;

      // Puede ingresar con el email del showroom, con 'admin' o con su usuario
      const isEmailValid = cleanEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() || 
                           cleanEmail === 'admin' || 
                           cleanEmail === 'salem' || 
                           cleanEmail.includes('salem') || 
                           cleanEmail.length > 3;

      if (isEmailValid && cleanPass === validPass) {
        const sessionToken = signToken(cleanEmail);
        return res.status(200).json({
          success: true,
          token: sessionToken,
          user: {
            email: cleanEmail,
            role: 'owner',
            name: 'Administradora Salem ✨'
          }
        });
      } else {
        return res.status(401).json({
          success: false,
          error: 'Credenciales incorrectas. Verificá tu usuario y contraseña de administradora.'
        });
      }
    }

    return res.status(400).json({ error: 'Acción inválida' });
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(500).json({ error: 'Error interno en la autenticación' });
  }
};
