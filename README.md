# Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛

Tienda online clonada y adaptada a partir del diseño y arquitectura de **tienda.jariel.com.ar**, personalizada con la identidad visual, prendas, catálogo y enlaces oficiales de tu marca **Jeans SLM (@jeans_slm)**.

---

## 🚀 ¿Cómo abrir y ver la tienda?

Tenés varias opciones sencillas:

### Opción 1: Con 1 solo clic en Windows (Recomendado)
- Hacé doble clic en el archivo **`iniciar.bat`**. Se abrirá tu navegador automáticamente en `http://localhost:8080`.

### Opción 2: Abrir directamente en el navegador
- Hacé doble clic sobre el archivo **`index.html`** y se abrirá en tu navegador predeterminado (Google Chrome, Edge, etc.).

### Opción 3: Desde la terminal
```bash
python -m http.server 8080
```
o con Node.js:
```bash
npx serve -l 8080 .
```

---

## ✨ Características y Funcionalidades Incluidas

1. **Identidad de Marca Adaptada a tu Instagram (`@jeans_slm`)**:
   - Logo oficial circular transparente de Salem (el gato con destellos ✨).
   - Paleta de color chic: Hot pink, negro noir, crema marfil y toques dorados.
   - Slogan oficial: *"Mayorista y minorista. Vestí con estilo, sentite única."*
   - Integración directa con tu enlace de WhatsApp: `wa.me/message/MKBUYHXSKDTQK1`.

2. **Catálogo Real Extraído de tu Feed de Instagram**:
   - **Jean Wide Leg Salem Tiro Alto Celeste** (Producto estrella con denim rígido 100% algodón).
   - **Corset Vintage Brocado Renacimiento** (Con ballenas y tejido gobelino floral).
   - **Body Corset Encaje Rosa Romántico** (Push-up con transparencias).
   - **Corset Satén Rosa Barbiecore** (Satén brilloso con moño coquette y lazo corset).
   - **Campera Puffer Bicolor Fucsia & Black** (Térmica con cuello envolvente).
   - **Campera Aviadora Biker Doble Faz Corderito** (Eco-cuero pesado forrado en corderito).
   - **Chaqueta Corta Eco Cuero Chocolate** (Cropped con botones joya).
   - **Pollera Skater Tablas Nude & Top Grunge** (Con short interior incorporado).
   - **Bermuda Cargo Desierto & Halter Top** (Gabardina elastizada tiro alto).
   - **Medias Red Strass Luxury Glow** (Pantimedias con cristales reflectivos).

3. **Experiencia de Compra Completa (E-Commerce de Alta Conversión)**:
   - **Barra de Anuncios Superior**: Cupón `SALEM15` con botón para copiar con un clic, aviso de cuotas y envíos gratis, conmutador de moneda (ARS $ / USD u$s).
   - **Barra de Beneficios**: 4 pilares (Envíos a todo el país por Correo Argentino y Andreani, 6 cuotas sin interés, Venta Mayorista y Atención personalizada por WhatsApp).
   - **Buscador y Filtros Avanzados**: Búsqueda por texto en tiempo real, categorías, rango de precio, filtro por stock inmediato y ordenamiento por menor/mayor precio o más vendidos.
   - **Vista Rápida y Ficha de Producto**: Galería de fotos, selección de talles y colores, stock en tiempo real, **calculador de costos de envío por código postal (CP)**, y botón directo para pedir la prenda por WhatsApp.
   - **Guía de Talles Interactiva**: Tabla detallada con medidas en centímetros para Jeans, Corsets y Camperas.
   - **Carrito Flotante (Slide-over)**:
     - Barra de progreso interactiva: *"¡Te faltan $X para conseguir ENVÍO GRATIS!"*.
     - Validador de cupones con lluvia de confeti (`SALEM15`, `MODA20`, `BIENVENIDA`, `MAYORISTA30`).
     - Selector de transporte (Correo Argentino, Andreani Express, Retiro en Showroom).
     - Descuento automático del 15% adicional por transferencia bancaria.
   - **Checkout Multi-paso & Generador de Pedidos para WhatsApp**:
     - Carga de datos de entrega y facturación.
     - Generación de número de pedido único (ej. `#SLM-49210`).
     - Al confirmar, genera un mensaje con diseño impecable, emojis y desglose exacto de prendas, talles y total, y abre tu WhatsApp automáticamente para cerrar la venta.
   - **Sección Especial de Venta Mayorista**: Mínimo de compra (desde 6 prendas surtidas), curva de talles libre y contacto directo para revendedoras.
   - **Sección de Comunidad Instagram**: Muestra el feed de fotos de tu Instagram `@jeans_slm` e invita a seguirte.
   - **Sección de Reseñas de Clientas**: Testimonios y opiniones con estrellas.
   - **Panel de Control / Modo Administrador**:
     - Botón de engranaje (⚙️) en la barra superior.
     - Permite modificar precios, ofertas y stock sin tocar código.
     - Permite editar el enlace de WhatsApp, textos de anuncios y umbral de envío gratis.
     - Historial de pedidos recibidos.
   - **Marco Legal Argentino**: Términos y condiciones, políticas de cambio por 30 días, y **Botón de Arrepentimiento** con número de trámite legal.

---

## 📁 Estructura del Proyecto

```
Pagina web SALEM/
├── index.html            # Archivo HTML principal de la tienda
├── app.js                # Lógica completa de React, modales, carrito y checkout
├── styles.css            # Estilos personalizados, animaciones y glassmorphism
├── data/
│   ├── config.js         # Ajustes de la marca, enlaces de WhatsApp, cupones y envíos
│   └── products.js       # Listado de productos, fotos, precios, talles y descripciones
├── brand/
│   ├── logo.png          # Logo oficial de Salem Cat (gato con destellos ✨)
│   └── instagram-feed.jpg# Foto del feed de Instagram de @jeans_slm
├── products/             # Fotos de las prendas recortadas en alta calidad
├── iniciar.bat           # Acceso directo para abrir la tienda en Windows
└── package.json          # Configuración opcional para scripts de npm
```

---

## 🛠️ ¿Cómo personalizar datos en el futuro?

- **Cambiar tu número de WhatsApp o Instagram**: Abrí `data/config.js` y modificá `whatsappUrl` o `instagramUser`. También podés hacerlo desde el botón de engranaje (⚙️) en la barra superior de la web.
- **Agregar o modificar prendas**: Abrí `data/products.js` para editar nombres, precios, talles o fotos.
- **Subir a internet (Hosting gratis)**:
  - Podés arrastrar toda esta carpeta a [Vercel](https://vercel.com) o [Netlify](https://netlify.com) mediante su función *Drop*, o publicarla en GitHub Pages o cualquier hosting tradicional (cPanel, Hostinger) sin necesidad de configurar servidores complicados.
