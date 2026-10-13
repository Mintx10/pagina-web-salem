// App Principal - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨
const { useState, useEffect, useMemo, useContext, createContext, useRef } = React;

// Contexto Global de Tienda
const StoreContext = createContext(null);
const useStore = () => useContext(StoreContext);

// --- COMPONENTES DE ICONOS SVG VECTORIALES ---
const Icons = {
  Sparkles: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  ),
  ShoppingBag: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Heart: ({ className = "w-5 h-5", fill = "none" }) => (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Search: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  X: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Truck: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  CreditCard: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  ),
  PackageCheck: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 2 2 4-4" />
      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
      <path d="m7.5 4.27 9 5.15" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" x2="12" y1="22" y2="12" />
    </svg>
  ),
  MessageCircle: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  ),
  Instagram: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Eye: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  ChevronRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  ChevronDown: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Plus: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  ),
  Minus: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>
  ),
  Trash2: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  ),
  Copy: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  Star: ({ className = "w-5 h-5", fill = "currentColor" }) => (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Settings: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Ruler: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  ),
  ShieldCheck: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  ArrowLeft: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  Menu: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
};

// --- STORE PROVIDER ---
function StoreProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("salem_store_settings");
    if (saved) {
      try { return { ...window.SALEM_CONFIG, ...JSON.parse(saved) }; } catch (e) {}
    }
    return window.SALEM_CONFIG;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("salem_products");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return window.SALEM_PRODUCTS;
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("salem_cart");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("salem_wishlist");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    const saved = localStorage.getItem("salem_coupon");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return null;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("salem_orders");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  const [currentView, setCurrentView] = useState("home");
  const [currency, setCurrency] = useState("ARS");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [bestSellerOnly, setBestSellerOnly] = useState(false);

  // Modals y Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [sizeGuideCategory, setSizeGuideCategory] = useState("jeans");
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState("terms");
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Autenticación de Administradora Principal
  const [adminAuth, setAdminAuth] = useState(() => {
    const saved = localStorage.getItem("salem_admin_auth");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { isAuthenticated: false, token: null, user: null, githubToken: "" };
  });

  // Sincronización en LocalStorage
  useEffect(() => {
    localStorage.setItem("salem_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("salem_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("salem_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("salem_store_settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("salem_orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("salem_admin_auth", JSON.stringify(adminAuth));
  }, [adminAuth]);

  useEffect(() => {
    if (appliedCoupon) localStorage.setItem("salem_coupon", JSON.stringify(appliedCoupon));
    else localStorage.removeItem("salem_coupon");
  }, [appliedCoupon]);

  // Cargar datos actualizados en vivo desde el Backend (/api/data)
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.success) {
          if (Array.isArray(data.products) && data.products.length > 0) {
            setProducts(data.products);
          }
          if (data.settings && typeof data.settings === 'object') {
            setSettings(prev => ({ ...prev, ...data.settings }));
          }
        }
      })
      .catch(() => {
        // Fallback transparente a datos locales en caso de estar offline
      });
  }, []);

  // Función para guardar y publicar cambios en el Backend y en GitHub
  const saveToBackend = async (customGhToken) => {
    const tokenToUse = customGhToken !== undefined ? customGhToken : (adminAuth.githubToken || "");
    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': adminAuth.token ? `Bearer ${adminAuth.token}` : ''
        },
        body: JSON.stringify({
          products,
          settings,
          token: adminAuth.token,
          githubToken: tokenToUse,
          password: 'salem2026'
        })
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Toasts
  const addToast = ({ title, description, type = "success" }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Precios y Moneda
  const formatPrice = (amount) => {
    if (currency === "USD") {
      const val = amount / (settings.usdExchangeRate || 1280);
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }).format(val);
    }
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Cuotas
  const calculateInstallments = (amount, maxInst = 6) => {
    const perMonth = Math.round(amount / maxInst);
    return `${maxInst} cuotas sin interés de ${formatPrice(perMonth)}`;
  };

  // Carrito
  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    const size = selectedSize || (product.sizes && product.sizes[0] ? product.sizes[0].size : "Talle Único");
    const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : "Original");
    const price = product.promoPrice || product.price;

    setCart(prev => {
      const idx = prev.findIndex(item => item.productId === product.id && item.size === size && item.color === color);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += quantity;
        return copy;
      }
      return [...prev, {
        productId: product.id,
        title: product.title,
        price,
        originalPrice: product.price,
        image: product.images[0],
        size,
        color,
        quantity,
        category: product.category
      }];
    });

    addToast({
      title: "¡Prenda agregada al carrito! 🛍️",
      description: `${product.title} (${size})`,
      type: "success"
    });

    // Abrir carrito suavemente
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    addToast({
      title: "Prenda eliminada",
      description: "Se retiró el artículo del carrito.",
      type: "info"
    });
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => {
      const copy = [...prev];
      const newQty = copy[index].quantity + delta;
      if (newQty <= 0) return prev.filter((_, i) => i !== index);
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  const cartSubtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  // Cupones
  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    const found = settings.coupons.find(c => c.code === clean);
    if (!found) {
      return { success: false, message: "El cupón ingresado no es válido." };
    }
    if (found.minAmount && cartSubtotal < found.minAmount) {
      return { success: false, message: `Este cupón requiere un mínimo de ${formatPrice(found.minAmount)}.` };
    }
    setAppliedCoupon(found);
    addToast({
      title: `¡Cupón ${found.code} aplicado! ✨`,
      description: `Ahorrás un ${found.discount}% extra en tu compra.`,
      type: "success"
    });
    // Lanzar confeti si está disponible
    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
    return { success: true };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast({ title: "Cupón removido", description: "Se recalculó el subtotal.", type: "info" });
  };

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return Math.round((cartSubtotal * appliedCoupon.discount) / 100);
  }, [appliedCoupon, cartSubtotal]);

  // Envío Gratis
  const freeShippingThreshold = settings.freeShippingThreshold || 45000;
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  // Favoritos (Wishlist)
  const toggleWishlist = (productId) => {
    const prod = products.find(p => p.id === productId);
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast({ title: "Eliminado de favoritos", description: prod ? prod.title : "", type: "info" });
        return prev.filter(id => id !== productId);
      } else {
        addToast({ title: "¡Guardado en favoritos! ❤️", description: prod ? prod.title : "", type: "success" });
        return [...prev, productId];
      }
    });
  };
  const isWishlisted = (productId) => wishlist.includes(productId);

  // Pedidos
  const createOrder = (orderData) => {
    const orderNumber = `SLM-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      orderNumber,
      date: new Date().toLocaleString("es-AR"),
      status: "Pendiente de WhatsApp",
      ...orderData
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const value = {
    settings,
    setSettings,
    products,
    setProducts,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartSubtotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discountAmount,
    freeShippingThreshold,
    freeShippingProgress,
    amountToFreeShipping,
    wishlist,
    toggleWishlist,
    isWishlisted,
    currency,
    setCurrency,
    formatPrice,
    calculateInstallments,
    currentView,
    setCurrentView,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceFilter,
    setPriceFilter,
    inStockOnly,
    setInStockOnly,
    freeShippingOnly,
    setFreeShippingOnly,
    bestSellerOnly,
    setBestSellerOnly,
    isCartOpen,
    setIsCartOpen,
    quickViewProduct,
    setQuickViewProduct,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isWishlistModalOpen,
    setIsWishlistModalOpen,
    isSizeGuideOpen,
    setIsSizeGuideOpen,
    sizeGuideCategory,
    setSizeGuideCategory,
    isWholesaleModalOpen,
    setIsWholesaleModalOpen,
    isLegalModalOpen,
    setIsLegalModalOpen,
    legalTab,
    setLegalTab,
    isAdminOpen,
    setIsAdminOpen,
    adminAuth,
    setAdminAuth,
    saveToBackend,
    orders,
    createOrder,
    toasts,
    addToast,
    removeToast
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

// --- BARRA DE ANUNCIOS SUPERIOR ---
function AnnouncementBar() {
  const { settings, formatPrice, currency, setCurrency, addToast } = useStore();
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText(settings.announcementCoupon);
    setCopied(true);
    addToast({
      title: `¡Cupón ${settings.announcementCoupon} copiado! 📋`,
      description: "Pegalo al finalizar tu compra para obtener tu descuento.",
      type: "success"
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#121214] text-[#FAF7F2] text-xs py-2 px-3 border-b border-[#27272a] relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-x-auto py-0.5 scrollbar-none text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1 font-medium text-pink-300">
            <Icons.Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>{settings.announcementText}</span>
          </span>
          <button
            onClick={copyCoupon}
            className="inline-flex items-center gap-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-400/40 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0"
          >
            <span>{copied ? "¡Copiado!" : settings.announcementCoupon}</span>
            <Icons.Copy className="w-2.5 h-2.5" />
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-auto">
          {/* Selector de moneda */}
          <div className="flex items-center bg-[#27272a] rounded-lg p-0.5 text-[10px] font-semibold border border-white/5">
            <button
              onClick={() => setCurrency("ARS")}
              className={`px-2 py-0.5 rounded ${currency === "ARS" ? "bg-pink-600 text-white" : "text-stone-400 hover:text-white"}`}
            >
              ARS $
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2 py-0.5 rounded ${currency === "USD" ? "bg-pink-600 text-white" : "text-stone-400 hover:text-white"}`}
            >
              USD u$s
            </button>
          </div>

          {/* Redes */}
          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-stone-300 hover:text-pink-400 transition-colors text-[11px]"
            title="Instagram Jeans SLM"
          >
            <Icons.Instagram className="w-3.5 h-3.5" />
            <span className="hidden md:inline">@{settings.instagramUser}</span>
          </a>
          <a
            href={settings.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-stone-300 hover:text-emerald-400 transition-colors text-[11px]"
            title="WhatsApp de atención"
          >
            <Icons.MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// --- NAVBAR HEADER PRINCIPAL ---
function Navbar() {
  const {
    settings,
    cartCount,
    cartSubtotal,
    formatPrice,
    setIsCartOpen,
    wishlist,
    setIsWishlistModalOpen,
    currentView,
    setCurrentView,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    setIsWholesaleModalOpen,
    setIsAdminOpen
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigateToCategory = (catId) => {
    setSelectedCategory(catId);
    setCurrentView("catalog");
    setMobileMenuOpen(false);
    const elem = document.getElementById("catalogo-section");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FILA 1: LOGO + BUSCADOR CENTRADO + ACCIONES */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-5">
          
          {/* Menú móvil button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 shadow-sm transition-colors"
            >
              {mobileMenuOpen ? <Icons.X className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* LOGO SALEM */}
          <div
            onClick={() => { setCurrentView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <img
                src="brand/logo.png"
                alt="Logo Jeans SLM"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-pink-500 shadow-md group-hover:scale-105 transition-transform duration-300 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "salem_logo.png";
                }}
              />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-stone-900 group-hover:text-pink-600 transition-colors">
                  JEANS SLM
                </span>
                <span className="text-pink-500 text-xs animate-pulse">✨</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-pink-600 uppercase -mt-1">
                Indumentaria Salem 🐈‍⬛
              </span>
            </div>
          </div>

          {/* BUSCADOR DE ESCRITORIO CENTRADO Y AMPLIO */}
          <div className="hidden md:flex flex-1 max-w-md lg:max-w-lg mx-3 lg:mx-6">
            <div className="relative w-full h-11">
              <input
                type="text"
                placeholder="Buscar jeans, corsets, camperas, faldas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 bg-stone-50 border border-stone-200 rounded-2xl pl-10 pr-9 text-xs font-medium text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 shadow-sm transition-all"
              />
              <Icons.Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3.5 text-stone-400 hover:text-stone-700"
                >
                  <Icons.X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* ACCIONES (Buscador móvil, Favoritos, Carrito, Admin) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Toggle Buscador Móvil */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 shadow-sm"
              title="Buscar prendas"
            >
              <Icons.Search className="w-5 h-5" />
            </button>

            {/* Favoritos */}
            <button
              onClick={() => setIsWishlistModalOpen(true)}
              className="relative h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-all shadow-sm shrink-0 cursor-pointer"
              title="Favoritos"
            >
              <Icons.Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${wishlist.length > 0 ? "text-pink-500 fill-pink-500" : ""}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Carrito */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-center gap-2 rounded-xl bg-stone-900 hover:bg-pink-600 text-white text-xs font-bold transition-all shadow-md hover:shadow-pink-300/50 shrink-0 cursor-pointer"
              title="Ver Carrito de Compras"
            >
              <div className="relative">
                <Icons.ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-pink-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-stone-900">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold">
                {cartSubtotal > 0 ? formatPrice(cartSubtotal) : "Carrito"}
              </span>
            </button>

            {/* Botón Admin Panel */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="h-10 sm:h-11 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100 hover:text-pink-800 transition-all shadow-sm shrink-0 cursor-pointer text-xs font-bold"
              title="Panel de Configuración de la Tienda (Prendas, Colecciones, Contacto, Pagos)"
            >
              <Icons.Settings className="w-4 h-4 text-pink-600" />
              <span className="hidden sm:inline">Admin</span>
            </button>
          </div>
        </div>

        {/* FILA 2: BARRA DE NAVEGACIÓN Y COLECCIONES (DESKTOP) */}
        <nav className="hidden lg:flex items-center justify-between border-t border-stone-200/60 py-2 gap-2 text-xs xl:text-sm font-bold text-stone-700">
          <div className="flex items-center gap-1 xl:gap-2 overflow-x-auto scrollbar-none py-0.5">
            <button
              onClick={() => { setCurrentView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`h-9 px-3.5 flex items-center justify-center whitespace-nowrap rounded-xl transition-all cursor-pointer ${
                currentView === "home"
                  ? "bg-pink-50 text-pink-700 font-extrabold border border-pink-200 shadow-sm"
                  : "hover:text-pink-600 hover:bg-stone-50"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setCurrentView("catalog");
                const el = document.getElementById("catalogo-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="h-9 px-3.5 flex items-center justify-center whitespace-nowrap rounded-xl hover:text-pink-600 hover:bg-stone-50 transition-all cursor-pointer"
            >
              Catálogo
            </button>
            {settings.categories
              .filter((c) => c.id !== "all")
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigateToCategory(cat.id)}
                  className={`h-9 px-3.5 flex items-center justify-center whitespace-nowrap rounded-xl transition-all cursor-pointer ${
                    selectedCategory === cat.id && currentView === "catalog"
                      ? "bg-pink-50 text-pink-700 font-extrabold border border-pink-200 shadow-sm"
                      : "hover:text-pink-600 hover:bg-stone-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
          </div>

          {/* Botón Mayorista destacado a la derecha */}
          <button
            onClick={() => setIsWholesaleModalOpen(true)}
            className="h-9 px-3.5 flex items-center justify-center gap-1.5 rounded-xl bg-pink-50/90 hover:bg-pink-100 text-pink-800 border border-pink-200/80 transition-all whitespace-nowrap cursor-pointer shadow-sm shrink-0 ml-auto"
          >
            <span>Mayorista</span>
            <span className="bg-pink-600 text-white text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-wider">Combos</span>
          </button>
        </nav>

        {/* Buscador móvil desplegable */}
        {searchOpen && (
          <div className="md:hidden py-3 border-t border-[#E8E1D5] animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar en Salem (jeans, camperas, faldas)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-white border border-[#E8E1D5] rounded-xl pl-9 pr-9 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
              />
              <Icons.Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-3 text-stone-400">
                  <Icons.X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Menú móvil colapsable */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E8E1D5] space-y-2 animate-fade-in">
            <button
              onClick={() => { setCurrentView("home"); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-pink-50"
            >
              Inicio
            </button>
            <button
              onClick={() => navigateToCategory("all")}
              className="block w-full text-left px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-pink-50"
            >
              Catálogo Completo
            </button>
            {settings.categories
              .filter((c) => c.id !== "all")
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigateToCategory(cat.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-pink-50"
                >
                  {cat.label}
                </button>
              ))}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <button
                onClick={() => { setIsWholesaleModalOpen(true); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 bg-pink-100 text-pink-800 font-bold rounded-xl text-sm"
              >
                Venta Mayorista (Combos & Curvas) 📦
              </button>
              <button
                onClick={() => { setIsAdminOpen(true); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Icons.Settings className="w-4 h-4 text-pink-400" />
                <span>⚙️ Panel Administrador (Configurar Tienda)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// --- SECCIÓN HERO PRINCIPAL ---
function Hero() {
  const { settings, products, setQuickViewProduct, addToCart, formatPrice, calculateInstallments, setCurrentView } = useStore();
  
  const starProduct = useMemo(() => {
    return products.find(p => p.id === settings.hero.starProductId) || products[0];
  }, [products, settings.hero.starProductId]);

  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  const scrollToCatalog = () => {
    setCurrentView("catalog");
    const elem = document.getElementById("catalogo-section");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-[#E8E1D5] bg-[#FAF7F2]">
      {/* Fondos decorativos radiales */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(251, 207, 232, 0.45) 0%, rgba(244, 236, 224, 0.25) 45%, rgba(250, 247, 242, 0) 75%)"
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #1C1917 1px, transparent 0)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LADO IZQUIERDO: TÍTULO Y LLAMADOS A LA ACCIÓN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badge de Temporada */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 text-pink-900 border border-pink-300 text-xs font-bold mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
              <span>{settings.hero.badge}</span>
            </div>

            {/* Título Principal */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.08] mb-4">
              {settings.hero.title}{" "}
              <span className="salem-gradient-text block sm:inline">
                {settings.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtítulo de Marca */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              {settings.hero.subtitle}
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={scrollToCatalog}
                className="salem-gradient-btn text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
              >
                <span>{settings.hero.ctaPrimary}</span>
                <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setQuickViewProduct(starProduct)}
                className="bg-white hover:bg-stone-100 text-stone-800 border border-[#E8E1D5] font-semibold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
              >
                <Icons.Eye className="w-4 h-4 text-pink-500" />
                <span>{settings.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Prueba social / Instagram stats */}
            <div className="mt-9 pt-7 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="brand/logo.png" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Salem" />
                  <div className="w-7 h-7 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">✨</div>
                </div>
                <div>
                  <span className="font-bold text-stone-900 block">+3.900 seguidoras</span>
                  <span className="text-[11px] text-stone-500">en @jeans_slm</span>
                </div>
              </div>

              <div className="h-6 w-px bg-stone-300 hidden sm:block"></div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Icons.Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-stone-900">5.0</span>
                <span className="text-stone-500">(+180 clientas felices)</span>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: TARJETA INTERACTIVA DE PRENDA ESTRELLA */}
          <div className="lg:col-span-5">
            {starProduct && (
              <div className="relative group">
                {/* Glow decorativo de fondo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-6 overflow-hidden">
                  
                  {/* Badges superiores */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                      <Icons.Sparkles className="w-3 h-3" />
                      {settings.hero.starBadge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Stock Inmediato
                    </span>
                  </div>

                  {/* Imagen de la prenda estrella */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-stone-100 mb-4 cursor-pointer" onClick={() => setQuickViewProduct(starProduct)}>
                    <img
                      src={starProduct.images[selectedImgIdx] || starProduct.images[0]}
                      alt={starProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                      {settings.hero.starTag}
                    </div>
                  </div>

                  {/* Thumbnails si hay más imágenes */}
                  {starProduct.images.length > 1 && (
                    <div className="flex items-center gap-2 mb-3.5">
                      {starProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImgIdx(idx)}
                          className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${selectedImgIdx === idx ? "border-pink-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
                        >
                          <img src={img} className="w-full h-full object-cover" alt="" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Título y precio */}
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-lg text-stone-900 group-hover:text-pink-600 transition-colors">
                      {starProduct.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                      {starProduct.subtitle}
                    </p>

                    <div className="flex items-baseline gap-2.5 mt-2.5">
                      <span className="text-2xl font-black text-stone-900">
                        {formatPrice(starProduct.promoPrice || starProduct.price)}
                      </span>
                      {starProduct.promoPrice && (
                        <span className="text-sm text-stone-400 line-through">
                          {formatPrice(starProduct.price)}
                        </span>
                      )}
                      <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md">
                        15% OFF
                      </span>
                    </div>

                    <p className="text-xs font-medium text-stone-600 mt-1">
                      💳 {calculateInstallments(starProduct.promoPrice || starProduct.price)}
                    </p>
                  </div>

                  {/* Botones de acción rápida */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-stone-100">
                    <button
                      onClick={() => addToCart(starProduct)}
                      className="bg-stone-900 hover:bg-pink-600 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Icons.ShoppingBag className="w-4 h-4" />
                      <span>Agregar</span>
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(starProduct)}
                      className="bg-pink-50 hover:bg-pink-100 text-pink-800 font-bold text-xs py-3 rounded-xl border border-pink-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Icons.Eye className="w-4 h-4 text-pink-600" />
                      <span>Ver Detalles</span>
                    </button>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- PILARES DE CONFIANZA Y BENEFICIOS ---
function BenefitsBar() {
  const { settings } = useStore();

  const getBenefitIcon = (name) => {
    switch (name) {
      case "Truck": return <Icons.Truck className="w-6 h-6 text-pink-500" />;
      case "CreditCard": return <Icons.CreditCard className="w-6 h-6 text-pink-500" />;
      case "PackageCheck": return <Icons.PackageCheck className="w-6 h-6 text-pink-500" />;
      default: return <Icons.MessageCircle className="w-6 h-6 text-pink-500" />;
    }
  };

  return (
    <section className="py-8 bg-white border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {settings.benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F2]/60 border border-[#E8E1D5]/60 hover:border-pink-300 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-pink-100/60 group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
                {getBenefitIcon(b.icon)}
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-stone-900 group-hover:text-pink-600 transition-colors">
                  {b.title}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  {b.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CATEGORÍAS TABS ---
function CategoryTabs() {
  const { settings, selectedCategory, setSelectedCategory, setCurrentView } = useStore();

  return (
    <div className="py-6 border-b border-[#E8E1D5] bg-[#FAF7F2] sticky top-20 z-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {settings.categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentView("catalog");
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? "bg-pink-600 text-white shadow-md shadow-pink-300/50 scale-[1.02]"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-[#E8E1D5]"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- TARJETA DE PRODUCTO INDIVIDUAL ---
function ProductCard({ product }) {
  const { formatPrice, calculateInstallments, addToCart, toggleWishlist, isWishlisted, setQuickViewProduct } = useStore();
  const [activeImg, setActiveImg] = useState(0);
  const isFav = isWishlisted(product.id);

  return (
    <div className="product-card group relative bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Zona Superior: Imagen y Badges */}
      <div className="relative aspect-[3/3.8] overflow-hidden bg-stone-100">
        
        {/* Badges superiores */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.isBestSeller && (
            <span className="bg-pink-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Más Vendido 🔥
            </span>
          )}
          {product.isNew && (
            <span className="bg-stone-900 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Nuevo Drop ✨
            </span>
          )}
          {product.freeShipping && (
            <span className="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Envío Gratis 🚚
            </span>
          )}
        </div>

        {/* Botón de Favorito */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
            isFav ? "bg-pink-50 text-pink-500" : "bg-white/80 hover:bg-white text-stone-600 hover:text-pink-500"
          } shadow-sm`}
          title="Guardar en favoritos"
        >
          <Icons.Heart className="w-4 h-4" fill={isFav ? "currentColor" : "none"} />
        </button>

        {/* Imagen con zoom */}
        <img
          src={product.images[activeImg] || product.images[0]}
          alt={product.title}
          onClick={() => setQuickViewProduct(product)}
          className="product-card-img w-full h-full object-cover cursor-pointer"
          loading="lazy"
        />

        {/* Botón flotante de vista rápida al pasar el mouse */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-full bg-white/95 hover:bg-white text-stone-900 font-bold text-xs py-2.5 rounded-xl shadow-lg backdrop-blur-md flex items-center justify-center gap-1.5 border border-stone-200"
          >
            <Icons.Eye className="w-3.5 h-3.5 text-pink-500" />
            <span>Vista Rápida</span>
          </button>
        </div>
      </div>

      {/* Zona Inferior: Información del Producto */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Categoría y Rating */}
          <div className="flex items-center justify-between text-xs text-stone-400 mb-1.5">
            <span className="uppercase text-[10px] font-bold tracking-wider text-pink-600">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
              <Icons.Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Título de la prenda */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-display font-bold text-sm sm:text-base text-stone-900 hover:text-pink-600 transition-colors cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>

          {/* Talles disponibles en chips */}
          <div className="flex items-center gap-1 mt-2.5 overflow-hidden">
            <span className="text-[10px] font-semibold text-stone-400 mr-0.5">Talles:</span>
            {product.sizes.slice(0, 4).map((s, idx) => (
              <span
                key={idx}
                className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200"
              >
                {s.size.split(" ")[0]}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-[10px] text-stone-400 font-semibold">+{product.sizes.length - 4}</span>
            )}
          </div>
        </div>

        {/* Precios y Botón de Compra */}
        <div className="mt-4 pt-3 border-t border-stone-100">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-lg sm:text-xl font-black text-stone-900">
              {formatPrice(product.promoPrice || product.price)}
            </span>
            {product.promoPrice && (
              <span className="text-xs text-stone-400 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <p className="text-[11px] font-medium text-pink-700 mb-3">
            💳 {calculateInstallments(product.promoPrice || product.price, 6)}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full salem-gradient-btn text-white font-bold text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
          >
            <Icons.ShoppingBag className="w-3.5 h-3.5" />
            <span>Agregar al Carrito</span>
          </button>
        </div>

      </div>

    </div>
  );
}

// --- SECCIÓN DE CATÁLOGO CON FILTROS ---
function CatalogSection() {
  const {
    products,
    selectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    priceFilter,
    setPriceFilter,
    inStockOnly,
    setInStockOnly,
    freeShippingOnly,
    setFreeShippingOnly,
    bestSellerOnly,
    setBestSellerOnly,
    setSelectedCategory
  } = useStore();

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Categoría
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      // Búsqueda
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchSub = p.subtitle.toLowerCase().includes(q);
        const matchTags = p.tags && p.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchSub && !matchTags) return false;
      }
      // Rango de precio
      const price = p.promoPrice || p.price;
      if (priceFilter === "under35" && price > 35000) return false;
      if (priceFilter === "35to65" && (price < 35000 || price > 65000)) return false;
      if (priceFilter === "above65" && price < 65000) return false;
      // Stock
      if (inStockOnly && p.stock <= 0) return false;
      // Envío gratis
      if (freeShippingOnly && !p.freeShipping) return false;
      // Más vendidos
      if (bestSellerOnly && !p.isBestSeller) return false;

      return true;
    }).sort((a, b) => {
      const pa = a.promoPrice || a.price;
      const pb = b.promoPrice || b.price;
      if (sortBy === "price_asc") return pa - pb;
      if (sortBy === "price_desc") return pb - pa;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "best_seller") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // featured
    });
  }, [products, selectedCategory, searchQuery, sortBy, priceFilter, inStockOnly, freeShippingOnly, bestSellerOnly]);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("featured");
    setPriceFilter("all");
    setInStockOnly(false);
    setFreeShippingOnly(false);
    setBestSellerOnly(false);
  };

  const hasActiveFilters = selectedCategory !== "all" || searchQuery !== "" || priceFilter !== "all" || inStockOnly || freeShippingOnly || bestSellerOnly;

  return (
    <section id="catalogo-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Encabezado del catálogo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-[11px] font-bold border border-pink-200 mb-2">
            <Icons.Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Colección 2026</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">
            Prendas de Tendencia & Clásicos Salem
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Diseñadas con calce fit soñado para vestirte con estilo y sentirte única todos los días.
          </p>
        </div>

        {/* Contador de resultados */}
        <div className="text-xs font-semibold text-stone-500">
          Mostrando <span className="text-pink-600 font-bold">{filteredProducts.length}</span> prendas
        </div>
      </div>

      {/* Barra de Filtros y Ordenamiento */}
      <div className="bg-white p-4 rounded-2xl border border-[#E8E1D5] mb-8 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        {/* Filtros rápidos en pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filtro de Precio */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="bg-[#FAF7F2] border border-[#E8E1D5] rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none focus:border-pink-500 cursor-pointer"
          >
            <option value="all">Todos los Precios</option>
            <option value="under35">Hasta $35.000</option>
            <option value="35to65">$35.000 a $65.000</option>
            <option value="above65">Más de $65.000</option>
          </select>

          {/* Toggle Solo en Stock */}
          <button
            onClick={() => setInStockOnly(!inStockOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              inStockOnly ? "bg-pink-600 text-white border-pink-600" : "bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]"
            }`}
          >
            En Stock Inmediato
          </button>

          {/* Toggle Solo Envío Gratis */}
          <button
            onClick={() => setFreeShippingOnly(!freeShippingOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              freeShippingOnly ? "bg-emerald-600 text-white border-emerald-600" : "bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]"
            }`}
          >
            Envío Gratis 🚚
          </button>

          {/* Toggle Solo Más Vendidos */}
          <button
            onClick={() => setBestSellerOnly(!bestSellerOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              bestSellerOnly ? "bg-pink-600 text-white border-pink-600" : "bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]"
            }`}
          >
            Top Ventas 🔥
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-pink-600 hover:text-pink-800 font-bold underline ml-2 cursor-pointer"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Selector de Ordenamiento */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-semibold text-stone-400">Ordenar por:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#FAF7F2] border border-[#E8E1D5] rounded-xl px-3 py-2 text-xs font-bold text-stone-800 focus:outline-none focus:border-pink-500 cursor-pointer"
          >
            <option value="featured">Destacados Salem</option>
            <option value="price_asc">Menor precio</option>
            <option value="price_desc">Mayor precio</option>
            <option value="rating">Mejor valorados ⭐</option>
            <option value="best_seller">Más vendidos 🔥</option>
          </select>
        </div>

      </div>

      {/* Grid de Productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E8E1D5] max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mx-auto mb-4">
            <Icons.Search className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
            No encontramos prendas con esos filtros
          </h3>
          <p className="text-xs text-stone-500 mb-6">
            Probá buscando con otros términos o restablecé los filtros activos.
          </p>
          <button
            onClick={clearAllFilters}
            className="salem-gradient-btn text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md"
          >
            Ver Todo el Catálogo
          </button>
        </div>
      )}

    </section>
  );
}

// --- MODAL DE VISTA RÁPIDA / DETALLE DE PRENDA ---
function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    formatPrice,
    calculateInstallments,
    isWishlisted,
    toggleWishlist,
    setIsSizeGuideOpen,
    setSizeGuideCategory,
    settings
  } = useStore();

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [postalCode, setPostalCode] = useState("");
  const [shippingCalculated, setShippingCalculated] = useState(null);
  const [activeTab, setActiveTab] = useState("desc");

  useEffect(() => {
    if (quickViewProduct) {
      setActiveImgIdx(0);
      setQuantity(1);
      setShippingCalculated(null);
      if (quickViewProduct.sizes && quickViewProduct.sizes.length > 0) {
        setSelectedSize(quickViewProduct.sizes[0].size);
      }
      if (quickViewProduct.colors && quickViewProduct.colors.length > 0) {
        setSelectedColor(quickViewProduct.colors[0].name);
      }
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const currentPrice = quickViewProduct.promoPrice || quickViewProduct.price;
  const isFav = isWishlisted(quickViewProduct.id);

  const handleCalcShipping = (e) => {
    e.preventDefault();
    if (!postalCode.trim()) return;
    const cp = parseInt(postalCode);
    let zone = "Buenos Aires & CABA";
    let days = "2 a 3 días hábiles";
    if (cp >= 5000 && cp < 6000) { zone = "Córdoba & Región Centro"; days = "2 a 4 días"; }
    else if (cp >= 2000 && cp < 3000) { zone = "Santa Fe & Rosario"; days = "2 a 3 días"; }
    else if (cp >= 8000) { zone = "Patagonia"; days = "3 a 5 días"; }
    else if (cp >= 4000) { zone = "NOA / Norte Argentino"; days = "3 a 5 días"; }

    setShippingCalculated({
      zone,
      days,
      cost: currentPrice >= settings.freeShippingThreshold ? 0 : 4900
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola Salem! 🐈‍⬛ Quiero consultar / comprar:\n- ${quickViewProduct.title}\n- Talle: ${selectedSize}\n- Color: ${selectedColor}\n- Precio: ${formatPrice(currentPrice)}\n¿Tienen disponibilidad para envío?`
    );
    window.open(`${settings.whatsappUrl}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-4 sm:p-7 text-stone-900 animate-slide-up">
        
        {/* Botón cerrar */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors z-20"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* GALERÍA DE IMÁGENES */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="relative aspect-[3/3.8] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
              <img
                src={quickViewProduct.images[activeImgIdx] || quickViewProduct.images[0]}
                alt={quickViewProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 shadow-md text-stone-600 hover:text-pink-500"
              >
                <Icons.Heart className="w-5 h-5" fill={isFav ? "#ec4899" : "none"} />
              </button>
            </div>

            {/* Miniaturas */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {quickViewProduct.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIdx(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImgIdx === i ? "border-pink-500 scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETALLES DE PRENDA & COMPRA */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Categoría y Rating */}
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="uppercase text-[11px] font-black tracking-wider text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-md">
                  {quickViewProduct.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Icons.Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-stone-400">({quickViewProduct.reviewCount} reseñas)</span>
                </div>
              </div>

              {/* Título */}
              <h2 className="font-display font-extrabold text-2xl text-stone-900 leading-tight">
                {quickViewProduct.title}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {quickViewProduct.subtitle}
              </p>

              {/* Precio */}
              <div className="flex items-baseline gap-3 my-3 pt-2 border-t border-stone-100">
                <span className="text-2xl sm:text-3xl font-black text-stone-900">
                  {formatPrice(currentPrice)}
                </span>
                {quickViewProduct.promoPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    {formatPrice(quickViewProduct.price)}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  15% OFF Extra por Transferencia
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-200/60 text-xs text-pink-900 font-medium mb-4">
                💳 <strong>{calculateInstallments(currentPrice, 6)}</strong> con todas las tarjetas
              </div>

              {/* SELECCIÓN DE TALLE */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-800">
                    Elegí tu Talle: <span className="text-pink-600">{selectedSize}</span>
                  </span>
                  <button
                    onClick={() => {
                      setSizeGuideCategory(quickViewProduct.category);
                      setIsSizeGuideOpen(true);
                    }}
                    className="text-xs text-pink-600 hover:text-pink-800 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Icons.Ruler className="w-3.5 h-3.5" />
                    <span>Guía de Talles</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(s.size)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedSize === s.size
                          ? "bg-pink-600 text-white border-pink-600 shadow-md scale-105"
                          : "bg-white text-stone-700 border-stone-300 hover:border-pink-400"
                      }`}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* SELECCIÓN DE COLOR */}
              {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                <div className="mb-4">
                  <span className="text-xs font-bold text-stone-800 block mb-2">
                    Color: <span className="text-pink-600">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {quickViewProduct.colors.map((c, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(c.name)}
                        className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                          selectedColor === c.name ? "border-pink-600 bg-pink-50" : "border-stone-200 bg-white"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-stone-300"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CANTIDAD & BOTONES */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 rounded-lg text-stone-600 hover:bg-white"
                  >
                    <Icons.Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 rounded-lg text-stone-600 hover:bg-white"
                  >
                    <Icons.Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => addToCart(quickViewProduct, selectedSize, selectedColor, quantity)}
                  className="flex-1 salem-gradient-btn text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Icons.ShoppingBag className="w-4 h-4" />
                  <span>Agregar al Carrito</span>
                </button>
              </div>

              {/* Botón WhatsApp directo */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full mb-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Icons.MessageCircle className="w-4 h-4" />
                <span>Pedir o Consultar por WhatsApp</span>
              </button>

              {/* CALCULADOR DE ENVÍO */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 mb-4">
                <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5 mb-2">
                  <Icons.Truck className="w-4 h-4 text-pink-500" />
                  <span>Calculá el costo y tiempo de envío a tu localidad:</span>
                </span>
                <form onSubmit={handleCalcShipping} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tu Código Postal (ej: 1425)"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                  />
                  <button
                    type="submit"
                    className="bg-stone-900 text-white font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-pink-600 transition-colors"
                  >
                    Calcular
                  </button>
                </form>

                {shippingCalculated && (
                  <div className="mt-2.5 pt-2 border-t border-stone-200 text-xs text-stone-700 space-y-1">
                    <p className="font-semibold text-stone-900">📍 Zona estimada: {shippingCalculated.zone}</p>
                    <p>🚚 Tiempo: {shippingCalculated.days}</p>
                    <p className="font-bold text-pink-600">
                      Costo: {shippingCalculated.cost === 0 ? "¡ENVÍO GRATIS!" : formatPrice(shippingCalculated.cost)}
                    </p>
                  </div>
                )}
              </div>

              {/* PESTAÑAS DE INFORMACIÓN */}
              <div className="border-t border-stone-200 pt-3">
                <div className="flex border-b border-stone-200 gap-4 text-xs font-bold text-stone-500 mb-3">
                  <button
                    onClick={() => setActiveTab("desc")}
                    className={`pb-2 transition-colors ${activeTab === "desc" ? "text-pink-600 border-b-2 border-pink-600" : "hover:text-stone-900"}`}
                  >
                    Descripción
                  </button>
                  <button
                    onClick={() => setActiveTab("care")}
                    className={`pb-2 transition-colors ${activeTab === "care" ? "text-pink-600 border-b-2 border-pink-600" : "hover:text-stone-900"}`}
                  >
                    Cuidados
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`pb-2 transition-colors ${activeTab === "reviews" ? "text-pink-600 border-b-2 border-pink-600" : "hover:text-stone-900"}`}
                  >
                    Reseñas ({quickViewProduct.reviews.length})
                  </button>
                </div>

                {activeTab === "desc" && (
                  <div className="text-xs text-stone-600 leading-relaxed space-y-2">
                    <p>{quickViewProduct.description}</p>
                    <ul className="list-disc list-inside space-y-1 font-medium text-stone-700">
                      {quickViewProduct.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "care" && (
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {quickViewProduct.fabricCare}
                  </p>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-3">
                    {quickViewProduct.reviews.map((r) => (
                      <div key={r.id} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-stone-900">{r.author}</span>
                          <span className="text-[10px] text-stone-400">{r.date}</span>
                        </div>
                        <div className="flex text-amber-400 mb-1">
                          {[...Array(r.rating)].map((_, i) => (
                            <Icons.Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-stone-600">{r.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// --- SLIDE-OVER DRAWER DEL CARRITO ---
function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeShippingThreshold,
    freeShippingProgress,
    amountToFreeShipping,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discountAmount,
    formatPrice,
    setIsCheckoutOpen,
    settings
  } = useStore();

  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [shippingMethod, setShippingMethod] = useState(settings.shippingMethods[0]);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError("");
      setCouponCode("");
    }
  };

  const finalShippingCost = cartSubtotal >= freeShippingThreshold || shippingMethod.id === "pickup_store" ? 0 : shippingMethod.cost;
  const total = Math.max(0, cartSubtotal - discountAmount + finalShippingCost);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8E1D5] shadow-2xl flex flex-col justify-between animate-slide-right">
          
          {/* Header Carrito */}
          <div className="p-5 border-b border-[#E8E1D5] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <Icons.ShoppingBag className="w-5 h-5 text-pink-600" />
              <h3 className="font-display font-black text-lg text-stone-900">
                Tu Carrito Salem
              </h3>
              <span className="text-xs bg-pink-100 text-pink-800 font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-800 hover:bg-stone-200/50"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          {/* Barra de Progreso Envío Gratis */}
          <div className="p-4 bg-pink-50 border-b border-pink-100">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="text-stone-800">
                {amountToFreeShipping > 0
                  ? `¡Te faltan ${formatPrice(amountToFreeShipping)} para ENVÍO GRATIS!`
                  : "¡Felicitaciones! Tenés ENVÍO GRATIS 🎉"}
              </span>
              <span className="text-pink-600 font-extrabold">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-pink-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Lista de Prendas */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-stone-100">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="pt-3.5 first:pt-0 flex gap-3.5 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-20 rounded-xl object-cover border border-stone-200 bg-stone-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs text-stone-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Talle: <span className="font-semibold text-stone-800">{item.size}</span> • Color: <span className="font-semibold text-stone-800">{item.color}</span>
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="p-1 rounded text-stone-600 hover:bg-white"
                        >
                          <Icons.Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="p-1 rounded text-stone-600 hover:bg-white"
                        >
                          <Icons.Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-black text-stone-900">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-2 text-stone-400 hover:text-rose-600"
                    title="Eliminar"
                  >
                    <Icons.Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-stone-400">
                <Icons.ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="font-bold text-stone-700">Tu carrito está vacío</p>
                <p className="text-xs text-stone-500 mt-1">¡Explorá nuestro catálogo y sumá tus prendas favoritas!</p>
              </div>
            )}
          </div>

          {/* Footer del Carrito con Cupones y Totales */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-[#E8E1D5] bg-[#FAF7F2] space-y-3.5">
              
              {/* Cupón de descuento */}
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-pink-100 text-pink-900 text-xs font-bold border border-pink-300">
                  <div className="flex items-center gap-1.5">
                    <Icons.Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    <span>Cupón {appliedCoupon.code} (-{appliedCoupon.discount}%)</span>
                  </div>
                  <button onClick={removeCoupon} className="text-pink-700 hover:text-pink-900">
                    <Icons.X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Código de cupón (ej: SALEM15)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs uppercase font-semibold text-stone-900 focus:outline-none focus:border-pink-500"
                  />
                  <button
                    type="submit"
                    className="bg-stone-900 text-white font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-pink-600 transition-colors"
                  >
                    Aplicar
                  </button>
                </form>
              )}
              {couponError && <p className="text-[11px] text-rose-600 font-semibold">{couponError}</p>}

              {/* Método de Envío */}
              <div className="text-xs space-y-1">
                <span className="font-bold text-stone-700 block">Método de Entrega:</span>
                <select
                  value={shippingMethod.id}
                  onChange={(e) => {
                    const found = settings.shippingMethods.find(m => m.id === e.target.value);
                    if (found) setShippingMethod(found);
                  }}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-800 focus:outline-none"
                >
                  {settings.shippingMethods.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({cartSubtotal >= freeShippingThreshold && m.id !== "andreani_exp" ? "GRATIS" : formatPrice(m.cost)})
                    </option>
                  ))}
                </select>
              </div>

              {/* Totales */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-200">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-stone-900">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-pink-600 font-bold">
                    <span>Descuento cupón:</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Envío:</span>
                  <span className="font-bold text-stone-900">
                    {finalShippingCost === 0 ? "GRATIS" : formatPrice(finalShippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-stone-900 pt-2 border-t border-stone-300">
                  <span>Total Final:</span>
                  <span className="text-pink-600">{formatPrice(total)}</span>
                </div>
                <p className="text-[10px] text-emerald-700 font-semibold text-right">
                  Pagando por Transferencia abonás {formatPrice(Math.round(total * 0.85))} (15% OFF)
                </p>
              </div>

              {/* Botón Iniciar Checkout */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full salem-gradient-btn text-white font-black text-sm py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Iniciar Checkout Seguro</span>
                <Icons.ChevronRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// --- MODAL DE CHECKOUT & GENERADOR DE PEDIDO WHATSAPP ---
function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    clearCart,
    cartSubtotal,
    discountAmount,
    freeShippingThreshold,
    formatPrice,
    settings,
    createOrder,
    addToast
  } = useStore();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dni: "",
    address: "",
    city: "",
    postalCode: "",
    notes: ""
  });
  const [shippingMethod, setShippingMethod] = useState(settings.shippingMethods[0]);
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [installments, setInstallments] = useState(6);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (!isCheckoutOpen) return null;

  const shippingCost = cartSubtotal >= freeShippingThreshold || shippingMethod.id === "pickup_store" ? 0 : shippingMethod.cost;
  const transferDiscount = paymentMethod === "transfer" ? Math.round((cartSubtotal - discountAmount) * 0.15) : 0;
  const total = Math.max(0, cartSubtotal - discountAmount - transferDiscount + shippingCost);

  const handleConfirmOrder = () => {
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      addToast({ title: "Completá los campos requeridos", description: "Nombre, teléfono y dirección son obligatorios.", type: "error" });
      return;
    }

    const order = createOrder({
      customer: formData,
      items: cart,
      subtotal: cartSubtotal,
      discount: discountAmount + transferDiscount,
      shipping: shippingMethod,
      shippingCost,
      total,
      paymentMethod
    });

    setConfirmedOrder(order);
    clearCart();
    setStep(4);

    if (window.confetti) {
      window.confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
    }
  };

  const handleSendWhatsAppOrder = () => {
    if (!confirmedOrder) return;
    const itemsList = confirmedOrder.items.map(item => `- ${item.title} (Talle: ${item.size}, Color: ${item.color}) x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`).join("\n");
    
    const message = encodeURIComponent(
      `Hola Indumentaria Salem! 🐈‍⬛✨ Acabo de realizar el Pedido #${confirmedOrder.orderNumber} en la tienda online.\n\n` +
      `👤 *Cliente:* ${confirmedOrder.customer.fullName}\n` +
      `📱 *WhatsApp:* ${confirmedOrder.customer.phone}\n` +
      `📍 *Entrega:* ${confirmedOrder.customer.address}, ${confirmedOrder.customer.city} (CP: ${confirmedOrder.customer.postalCode})\n` +
      `🚚 *Método de Envío:* ${confirmedOrder.shipping.name}\n` +
      `💳 *Forma de Pago:* ${confirmedOrder.paymentMethod === "transfer" ? "Transferencia Bancaria (15% OFF)" : "Tarjeta en Cuotas"}\n\n` +
      `🛍️ *Prendas Seleccionadas:*\n${itemsList}\n\n` +
      `💰 *TOTAL A ABONAR:* ${formatPrice(confirmedOrder.total)}\n\n` +
      `¡Quedo a la espera de la confirmación para realizar el pago y coordinar el envío! Muchas gracias 💕`
    );

    window.open(`${settings.whatsappUrl}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={() => step !== 4 && setIsCheckoutOpen(false)}
      />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-8 text-stone-900 animate-slide-up max-h-[90vh] overflow-y-auto">
        
        {/* Header Checkout */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
              {step}
            </span>
            <h3 className="font-display font-extrabold text-xl text-stone-900">
              {step === 1 && "Paso 1: Datos de Entrega"}
              {step === 2 && "Paso 2: Forma de Envío"}
              {step === 3 && "Paso 3: Método de Pago"}
              {step === 4 && "¡Pedido Generado con Éxito! 🎉"}
            </h3>
          </div>
          {step !== 4 && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-800"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* PASO 1: DATOS PERSONALES */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Nombre y Apellido *</label>
                <input
                  type="text"
                  placeholder="Ej: Sofia Martinez"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">WhatsApp / Celular *</label>
                <input
                  type="tel"
                  placeholder="Ej: +54 9 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="sofia@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">DNI / CUIL (para el envío)</label>
                <input
                  type="text"
                  placeholder="Ej: 42123456"
                  value={formData.dni}
                  onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Dirección Completa (Calle, Altura, Piso/Dpto) *</label>
              <input
                type="text"
                placeholder="Ej: Av. Santa Fe 3400, Piso 4B"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Ciudad / Localidad</label>
                <input
                  type="text"
                  placeholder="Ej: Palermo, CABA"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Código Postal</label>
                <input
                  type="text"
                  placeholder="Ej: 1425"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Notas especiales o aclaraciones</label>
              <input
                type="text"
                placeholder="Ej: Tocar timbre 4B o dejar en portería"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
              />
            </div>

            <button
              onClick={() => {
                if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
                  addToast({ title: "Por favor completá los datos", description: "Nombre, teléfono y dirección son obligatorios.", type: "error" });
                  return;
                }
                setStep(2);
              }}
              className="w-full salem-gradient-btn text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg mt-4"
            >
              Continuar a Envíos →
            </button>
          </div>
        )}

        {/* PASO 2: FORMA DE ENVÍO */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-3">
              {settings.shippingMethods.map((m) => {
                const cost = cartSubtotal >= freeShippingThreshold || m.id === "pickup_store" ? 0 : m.cost;
                const isSelected = shippingMethod.id === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setShippingMethod(m)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected ? "border-pink-500 bg-pink-50/60 shadow-md" : "border-stone-200 bg-[#FAF7F2]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "border-pink-500 bg-pink-500" : "border-stone-300"
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-stone-900">{m.name}</h4>
                        <p className="text-xs text-stone-500">{m.estimatedDays} • {m.carrier}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-sm text-stone-900">
                        {cost === 0 ? "GRATIS" : formatPrice(cost)}
                      </span>
                      {m.badge && (
                        <span className="block text-[10px] font-bold text-pink-600 uppercase">{m.badge}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-stone-100 text-stone-700 font-bold text-sm py-3.5 rounded-2xl hover:bg-stone-200"
              >
                ← Volver
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 salem-gradient-btn text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg"
              >
                Continuar a Pago →
              </button>
            </div>
          </div>
        )}

        {/* PASO 3: MÉTODO DE PAGO */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-3">
              {/* Transferencia */}
              <div
                onClick={() => setPaymentMethod("transfer")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === "transfer" ? "border-pink-500 bg-pink-50/60 shadow-md" : "border-stone-200 bg-[#FAF7F2]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "transfer" ? "border-pink-500 bg-pink-500" : "border-stone-300"
                    }`}>
                      {paymentMethod === "transfer" && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-stone-900">Transferencia Bancaria</h4>
                      <p className="text-xs text-stone-500">CBU / CVU / Alias de Mercado Pago</p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full">
                    15% OFF EXTRA
                  </span>
                </div>

                {paymentMethod === "transfer" && (
                  <div className="mt-3 p-3 rounded-xl bg-white border border-pink-200 text-xs text-stone-700 space-y-1">
                    <p><strong>Alias:</strong> {settings.bankDetails.alias}</p>
                    <p><strong>CBU:</strong> {settings.bankDetails.cbu}</p>
                    <p><strong>Titular:</strong> {settings.bankDetails.holder}</p>
                  </div>
                )}
              </div>

              {/* Tarjeta de Crédito */}
              <div
                onClick={() => setPaymentMethod("credit_card")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === "credit_card" ? "border-pink-500 bg-pink-50/60 shadow-md" : "border-stone-200 bg-[#FAF7F2]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "credit_card" ? "border-pink-500 bg-pink-500" : "border-stone-300"
                    }`}>
                      {paymentMethod === "credit_card" && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-stone-900">Tarjeta de Crédito / Débito</h4>
                      <p className="text-xs text-stone-500">Hasta 6 cuotas sin interés con Mercado Pago</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-pink-600">6 Cuotas Sin Interés</span>
                </div>
              </div>
            </div>

            {/* Resumen Final de Cobro */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold">{formatPrice(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-pink-600">
                  <span>Descuento cupón:</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              {transferDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>15% OFF Transferencia:</span>
                  <span>-{formatPrice(transferDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Envío ({shippingMethod.name}):</span>
                <span className="font-bold">{shippingCost === 0 ? "GRATIS" : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-stone-900 pt-2 border-t border-stone-300">
                <span>TOTAL A PAGAR:</span>
                <span className="text-pink-600">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-stone-100 text-stone-700 font-bold text-sm py-3.5 rounded-2xl hover:bg-stone-200"
              >
                ← Volver
              </button>
              <button
                onClick={handleConfirmOrder}
                className="flex-1 salem-gradient-btn text-white font-black text-sm py-3.5 rounded-2xl shadow-lg"
              >
                Confirmar Pedido 🛍️
              </button>
            </div>
          </div>
        )}

        {/* PASO 4: CONFIRMACIÓN Y ENVÍO A WHATSAPP */}
        {step === 4 && confirmedOrder && (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mx-auto shadow-md">
              <Icons.Sparkles className="w-8 h-8 text-pink-600" />
            </div>

            <div>
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">¡Gracias por tu compra!</span>
              <h2 className="font-display font-black text-2xl text-stone-900 mt-1">
                Orden #{confirmedOrder.orderNumber}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Tu pedido fue registrado en el sistema. Hacé clic abajo para enviarlo directamente a nuestro WhatsApp oficial y coordinar el pago y despacho.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-left text-xs space-y-2">
              <p><strong>Cliente:</strong> {confirmedOrder.customer.fullName} ({confirmedOrder.customer.phone})</p>
              <p><strong>Dirección:</strong> {confirmedOrder.customer.address}, {confirmedOrder.customer.city}</p>
              <p><strong>Total:</strong> <span className="font-bold text-pink-600 text-sm">{formatPrice(confirmedOrder.total)}</span></p>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Icons.MessageCircle className="w-5 h-5" />
              <span>Enviar Pedido a WhatsApp de Salem 🐈‍⬛</span>
            </button>

            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                setStep(1);
              }}
              className="text-xs text-stone-500 hover:text-stone-900 font-semibold underline block mx-auto"
            >
              Volver a la tienda
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// --- MODAL DE FAVORITOS (WISHLIST) ---
function WishlistModal() {
  const { isWishlistModalOpen, setIsWishlistModalOpen, wishlist, products, toggleWishlist, addToCart, formatPrice, setQuickViewProduct } = useStore();

  if (!isWishlistModalOpen) return null;

  const favProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={() => setIsWishlistModalOpen(false)}
      />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-7 text-stone-900 animate-slide-up max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
          <div className="flex items-center gap-2">
            <Icons.Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            <h3 className="font-display font-black text-xl text-stone-900">
              Tus Favoritos ({wishlist.length})
            </h3>
          </div>
          <button onClick={() => setIsWishlistModalOpen(false)} className="p-2 text-stone-400 hover:text-stone-900">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {favProducts.length > 0 ? (
          <div className="space-y-4 divide-y divide-stone-100">
            {favProducts.map((p) => (
              <div key={p.id} className="pt-3.5 first:pt-0 flex items-center gap-4">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-16 h-20 rounded-xl object-cover bg-stone-100 shrink-0 cursor-pointer"
                  onClick={() => { setIsWishlistModalOpen(false); setQuickViewProduct(p); }}
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-display font-bold text-sm text-stone-900 truncate hover:text-pink-600 cursor-pointer"
                    onClick={() => { setIsWishlistModalOpen(false); setQuickViewProduct(p); }}
                  >
                    {p.title}
                  </h4>
                  <p className="text-xs text-stone-500">{p.subtitle}</p>
                  <p className="text-xs font-bold text-pink-600 mt-1">
                    {formatPrice(p.promoPrice || p.price)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { addToCart(p); }}
                    className="salem-gradient-btn text-white text-xs font-bold px-3 py-2 rounded-xl"
                  >
                    Agregar
                  </button>
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="p-2 text-stone-400 hover:text-rose-600"
                    title="Quitar"
                  >
                    <Icons.Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-stone-400">
            <Icons.Heart className="w-12 h-12 mx-auto mb-2 opacity-30" />
            <p className="font-bold text-stone-700">Aún no guardaste prendas en favoritos</p>
            <p className="text-xs text-stone-500 mt-1">Hacé clic en el corazón de cualquier prenda para guardarla acá.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- MODAL DE GUÍA DE TALLES ---
function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen, sizeGuideCategory, setSizeGuideCategory, settings } = useStore();

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsSizeGuideOpen(false)} />

      <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-7 text-stone-900 animate-slide-up max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
          <div className="flex items-center gap-2">
            <Icons.Ruler className="w-5 h-5 text-pink-600" />
            <h3 className="font-display font-black text-xl text-stone-900">
              Guía de Talles Oficial Salem
            </h3>
          </div>
          <button onClick={() => setIsSizeGuideOpen(false)} className="p-2 text-stone-400 hover:text-stone-900">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs de categorías */}
        <div className="flex border-b border-stone-200 gap-3 text-xs font-bold text-stone-500 mb-4">
          <button
            onClick={() => setSizeGuideCategory("jeans")}
            className={`pb-2 ${sizeGuideCategory === "jeans" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}
          >
            Jeans & Pantalones
          </button>
          <button
            onClick={() => setSizeGuideCategory("corsets")}
            className={`pb-2 ${sizeGuideCategory === "corsets" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}
          >
            Corsets & Tops
          </button>
          <button
            onClick={() => setSizeGuideCategory("camperas")}
            className={`pb-2 ${sizeGuideCategory === "camperas" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}
          >
            Camperas & Abrigos
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto text-xs">
          {sizeGuideCategory === "jeans" && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-50 text-pink-900 border-b border-pink-200">
                  <th className="p-2.5 font-bold">Talle</th>
                  <th className="p-2.5 font-bold">Cintura</th>
                  <th className="p-2.5 font-bold">Cadera</th>
                  <th className="p-2.5 font-bold">Tiro</th>
                  <th className="p-2.5 font-bold">Largo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {settings.sizeGuides.jeans.map((r, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="p-2.5 font-bold text-stone-900">{r.talle}</td>
                    <td className="p-2.5 text-stone-600">{r.cintura}</td>
                    <td className="p-2.5 text-stone-600">{r.cadera}</td>
                    <td className="p-2.5 text-stone-600">{r.tiro}</td>
                    <td className="p-2.5 text-stone-600">{r.largo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {sizeGuideCategory === "corsets" && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-50 text-pink-900 border-b border-pink-200">
                  <th className="p-2.5 font-bold">Talle</th>
                  <th className="p-2.5 font-bold">Busto</th>
                  <th className="p-2.5 font-bold">Cintura</th>
                  <th className="p-2.5 font-bold">Largo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {settings.sizeGuides.corsets.map((r, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="p-2.5 font-bold text-stone-900">{r.talle}</td>
                    <td className="p-2.5 text-stone-600">{r.busto}</td>
                    <td className="p-2.5 text-stone-600">{r.cintura}</td>
                    <td className="p-2.5 text-stone-600">{r.largo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {sizeGuideCategory === "camperas" && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-50 text-pink-900 border-b border-pink-200">
                  <th className="p-2.5 font-bold">Talle</th>
                  <th className="p-2.5 font-bold">Busto</th>
                  <th className="p-2.5 font-bold">Hombros</th>
                  <th className="p-2.5 font-bold">Largo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {settings.sizeGuides.camperas.map((r, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="p-2.5 font-bold text-stone-900">{r.talle}</td>
                    <td className="p-2.5 text-stone-600">{r.busto}</td>
                    <td className="p-2.5 text-stone-600">{r.hombros}</td>
                    <td className="p-2.5 text-stone-600">{r.largo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-5 p-3 rounded-xl bg-stone-50 text-[11px] text-stone-500">
          💡 <strong>Tip Salem:</strong> Si estás entre dos talles de jean rígido, te sugerimos elegir el talle mayor para que el calce te quede súper cómodo y relajado.
        </div>
      </div>
    </div>
  );
}

// --- MODAL DE VENTA MAYORISTA ---
function WholesaleModal() {
  const { isWholesaleModalOpen, setIsWholesaleModalOpen, settings } = useStore();

  if (!isWholesaleModalOpen) return null;

  const handleContactWholesale = () => {
    const text = encodeURIComponent("Hola Salem! 🐈‍⬛ Quiero recibir el catálogo mayorista y lista de precios por volumen. ¿Me podrían brindar más información?");
    window.open(`${settings.whatsappUrl}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsWholesaleModalOpen(false)} />

      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <h3 className="font-display font-black text-xl text-stone-900">
              {settings.wholesale.title}
            </h3>
          </div>
          <button onClick={() => setIsWholesaleModalOpen(false)} className="p-2 text-stone-400 hover:text-stone-900">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-stone-600 mb-5 leading-relaxed">
          {settings.wholesale.subtitle}
        </p>

        <div className="space-y-3 mb-6">
          {settings.wholesale.benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
              <span className="w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
              <span>{b}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleContactWholesale}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Icons.MessageCircle className="w-5 h-5" />
          <span>Contactar a un Asesor Mayorista por WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

// --- MODAL LEGAL & BOTÓN DE ARREPENTIMIENTO ---
function LegalModal() {
  const { isLegalModalOpen, setIsLegalModalOpen, legalTab, setLegalTab, addToast } = useStore();
  const [arrepentimientoForm, setArrepentimientoForm] = useState({ name: "", phone: "", orderNumber: "" });
  const [ticketArrepentimiento, setTicketArrepentimiento] = useState(null);

  if (!isLegalModalOpen) return null;

  const handleSubmitArrepentimiento = (e) => {
    e.preventDefault();
    if (!arrepentimientoForm.name.trim() || !arrepentimientoForm.orderNumber.trim()) return;
    const ticket = `ARR-SLM-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketArrepentimiento(ticket);
    addToast({
      title: "Solicitud registrada",
      description: `Comprobante #${ticket}. Nos comunicaremos dentro de las 24hs hábiles.`,
      type: "success"
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsLegalModalOpen(false)} />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
          <h3 className="font-display font-black text-xl text-stone-900">
            Marco Legal & Consumidor
          </h3>
          <button onClick={() => setIsLegalModalOpen(false)} className="p-2 text-stone-400 hover:text-stone-900">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-stone-200 gap-4 text-xs font-bold text-stone-500 mb-4">
          <button
            onClick={() => setLegalTab("terms")}
            className={`pb-2 ${legalTab === "terms" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}
          >
            Términos y Condiciones
          </button>
          <button
            onClick={() => setLegalTab("shipping")}
            className={`pb-2 ${legalTab === "shipping" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}
          >
            Envíos y Cambios
          </button>
          <button
            onClick={() => setLegalTab("regret")}
            className={`pb-2 ${legalTab === "regret" ? "text-rose-600 border-b-2 border-rose-600" : ""}`}
          >
            Botón de Arrepentimiento
          </button>
        </div>

        {legalTab === "terms" && (
          <div className="text-xs text-stone-600 leading-relaxed space-y-2">
            <p><strong>1. Identidad:</strong> Indumentaria Salem / Jeans SLM opera como marca registrada de indumentaria urbana en la República Argentina.</p>
            <p><strong>2. Precios y Stock:</strong> Todos los precios expresados en pesos argentinos incluyen impuestos. Las promociones tienen vigencia limitada hasta agotar stock.</p>
            <p><strong>3. Protección de Datos:</strong> Los datos personales provistos por los usuarios se utilizan exclusivamente para procesar pedidos y emitir guías de transporte.</p>
          </div>
        )}

        {legalTab === "shipping" && (
          <div className="text-xs text-stone-600 leading-relaxed space-y-2">
            <p><strong>Plazo de Cambio:</strong> Contás con hasta 30 días corridos desde recibido el paquete para solicitar cambio de talle o modelo.</p>
            <p><strong>Condiciones:</strong> Las prendas deben encontrarse sin uso, con etiquetas colocadas y en su envoltorio original.</p>
            <p><strong>Logística:</strong> Los envíos se despachan mediante Correo Argentino y Andreani con número de seguimiento para tracking online.</p>
          </div>
        )}

        {legalTab === "regret" && (
          <div className="text-xs text-stone-600 leading-relaxed space-y-3">
            <p>Conforme a la Resolución 424/2020 de la Secretaría de Comercio Interior de la Nación, podés solicitar la revocación de tu compra dentro de los 10 días corridos contados a partir de la entrega del producto.</p>
            
            {ticketArrepentimiento ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <p className="font-bold">Comprobante de Solicitud Generado: #{ticketArrepentimiento}</p>
                <p className="text-[11px] mt-1">Nos contactaremos a tu número de WhatsApp para coordinar la devolución y reintegro del importe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitArrepentimiento} className="space-y-3 pt-2">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={arrepentimientoForm.name}
                    onChange={(e) => setArrepentimientoForm({ ...arrepentimientoForm, name: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={arrepentimientoForm.phone}
                    onChange={(e) => setArrepentimientoForm({ ...arrepentimientoForm, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Número de Pedido</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: SLM-94821"
                    value={arrepentimientoForm.orderNumber}
                    onChange={(e) => setArrepentimientoForm({ ...arrepentimientoForm, orderNumber: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2 text-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors"
                >
                  Confirmar Revocación de Compra
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- PANEL DE ADMINISTRACIÓN SALEM ---
function AdminModal() {
  const {
    isAdminOpen,
    setIsAdminOpen,
    settings,
    setSettings,
    products,
    setProducts,
    orders,
    formatPrice,
    addToast,
    adminAuth,
    setAdminAuth,
    saveToBackend
  } = useStore();

  const [tab, setTab] = useState("products");
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Estados de Autenticación de Administradora
  const [loginEmail, setLoginEmail] = useState("contacto@indumentariasalem.com.ar");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Estados de Sincronización Backend y GitHub
  const [githubTokenInput, setGithubTokenInput] = useState(adminAuth?.githubToken || "");
  const [isSavingBackend, setIsSavingBackend] = useState(false);
  const [backendSyncMsg, setBackendSyncMsg] = useState("");

  // Formulario de edición / creación de prenda
  const [productForm, setProductForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    category: "jeans",
    price: 45000,
    promoPrice: 38900,
    sizesStr: "36, 38, 40, 42",
    colorsStr: "Celeste, Azul",
    image: "",
    stock: 10,
    isBestSeller: false,
    isNew: true,
    freeShipping: false
  });

  if (!isAdminOpen) return null;

  // Manejador de Login de la Dueña
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          email: loginEmail,
          password: loginPassword
        })
      });

      if (res.ok) {
        const data = await res.json();
        setAdminAuth({
          isAuthenticated: true,
          token: data.token,
          user: data.user || { email: loginEmail, role: "owner" },
          githubToken: adminAuth?.githubToken || ""
        });
        addToast({ title: "¡Bienvenida al Panel! ✨", description: "Acceso como administradora concedido.", type: "success" });
        setIsLoggingIn(false);
        return;
      }
    } catch (err) {}

    // Fallback de clave directa
    if (loginPassword.trim() === "salem2026") {
      setAdminAuth({
        isAuthenticated: true,
        token: "local_master_session",
        user: { email: loginEmail, role: "owner" },
        githubToken: adminAuth?.githubToken || ""
      });
      addToast({ title: "¡Bienvenida al Panel! ✨", description: "Acceso autorizado.", type: "success" });
    } else {
      setLoginError("Contraseña incorrecta. Solo la titular de Salem puede administrar la tienda.");
    }
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    setAdminAuth({ isAuthenticated: false, token: null, user: null, githubToken: adminAuth?.githubToken || "" });
    addToast({ title: "Sesión cerrada", description: "El panel de control se ha bloqueado.", type: "info" });
  };

  // Guardar y Publicar en la Web (Backend + GitHub)
  const handlePublishAll = async () => {
    setIsSavingBackend(true);
    setBackendSyncMsg("Enviando cambios al backend y guardando...");

    const res = await saveToBackend(githubTokenInput);
    setIsSavingBackend(false);

    if (res && res.success) {
      if (res.details && res.details.savedToGitHub) {
        setBackendSyncMsg("¡Códigos actualizados en GitHub! Vercel está compilando.");
        addToast({
          title: "¡Publicado en GitHub y Vercel! 🚀",
          description: "Los códigos del repositorio se actualizaron y el sitio está publicándose para todos.",
          type: "success"
        });
      } else {
        setBackendSyncMsg(res.message || "¡Cambios guardados en el backend!");
        addToast({
          title: "¡Guardado con éxito! ✨",
          description: "Los cambios se guardaron y están listos para todos los clientes.",
          type: "success"
        });
      }
    } else {
      setBackendSyncMsg("Aviso: " + (res?.error || "Error al conectar con backend"));
      addToast({
        title: "Guardado localmente",
        description: "Tus cambios están activos en este navegador.",
        type: "info"
      });
    }
  };

  const handleSaveGithubToken = () => {
    setAdminAuth({ ...adminAuth, githubToken: githubTokenInput.trim() });
    addToast({
      title: "Token de GitHub guardado 💾",
      description: "El backend ahora usará este token para comitear los cambios a GitHub.",
      type: "success"
    });
  };

  // PANTALLA DE BLOQUEO / INICIO DE SESIÓN
  if (!adminAuth?.isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsAdminOpen(false)} />
        <div className="relative z-10 w-full max-w-md bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up">
          <div className="flex justify-end">
            <button onClick={() => setIsAdminOpen(false)} className="p-1.5 text-stone-400 hover:text-stone-900 cursor-pointer">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-lg shadow-pink-200 mb-3 text-2xl">
              🐈‍⬛
            </div>
            <h3 className="font-display font-black text-xl text-stone-900">
              Acceso Administradora Principal
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Ingresá con tu cuenta para modificar prendas, precios, stock y cobros de tu tienda.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Usuario o Email Principal</label>
              <input
                type="text"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-3 text-xs focus:outline-none focus:border-pink-500 font-medium"
                placeholder="contacto@indumentariasalem.com.ar"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold text-stone-700">Contraseña de Administradora</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] text-pink-600 hover:text-pink-700 font-semibold cursor-pointer"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                  setLoginError("");
                }}
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-3 text-xs focus:outline-none focus:border-pink-500 font-medium"
                placeholder="Ingresá tu clave maestra..."
              />
            </div>

            {loginError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-medium">
                ⚠️ {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full salem-gradient-btn text-white font-bold py-3.5 rounded-xl shadow-md text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoggingIn ? "Verificando credenciales..." : "Ingresar al Panel de Control ✨"}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-stone-100 text-center">
            <p className="text-[11px] text-stone-400">
              🔒 Solo vos podés ingresar a modificar las cosas. La clave maestra inicial es: <strong className="text-stone-700 font-mono">salem2026</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Abrir formulario para nueva prenda
  const handleOpenNewProduct = () => {
    setIsNewProduct(true);
    setProductForm({
      id: "slm-prenda-" + Date.now(),
      title: "",
      subtitle: "",
      description: "",
      category: "jeans",
      price: 39900,
      promoPrice: 34900,
      sizesStr: "S, M, L",
      colorsStr: "Negro, Rosa",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
      stock: 12,
      isBestSeller: false,
      isNew: true,
      freeShipping: false
    });
    setProductModalOpen(true);
  };

  // Abrir formulario para editar prenda existente
  const handleOpenEditProduct = (p) => {
    setIsNewProduct(false);
    setProductForm({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle || "",
      description: p.description || "",
      category: p.category || "jeans",
      price: p.price,
      promoPrice: p.promoPrice || "",
      sizesStr: p.sizes ? p.sizes.map((s) => s.size).join(", ") : "S, M, L",
      colorsStr: p.colors ? p.colors.map((c) => c.name).join(", ") : "Original",
      image: p.images && p.images[0] ? p.images[0] : "",
      stock: p.stock || 10,
      isBestSeller: !!p.isBestSeller,
      isNew: !!p.isNew,
      freeShipping: !!p.freeShipping
    });
    setProductModalOpen(true);
  };

  // Guardar prenda (nueva o editada)
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.title.trim()) {
      addToast({ title: "Falta el título", description: "Por favor escribí el nombre de la prenda.", type: "error" });
      return;
    }

    const sizesArr = productForm.sizesStr
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => ({
        size: s,
        stock: Math.max(1, Math.round(productForm.stock / 3))
      }));

    const colorsArr = productForm.colorsStr
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
      .map((c) => ({
        name: c,
        hex: c.toLowerCase().includes("rosa")
          ? "#EC4899"
          : c.toLowerCase().includes("negro")
          ? "#18181B"
          : c.toLowerCase().includes("celeste")
          ? "#87CEEB"
          : "#A88B69"
      }));

    const finalProduct = {
      id: productForm.id || "slm-" + Date.now(),
      title: productForm.title,
      subtitle: productForm.subtitle || "Prenda de tendencia Salem",
      description: productForm.description || "Confeccionada con materiales de primera calidad y calce perfecto.",
      features: [
        "Calce fit que estiliza la figura",
        "Diseño exclusivo Salem",
        "Costuras reforzadas de alta durabilidad"
      ],
      fabricCare: "Lavar con agua fría del revés. No usar blanqueador.",
      category: productForm.category,
      price: parseInt(productForm.price) || 0,
      promoPrice: productForm.promoPrice ? parseInt(productForm.promoPrice) : undefined,
      sizes: sizesArr.length > 0 ? sizesArr : [{ size: "Único", stock: 10 }],
      colors: colorsArr.length > 0 ? colorsArr : [{ name: "Original", hex: "#EC4899" }],
      images: [
        productForm.image ||
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80"
      ],
      rating: 5.0,
      reviewCount: Math.floor(20 + Math.random() * 50),
      stock: parseInt(productForm.stock) || 10,
      isBestSeller: productForm.isBestSeller,
      isNew: productForm.isNew,
      freeShipping: productForm.freeShipping,
      installmentsMax: 6,
      tags: [productForm.category, "Salem 2026"],
      reviews: [
        {
          id: "rev-new",
          author: "Clienta Verificada",
          rating: 5,
          date: "Reciente",
          comment: "Excelente calidad y calce!",
          verified: true
        }
      ]
    };

    if (isNewProduct) {
      setProducts((prev) => [finalProduct, ...prev]);
      addToast({ title: "¡Prenda agregada con éxito! ✨", description: finalProduct.title, type: "success" });
    } else {
      setProducts((prev) => prev.map((p) => (p.id === finalProduct.id ? { ...p, ...finalProduct } : p)));
      addToast({ title: "Prenda actualizada ✏️", description: finalProduct.title, type: "success" });
    }

    setProductModalOpen(false);
  };

  // Eliminar prenda
  const handleDeleteProduct = (id, title) => {
    if (confirm(`¿Estás segura de eliminar "${title}" del catálogo?`)) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      addToast({ title: "Prenda eliminada 🗑️", description: title, type: "info" });
    }
  };

  // DESCARGAR ARCHIVO products.js
  const handleExportProductsFile = () => {
    const code =
      "// Catálogo de Productos Oficiales - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨\nwindow.SALEM_PRODUCTS = " +
      JSON.stringify(products, null, 2) +
      ";\n";
    const blob = new Blob([code], { type: "application/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast({
      title: "¡Archivo products.js descargado! 📥",
      description: "Guardalo en la carpeta 'data/products.js' para que quede fijo para todos.",
      type: "success"
    });
  };

  // COPIAR CÓDIGO AL PORTAPAPELES
  const handleCopyProductsCode = () => {
    const code =
      "// Catálogo de Productos Oficiales - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨\nwindow.SALEM_PRODUCTS = " +
      JSON.stringify(products, null, 2) +
      ";\n";
    navigator.clipboard.writeText(code);
    addToast({
      title: "¡Código copiado! 📋",
      description: "Pegalo dentro del archivo 'data/products.js' y guardalo con Ctrl+S.",
      type: "success"
    });
  };

  // AGREGAR NUEVA COLECCIÓN
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) {
      addToast({ title: "Falta el nombre", description: "Escribí el nombre de la colección.", type: "error" });
      return;
    }
    const cleanId = newCategoryName
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    if (settings.categories.some((c) => c.id === cleanId)) {
      addToast({ title: "Ya existe", description: "Ya existe una colección con ese nombre o ID.", type: "error" });
      return;
    }

    const updated = [
      ...settings.categories,
      { id: cleanId, label: newCategoryName.trim(), icon: "Sparkles" }
    ];

    setSettings({ ...settings, categories: updated });
    setNewCategoryName("");
    addToast({
      title: "¡Colección agregada con éxito! ✨",
      description: `"${newCategoryName}" ya está activa en el menú, navbar y catálogo.`,
      type: "success"
    });
  };

  // ELIMINAR COLECCIÓN
  const handleDeleteCategory = (catId, catLabel) => {
    if (confirm(`¿Estás segura de eliminar la colección "${catLabel}" del menú y la tienda?`)) {
      const updated = settings.categories.filter((c) => c.id !== catId);
      setSettings({ ...settings, categories: updated });
      addToast({
        title: "Colección eliminada",
        description: `Se quitó "${catLabel}".`,
        type: "info"
      });
    }
  };

  // DESCARGAR CONFIG.JS
  const handleExportConfigFile = () => {
    const code =
      "// Configuración General - Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛\nwindow.SALEM_CONFIG = " +
      JSON.stringify(settings, null, 2) +
      ";\n";
    const blob = new Blob([code], { type: "application/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast({
      title: "¡Archivo config.js descargado! 📥",
      description: "Guardalo en la carpeta 'data/config.js' para que quede fijo para siempre.",
      type: "success"
    });
  };

  // COPIAR CONFIGURACIÓN AL PORTAPAPELES
  const handleCopyConfigCode = () => {
    const code =
      "// Configuración General - Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛\nwindow.SALEM_CONFIG = " +
      JSON.stringify(settings, null, 2) +
      ";\n";
    navigator.clipboard.writeText(code);
    addToast({
      title: "¡Configuración copiada! 📋",
      description: "Copiada al portapapeles con éxito.",
      type: "success"
    });
  };

  const handleResetDefaults = () => {
    if (confirm("¿Estás segura de restablecer todos los productos y configuraciones a los valores iniciales de fábrica?")) {
      localStorage.removeItem("salem_products");
      localStorage.removeItem("salem_store_settings");
      setProducts(window.SALEM_PRODUCTS);
      setSettings(window.SALEM_CONFIG);
      addToast({ title: "Valores restablecidos", description: "La tienda volvió a su estado inicial.", type: "info" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsAdminOpen(false)} />

      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up max-h-[92vh] overflow-y-auto">
        
        {/* Header Admin */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 mb-5 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
              <Icons.Settings className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-xl text-stone-900">
                  Panel de Control de tu Tienda ✨
                </h3>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  🟢 Dueña
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Conectada como: <strong className="text-stone-800">{adminAuth.user?.email || "Principal"}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handlePublishAll}
              disabled={isSavingBackend}
              className="salem-gradient-btn text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Guarda los cambios en el backend y los publica para todos los clientes"
            >
              <span>{isSavingBackend ? "⏳ Publicando..." : "🚀 Guardar y Publicar en la Web"}</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-2.5 py-2 text-stone-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              title="Cerrar sesión de administradora"
            >
              Bloquear
            </button>

            <button onClick={() => setIsAdminOpen(false)} className="p-2 text-stone-400 hover:text-stone-900 cursor-pointer">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {backendSyncMsg && (
          <div className="mb-4 p-2.5 bg-pink-50 border border-pink-200 text-pink-900 rounded-xl text-xs flex items-center justify-between">
            <span>ℹ️ {backendSyncMsg}</span>
            <button onClick={() => setBackendSyncMsg("")} className="text-pink-600 font-bold ml-2">✕</button>
          </div>
        )}

        {/* Tabs Principales */}
        <div className="flex border-b border-stone-200 gap-2 sm:gap-4 text-xs font-bold text-stone-500 mb-5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setTab("products")}
            className={`pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "products" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`}
          >
            👗 Prendas ({products.length})
          </button>
          <button
            onClick={() => setTab("categories")}
            className={`pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "categories" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`}
          >
            🏷️ Colecciones ({settings.categories.length})
          </button>
          <button
            onClick={() => setTab("contact")}
            className={`pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "contact" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`}
          >
            📞 Contacto & Redes
          </button>
          <button
            onClick={() => setTab("payments")}
            className={`pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "payments" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`}
          >
            💳 Pagos & Banco
          </button>
          <button
            onClick={() => setTab("backend")}
            className={`pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "backend" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`}
          >
            🚀 Sincronización & Backend
          </button>
          <button
            onClick={() => setTab("orders")}
            className={`pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "orders" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`}
          >
            📦 Pedidos ({orders.length})
          </button>
        </div>

        {/* PESTAÑA: PRENDAS & CATÁLOGO */}
        {tab === "products" && (
          <div className="space-y-4">
            {/* Barra de herramientas de productos */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-pink-50/70 border border-pink-200/60 rounded-2xl">
              <div>
                <span className="text-xs font-bold text-pink-900 block">Total de Prendas Activas: {products.length}</span>
                <span className="text-[11px] text-pink-700">Podés agregar nuevas prendas o editar precios en 1 clic.</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleOpenNewProduct}
                  className="salem-gradient-btn text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Icons.Plus className="w-4 h-4" />
                  <span>➕ Agregar Nueva Prenda</span>
                </button>

                <button
                  onClick={handlePublishAll}
                  disabled={isSavingBackend}
                  className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  title="Publica todos los productos en el backend y Vercel"
                >
                  <span>🚀 Publicar Cambios</span>
                </button>
              </div>
            </div>

            {/* Listado de prendas */}
            <div className="divide-y divide-stone-100 max-h-[50vh] overflow-y-auto pr-1">
              {products.map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between gap-3 text-xs hover:bg-stone-50/80 px-2 rounded-xl transition-colors">
                  {/* Foto y Título */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <img
                      src={p.images[0]}
                      className="w-12 h-14 rounded-xl object-cover bg-stone-100 shrink-0 border border-stone-200"
                      alt=""
                    />
                    <div className="min-w-0">
                      <span className="font-bold text-stone-900 block truncate text-sm">{p.title}</span>
                      <div className="flex items-center gap-2 text-stone-500 text-[11px] mt-0.5">
                        <span className="uppercase text-pink-600 font-bold">{p.category}</span>
                        <span>•</span>
                        <span>Stock: <strong className="text-stone-800">{p.stock}</strong> un.</span>
                        {p.isBestSeller && <span className="text-amber-600 font-bold">🔥 Top</span>}
                        {p.isNew && <span className="text-pink-600 font-bold">✨ Nuevo</span>}
                      </div>
                    </div>
                  </div>

                  {/* Precios */}
                  <div className="text-right shrink-0">
                    <span className="font-black text-stone-900 text-sm block">
                      {formatPrice(p.promoPrice || p.price)}
                    </span>
                    {p.promoPrice && (
                      <span className="line-through text-stone-400 text-[10px]">
                        {formatPrice(p.price)}
                      </span>
                    )}
                  </div>

                  {/* Acciones */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleOpenEditProduct(p)}
                      className="bg-stone-100 hover:bg-pink-100 hover:text-pink-700 text-stone-700 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors cursor-pointer"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(p.id, p.title)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Eliminar prenda"
                    >
                      <Icons.Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PESTAÑA: PEDIDOS */}
        {tab === "orders" && (
          <div className="space-y-3">
            {orders.length > 0 ? (
              <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                {orders.map((o) => (
                  <div key={o.orderNumber} className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-xs">
                    <div className="flex justify-between font-bold text-stone-900 mb-1">
                      <span>Orden #{o.orderNumber}</span>
                      <span className="text-pink-600 font-black text-sm">{formatPrice(o.total)}</span>
                    </div>
                    <p className="text-stone-700"><strong>Cliente:</strong> {o.customer.fullName} • WhatsApp: {o.customer.phone}</p>
                    <p className="text-stone-500"><strong>Entrega:</strong> {o.customer.address}, {o.customer.city}</p>
                    <div className="mt-2 pt-2 border-t border-stone-200/80 text-[11px] text-stone-600 flex justify-between">
                      <span>{o.date}</span>
                      <span className="text-emerald-700 font-bold">{o.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500 text-center py-12">No hay pedidos registrados todavía.</p>
            )}
          </div>
        )}

        {/* PESTAÑA: COLECCIONES & CATEGORÍAS */}
        {tab === "categories" && (
          <div className="space-y-5 text-xs">
            <form onSubmit={handleAddCategory} className="p-4 bg-pink-50/70 border border-pink-200/80 rounded-2xl">
              <span className="font-bold text-pink-900 block mb-1">➕ Crear Nueva Colección para el Menú y Catálogo</span>
              <p className="text-[11px] text-pink-700 mb-3">
                Escribí el nombre y automáticamente se creará el botón en el Nav superior, en el menú móvil y en el pie de página.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Ej: Colección Invierno ❄️, Drops 2026, Bikinis..."
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-pink-500 font-medium"
                />
                <button
                  type="submit"
                  className="salem-gradient-btn text-white font-bold px-4 py-2 rounded-xl shadow-md shrink-0 cursor-pointer"
                >
                  ➕ Agregar al Menú
                </button>
              </div>
            </form>

            <div>
              <span className="font-bold text-stone-800 block mb-2">Colecciones Actuales en tu Tienda ({settings.categories.length})</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[42vh] overflow-y-auto pr-1">
                {settings.categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="p-3 rounded-xl border border-stone-200 bg-[#FAF7F2] flex items-center justify-between gap-2"
                  >
                    <div>
                      <span className="font-bold text-stone-900 block text-xs">{cat.label}</span>
                      <span className="text-[10px] text-stone-500 font-mono">ID: {cat.id}</span>
                    </div>
                    {cat.id !== "all" ? (
                      <button
                        onClick={() => handleDeleteCategory(cat.id, cat.label)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Eliminar esta colección del menú"
                      >
                        <Icons.Trash2 className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-[10px] text-stone-400 font-semibold px-2 py-0.5 bg-stone-100 rounded">Principal</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handlePublishAll}
                disabled={isSavingBackend}
                className="salem-gradient-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer disabled:opacity-50"
              >
                🚀 Guardar y Publicar Colecciones
              </button>
            </div>
          </div>
        )}

        {/* PESTAÑA: CONTACTO & REDES SOCIALES */}
        {tab === "contact" && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-stone-700 block mb-1">WhatsApp Teléfono Visible</label>
                <input
                  type="text"
                  placeholder="+54 9 11 5834-9210"
                  value={settings.whatsappPhone || ""}
                  onChange={(e) => setSettings({ ...settings, whatsappPhone: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-medium"
                />
                <span className="text-[10px] text-stone-400 mt-0.5 block">Se muestra en el footer y en la barra superior.</span>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Enlace Directo de WhatsApp</label>
                <input
                  type="text"
                  placeholder="https://wa.me/5491158349210"
                  value={settings.whatsappUrl || ""}
                  onChange={(e) => setSettings({ ...settings, whatsappUrl: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 font-mono text-xs"
                />
                <span className="text-[10px] text-stone-400 mt-0.5 block">Donde llegarán los pedidos con 1 clic.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Usuario de Instagram (@jeans_slm)</label>
                <input
                  type="text"
                  placeholder="jeans_slm"
                  value={settings.instagramUser || ""}
                  onChange={(e) => {
                    const u = e.target.value.replace("@", "");
                    setSettings({ ...settings, instagramUser: u, instagramUrl: `https://www.instagram.com/${u}/` });
                  }}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Email de Atención al Cliente</label>
                <input
                  type="email"
                  placeholder="contacto@indumentariasalem.com.ar"
                  value={settings.supportEmail || ""}
                  onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-stone-700 block mb-1">Dirección del Showroom / Retiros</label>
              <input
                type="text"
                placeholder="Showroom Palermo Soho, CABA • Envíos a todo el país"
                value={settings.showroomAddress || ""}
                onChange={(e) => setSettings({ ...settings, showroomAddress: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-medium"
              />
              <span className="text-[10px] text-stone-400 mt-0.5 block">Se muestra en la columna de contacto del footer.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Cupón Activo en la Barra Superior</label>
                <input
                  type="text"
                  value={settings.announcementCoupon || ""}
                  onChange={(e) => setSettings({ ...settings, announcementCoupon: e.target.value.toUpperCase() })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs uppercase font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Monto para Envío Gratis ($ ARS)</label>
                <input
                  type="number"
                  value={settings.freeShippingThreshold || 0}
                  onChange={(e) => setSettings({ ...settings, freeShippingThreshold: parseInt(e.target.value) || 0 })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-stone-700 block mb-1">Texto de Anuncios de la Barra Superior</label>
              <input
                type="text"
                value={settings.announcementText || ""}
                onChange={(e) => setSettings({ ...settings, announcementText: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-medium"
              />
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handlePublishAll}
                disabled={isSavingBackend}
                className="salem-gradient-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer disabled:opacity-50"
              >
                🚀 Guardar y Publicar Contacto
              </button>
            </div>
          </div>
        )}

        {/* PESTAÑA: MEDIOS DE PAGO & BANCO */}
        {tab === "payments" && (
          <div className="space-y-4 text-xs">
            <div className="p-3.5 bg-pink-50/70 border border-pink-200/80 rounded-2xl text-[11px] text-pink-900">
              <span className="font-bold block mb-0.5">💳 Configuración de Cobro por Transferencia</span>
              Estos datos son los que verán tus clientas al elegir pagar por Transferencia Bancaria en el checkout.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Alias de Transferencia (Mercado Pago o Banco)</label>
                <input
                  type="text"
                  placeholder="Ej: SALEM.INDUMENTARIA.MP"
                  value={(settings.bankDetails && settings.bankDetails.alias) || ""}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      bankDetails: { ...(settings.bankDetails || {}), alias: e.target.value.toUpperCase() }
                    })
                  }
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold text-stone-900"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">CBU / CVU</label>
                <input
                  type="text"
                  placeholder="0070123400000012345678"
                  value={(settings.bankDetails && settings.bankDetails.cbu) || ""}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      bankDetails: { ...(settings.bankDetails || {}), cbu: e.target.value }
                    })
                  }
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 font-mono text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Nombre del Titular de la Cuenta</label>
                <input
                  type="text"
                  placeholder="Ej: Indumentaria Salem SRL"
                  value={(settings.bankDetails && settings.bankDetails.holder) || ""}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      bankDetails: { ...(settings.bankDetails || {}), holder: e.target.value }
                    })
                  }
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Banco o Billetera</label>
                <input
                  type="text"
                  placeholder="Ej: Mercado Pago / Banco Galicia"
                  value={(settings.bankDetails && settings.bankDetails.bank) || ""}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      bankDetails: { ...(settings.bankDetails || {}), bank: e.target.value }
                    })
                  }
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-200">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Descuento por Transferencia (%)</label>
                <input
                  type="number"
                  value={settings.bankTransferDiscount || 15}
                  onChange={(e) => setSettings({ ...settings, bankTransferDiscount: parseInt(e.target.value) || 0 })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
                />
                <span className="text-[10px] text-stone-400 mt-0.5 block">Se descuenta en el checkout (ej: 15%).</span>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Máximo de Cuotas sin Interés</label>
                <input
                  type="number"
                  value={settings.maxInstallments || 6}
                  onChange={(e) => setSettings({ ...settings, maxInstallments: parseInt(e.target.value) || 1 })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
                />
                <span className="text-[10px] text-stone-400 mt-0.5 block">Muestra las cuotas (ej: 6).</span>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Tipo de Cambio USD ($ ARS)</label>
                <input
                  type="number"
                  value={settings.usdExchangeRate || 1280}
                  onChange={(e) => setSettings({ ...settings, usdExchangeRate: parseInt(e.target.value) || 1000 })}
                  className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
                />
                <span className="text-[10px] text-stone-400 mt-0.5 block">Para el conversor de moneda.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handlePublishAll}
                disabled={isSavingBackend}
                className="salem-gradient-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer disabled:opacity-50"
              >
                🚀 Guardar y Publicar Datos de Cobro
              </button>
            </div>
          </div>
        )}

        {/* PESTAÑA: SINCRONIZACIÓN & BACKEND */}
        {tab === "backend" && (
          <div className="space-y-5 text-xs">
            {/* Panel de Estado del Backend */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-emerald-900 text-sm">Backend Vercel Serverless Conectado</span>
              </div>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                El backend detecta tus cambios a través de los endpoints <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">/api/save</code> y <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">/api/data</code>. Todo lo que modifiques aquí se guarda y se distribuye a todos los visitantes.
              </p>
            </div>

            {/* Sincronización Directa con el Repositorio de GitHub */}
            <div className="p-4 bg-pink-50/70 border border-pink-200 rounded-2xl space-y-3">
              <div>
                <span className="font-bold text-pink-900 text-sm block">🐱 Modificar Códigos en GitHub Automáticamente</span>
                <p className="text-[11px] text-pink-700 mt-0.5">
                  Podés vincular tu <strong>Personal Access Token de GitHub</strong>. Con esto, cada vez que hacés clic en <em>"Guardar y Publicar"</em>, el backend crea un commit directo en el repositorio <code className="font-mono text-pink-900 font-bold">Mintx10/pagina-web-salem</code> modificando los archivos de código en vivo y Vercel se actualiza solo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="password"
                  placeholder="github_pat_... o ghp_..."
                  value={githubTokenInput}
                  onChange={(e) => setGithubTokenInput(e.target.value)}
                  className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-mono text-stone-900 focus:outline-none focus:border-pink-500"
                />
                <button
                  onClick={handleSaveGithubToken}
                  className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2 rounded-xl text-xs shrink-0 cursor-pointer"
                >
                  💾 Guardar Token
                </button>
              </div>

              <div className="text-[10px] text-stone-500">
                💡 Para obtener tu token gratis: Entrá a <strong>github.com &gt; Settings &gt; Developer Settings &gt; Personal access tokens &gt; Tokens (classic)</strong> y creá uno con permiso <code className="bg-white px-1 py-0.5 rounded border border-stone-200 font-mono">repo</code>.
              </div>
            </div>

            {/* Botón de Publicación General */}
            <div className="p-4 bg-white border border-stone-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="font-bold text-stone-900 block">Publicar Todos los Cambios Ahora</span>
                <span className="text-[11px] text-stone-500">Aplica inmediatamente prendas, precios, colecciones y datos bancarios.</span>
              </div>
              <button
                onClick={handlePublishAll}
                disabled={isSavingBackend}
                className="salem-gradient-btn text-white font-bold px-6 py-3 rounded-xl shadow-lg cursor-pointer text-xs flex items-center gap-2 disabled:opacity-50"
              >
                <span>{isSavingBackend ? "⏳ Procesando..." : "🚀 Guardar y Publicar en la Web"}</span>
              </button>
            </div>

            {/* Descarga Manual de Archivos de Código */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E8E1D5] rounded-2xl">
              <span className="font-bold text-stone-800 block mb-1">📥 Descargar Copias Físicas de Código</span>
              <p className="text-[11px] text-stone-500 mb-3">
                Si querés tener los archivos de código en tu computadora para tu tranquilidad:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleExportProductsFile}
                  className="bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-bold px-3 py-2 rounded-xl text-[11px] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>products.js</span>
                </button>
                <button
                  onClick={handleExportConfigFile}
                  className="bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-bold px-3 py-2 rounded-xl text-[11px] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>config.js</span>
                </button>
                <button
                  onClick={handleCopyProductsCode}
                  className="bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-bold px-2.5 py-2 rounded-xl text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  <Icons.Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </button>
                <button
                  onClick={handleResetDefaults}
                  className="text-rose-600 hover:text-rose-800 font-bold underline text-[11px] cursor-pointer ml-auto"
                >
                  Restablecer de fábrica
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL INTERNO: FORMULARIO CREAR / EDITAR PRENDA */}
        {productModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
            <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setProductModalOpen(false)} />

            <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 text-stone-900 animate-slide-up max-h-[88vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <h4 className="font-display font-black text-lg text-stone-900">
                  {isNewProduct ? "➕ Agregar Nueva Prenda" : "✏️ Editar Prenda"}
                </h4>
                <button onClick={() => setProductModalOpen(false)} className="p-1.5 text-stone-400 hover:text-stone-900 cursor-pointer">
                  <Icons.X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-3.5 text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Nombre de la Prenda *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Jean Wide Leg Black Edition"
                    value={productForm.title}
                    onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Subtítulo / Destacado</label>
                  <input
                    type="text"
                    placeholder="Ej: Denim rígido tiro alto con calce fit soñado"
                    value={productForm.subtitle}
                    onChange={(e) => setProductForm({ ...productForm, subtitle: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Categoría</label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
                    >
                      {settings.categories
                        .filter((c) => c.id !== "all")
                        .map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Stock Disponible</label>
                    <input
                      type="number"
                      value={productForm.stock}
                      onChange={(e) => setProductForm({ ...productForm, stock: parseInt(e.target.value) || 0 })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Precio Normal ($ ARS) *</label>
                    <input
                      type="number"
                      required
                      placeholder="45000"
                      value={productForm.price}
                      onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Precio Promo / Oferta ($ ARS)</label>
                    <input
                      type="number"
                      placeholder="38900"
                      value={productForm.promoPrice}
                      onChange={(e) => setProductForm({ ...productForm, promoPrice: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold text-pink-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Talles (separados por coma)</label>
                    <input
                      type="text"
                      placeholder="36, 38, 40, 42 o S, M, L"
                      value={productForm.sizesStr}
                      onChange={(e) => setProductForm({ ...productForm, sizesStr: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Colores (separados por coma)</label>
                    <input
                      type="text"
                      placeholder="Negro, Celeste, Blanco"
                      value={productForm.colorsStr}
                      onChange={(e) => setProductForm({ ...productForm, colorsStr: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Foto (ruta local o link de internet)</label>
                  <input
                    type="text"
                    placeholder="Ej: products/mi-foto.jpg o https://..."
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
                  />
                </div>

                {/* Badges / Destacados */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.isBestSeller}
                      onChange={(e) => setProductForm({ ...productForm, isBestSeller: e.target.checked })}
                      className="rounded text-pink-600 focus:ring-pink-500"
                    />
                    <span className="font-bold text-stone-800">🔥 Más Vendido</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.isNew}
                      onChange={(e) => setProductForm({ ...productForm, isNew: e.target.checked })}
                      className="rounded text-pink-600 focus:ring-pink-500"
                    />
                    <span className="font-bold text-stone-800">✨ Nuevo Drop</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.freeShipping}
                      onChange={(e) => setProductForm({ ...productForm, freeShipping: e.target.checked })}
                      className="rounded text-pink-600 focus:ring-pink-500"
                    />
                    <span className="font-bold text-stone-800">🚚 Envío Gratis</span>
                  </label>
                </div>

                <div className="flex gap-2.5 pt-3 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => setProductModalOpen(false)}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 salem-gradient-btn text-white font-bold py-2.5 rounded-xl shadow-md cursor-pointer"
                  >
                    Guardar Prenda
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// --- SECCIÓN INSTAGRAM FEED & COMUNIDAD ---
function InstagramFeedSection() {
  const { settings } = useStore();

  return (
    <section className="py-14 bg-white border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-bold mb-2">
            <Icons.Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>@jeans_slm</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl text-stone-900">
            Comunidad Salem en Instagram
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Mirá cómo combinan nuestras prendas las clientas y enterate antes que nadie de los nuevos drops.
          </p>
          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-xs font-bold text-pink-600 hover:text-pink-800 underline"
          >
            <span>Seguinos en Instagram (+3.9k seguidoras)</span>
            <Icons.ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Imagen del feed real */}
        <div className="rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-xl group relative">
          <img
            src="brand/instagram-feed.jpg"
            alt="Instagram Feed Salem"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-stone-900 font-bold text-xs px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <Icons.Instagram className="w-4 h-4 text-pink-600" />
              <span>Ver publicaciones en @jeans_slm</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- CONTENEDOR FLOTANTE DE NOTIFICACIONES (TOASTS) ---
function ToastContainer() {
  const { toasts, removeToast } = useStore();

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto p-3.5 rounded-2xl border shadow-xl flex items-start gap-3 backdrop-blur-md animate-slide-up ${
            t.type === "error"
              ? "bg-rose-50/95 border-rose-300 text-rose-900"
              : t.type === "info"
              ? "bg-stone-50/95 border-stone-300 text-stone-900"
              : "bg-white/95 border-pink-300 text-stone-900"
          }`}
        >
          <div className="mt-0.5 shrink-0">
            {t.type === "error" ? (
              <Icons.X className="w-4 h-4 text-rose-500" />
            ) : (
              <Icons.Sparkles className="w-4 h-4 text-pink-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-display font-bold text-xs">{t.title}</h4>
            {t.description && <p className="text-[11px] text-stone-600 mt-0.5 truncate">{t.description}</p>}
          </div>
          <button onClick={() => removeToast(t.id)} className="text-stone-400 hover:text-stone-700">
            <Icons.X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

// --- FOOTER OFICIAL DE LA TIENDA ---
function Footer() {
  const { settings, setIsLegalModalOpen, setLegalTab, setSelectedCategory, setCurrentView, setIsAdminOpen } = useStore();

  const handleOpenLegal = (tab) => {
    setLegalTab(tab);
    setIsLegalModalOpen(true);
  };

  return (
    <footer className="bg-[#121214] text-stone-400 text-xs pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Logo y descripción */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="brand/logo.png" className="w-12 h-12 rounded-full border-2 border-pink-500 object-cover" alt="Salem" />
              <div>
                <span className="font-display font-black text-xl text-white block">JEANS SLM ✨</span>
                <span className="text-xs text-pink-400 font-semibold uppercase">{settings.brandSubtitle}</span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {settings.tagline} Prendas urbanas, corsetería de autor, camperas de tendencia y calce fit soñado. Venta por mayor y por menor con envíos a toda la Argentina.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
              >
                <Icons.Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              >
                <Icons.MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navegación Colecciones */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3">Colecciones</h4>
            <ul className="space-y-2">
              {settings.categories
                .filter((c) => c.id !== "all")
                .map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setCurrentView("catalog");
                        const el = document.getElementById("catalogo-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contacto y Atención al cliente */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3">Contacto & Ayuda</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={settings.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 text-stone-300 font-medium"
                >
                  <Icons.MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{settings.whatsappPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 text-stone-300 font-medium"
                >
                  <Icons.Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>@{settings.instagramUser}</span>
                </a>
              </li>
              {settings.supportEmail && (
                <li>
                  <a
                    href={`mailto:${settings.supportEmail}`}
                    className="flex items-center gap-2 hover:text-pink-400 text-stone-400 text-[11px]"
                  >
                    <span>✉️</span>
                    <span className="break-all">{settings.supportEmail}</span>
                  </a>
                </li>
              )}
              {settings.showroomAddress && (
                <li className="flex items-start gap-1.5 text-stone-400 text-[11px] pt-1">
                  <span>📍</span>
                  <span>{settings.showroomAddress}</span>
                </li>
              )}
              <li className="pt-1">
                <button onClick={() => handleOpenLegal("shipping")} className="hover:text-pink-400 text-[11px] block">
                  Políticas de Envíos y Cambios
                </button>
              </li>
              <li>
                <button onClick={() => handleOpenLegal("regret")} className="text-pink-400 font-bold hover:underline text-[11px] block">
                  Botón de Arrepentimiento
                </button>
              </li>
            </ul>
          </div>

          {/* Medios de Pago & Envíos */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3">Medios de Pago & Envío</h4>
            <p className="text-[11px] text-stone-400 mb-2">
              Aceptamos todas las tarjetas de crédito, débito y transferencia bancaria con 15% OFF.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-stone-300">
              <span className="bg-stone-800 px-2 py-1 rounded">Visa</span>
              <span className="bg-stone-800 px-2 py-1 rounded">Mastercard</span>
              <span className="bg-stone-800 px-2 py-1 rounded">Mercado Pago</span>
              <span className="bg-stone-800 px-2 py-1 rounded">Transferencia</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-bold text-stone-300">
              <span className="bg-stone-800 px-2 py-1 rounded">Correo Argentino</span>
              <span className="bg-stone-800 px-2 py-1 rounded">Andreani</span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Jeans SLM ✨ • Indumentaria Salem. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 cursor-pointer bg-stone-900 px-2.5 py-1 rounded-lg border border-pink-500/30"
            >
              ⚙️ Admin Tienda
            </button>
            <span>•</span>
            <button onClick={() => handleOpenLegal("terms")} className="hover:text-stone-300 cursor-pointer">Privacidad</button>
            <span>•</span>
            <button onClick={() => handleOpenLegal("shipping")} className="hover:text-stone-300 cursor-pointer">Defensa del Consumidor</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- COMPONENTE RAÍZ APP ---
function App() {
  const { currentView } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-pink-200 selection:text-pink-900">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {currentView === "home" ? (
          <>
            <Hero />
            <BenefitsBar />
            <CategoryTabs />
            <CatalogSection />
            <InstagramFeedSection />
          </>
        ) : (
          <>
            <CategoryTabs />
            <CatalogSection />
          </>
        )}
      </main>

      <Footer />

      {/* Modals y Drawers */}
      <QuickViewModal />
      <CartDrawer />
      <CheckoutModal />
      <WishlistModal />
      <SizeGuideModal />
      <WholesaleModal />
      <LegalModal />
      <AdminModal />
      <ToastContainer />
    </div>
  );
}

// Componente Error Boundary para evitar pantallas en blanco
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-stone-50 text-stone-900">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-pink-200 shadow-xl text-center">
            <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-2xl">⚠️</div>
            <h2 className="text-xl font-bold font-display text-stone-900 mb-2">Jeans SLM ✨</h2>
            <p className="text-sm text-stone-600 mb-4">Hubo un problema temporal al cargar los componentes.</p>
            <p className="text-xs text-rose-500 font-mono bg-rose-50 p-3 rounded-xl mb-6 text-left overflow-auto max-h-32">
              {this.state.error ? this.state.error.message : "Error desconocido"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              Recargar Tienda
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Montar React en el elemento #root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ErrorBoundary>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ErrorBoundary>
  );
}
