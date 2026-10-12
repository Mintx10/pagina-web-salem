// Configuración General - Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛
window.SALEM_CONFIG = {
  storeName: "Jeans SLM ✨",
  brandSubtitle: "Indumentaria Salem 🐈‍⬛",
  tagline: "Mayorista y minorista. Vestí con estilo, sentite única.",
  bio: "Indumentaria Salem 🐈‍⬛ • Mayorista y minorista. Vestí con estilo, sentite única. Drops semanales y envíos a todo el país.",
  
  // Enlaces oficiales y de contacto
  instagramUser: "jeans_slm",
  instagramUrl: "https://www.instagram.com/jeans_slm/",
  whatsappRaw: "MKBUYHXSKDTQK1",
  whatsappPhone: "+54 9 11 5834-9210",
  whatsappUrl: "https://wa.me/message/MKBUYHXSKDTQK1",
  supportEmail: "contacto@indumentariasalem.com.ar",
  showroomAddress: "Showroom Palermo Soho, CABA • Envíos a todo el país",
  
  // Barra de anuncios
  announcementText: "✨ 15% OFF en tu primera compra con cupón SALEM15 • Envíos gratis desde $45.000 • Hasta 6 cuotas sin interés • Venta Mayorista y Minorista",
  announcementCoupon: "SALEM15",
  announcementDiscount: 15,
  
  // Umbrales comerciales
  freeShippingThreshold: 45000,
  maxInstallments: 6,
  bankTransferDiscount: 15, // 15% OFF extra
  usdExchangeRate: 1280, // 1 USD = $1280 ARS
  
  // Datos bancarios para transferencias
  bankDetails: {
    bank: "Banco Galicia / Mercado Pago",
    alias: "SALEM.INDUMENTARIA.MP",
    cbu: "0070123400000012345678",
    holder: "Indumentaria Salem SRL",
    cuit: "30-71649281-4"
  },
  
  // Hero settings
  hero: {
    badge: "NUEVA COLECCIÓN 2026 • DROPS EXCLUSIVOS",
    title: "Vestí con estilo,",
    titleHighlight: "sentite única.",
    subtitle: "La tienda oficial de Jeans SLM e Indumentaria Salem. Prendas urbanas de autor, calce fit soñado y camperas de tendencia. Comprá online de forma segura con envíos rápidos a toda Argentina.",
    ctaPrimary: "Explorar Catálogo ✨",
    ctaSecondary: "Ver Jean Estrella ⭐",
    ctaWholesale: "Venta Mayorista 📦",
    starProductId: "slm-jean-wide-leg",
    starBadge: "TOP VENTAS SLM",
    starTag: "👖 Denim Rígido 100% Algodón • Calce Soñado"
  },
  
  // Categorías de la tienda
  categories: [
    { id: "all", label: "Todas las Prendas", icon: "Sparkles" },
    { id: "jeans", label: "Jeans & Denim", icon: "Scissors" },
    { id: "corsets", label: "Corsets & Tops", icon: "Heart" },
    { id: "camperas", label: "Camperas & Abrigos", icon: "Shirt" },
    { id: "faldas", label: "Faldas & Conjuntos", icon: "ShoppingBag" },
    { id: "accesorios", label: "Accesorios & Strass", icon: "Star" }
  ],
  
  // Métodos de envío
  shippingMethods: [
    {
      id: "correo_arg",
      name: "Correo Argentino a Domicilio",
      carrier: "Correo Argentino",
      estimatedDays: "2 a 4 días hábiles",
      cost: 4900,
      badge: "Más Elegido"
    },
    {
      id: "andreani_exp",
      name: "Andreani Express Prioritario",
      carrier: "Andreani",
      estimatedDays: "Llega en 24-48 hs",
      cost: 7800,
      badge: "Ultrarrápido"
    },
    {
      id: "pickup_store",
      name: "Retiro en Showroom Salem CABA",
      carrier: "Pick-up Palermo Soho",
      estimatedDays: "Listo en 2 horas",
      cost: 0,
      badge: "Gratis"
    }
  ],
  
  // Cupones activos válidos
  coupons: [
    { code: "SALEM15", discount: 15, minAmount: 0, description: "15% de descuento en tu compra" },
    { code: "MODA20", discount: 20, minAmount: 60000, description: "20% de descuento superando $60.000" },
    { code: "BIENVENIDA", discount: 10, minAmount: 0, description: "10% de regalo de bienvenida" },
    { code: "MAYORISTA30", discount: 30, minAmount: 120000, description: "30% OFF en compras por volumen" }
  ],
  
  // Pilares de confianza
  benefits: [
    {
      icon: "Truck",
      title: "Envíos a Todo el País",
      subtitle: "Correo Argentino y Andreani directo a tu puerta o sucursal."
    },
    {
      icon: "CreditCard",
      title: "Hasta 6 Cuotas Sin Interés",
      subtitle: "Con todas las tarjetas bancarias y 15% OFF por transferencia."
    },
    {
      icon: "PackageCheck",
      title: "Mayorista y Minorista",
      subtitle: "Precios especiales por curva y combos para revendedoras."
    },
    {
      icon: "MessageCircle",
      title: "Atención por WhatsApp",
      subtitle: "Asesoramiento personalizado en talles y modelos al instante."
    }
  ],
  
  // Guía de Talles
  sizeGuides: {
    jeans: [
      { talle: "36", cintura: "64 - 68 cm", cadera: "88 - 92 cm", tiro: "30 cm", largo: "104 cm" },
      { talle: "38", cintura: "68 - 72 cm", cadera: "92 - 96 cm", tiro: "31 cm", largo: "105 cm" },
      { talle: "40", cintura: "72 - 76 cm", cadera: "96 - 100 cm", tiro: "31.5 cm", largo: "106 cm" },
      { talle: "42", cintura: "76 - 80 cm", cadera: "100 - 104 cm", tiro: "32 cm", largo: "106 cm" },
      { talle: "44", cintura: "80 - 85 cm", cadera: "104 - 110 cm", tiro: "33 cm", largo: "107 cm" }
    ],
    corsets: [
      { talle: "S", busto: "82 - 88 cm", cintura: "60 - 66 cm", largo: "32 cm" },
      { talle: "M", busto: "88 - 94 cm", cintura: "66 - 72 cm", largo: "33 cm" },
      { talle: "L", busto: "94 - 100 cm", cintura: "72 - 78 cm", largo: "34 cm" }
    ],
    camperas: [
      { talle: "S", busto: "85 - 92 cm", hombros: "40 cm", largo: "52 cm" },
      { talle: "M", busto: "92 - 98 cm", hombros: "42 cm", largo: "54 cm" },
      { talle: "L", busto: "98 - 106 cm", hombros: "44 cm", largo: "56 cm" }
    ]
  },
  
  // Información Mayorista
  wholesale: {
    title: "Venta Mayorista Salem 🐈‍⬛",
    subtitle: "Emprendé con las prendas más virales y de mayor margen de ganancia",
    minUnits: 6,
    benefits: [
      "Mínimo accesible: desde solo 6 prendas surtidas",
      "Curva de talles 100% libre (elegís los modelos y talles que vos quieras)",
      "Descuentos de hasta el 45% sobre precio minorista",
      "Material fotográfico y videos en alta resolución para tus redes",
      "Despacho prioritario en el día a todo el país por expresos y encomiendas"
    ]
  }
};
