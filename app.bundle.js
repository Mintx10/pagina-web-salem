// App Principal - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨
const {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
  useRef
} = React;

// Contexto Global de Tienda
const StoreContext = createContext(null);
const useStore = () => useContext(StoreContext);

// --- COMPONENTES DE ICONOS SVG VECTORIALES ---
const Icons = {
  Sparkles: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
  })),
  ShoppingBag: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  })),
  Heart: ({
    className = "w-5 h-5",
    fill = "none"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  })),
  Search: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  X: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  Check: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  Truck: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 18H9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2"
  })),
  CreditCard: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10"
  })),
  PackageCheck: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m16 16 2 2 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.5 4.27 9 5.15"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "3.29 7 12 12 20.71 7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    x2: "12",
    y1: "22",
    y2: "12"
  })),
  MessageCircle: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
  })),
  Instagram: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5"
  })),
  Eye: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  ChevronRight: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })),
  ChevronDown: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  Plus: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  Minus: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })),
  Trash2: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17"
  })),
  Copy: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
  })),
  Star: ({
    className = "w-5 h-5",
    fill = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  })),
  Settings: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  Ruler: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.5 12.5 2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.5 9.5 2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.5 6.5 2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17.5 15.5 2-2"
  })),
  ShieldCheck: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  ArrowLeft: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  })),
  Menu: ({
    className = "w-5 h-5"
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18"
  }))
};

// --- STORE PROVIDER ---
function StoreProvider({
  children
}) {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("salem_store_settings");
    if (saved) {
      try {
        return {
          ...window.SALEM_CONFIG,
          ...JSON.parse(saved)
        };
      } catch (e) {}
    }
    return window.SALEM_CONFIG;
  });
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("salem_products");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return window.SALEM_PRODUCTS;
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("salem_cart");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("salem_wishlist");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [];
  });
  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    const saved = localStorage.getItem("salem_coupon");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return null;
  });
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("salem_orders");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
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
    if (appliedCoupon) localStorage.setItem("salem_coupon", JSON.stringify(appliedCoupon));else localStorage.removeItem("salem_coupon");
  }, [appliedCoupon]);

  // Toasts
  const addToast = ({
    title,
    description,
    type = "success"
  }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, {
      id,
      title,
      description,
      type
    }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };
  const removeToast = id => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Precios y Moneda
  const formatPrice = amount => {
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
  const removeFromCart = index => {
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
  const cartSubtotal = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart]);

  // Cupones
  const applyCoupon = code => {
    const clean = code.trim().toUpperCase();
    const found = settings.coupons.find(c => c.code === clean);
    if (!found) {
      return {
        success: false,
        message: "El cupón ingresado no es válido."
      };
    }
    if (found.minAmount && cartSubtotal < found.minAmount) {
      return {
        success: false,
        message: `Este cupón requiere un mínimo de ${formatPrice(found.minAmount)}.`
      };
    }
    setAppliedCoupon(found);
    addToast({
      title: `¡Cupón ${found.code} aplicado! ✨`,
      description: `Ahorrás un ${found.discount}% extra en tu compra.`,
      type: "success"
    });
    // Lanzar confeti si está disponible
    if (window.confetti) {
      window.confetti({
        particleCount: 60,
        spread: 70,
        origin: {
          y: 0.6
        }
      });
    }
    return {
      success: true
    };
  };
  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast({
      title: "Cupón removido",
      description: "Se recalculó el subtotal.",
      type: "info"
    });
  };
  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return Math.round(cartSubtotal * appliedCoupon.discount / 100);
  }, [appliedCoupon, cartSubtotal]);

  // Envío Gratis
  const freeShippingThreshold = settings.freeShippingThreshold || 45000;
  const freeShippingProgress = Math.min(100, Math.round(cartSubtotal / freeShippingThreshold * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  // Favoritos (Wishlist)
  const toggleWishlist = productId => {
    const prod = products.find(p => p.id === productId);
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast({
          title: "Eliminado de favoritos",
          description: prod ? prod.title : "",
          type: "info"
        });
        return prev.filter(id => id !== productId);
      } else {
        addToast({
          title: "¡Guardado en favoritos! ❤️",
          description: prod ? prod.title : "",
          type: "success"
        });
        return [...prev, productId];
      }
    });
  };
  const isWishlisted = productId => wishlist.includes(productId);

  // Pedidos
  const createOrder = orderData => {
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
    orders,
    createOrder,
    toasts,
    addToast,
    removeToast
  };
  return /*#__PURE__*/React.createElement(StoreContext.Provider, {
    value: value
  }, children);
}

// --- BARRA DE ANUNCIOS SUPERIOR ---
function AnnouncementBar() {
  const {
    settings,
    formatPrice,
    currency,
    setCurrency,
    addToast
  } = useStore();
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
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-[#121214] text-[#FAF7F2] text-xs py-2 px-3 border-b border-[#27272a] relative z-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-x-auto py-0.5 scrollbar-none text-[11px] sm:text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 font-medium text-pink-300"
  }, /*#__PURE__*/React.createElement(Icons.Sparkles, {
    className: "w-3.5 h-3.5 text-pink-400"
  }), /*#__PURE__*/React.createElement("span", null, settings.announcementText)), /*#__PURE__*/React.createElement("button", {
    onClick: copyCoupon,
    className: "inline-flex items-center gap-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-400/40 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0"
  }, /*#__PURE__*/React.createElement("span", null, copied ? "¡Copiado!" : settings.announcementCoupon), /*#__PURE__*/React.createElement(Icons.Copy, {
    className: "w-2.5 h-2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 shrink-0 ml-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center bg-[#27272a] rounded-lg p-0.5 text-[10px] font-semibold border border-white/5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrency("ARS"),
    className: `px-2 py-0.5 rounded ${currency === "ARS" ? "bg-pink-600 text-white" : "text-stone-400 hover:text-white"}`
  }, "ARS $"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrency("USD"),
    className: `px-2 py-0.5 rounded ${currency === "USD" ? "bg-pink-600 text-white" : "text-stone-400 hover:text-white"}`
  }, "USD u$s")), /*#__PURE__*/React.createElement("a", {
    href: settings.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center gap-1 text-stone-300 hover:text-pink-400 transition-colors text-[11px]",
    title: "Instagram Jeans SLM"
  }, /*#__PURE__*/React.createElement(Icons.Instagram, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline"
  }, "@", settings.instagramUser)), /*#__PURE__*/React.createElement("a", {
    href: settings.whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center gap-1 text-stone-300 hover:text-emerald-400 transition-colors text-[11px]",
    title: "WhatsApp de atención"
  }, /*#__PURE__*/React.createElement(Icons.MessageCircle, {
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline"
  }, "WhatsApp")))));
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
  const navigateToCategory = catId => {
    setSelectedCategory(catId);
    setCurrentView("catalog");
    setMobileMenuOpen(false);
    const elem = document.getElementById("catalogo-section");
    if (elem) elem.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-20 gap-3 sm:gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center lg:hidden"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    className: "h-11 w-11 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 shadow-sm transition-colors"
  }, mobileMenuOpen ? /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }) : /*#__PURE__*/React.createElement(Icons.Menu, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      setCurrentView("home");
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    className: "flex items-center gap-3 cursor-pointer group shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: "brand/logo.png",
    alt: "Logo Jeans SLM",
    className: "w-11 h-11 rounded-full border-2 border-pink-500 shadow-md group-hover:scale-105 transition-transform duration-300 object-cover",
    onError: e => {
      e.target.onerror = null;
      e.target.src = "salem_logo.png";
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-0.5 -right-0.5 w-3 h-3 bg-pink-500 border-2 border-white rounded-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display font-black text-xl tracking-tight text-stone-900 group-hover:text-pink-600 transition-colors"
  }, "JEANS SLM"), /*#__PURE__*/React.createElement("span", {
    className: "text-pink-500 text-xs animate-pulse"
  }, "✨")), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold tracking-wider text-pink-600 uppercase -mt-1"
  }, "Indumentaria Salem 🐈‍⬛"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden lg:flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-bold text-stone-700"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCurrentView("home");
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    className: `h-11 px-3.5 flex items-center justify-center whitespace-nowrap rounded-xl transition-all cursor-pointer ${currentView === "home" ? "bg-pink-50 text-pink-700 font-extrabold border border-pink-200 shadow-sm" : "hover:text-pink-600 hover:bg-stone-50"}`
  }, "Inicio"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelectedCategory("all");
      setCurrentView("catalog");
      const el = document.getElementById("catalogo-section");
      if (el) el.scrollIntoView({
        behavior: "smooth"
      });
    },
    className: "h-11 px-3.5 flex items-center justify-center whitespace-nowrap rounded-xl hover:text-pink-600 hover:bg-stone-50 transition-all cursor-pointer"
  }, "Catálogo"), settings.categories.filter(c => c.id !== "all").slice(0, 5).map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    onClick: () => navigateToCategory(cat.id),
    className: `h-11 px-3.5 flex items-center justify-center whitespace-nowrap rounded-xl transition-all cursor-pointer ${selectedCategory === cat.id && currentView === "catalog" ? "bg-pink-50 text-pink-700 font-extrabold border border-pink-200 shadow-sm" : "hover:text-pink-600 hover:bg-stone-50"}`
  }, cat.label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsWholesaleModalOpen(true),
    className: "h-11 px-3.5 flex items-center justify-center gap-1.5 rounded-xl bg-pink-50/90 hover:bg-pink-100 text-pink-800 border border-pink-200/80 transition-all whitespace-nowrap cursor-pointer shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Mayorista"), /*#__PURE__*/React.createElement("span", {
    className: "bg-pink-600 text-white text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-wider"
  }, "Combos"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 sm:gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative hidden md:flex items-center w-48 lg:w-60 h-11"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Buscar jeans, corsets...",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    className: "w-full h-11 bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-8 text-xs font-medium text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 shadow-sm transition-all"
  }), /*#__PURE__*/React.createElement(Icons.Search, {
    className: "w-4 h-4 text-stone-400 absolute left-3 top-3.5"
  }), searchQuery && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchQuery(""),
    className: "absolute right-2.5 top-3.5 text-stone-400 hover:text-stone-700"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-3.5 h-3.5"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchOpen(!searchOpen),
    className: "md:hidden h-11 w-11 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 shadow-sm",
    title: "Buscar"
  }, /*#__PURE__*/React.createElement(Icons.Search, {
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsWishlistModalOpen(true),
    className: "relative h-11 w-11 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-all shadow-sm shrink-0 cursor-pointer",
    title: "Favoritos"
  }, /*#__PURE__*/React.createElement(Icons.Heart, {
    className: `w-5 h-5 ${wishlist.length > 0 ? "text-pink-500 fill-pink-500" : ""}`
  }), wishlist.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-1 -right-1 bg-pink-500 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow"
  }, wishlist.length)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsCartOpen(true),
    className: "h-11 px-4 flex items-center justify-center gap-2.5 rounded-xl bg-stone-900 hover:bg-pink-600 text-white text-xs font-bold transition-all shadow-md hover:shadow-pink-300/50 shrink-0 cursor-pointer",
    title: "Ver Carrito de Compras"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Icons.ShoppingBag, {
    className: "w-4 h-4"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-2 -right-2.5 bg-pink-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-stone-900"
  }, cartCount)), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline font-bold"
  }, cartSubtotal > 0 ? formatPrice(cartSubtotal) : "Carrito")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsAdminOpen(true),
    className: "h-11 px-3 flex items-center justify-center gap-1.5 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100 hover:text-pink-800 transition-all shadow-sm shrink-0 cursor-pointer text-xs font-bold",
    title: "Panel de Configuración de la Tienda (Prendas, Colecciones, Contacto, Pagos)"
  }, /*#__PURE__*/React.createElement(Icons.Settings, {
    className: "w-4 h-4 text-pink-600"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline"
  }, "Admin")))), searchOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden py-3 border-t border-[#E8E1D5] animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Buscar en Salem (jeans, camperas, faldas)...",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    autoFocus: true,
    className: "w-full bg-white border border-[#E8E1D5] rounded-xl pl-9 pr-9 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  }), /*#__PURE__*/React.createElement(Icons.Search, {
    className: "w-4 h-4 text-stone-400 absolute left-3 top-3"
  }), searchQuery && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchQuery(""),
    className: "absolute right-3 top-3 text-stone-400"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-4 h-4"
  })))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden py-4 border-t border-[#E8E1D5] space-y-2 animate-fade-in"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCurrentView("home");
      setMobileMenuOpen(false);
    },
    className: "block w-full text-left px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-pink-50"
  }, "Inicio"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateToCategory("all"),
    className: "block w-full text-left px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-pink-50"
  }, "Catálogo Completo"), settings.categories.filter(c => c.id !== "all").map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    onClick: () => navigateToCategory(cat.id),
    className: "block w-full text-left px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-pink-50"
  }, cat.label)), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-stone-200 space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsWholesaleModalOpen(true);
      setMobileMenuOpen(false);
    },
    className: "w-full text-center py-2.5 bg-pink-100 text-pink-800 font-bold rounded-xl text-sm"
  }, "Venta Mayorista (Combos & Curvas) 📦"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsAdminOpen(true);
      setMobileMenuOpen(false);
    },
    className: "w-full text-center py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.Settings, {
    className: "w-4 h-4 text-pink-400"
  }), /*#__PURE__*/React.createElement("span", null, "⚙️ Panel Administrador (Configurar Tienda)"))))));
}

// --- SECCIÓN HERO PRINCIPAL ---
function Hero() {
  const {
    settings,
    products,
    setQuickViewProduct,
    addToCart,
    formatPrice,
    calculateInstallments,
    setCurrentView
  } = useStore();
  const starProduct = useMemo(() => {
    return products.find(p => p.id === settings.hero.starProductId) || products[0];
  }, [products, settings.hero.starProductId]);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const scrollToCatalog = () => {
    setCurrentView("catalog");
    const elem = document.getElementById("catalogo-section");
    if (elem) elem.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-[#E8E1D5] bg-[#FAF7F2]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] pointer-events-none rounded-full",
    style: {
      background: "radial-gradient(ellipse at center, rgba(251, 207, 232, 0.45) 0%, rgba(244, 236, 224, 0.25) 45%, rgba(250, 247, 242, 0) 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-[0.035] pointer-events-none",
    style: {
      backgroundImage: "radial-gradient(circle at 1px 1px, #1C1917 1px, transparent 0)",
      backgroundSize: "28px 28px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 flex flex-col items-start text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 text-pink-900 border border-pink-300 text-xs font-bold mb-5 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-pink-500 animate-ping"
  }), /*#__PURE__*/React.createElement("span", null, settings.hero.badge)), /*#__PURE__*/React.createElement("h1", {
    className: "font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.08] mb-4"
  }, settings.hero.title, " ", /*#__PURE__*/React.createElement("span", {
    className: "salem-gradient-text block sm:inline"
  }, settings.hero.titleHighlight)), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl"
  }, settings.hero.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: scrollToCatalog,
    className: "salem-gradient-btn text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, settings.hero.ctaPrimary), /*#__PURE__*/React.createElement(Icons.ChevronRight, {
    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuickViewProduct(starProduct),
    className: "bg-white hover:bg-stone-100 text-stone-800 border border-[#E8E1D5] font-semibold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.Eye, {
    className: "w-4 h-4 text-pink-500"
  }), /*#__PURE__*/React.createElement("span", null, settings.hero.ctaSecondary))), /*#__PURE__*/React.createElement("div", {
    className: "mt-9 pt-7 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex -space-x-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "brand/logo.png",
    className: "w-7 h-7 rounded-full border-2 border-white object-cover",
    alt: "Salem"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
  }, "✨")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900 block"
  }, "+3.900 seguidoras"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-stone-500"
  }, "en @jeans_slm"))), /*#__PURE__*/React.createElement("div", {
    className: "h-6 w-px bg-stone-300 hidden sm:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex text-amber-400"
  }, [...Array(5)].map((_, i) => /*#__PURE__*/React.createElement(Icons.Star, {
    key: i,
    className: "w-3.5 h-3.5 fill-amber-400 text-amber-400"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900"
  }, "5.0"), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-500"
  }, "(+180 clientas felices)")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, starProduct && /*#__PURE__*/React.createElement("div", {
    className: "relative group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -inset-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-6 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500 text-white text-[11px] font-black uppercase tracking-wider shadow-sm"
  }, /*#__PURE__*/React.createElement(Icons.Sparkles, {
    className: "w-3 h-3"
  }), settings.hero.starBadge), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200"
  }, "Stock Inmediato")), /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-stone-100 mb-4 cursor-pointer",
    onClick: () => setQuickViewProduct(starProduct)
  }, /*#__PURE__*/React.createElement("img", {
    src: starProduct.images[selectedImgIdx] || starProduct.images[0],
    alt: starProduct.title,
    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full"
  }, settings.hero.starTag)), starProduct.images.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3.5"
  }, starProduct.images.map((img, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setSelectedImgIdx(idx),
    className: `w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${selectedImgIdx === idx ? "border-pink-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    className: "w-full h-full object-cover",
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-lg text-stone-900 group-hover:text-pink-600 transition-colors"
  }, starProduct.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 line-clamp-1 mt-0.5"
  }, starProduct.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2.5 mt-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-black text-stone-900"
  }, formatPrice(starProduct.promoPrice || starProduct.price)), starProduct.promoPrice && /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-stone-400 line-through"
  }, formatPrice(starProduct.price)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md"
  }, "15% OFF")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-medium text-stone-600 mt-1"
  }, "💳 ", calculateInstallments(starProduct.promoPrice || starProduct.price))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2.5 pt-3 border-t border-stone-100"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => addToCart(starProduct),
    className: "bg-stone-900 hover:bg-pink-600 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icons.ShoppingBag, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Agregar")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuickViewProduct(starProduct),
    className: "bg-pink-50 hover:bg-pink-100 text-pink-800 font-bold text-xs py-3 rounded-xl border border-pink-200 transition-colors flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icons.Eye, {
    className: "w-4 h-4 text-pink-600"
  }), /*#__PURE__*/React.createElement("span", null, "Ver Detalles")))))))));
}

// --- PILARES DE CONFIANZA Y BENEFICIOS ---
function BenefitsBar() {
  const {
    settings
  } = useStore();
  const getBenefitIcon = name => {
    switch (name) {
      case "Truck":
        return /*#__PURE__*/React.createElement(Icons.Truck, {
          className: "w-6 h-6 text-pink-500"
        });
      case "CreditCard":
        return /*#__PURE__*/React.createElement(Icons.CreditCard, {
          className: "w-6 h-6 text-pink-500"
        });
      case "PackageCheck":
        return /*#__PURE__*/React.createElement(Icons.PackageCheck, {
          className: "w-6 h-6 text-pink-500"
        });
      default:
        return /*#__PURE__*/React.createElement(Icons.MessageCircle, {
          className: "w-6 h-6 text-pink-500"
        });
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "py-8 bg-white border-b border-[#E8E1D5]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, settings.benefits.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F2]/60 border border-[#E8E1D5]/60 hover:border-pink-300 transition-all group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-pink-100/60 group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0"
  }, getBenefitIcon(b.icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-sm text-stone-900 group-hover:text-pink-600 transition-colors"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mt-0.5 leading-relaxed"
  }, b.subtitle)))))));
}

// --- CATEGORÍAS TABS ---
function CategoryTabs() {
  const {
    settings,
    selectedCategory,
    setSelectedCategory,
    setCurrentView
  } = useStore();
  return /*#__PURE__*/React.createElement("div", {
    className: "py-6 border-b border-[#E8E1D5] bg-[#FAF7F2] sticky top-20 z-20 backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
  }, settings.categories.map(cat => {
    const active = selectedCategory === cat.id;
    return /*#__PURE__*/React.createElement("button", {
      key: cat.id,
      onClick: () => {
        setSelectedCategory(cat.id);
        setCurrentView("catalog");
      },
      className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${active ? "bg-pink-600 text-white shadow-md shadow-pink-300/50 scale-[1.02]" : "bg-white text-stone-700 hover:bg-stone-100 border border-[#E8E1D5]"}`
    }, /*#__PURE__*/React.createElement("span", null, cat.label));
  }))));
}

// --- TARJETA DE PRODUCTO INDIVIDUAL ---
function ProductCard({
  product
}) {
  const {
    formatPrice,
    calculateInstallments,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setQuickViewProduct
  } = useStore();
  const [activeImg, setActiveImg] = useState(0);
  const isFav = isWishlisted(product.id);
  return /*#__PURE__*/React.createElement("div", {
    className: "product-card group relative bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[3/3.8] overflow-hidden bg-stone-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start"
  }, product.isBestSeller && /*#__PURE__*/React.createElement("span", {
    className: "bg-pink-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm"
  }, "Más Vendido 🔥"), product.isNew && /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-900 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider"
  }, "Nuevo Drop ✨"), product.freeShipping && /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider"
  }, "Envío Gratis 🚚")), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      toggleWishlist(product.id);
    },
    className: `absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all ${isFav ? "bg-pink-50 text-pink-500" : "bg-white/80 hover:bg-white text-stone-600 hover:text-pink-500"} shadow-sm`,
    title: "Guardar en favoritos"
  }, /*#__PURE__*/React.createElement(Icons.Heart, {
    className: "w-4 h-4",
    fill: isFav ? "currentColor" : "none"
  })), /*#__PURE__*/React.createElement("img", {
    src: product.images[activeImg] || product.images[0],
    alt: product.title,
    onClick: () => setQuickViewProduct(product),
    className: "product-card-img w-full h-full object-cover cursor-pointer",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuickViewProduct(product),
    className: "w-full bg-white/95 hover:bg-white text-stone-900 font-bold text-xs py-2.5 rounded-xl shadow-lg backdrop-blur-md flex items-center justify-center gap-1.5 border border-stone-200"
  }, /*#__PURE__*/React.createElement(Icons.Eye, {
    className: "w-3.5 h-3.5 text-pink-500"
  }), /*#__PURE__*/React.createElement("span", null, "Vista Rápida")))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-5 flex flex-col flex-1 justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-stone-400 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uppercase text-[10px] font-bold tracking-wider text-pink-600"
  }, product.category), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-amber-500 font-semibold text-[11px]"
  }, /*#__PURE__*/React.createElement(Icons.Star, {
    className: "w-3 h-3 fill-amber-400"
  }), /*#__PURE__*/React.createElement("span", null, product.rating), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-400 text-[10px]"
  }, "(", product.reviewCount, ")"))), /*#__PURE__*/React.createElement("h3", {
    onClick: () => setQuickViewProduct(product),
    className: "font-display font-bold text-sm sm:text-base text-stone-900 hover:text-pink-600 transition-colors cursor-pointer line-clamp-1"
  }, product.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 line-clamp-1 mt-0.5"
  }, product.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 mt-2.5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-stone-400 mr-0.5"
  }, "Talles:"), product.sizes.slice(0, 4).map((s, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200"
  }, s.size.split(" ")[0])), product.sizes.length > 4 && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 font-semibold"
  }, "+", product.sizes.length - 4))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t border-stone-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-black text-stone-900"
  }, formatPrice(product.promoPrice || product.price)), product.promoPrice && /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-400 line-through"
  }, formatPrice(product.price))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-medium text-pink-700 mb-3"
  }, "💳 ", calculateInstallments(product.promoPrice || product.price, 6)), /*#__PURE__*/React.createElement("button", {
    onClick: () => addToCart(product),
    className: "w-full salem-gradient-btn text-white font-bold text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
  }, /*#__PURE__*/React.createElement(Icons.ShoppingBag, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Agregar al Carrito")))));
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
  return /*#__PURE__*/React.createElement("section", {
    id: "catalogo-section",
    className: "py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-[11px] font-bold border border-pink-200 mb-2"
  }, /*#__PURE__*/React.createElement(Icons.Sparkles, {
    className: "w-3.5 h-3.5 text-pink-500"
  }), /*#__PURE__*/React.createElement("span", null, "Colección 2026")), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight"
  }, "Prendas de Tendencia & Clásicos Salem"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-stone-500 mt-1"
  }, "Diseñadas con calce fit soñado para vestirte con estilo y sentirte única todos los días.")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-stone-500"
  }, "Mostrando ", /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600 font-bold"
  }, filteredProducts.length), " prendas")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-2xl border border-[#E8E1D5] mb-8 shadow-sm flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("select", {
    value: priceFilter,
    onChange: e => setPriceFilter(e.target.value),
    className: "bg-[#FAF7F2] border border-[#E8E1D5] rounded-xl px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none focus:border-pink-500 cursor-pointer"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "Todos los Precios"), /*#__PURE__*/React.createElement("option", {
    value: "under35"
  }, "Hasta $35.000"), /*#__PURE__*/React.createElement("option", {
    value: "35to65"
  }, "$35.000 a $65.000"), /*#__PURE__*/React.createElement("option", {
    value: "above65"
  }, "Más de $65.000")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setInStockOnly(!inStockOnly),
    className: `px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${inStockOnly ? "bg-pink-600 text-white border-pink-600" : "bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]"}`
  }, "En Stock Inmediato"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFreeShippingOnly(!freeShippingOnly),
    className: `px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${freeShippingOnly ? "bg-emerald-600 text-white border-emerald-600" : "bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]"}`
  }, "Envío Gratis 🚚"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setBestSellerOnly(!bestSellerOnly),
    className: `px-3 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${bestSellerOnly ? "bg-pink-600 text-white border-pink-600" : "bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]"}`
  }, "Top Ventas 🔥"), hasActiveFilters && /*#__PURE__*/React.createElement("button", {
    onClick: clearAllFilters,
    className: "text-xs text-pink-600 hover:text-pink-800 font-bold underline ml-2 cursor-pointer"
  }, "Limpiar filtros")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 ml-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-stone-400"
  }, "Ordenar por:"), /*#__PURE__*/React.createElement("select", {
    value: sortBy,
    onChange: e => setSortBy(e.target.value),
    className: "bg-[#FAF7F2] border border-[#E8E1D5] rounded-xl px-3 py-2 text-xs font-bold text-stone-800 focus:outline-none focus:border-pink-500 cursor-pointer"
  }, /*#__PURE__*/React.createElement("option", {
    value: "featured"
  }, "Destacados Salem"), /*#__PURE__*/React.createElement("option", {
    value: "price_asc"
  }, "Menor precio"), /*#__PURE__*/React.createElement("option", {
    value: "price_desc"
  }, "Mayor precio"), /*#__PURE__*/React.createElement("option", {
    value: "rating"
  }, "Mejor valorados ⭐"), /*#__PURE__*/React.createElement("option", {
    value: "best_seller"
  }, "Más vendidos 🔥")))), filteredProducts.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  }, filteredProducts.map(product => /*#__PURE__*/React.createElement(ProductCard, {
    key: product.id,
    product: product
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl p-12 text-center border border-[#E8E1D5] max-w-md mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mx-auto mb-4"
  }, /*#__PURE__*/React.createElement(Icons.Search, {
    className: "w-8 h-8"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-lg text-stone-900 mb-1"
  }, "No encontramos prendas con esos filtros"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mb-6"
  }, "Probá buscando con otros términos o restablecé los filtros activos."), /*#__PURE__*/React.createElement("button", {
    onClick: clearAllFilters,
    className: "salem-gradient-btn text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md"
  }, "Ver Todo el Catálogo")));
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
  const handleCalcShipping = e => {
    e.preventDefault();
    if (!postalCode.trim()) return;
    const cp = parseInt(postalCode);
    let zone = "Buenos Aires & CABA";
    let days = "2 a 3 días hábiles";
    if (cp >= 5000 && cp < 6000) {
      zone = "Córdoba & Región Centro";
      days = "2 a 4 días";
    } else if (cp >= 2000 && cp < 3000) {
      zone = "Santa Fe & Rosario";
      days = "2 a 3 días";
    } else if (cp >= 8000) {
      zone = "Patagonia";
      days = "3 a 5 días";
    } else if (cp >= 4000) {
      zone = "NOA / Norte Argentino";
      days = "3 a 5 días";
    }
    setShippingCalculated({
      zone,
      days,
      cost: currentPrice >= settings.freeShippingThreshold ? 0 : 4900
    });
  };
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hola Salem! 🐈‍⬛ Quiero consultar / comprar:\n- ${quickViewProduct.title}\n- Talle: ${selectedSize}\n- Color: ${selectedColor}\n- Precio: ${formatPrice(currentPrice)}\n¿Tienen disponibilidad para envío?`);
    window.open(`${settings.whatsappUrl}?text=${text}`, "_blank");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setQuickViewProduct(null)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-4 sm:p-7 text-stone-900 animate-slide-up"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuickViewProduct(null),
    className: "absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors z-20"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-6 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[3/3.8] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: quickViewProduct.images[activeImgIdx] || quickViewProduct.images[0],
    alt: quickViewProduct.title,
    className: "w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleWishlist(quickViewProduct.id),
    className: "absolute top-3 right-3 p-2.5 rounded-full bg-white/90 shadow-md text-stone-600 hover:text-pink-500"
  }, /*#__PURE__*/React.createElement(Icons.Heart, {
    className: "w-5 h-5",
    fill: isFav ? "#ec4899" : "none"
  }))), quickViewProduct.images.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-x-auto pb-1"
  }, quickViewProduct.images.map((img, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActiveImgIdx(i),
    className: `w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${activeImgIdx === i ? "border-pink-500 scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    className: "w-full h-full object-cover",
    alt: ""
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-6 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uppercase text-[11px] font-black tracking-wider text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-md"
  }, quickViewProduct.category), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-amber-500 font-bold text-xs"
  }, /*#__PURE__*/React.createElement(Icons.Star, {
    className: "w-3.5 h-3.5 fill-amber-400"
  }), /*#__PURE__*/React.createElement("span", null, quickViewProduct.rating), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-400"
  }, "(", quickViewProduct.reviewCount, " reseñas)"))), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-extrabold text-2xl text-stone-900 leading-tight"
  }, quickViewProduct.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mt-1"
  }, quickViewProduct.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3 my-3 pt-2 border-t border-stone-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl font-black text-stone-900"
  }, formatPrice(currentPrice)), quickViewProduct.promoPrice && /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-stone-400 line-through"
  }, formatPrice(quickViewProduct.price)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md"
  }, "15% OFF Extra por Transferencia")), /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-pink-50/70 border border-pink-200/60 text-xs text-pink-900 font-medium mb-4"
  }, "💳 ", /*#__PURE__*/React.createElement("strong", null, calculateInstallments(currentPrice, 6)), " con todas las tarjetas"), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-stone-800"
  }, "Elegí tu Talle: ", /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600"
  }, selectedSize)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSizeGuideCategory(quickViewProduct.category);
      setIsSizeGuideOpen(true);
    },
    className: "text-xs text-pink-600 hover:text-pink-800 font-bold flex items-center gap-1 cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.Ruler, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Guía de Talles"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, quickViewProduct.sizes.map((s, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setSelectedSize(s.size),
    className: `px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${selectedSize === s.size ? "bg-pink-600 text-white border-pink-600 shadow-md scale-105" : "bg-white text-stone-700 border-stone-300 hover:border-pink-400"}`
  }, s.size)))), quickViewProduct.colors && quickViewProduct.colors.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-stone-800 block mb-2"
  }, "Color: ", /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600"
  }, selectedColor)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, quickViewProduct.colors.map((c, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setSelectedColor(c.name),
    className: `group flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${selectedColor === c.name ? "border-pink-600 bg-pink-50" : "border-stone-200 bg-white"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3.5 h-3.5 rounded-full border border-stone-300",
    style: {
      backgroundColor: c.hex
    }
  }), /*#__PURE__*/React.createElement("span", null, c.name))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuantity(Math.max(1, quantity - 1)),
    className: "p-1.5 rounded-lg text-stone-600 hover:bg-white"
  }, /*#__PURE__*/React.createElement(Icons.Minus, {
    className: "w-3.5 h-3.5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "px-3 text-xs font-bold text-stone-900"
  }, quantity), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuantity(quantity + 1),
    className: "p-1.5 rounded-lg text-stone-600 hover:bg-white"
  }, /*#__PURE__*/React.createElement(Icons.Plus, {
    className: "w-3.5 h-3.5"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => addToCart(quickViewProduct, selectedSize, selectedColor, quantity),
    className: "flex-1 salem-gradient-btn text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.ShoppingBag, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Agregar al Carrito"))), /*#__PURE__*/React.createElement("button", {
    onClick: handleWhatsAppDirect,
    className: "w-full mb-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.MessageCircle, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Pedir o Consultar por WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-stone-50 border border-stone-200 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-stone-800 flex items-center gap-1.5 mb-2"
  }, /*#__PURE__*/React.createElement(Icons.Truck, {
    className: "w-4 h-4 text-pink-500"
  }), /*#__PURE__*/React.createElement("span", null, "Calculá el costo y tiempo de envío a tu localidad:")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleCalcShipping,
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Tu Código Postal (ej: 1425)",
    value: postalCode,
    onChange: e => setPostalCode(e.target.value),
    className: "flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-stone-900 text-white font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-pink-600 transition-colors"
  }, "Calcular")), shippingCalculated && /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 pt-2 border-t border-stone-200 text-xs text-stone-700 space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900"
  }, "📍 Zona estimada: ", shippingCalculated.zone), /*#__PURE__*/React.createElement("p", null, "🚚 Tiempo: ", shippingCalculated.days), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-pink-600"
  }, "Costo: ", shippingCalculated.cost === 0 ? "¡ENVÍO GRATIS!" : formatPrice(shippingCalculated.cost)))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-stone-200 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-stone-200 gap-4 text-xs font-bold text-stone-500 mb-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab("desc"),
    className: `pb-2 transition-colors ${activeTab === "desc" ? "text-pink-600 border-b-2 border-pink-600" : "hover:text-stone-900"}`
  }, "Descripción"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab("care"),
    className: `pb-2 transition-colors ${activeTab === "care" ? "text-pink-600 border-b-2 border-pink-600" : "hover:text-stone-900"}`
  }, "Cuidados"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab("reviews"),
    className: `pb-2 transition-colors ${activeTab === "reviews" ? "text-pink-600 border-b-2 border-pink-600" : "hover:text-stone-900"}`
  }, "Reseñas (", quickViewProduct.reviews.length, ")")), activeTab === "desc" && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600 leading-relaxed space-y-2"
  }, /*#__PURE__*/React.createElement("p", null, quickViewProduct.description), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside space-y-1 font-medium text-stone-700"
  }, quickViewProduct.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, f)))), activeTab === "care" && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-600 leading-relaxed"
  }, quickViewProduct.fabricCare), activeTab === "reviews" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, quickViewProduct.reviews.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900"
  }, r.author), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400"
  }, r.date)), /*#__PURE__*/React.createElement("div", {
    className: "flex text-amber-400 mb-1"
  }, [...Array(r.rating)].map((_, i) => /*#__PURE__*/React.createElement(Icons.Star, {
    key: i,
    className: "w-3 h-3 fill-amber-400"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-600"
  }, r.comment))))))))));
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
  const handleApplyCoupon = e => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 overflow-hidden animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity",
    onClick: () => setIsCartOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-y-0 right-0 max-w-full flex pl-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-screen max-w-md bg-white border-l border-[#E8E1D5] shadow-2xl flex flex-col justify-between animate-slide-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 border-b border-[#E8E1D5] flex items-center justify-between bg-[#FAF7F2]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.ShoppingBag, {
    className: "w-5 h-5 text-pink-600"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-lg text-stone-900"
  }, "Tu Carrito Salem"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-pink-100 text-pink-800 font-bold px-2 py-0.5 rounded-full"
  }, cart.length)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsCartOpen(false),
    className: "p-2 rounded-xl text-stone-400 hover:text-stone-800 hover:bg-stone-200/50"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-pink-50 border-b border-pink-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs font-bold mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-stone-800"
  }, amountToFreeShipping > 0 ? `¡Te faltan ${formatPrice(amountToFreeShipping)} para ENVÍO GRATIS!` : "¡Felicitaciones! Tenés ENVÍO GRATIS 🎉"), /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600 font-extrabold"
  }, freeShippingProgress, "%")), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-pink-200 h-2 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full transition-all duration-500",
    style: {
      width: `${freeShippingProgress}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-stone-100"
  }, cart.length > 0 ? cart.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "pt-3.5 first:pt-0 flex gap-3.5 items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title,
    className: "w-16 h-20 rounded-xl object-cover border border-stone-200 bg-stone-100 shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-xs text-stone-900 truncate"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-stone-500 mt-0.5"
  }, "Talle: ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-stone-800"
  }, item.size), " • Color: ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-stone-800"
  }, item.color)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => updateQuantity(index, -1),
    className: "p-1 rounded text-stone-600 hover:bg-white"
  }, /*#__PURE__*/React.createElement(Icons.Minus, {
    className: "w-3 h-3"
  })), /*#__PURE__*/React.createElement("span", {
    className: "px-2 text-xs font-bold text-stone-800"
  }, item.quantity), /*#__PURE__*/React.createElement("button", {
    onClick: () => updateQuantity(index, 1),
    className: "p-1 rounded text-stone-600 hover:bg-white"
  }, /*#__PURE__*/React.createElement(Icons.Plus, {
    className: "w-3 h-3"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-stone-900"
  }, formatPrice(item.price * item.quantity)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeFromCart(index),
    className: "p-2 text-stone-400 hover:text-rose-600",
    title: "Eliminar"
  }, /*#__PURE__*/React.createElement(Icons.Trash2, {
    className: "w-4 h-4"
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "py-16 text-center text-stone-400"
  }, /*#__PURE__*/React.createElement(Icons.ShoppingBag, {
    className: "w-12 h-12 mx-auto mb-3 opacity-30"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-stone-700"
  }, "Tu carrito está vacío"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mt-1"
  }, "¡Explorá nuestro catálogo y sumá tus prendas favoritas!"))), cart.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-t border-[#E8E1D5] bg-[#FAF7F2] space-y-3.5"
  }, appliedCoupon ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between p-2.5 rounded-xl bg-pink-100 text-pink-900 text-xs font-bold border border-pink-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icons.Sparkles, {
    className: "w-3.5 h-3.5 text-pink-600"
  }), /*#__PURE__*/React.createElement("span", null, "Cupón ", appliedCoupon.code, " (-", appliedCoupon.discount, "%)")), /*#__PURE__*/React.createElement("button", {
    onClick: removeCoupon,
    className: "text-pink-700 hover:text-pink-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-3.5 h-3.5"
  }))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleApplyCoupon,
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Código de cupón (ej: SALEM15)",
    value: couponCode,
    onChange: e => setCouponCode(e.target.value),
    className: "flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs uppercase font-semibold text-stone-900 focus:outline-none focus:border-pink-500"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-stone-900 text-white font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-pink-600 transition-colors"
  }, "Aplicar")), couponError && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-600 font-semibold"
  }, couponError), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-700 block"
  }, "Método de Entrega:"), /*#__PURE__*/React.createElement("select", {
    value: shippingMethod.id,
    onChange: e => {
      const found = settings.shippingMethods.find(m => m.id === e.target.value);
      if (found) setShippingMethod(found);
    },
    className: "w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-800 focus:outline-none"
  }, settings.shippingMethods.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.id,
    value: m.id
  }, m.name, " (", cartSubtotal >= freeShippingThreshold && m.id !== "andreani_exp" ? "GRATIS" : formatPrice(m.cost), ")")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900"
  }, formatPrice(cartSubtotal))), discountAmount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-pink-600 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Descuento cupón:"), /*#__PURE__*/React.createElement("span", null, "-", formatPrice(discountAmount))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Envío:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900"
  }, finalShippingCost === 0 ? "GRATIS" : formatPrice(finalShippingCost))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-base font-black text-stone-900 pt-2 border-t border-stone-300"
  }, /*#__PURE__*/React.createElement("span", null, "Total Final:"), /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600"
  }, formatPrice(total))), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-emerald-700 font-semibold text-right"
  }, "Pagando por Transferencia abonás ", formatPrice(Math.round(total * 0.85)), " (15% OFF)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsCartOpen(false);
      setIsCheckoutOpen(true);
    },
    className: "w-full salem-gradient-btn text-white font-black text-sm py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "Iniciar Checkout Seguro"), /*#__PURE__*/React.createElement(Icons.ChevronRight, {
    className: "w-4 h-4"
  }))))));
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
      addToast({
        title: "Completá los campos requeridos",
        description: "Nombre, teléfono y dirección son obligatorios.",
        type: "error"
      });
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
      window.confetti({
        particleCount: 100,
        spread: 80,
        origin: {
          y: 0.5
        }
      });
    }
  };
  const handleSendWhatsAppOrder = () => {
    if (!confirmedOrder) return;
    const itemsList = confirmedOrder.items.map(item => `- ${item.title} (Talle: ${item.size}, Color: ${item.color}) x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`).join("\n");
    const message = encodeURIComponent(`Hola Indumentaria Salem! 🐈‍⬛✨ Acabo de realizar el Pedido #${confirmedOrder.orderNumber} en la tienda online.\n\n` + `👤 *Cliente:* ${confirmedOrder.customer.fullName}\n` + `📱 *WhatsApp:* ${confirmedOrder.customer.phone}\n` + `📍 *Entrega:* ${confirmedOrder.customer.address}, ${confirmedOrder.customer.city} (CP: ${confirmedOrder.customer.postalCode})\n` + `🚚 *Método de Envío:* ${confirmedOrder.shipping.name}\n` + `💳 *Forma de Pago:* ${confirmedOrder.paymentMethod === "transfer" ? "Transferencia Bancaria (15% OFF)" : "Tarjeta en Cuotas"}\n\n` + `🛍️ *Prendas Seleccionadas:*\n${itemsList}\n\n` + `💰 *TOTAL A ABONAR:* ${formatPrice(confirmedOrder.total)}\n\n` + `¡Quedo a la espera de la confirmación para realizar el pago y coordinar el envío! Muchas gracias 💕`);
    window.open(`${settings.whatsappUrl}?text=${message}`, "_blank");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => step !== 4 && setIsCheckoutOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-8 text-stone-900 animate-slide-up max-h-[90vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-stone-200 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm"
  }, step), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-extrabold text-xl text-stone-900"
  }, step === 1 && "Paso 1: Datos de Entrega", step === 2 && "Paso 2: Forma de Envío", step === 3 && "Paso 3: Método de Pago", step === 4 && "¡Pedido Generado con Éxito! 🎉")), step !== 4 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsCheckoutOpen(false),
    className: "p-2 text-stone-400 hover:text-stone-800"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "Nombre y Apellido *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Sofia Martinez",
    value: formData.fullName,
    onChange: e => setFormData({
      ...formData,
      fullName: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "WhatsApp / Celular *"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "Ej: +54 9 11 1234-5678",
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "sofia@ejemplo.com",
    value: formData.email,
    onChange: e => setFormData({
      ...formData,
      email: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "DNI / CUIL (para el envío)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: 42123456",
    value: formData.dni,
    onChange: e => setFormData({
      ...formData,
      dni: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "Dirección Completa (Calle, Altura, Piso/Dpto) *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Av. Santa Fe 3400, Piso 4B",
    value: formData.address,
    onChange: e => setFormData({
      ...formData,
      address: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "Ciudad / Localidad"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Palermo, CABA",
    value: formData.city,
    onChange: e => setFormData({
      ...formData,
      city: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "Código Postal"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: 1425",
    value: formData.postalCode,
    onChange: e => setFormData({
      ...formData,
      postalCode: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-700 block mb-1"
  }, "Notas especiales o aclaraciones"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Tocar timbre 4B o dejar en portería",
    value: formData.notes,
    onChange: e => setFormData({
      ...formData,
      notes: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-pink-500"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
        addToast({
          title: "Por favor completá los datos",
          description: "Nombre, teléfono y dirección son obligatorios.",
          type: "error"
        });
        return;
      }
      setStep(2);
    },
    className: "w-full salem-gradient-btn text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg mt-4"
  }, "Continuar a Envíos →")), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, settings.shippingMethods.map(m => {
    const cost = cartSubtotal >= freeShippingThreshold || m.id === "pickup_store" ? 0 : m.cost;
    const isSelected = shippingMethod.id === m.id;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      onClick: () => setShippingMethod(m),
      className: `p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${isSelected ? "border-pink-500 bg-pink-50/60 shadow-md" : "border-stone-200 bg-[#FAF7F2]"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-pink-500 bg-pink-500" : "border-stone-300"}`
    }, isSelected && /*#__PURE__*/React.createElement("div", {
      className: "w-2 h-2 rounded-full bg-white"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-display font-bold text-sm text-stone-900"
    }, m.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-stone-500"
    }, m.estimatedDays, " • ", m.carrier))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-black text-sm text-stone-900"
    }, cost === 0 ? "GRATIS" : formatPrice(cost)), m.badge && /*#__PURE__*/React.createElement("span", {
      className: "block text-[10px] font-bold text-pink-600 uppercase"
    }, m.badge)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 pt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(1),
    className: "flex-1 bg-stone-100 text-stone-700 font-bold text-sm py-3.5 rounded-2xl hover:bg-stone-200"
  }, "← Volver"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(3),
    className: "flex-1 salem-gradient-btn text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg"
  }, "Continuar a Pago →"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPaymentMethod("transfer"),
    className: `p-4 rounded-2xl border cursor-pointer transition-all ${paymentMethod === "transfer" ? "border-pink-500 bg-pink-50/60 shadow-md" : "border-stone-200 bg-[#FAF7F2]"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "transfer" ? "border-pink-500 bg-pink-500" : "border-stone-300"}`
  }, paymentMethod === "transfer" && /*#__PURE__*/React.createElement("div", {
    className: "w-2 h-2 rounded-full bg-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-sm text-stone-900"
  }, "Transferencia Bancaria"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500"
  }, "CBU / CVU / Alias de Mercado Pago"))), /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full"
  }, "15% OFF EXTRA")), paymentMethod === "transfer" && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 p-3 rounded-xl bg-white border border-pink-200 text-xs text-stone-700 space-y-1"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Alias:"), " ", settings.bankDetails.alias), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "CBU:"), " ", settings.bankDetails.cbu), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Titular:"), " ", settings.bankDetails.holder))), /*#__PURE__*/React.createElement("div", {
    onClick: () => setPaymentMethod("credit_card"),
    className: `p-4 rounded-2xl border cursor-pointer transition-all ${paymentMethod === "credit_card" ? "border-pink-500 bg-pink-50/60 shadow-md" : "border-stone-200 bg-[#FAF7F2]"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "credit_card" ? "border-pink-500 bg-pink-500" : "border-stone-300"}`
  }, paymentMethod === "credit_card" && /*#__PURE__*/React.createElement("div", {
    className: "w-2 h-2 rounded-full bg-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-sm text-stone-900"
  }, "Tarjeta de Crédito / Débito"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500"
  }, "Hasta 6 cuotas sin interés con Mercado Pago"))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-pink-600"
  }, "6 Cuotas Sin Interés")))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, formatPrice(cartSubtotal))), discountAmount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-pink-600"
  }, /*#__PURE__*/React.createElement("span", null, "Descuento cupón:"), /*#__PURE__*/React.createElement("span", null, "-", formatPrice(discountAmount))), transferDiscount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-emerald-700 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "15% OFF Transferencia:"), /*#__PURE__*/React.createElement("span", null, "-", formatPrice(transferDiscount))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Envío (", shippingMethod.name, "):"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, shippingCost === 0 ? "GRATIS" : formatPrice(shippingCost))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-base font-black text-stone-900 pt-2 border-t border-stone-300"
  }, /*#__PURE__*/React.createElement("span", null, "TOTAL A PAGAR:"), /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600"
  }, formatPrice(total)))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(2),
    className: "flex-1 bg-stone-100 text-stone-700 font-bold text-sm py-3.5 rounded-2xl hover:bg-stone-200"
  }, "← Volver"), /*#__PURE__*/React.createElement("button", {
    onClick: handleConfirmOrder,
    className: "flex-1 salem-gradient-btn text-white font-black text-sm py-3.5 rounded-2xl shadow-lg"
  }, "Confirmar Pedido 🛍️"))), step === 4 && confirmedOrder && /*#__PURE__*/React.createElement("div", {
    className: "text-center space-y-5 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mx-auto shadow-md"
  }, /*#__PURE__*/React.createElement(Icons.Sparkles, {
    className: "w-8 h-8 text-pink-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-pink-600 uppercase tracking-wider"
  }, "¡Gracias por tu compra!"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-2xl text-stone-900 mt-1"
  }, "Orden #", confirmedOrder.orderNumber), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mt-1"
  }, "Tu pedido fue registrado en el sistema. Hacé clic abajo para enviarlo directamente a nuestro WhatsApp oficial y coordinar el pago y despacho.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-left text-xs space-y-2"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Cliente:"), " ", confirmedOrder.customer.fullName, " (", confirmedOrder.customer.phone, ")"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Dirección:"), " ", confirmedOrder.customer.address, ", ", confirmedOrder.customer.city), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Total:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-pink-600 text-sm"
  }, formatPrice(confirmedOrder.total)))), /*#__PURE__*/React.createElement("button", {
    onClick: handleSendWhatsAppOrder,
    className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.MessageCircle, {
    className: "w-5 h-5"
  }), /*#__PURE__*/React.createElement("span", null, "Enviar Pedido a WhatsApp de Salem 🐈‍⬛")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsCheckoutOpen(false);
      setStep(1);
    },
    className: "text-xs text-stone-500 hover:text-stone-900 font-semibold underline block mx-auto"
  }, "Volver a la tienda"))));
}

// --- MODAL DE FAVORITOS (WISHLIST) ---
function WishlistModal() {
  const {
    isWishlistModalOpen,
    setIsWishlistModalOpen,
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    formatPrice,
    setQuickViewProduct
  } = useStore();
  if (!isWishlistModalOpen) return null;
  const favProducts = products.filter(p => wishlist.includes(p.id));
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setIsWishlistModalOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-7 text-stone-900 animate-slide-up max-h-[85vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-stone-200 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.Heart, {
    className: "w-5 h-5 text-pink-500 fill-pink-500"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-xl text-stone-900"
  }, "Tus Favoritos (", wishlist.length, ")")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsWishlistModalOpen(false),
    className: "p-2 text-stone-400 hover:text-stone-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), favProducts.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 divide-y divide-stone-100"
  }, favProducts.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "pt-3.5 first:pt-0 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.images[0],
    alt: p.title,
    className: "w-16 h-20 rounded-xl object-cover bg-stone-100 shrink-0 cursor-pointer",
    onClick: () => {
      setIsWishlistModalOpen(false);
      setQuickViewProduct(p);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-sm text-stone-900 truncate hover:text-pink-600 cursor-pointer",
    onClick: () => {
      setIsWishlistModalOpen(false);
      setQuickViewProduct(p);
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500"
  }, p.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-pink-600 mt-1"
  }, formatPrice(p.promoPrice || p.price))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      addToCart(p);
    },
    className: "salem-gradient-btn text-white text-xs font-bold px-3 py-2 rounded-xl"
  }, "Agregar"), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleWishlist(p.id),
    className: "p-2 text-stone-400 hover:text-rose-600",
    title: "Quitar"
  }, /*#__PURE__*/React.createElement(Icons.Trash2, {
    className: "w-4 h-4"
  })))))) : /*#__PURE__*/React.createElement("div", {
    className: "py-12 text-center text-stone-400"
  }, /*#__PURE__*/React.createElement(Icons.Heart, {
    className: "w-12 h-12 mx-auto mb-2 opacity-30"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-stone-700"
  }, "Aún no guardaste prendas en favoritos"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 mt-1"
  }, "Hacé clic en el corazón de cualquier prenda para guardarla acá."))));
}

// --- MODAL DE GUÍA DE TALLES ---
function SizeGuideModal() {
  const {
    isSizeGuideOpen,
    setIsSizeGuideOpen,
    sizeGuideCategory,
    setSizeGuideCategory,
    settings
  } = useStore();
  if (!isSizeGuideOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setIsSizeGuideOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-5 sm:p-7 text-stone-900 animate-slide-up max-h-[85vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-stone-200 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.Ruler, {
    className: "w-5 h-5 text-pink-600"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-xl text-stone-900"
  }, "Guía de Talles Oficial Salem")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSizeGuideOpen(false),
    className: "p-2 text-stone-400 hover:text-stone-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-stone-200 gap-3 text-xs font-bold text-stone-500 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSizeGuideCategory("jeans"),
    className: `pb-2 ${sizeGuideCategory === "jeans" ? "text-pink-600 border-b-2 border-pink-600" : ""}`
  }, "Jeans & Pantalones"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSizeGuideCategory("corsets"),
    className: `pb-2 ${sizeGuideCategory === "corsets" ? "text-pink-600 border-b-2 border-pink-600" : ""}`
  }, "Corsets & Tops"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSizeGuideCategory("camperas"),
    className: `pb-2 ${sizeGuideCategory === "camperas" ? "text-pink-600 border-b-2 border-pink-600" : ""}`
  }, "Camperas & Abrigos")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto text-xs"
  }, sizeGuideCategory === "jeans" && /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-pink-50 text-pink-900 border-b border-pink-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Talle"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Cintura"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Cadera"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Tiro"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Largo"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-stone-100"
  }, settings.sizeGuides.jeans.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: "hover:bg-stone-50"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 font-bold text-stone-900"
  }, r.talle), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.cintura), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.cadera), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.tiro), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.largo))))), sizeGuideCategory === "corsets" && /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-pink-50 text-pink-900 border-b border-pink-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Talle"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Busto"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Cintura"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Largo"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-stone-100"
  }, settings.sizeGuides.corsets.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: "hover:bg-stone-50"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 font-bold text-stone-900"
  }, r.talle), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.busto), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.cintura), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.largo))))), sizeGuideCategory === "camperas" && /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-pink-50 text-pink-900 border-b border-pink-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Talle"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Busto"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Hombros"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 font-bold"
  }, "Largo"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-stone-100"
  }, settings.sizeGuides.camperas.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: "hover:bg-stone-50"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 font-bold text-stone-900"
  }, r.talle), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.busto), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.hombros), /*#__PURE__*/React.createElement("td", {
    className: "p-2.5 text-stone-600"
  }, r.largo)))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 p-3 rounded-xl bg-stone-50 text-[11px] text-stone-500"
  }, "💡 ", /*#__PURE__*/React.createElement("strong", null, "Tip Salem:"), " Si estás entre dos talles de jean rígido, te sugerimos elegir el talle mayor para que el calce te quede súper cómodo y relajado.")));
}

// --- MODAL DE VENTA MAYORISTA ---
function WholesaleModal() {
  const {
    isWholesaleModalOpen,
    setIsWholesaleModalOpen,
    settings
  } = useStore();
  if (!isWholesaleModalOpen) return null;
  const handleContactWholesale = () => {
    const text = encodeURIComponent("Hola Salem! 🐈‍⬛ Quiero recibir el catálogo mayorista y lista de precios por volumen. ¿Me podrían brindar más información?");
    window.open(`${settings.whatsappUrl}?text=${text}`, "_blank");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setIsWholesaleModalOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-lg bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-stone-200 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "📦"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-xl text-stone-900"
  }, settings.wholesale.title)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsWholesaleModalOpen(false),
    className: "p-2 text-stone-400 hover:text-stone-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-600 mb-5 leading-relaxed"
  }, settings.wholesale.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 mb-6"
  }, settings.wholesale.benefits.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-2.5 text-xs text-stone-700"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
  }, "✓"), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement("button", {
    onClick: handleContactWholesale,
    className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.MessageCircle, {
    className: "w-5 h-5"
  }), /*#__PURE__*/React.createElement("span", null, "Contactar a un Asesor Mayorista por WhatsApp"))));
}

// --- MODAL LEGAL & BOTÓN DE ARREPENTIMIENTO ---
function LegalModal() {
  const {
    isLegalModalOpen,
    setIsLegalModalOpen,
    legalTab,
    setLegalTab,
    addToast
  } = useStore();
  const [arrepentimientoForm, setArrepentimientoForm] = useState({
    name: "",
    phone: "",
    orderNumber: ""
  });
  const [ticketArrepentimiento, setTicketArrepentimiento] = useState(null);
  if (!isLegalModalOpen) return null;
  const handleSubmitArrepentimiento = e => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setIsLegalModalOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up max-h-[85vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-stone-200 mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-xl text-stone-900"
  }, "Marco Legal & Consumidor"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsLegalModalOpen(false),
    className: "p-2 text-stone-400 hover:text-stone-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-stone-200 gap-4 text-xs font-bold text-stone-500 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLegalTab("terms"),
    className: `pb-2 ${legalTab === "terms" ? "text-pink-600 border-b-2 border-pink-600" : ""}`
  }, "Términos y Condiciones"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLegalTab("shipping"),
    className: `pb-2 ${legalTab === "shipping" ? "text-pink-600 border-b-2 border-pink-600" : ""}`
  }, "Envíos y Cambios"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLegalTab("regret"),
    className: `pb-2 ${legalTab === "regret" ? "text-rose-600 border-b-2 border-rose-600" : ""}`
  }, "Botón de Arrepentimiento")), legalTab === "terms" && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600 leading-relaxed space-y-2"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "1. Identidad:"), " Indumentaria Salem / Jeans SLM opera como marca registrada de indumentaria urbana en la República Argentina."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "2. Precios y Stock:"), " Todos los precios expresados en pesos argentinos incluyen impuestos. Las promociones tienen vigencia limitada hasta agotar stock."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "3. Protección de Datos:"), " Los datos personales provistos por los usuarios se utilizan exclusivamente para procesar pedidos y emitir guías de transporte.")), legalTab === "shipping" && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600 leading-relaxed space-y-2"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Plazo de Cambio:"), " Contás con hasta 30 días corridos desde recibido el paquete para solicitar cambio de talle o modelo."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Condiciones:"), " Las prendas deben encontrarse sin uso, con etiquetas colocadas y en su envoltorio original."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Logística:"), " Los envíos se despachan mediante Correo Argentino y Andreani con número de seguimiento para tracking online.")), legalTab === "regret" && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600 leading-relaxed space-y-3"
  }, /*#__PURE__*/React.createElement("p", null, "Conforme a la Resolución 424/2020 de la Secretaría de Comercio Interior de la Nación, podés solicitar la revocación de tu compra dentro de los 10 días corridos contados a partir de la entrega del producto."), ticketArrepentimiento ? /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold"
  }, "Comprobante de Solicitud Generado: #", ticketArrepentimiento), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mt-1"
  }, "Nos contactaremos a tu número de WhatsApp para coordinar la devolución y reintegro del importe.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmitArrepentimiento,
    className: "space-y-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Nombre Completo"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: arrepentimientoForm.name,
    onChange: e => setArrepentimientoForm({
      ...arrepentimientoForm,
      name: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2 text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Teléfono / WhatsApp"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: arrepentimientoForm.phone,
    onChange: e => setArrepentimientoForm({
      ...arrepentimientoForm,
      phone: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2 text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Número de Pedido"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "Ej: SLM-94821",
    value: arrepentimientoForm.orderNumber,
    onChange: e => setArrepentimientoForm({
      ...arrepentimientoForm,
      orderNumber: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2 text-xs"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors"
  }, "Confirmar Revocación de Compra")))));
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
    addToast
  } = useStore();
  const [tab, setTab] = useState("products");
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

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
  const handleOpenEditProduct = p => {
    setIsNewProduct(false);
    setProductForm({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle || "",
      description: p.description || "",
      category: p.category || "jeans",
      price: p.price,
      promoPrice: p.promoPrice || "",
      sizesStr: p.sizes ? p.sizes.map(s => s.size).join(", ") : "S, M, L",
      colorsStr: p.colors ? p.colors.map(c => c.name).join(", ") : "Original",
      image: p.images && p.images[0] ? p.images[0] : "",
      stock: p.stock || 10,
      isBestSeller: !!p.isBestSeller,
      isNew: !!p.isNew,
      freeShipping: !!p.freeShipping
    });
    setProductModalOpen(true);
  };

  // Guardar prenda (nueva o editada)
  const handleSaveProduct = e => {
    e.preventDefault();
    if (!productForm.title.trim()) {
      addToast({
        title: "Falta el título",
        description: "Por favor escribí el nombre de la prenda.",
        type: "error"
      });
      return;
    }
    const sizesArr = productForm.sizesStr.split(",").map(s => s.trim()).filter(Boolean).map(s => ({
      size: s,
      stock: Math.max(1, Math.round(productForm.stock / 3))
    }));
    const colorsArr = productForm.colorsStr.split(",").map(c => c.trim()).filter(Boolean).map(c => ({
      name: c,
      hex: c.toLowerCase().includes("rosa") ? "#EC4899" : c.toLowerCase().includes("negro") ? "#18181B" : c.toLowerCase().includes("celeste") ? "#87CEEB" : "#A88B69"
    }));
    const finalProduct = {
      id: productForm.id || "slm-" + Date.now(),
      title: productForm.title,
      subtitle: productForm.subtitle || "Prenda de tendencia Salem",
      description: productForm.description || "Confeccionada con materiales de primera calidad y calce perfecto.",
      features: ["Calce fit que estiliza la figura", "Diseño exclusivo Salem", "Costuras reforzadas de alta durabilidad"],
      fabricCare: "Lavar con agua fría del revés. No usar blanqueador.",
      category: productForm.category,
      price: parseInt(productForm.price) || 0,
      promoPrice: productForm.promoPrice ? parseInt(productForm.promoPrice) : undefined,
      sizes: sizesArr.length > 0 ? sizesArr : [{
        size: "Único",
        stock: 10
      }],
      colors: colorsArr.length > 0 ? colorsArr : [{
        name: "Original",
        hex: "#EC4899"
      }],
      images: [productForm.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80"],
      rating: 5.0,
      reviewCount: Math.floor(20 + Math.random() * 50),
      stock: parseInt(productForm.stock) || 10,
      isBestSeller: productForm.isBestSeller,
      isNew: productForm.isNew,
      freeShipping: productForm.freeShipping,
      installmentsMax: 6,
      tags: [productForm.category, "Salem 2026"],
      reviews: [{
        id: "rev-new",
        author: "Clienta Verificada",
        rating: 5,
        date: "Reciente",
        comment: "Excelente calidad y calce!",
        verified: true
      }]
    };
    if (isNewProduct) {
      setProducts(prev => [finalProduct, ...prev]);
      addToast({
        title: "¡Prenda agregada con éxito! ✨",
        description: finalProduct.title,
        type: "success"
      });
    } else {
      setProducts(prev => prev.map(p => p.id === finalProduct.id ? {
        ...p,
        ...finalProduct
      } : p));
      addToast({
        title: "Prenda actualizada ✏️",
        description: finalProduct.title,
        type: "success"
      });
    }
    setProductModalOpen(false);
  };

  // Eliminar prenda
  const handleDeleteProduct = (id, title) => {
    if (confirm(`¿Estás segura de eliminar "${title}" del catálogo?`)) {
      setProducts(prev => prev.filter(p => p.id !== id));
      addToast({
        title: "Prenda eliminada 🗑️",
        description: title,
        type: "info"
      });
    }
  };

  // DESCARGAR ARCHIVO products.js
  const handleExportProductsFile = () => {
    const code = "// Catálogo de Productos Oficiales - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨\nwindow.SALEM_PRODUCTS = " + JSON.stringify(products, null, 2) + ";\n";
    const blob = new Blob([code], {
      type: "application/javascript;charset=utf-8"
    });
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
    const code = "// Catálogo de Productos Oficiales - Indumentaria Salem 🐈‍⬛ / Jeans SLM ✨\nwindow.SALEM_PRODUCTS = " + JSON.stringify(products, null, 2) + ";\n";
    navigator.clipboard.writeText(code);
    addToast({
      title: "¡Código copiado! 📋",
      description: "Pegalo dentro del archivo 'data/products.js' y guardalo con Ctrl+S.",
      type: "success"
    });
  };

  // AGREGAR NUEVA COLECCIÓN
  const handleAddCategory = e => {
    e.preventDefault();
    if (!newCategoryName.trim()) {
      addToast({
        title: "Falta el nombre",
        description: "Escribí el nombre de la colección.",
        type: "error"
      });
      return;
    }
    const cleanId = newCategoryName.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    if (settings.categories.some(c => c.id === cleanId)) {
      addToast({
        title: "Ya existe",
        description: "Ya existe una colección con ese nombre o ID.",
        type: "error"
      });
      return;
    }
    const updated = [...settings.categories, {
      id: cleanId,
      label: newCategoryName.trim(),
      icon: "Sparkles"
    }];
    setSettings({
      ...settings,
      categories: updated
    });
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
      const updated = settings.categories.filter(c => c.id !== catId);
      setSettings({
        ...settings,
        categories: updated
      });
      addToast({
        title: "Colección eliminada",
        description: `Se quitó "${catLabel}".`,
        type: "info"
      });
    }
  };

  // DESCARGAR CONFIG.JS
  const handleExportConfigFile = () => {
    const code = "// Configuración General - Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛\nwindow.SALEM_CONFIG = " + JSON.stringify(settings, null, 2) + ";\n";
    const blob = new Blob([code], {
      type: "application/javascript;charset=utf-8"
    });
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
    const code = "// Configuración General - Jeans SLM ✨ | Indumentaria Salem 🐈‍⬛\nwindow.SALEM_CONFIG = " + JSON.stringify(settings, null, 2) + ";\n";
    navigator.clipboard.writeText(code);
    addToast({
      title: "¡Configuración copiada! 📋",
      description: "Copiada al portapapeles con éxito.",
      type: "success"
    });
  };
  const handleResetDefaults = () => {
    if (confirm("¿Estás seguro de restablecer todos los productos y configuraciones a los valores iniciales?")) {
      localStorage.removeItem("salem_products");
      localStorage.removeItem("salem_store_settings");
      setProducts(window.SALEM_PRODUCTS);
      setSettings(window.SALEM_CONFIG);
      addToast({
        title: "Valores restablecidos",
        description: "La tienda volvió a su estado inicial.",
        type: "info"
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setIsAdminOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-4xl bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 sm:p-8 text-stone-900 animate-slide-up max-h-[92vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-stone-200 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icons.Settings, {
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-xl text-stone-900"
  }, "Panel de Control de tu Tienda"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500"
  }, "Administrá tus prendas, precios, pedidos y enlaces sin depender de programadores."))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsAdminOpen(false),
    className: "p-2 text-stone-400 hover:text-stone-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-stone-200 gap-2 sm:gap-4 text-xs font-bold text-stone-500 mb-5 overflow-x-auto pb-1 scrollbar-none"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("products"),
    className: `pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "products" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`
  }, "👗 Prendas (", products.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("categories"),
    className: `pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "categories" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`
  }, "🏷️ Colecciones (", settings.categories.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("contact"),
    className: `pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "contact" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`
  }, "📞 Contacto & Redes"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("payments"),
    className: `pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "payments" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`
  }, "💳 Pagos & Banco"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("orders"),
    className: `pb-2.5 whitespace-nowrap transition-colors cursor-pointer ${tab === "orders" ? "text-pink-600 border-b-2 border-pink-600 font-extrabold" : "hover:text-stone-900"}`
  }, "📦 Pedidos (", orders.length, ")")), tab === "products" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-pink-50/70 border border-pink-200/60 rounded-2xl"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-pink-900 block"
  }, "Total de Prendas Activas: ", products.length), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-pink-700"
  }, "Podés agregar nuevas prendas o editar precios en 1 clic.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleOpenNewProduct,
    className: "salem-gradient-btn text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.Plus, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "➕ Agregar Nueva Prenda")), /*#__PURE__*/React.createElement("button", {
    onClick: handleExportProductsFile,
    className: "bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer",
    title: "Descarga el archivo data/products.js actualizado para tu sitio web"
  }, /*#__PURE__*/React.createElement("span", null, "📥 Descargar products.js")), /*#__PURE__*/React.createElement("button", {
    onClick: handleCopyProductsCode,
    className: "bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold px-3 py-2.5 rounded-xl flex items-center gap-1 cursor-pointer",
    title: "Copiar código al portapapeles"
  }, /*#__PURE__*/React.createElement(Icons.Copy, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Copiar")))), /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-stone-100 max-h-[50vh] overflow-y-auto pr-1"
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "py-3 flex items-center justify-between gap-3 text-xs hover:bg-stone-50/80 px-2 rounded-xl transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.images[0],
    className: "w-12 h-14 rounded-xl object-cover bg-stone-100 shrink-0 border border-stone-200",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900 block truncate text-sm"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-stone-500 text-[11px] mt-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uppercase text-pink-600 font-bold"
  }, p.category), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("span", null, "Stock: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-stone-800"
  }, p.stock), " un."), p.isBestSeller && /*#__PURE__*/React.createElement("span", {
    className: "text-amber-600 font-bold"
  }, "🔥 Top"), p.isNew && /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600 font-bold"
  }, "✨ Nuevo")))), /*#__PURE__*/React.createElement("div", {
    className: "text-right shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-900 text-sm block"
  }, formatPrice(p.promoPrice || p.price)), p.promoPrice && /*#__PURE__*/React.createElement("span", {
    className: "line-through text-stone-400 text-[10px]"
  }, formatPrice(p.price))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenEditProduct(p),
    className: "bg-stone-100 hover:bg-pink-100 hover:text-pink-700 text-stone-700 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors"
  }, "✏️ Editar"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDeleteProduct(p.id, p.title),
    className: "p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors",
    title: "Eliminar prenda"
  }, /*#__PURE__*/React.createElement(Icons.Trash2, {
    className: "w-4 h-4"
  }))))))), tab === "orders" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, orders.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5 max-h-[50vh] overflow-y-auto pr-1"
  }, orders.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.orderNumber,
    className: "p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-bold text-stone-900 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Orden #", o.orderNumber), /*#__PURE__*/React.createElement("span", {
    className: "text-pink-600 font-black text-sm"
  }, formatPrice(o.total))), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-700"
  }, /*#__PURE__*/React.createElement("strong", null, "Cliente:"), " ", o.customer.fullName, " • WhatsApp: ", o.customer.phone), /*#__PURE__*/React.createElement("p", {
    className: "text-stone-500"
  }, /*#__PURE__*/React.createElement("strong", null, "Entrega:"), " ", o.customer.address, ", ", o.customer.city), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 pt-2 border-t border-stone-200/80 text-[11px] text-stone-600 flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, o.date), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-700 font-bold"
  }, o.status))))) : /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-500 text-center py-12"
  }, "No hay pedidos registrados todavía.")), tab === "categories" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 text-xs"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAddCategory,
    className: "p-4 bg-pink-50/70 border border-pink-200/80 rounded-2xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-pink-900 block mb-1"
  }, "➕ Crear Nueva Colección para el Menú y Catálogo"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-pink-700 mb-3"
  }, "Escribí el nombre y automáticamente se creará el botón en el Nav superior, en el menú móvil y en el pie de página."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Colección Invierno ❄️, Drops 2026, Bikinis...",
    value: newCategoryName,
    onChange: e => setNewCategoryName(e.target.value),
    className: "flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-pink-500 font-medium"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "salem-gradient-btn text-white font-bold px-4 py-2 rounded-xl shadow-md shrink-0 cursor-pointer"
  }, "➕ Agregar al Menú"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-800 block mb-2"
  }, "Colecciones Actuales en tu Tienda (", settings.categories.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[42vh] overflow-y-auto pr-1"
  }, settings.categories.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat.id,
    className: "p-3 rounded-xl border border-stone-200 bg-[#FAF7F2] flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-900 block text-xs"
  }, cat.label), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-500 font-mono"
  }, "ID: ", cat.id)), cat.id !== "all" ? /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDeleteCategory(cat.id, cat.label),
    className: "p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer",
    title: "Eliminar esta colección del menú"
  }, /*#__PURE__*/React.createElement(Icons.Trash2, {
    className: "w-4 h-4"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 font-semibold px-2 py-0.5 bg-stone-100 rounded"
  }, "Principal"))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleExportConfigFile,
    className: "bg-stone-900 hover:bg-stone-800 text-white font-bold px-3 py-2 rounded-xl text-[11px] flex items-center gap-1.5 cursor-pointer",
    title: "Descargar archivo config.js"
  }, /*#__PURE__*/React.createElement("span", null, "📥 Descargar config.js")), /*#__PURE__*/React.createElement("button", {
    onClick: handleCopyConfigCode,
    className: "bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 font-bold px-2.5 py-2 rounded-xl text-[11px] flex items-center gap-1 cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.Copy, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Copiar"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsAdminOpen(false);
      addToast({
        title: "Colecciones guardadas",
        description: "Los cambios ya son visibles en la tienda.",
        type: "success"
      });
    },
    className: "salem-gradient-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
  }, "Guardar y Cerrar"))), tab === "contact" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "WhatsApp Teléfono Visible"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "+54 9 11 5834-9210",
    value: settings.whatsappPhone || "",
    onChange: e => setSettings({
      ...settings,
      whatsappPhone: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 mt-0.5 block"
  }, "Se muestra en el footer y en la barra superior.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Enlace Directo de WhatsApp"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "https://wa.me/message/MKBUYHXSKDTQK1 o https://wa.me/5491158349210",
    value: settings.whatsappUrl || "",
    onChange: e => setSettings({
      ...settings,
      whatsappUrl: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 font-mono text-xs"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 mt-0.5 block"
  }, "Donde llegarán los pedidos con 1 clic."))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Usuario de Instagram (@jeans_slm)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "jeans_slm",
    value: settings.instagramUser || "",
    onChange: e => {
      const u = e.target.value.replace("@", "");
      setSettings({
        ...settings,
        instagramUser: u,
        instagramUrl: `https://www.instagram.com/${u}/`
      });
    },
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Email de Atención al Cliente"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "contacto@indumentariasalem.com.ar",
    value: settings.supportEmail || "",
    onChange: e => setSettings({
      ...settings,
      supportEmail: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Dirección del Showroom / Retiros"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Showroom Palermo Soho, CABA • Envíos a todo el país",
    value: settings.showroomAddress || "",
    onChange: e => setSettings({
      ...settings,
      showroomAddress: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 mt-0.5 block"
  }, "Se muestra en la columna de contacto del footer.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Cupón Activo en la Barra Superior"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: settings.announcementCoupon || "",
    onChange: e => setSettings({
      ...settings,
      announcementCoupon: e.target.value.toUpperCase()
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs uppercase font-bold"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Monto para Envío Gratis ($ ARS)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: settings.freeShippingThreshold || 0,
    onChange: e => setSettings({
      ...settings,
      freeShippingThreshold: parseInt(e.target.value) || 0
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Texto de Anuncios de la Barra Superior"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: settings.announcementText || "",
    onChange: e => setSettings({
      ...settings,
      announcementText: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleExportConfigFile,
    className: "bg-stone-900 hover:bg-stone-800 text-white font-bold px-3 py-2 rounded-xl text-[11px] flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "📥 Descargar config.js")), /*#__PURE__*/React.createElement("button", {
    onClick: handleCopyConfigCode,
    className: "bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 font-bold px-2.5 py-2 rounded-xl text-[11px] flex items-center gap-1 cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icons.Copy, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Copiar"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsAdminOpen(false);
      addToast({
        title: "Contacto guardado",
        description: "Datos actualizados en el footer y la web.",
        type: "success"
      });
    },
    className: "salem-gradient-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
  }, "Guardar y Cerrar"))), tab === "payments" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 bg-pink-50/70 border border-pink-200/80 rounded-2xl text-[11px] text-pink-900"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold block mb-0.5"
  }, "💳 Configuración de Cobro por Transferencia"), "Estos datos son los que verán tus clientas al elegir pagar por Transferencia Bancaria en el checkout."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Alias de Transferencia (Mercado Pago o Banco)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: SALEM.INDUMENTARIA.MP",
    value: settings.bankDetails && settings.bankDetails.alias || "",
    onChange: e => setSettings({
      ...settings,
      bankDetails: {
        ...(settings.bankDetails || {}),
        alias: e.target.value.toUpperCase()
      }
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold text-stone-900"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "CBU / CVU"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "0070123400000012345678",
    value: settings.bankDetails && settings.bankDetails.cbu || "",
    onChange: e => setSettings({
      ...settings,
      bankDetails: {
        ...(settings.bankDetails || {}),
        cbu: e.target.value
      }
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 font-mono text-xs"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Nombre del Titular de la Cuenta"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Indumentaria Salem / Lucas Ibañez",
    value: settings.bankDetails && settings.bankDetails.holder || "",
    onChange: e => setSettings({
      ...settings,
      bankDetails: {
        ...(settings.bankDetails || {}),
        holder: e.target.value
      }
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Banco o Billetera"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Mercado Pago / Banco Galicia",
    value: settings.bankDetails && settings.bankDetails.bank || "",
    onChange: e => setSettings({
      ...settings,
      bankDetails: {
        ...(settings.bankDetails || {}),
        bank: e.target.value
      }
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Descuento por Transferencia (%)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: settings.bankTransferDiscount || 15,
    onChange: e => setSettings({
      ...settings,
      bankTransferDiscount: parseInt(e.target.value) || 0
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 mt-0.5 block"
  }, "Se descuenta en el checkout (ej: 15%).")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Máximo de Cuotas sin Interés"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: settings.maxInstallments || 6,
    onChange: e => setSettings({
      ...settings,
      maxInstallments: parseInt(e.target.value) || 1
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 mt-0.5 block"
  }, "Muestra las cuotas (ej: 6).")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Tipo de Cambio USD ($ ARS)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: settings.usdExchangeRate || 1280,
    onChange: e => setSettings({
      ...settings,
      usdExchangeRate: parseInt(e.target.value) || 1000
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-stone-400 mt-0.5 block"
  }, "Para el conversor de moneda."))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleExportConfigFile,
    className: "bg-stone-900 hover:bg-stone-800 text-white font-bold px-3 py-2 rounded-xl text-[11px] flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "📥 Descargar config.js")), /*#__PURE__*/React.createElement("button", {
    onClick: handleResetDefaults,
    className: "text-rose-600 hover:text-rose-800 font-bold underline text-[11px] cursor-pointer ml-2"
  }, "Restablecer de fábrica")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setIsAdminOpen(false);
      addToast({
        title: "Datos de cobro guardados",
        description: "Los datos de transferencia ya están activos en el checkout.",
        type: "success"
      });
    },
    className: "salem-gradient-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
  }, "Guardar y Cerrar"))), productModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-stone-900/60 backdrop-blur-sm",
    onClick: () => setProductModalOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-lg bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-6 text-stone-900 animate-slide-up max-h-[88vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-stone-200 mb-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-black text-lg text-stone-900"
  }, isNewProduct ? "➕ Agregar Nueva Prenda" : "✏️ Editar Prenda"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setProductModalOpen(false),
    className: "p-1.5 text-stone-400 hover:text-stone-900"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSaveProduct,
    className: "space-y-3.5 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Nombre de la Prenda *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "Ej: Jean Wide Leg Black Edition",
    value: productForm.title,
    onChange: e => setProductForm({
      ...productForm,
      title: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Subtítulo / Destacado"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: Denim rígido tiro alto con calce fit soñado",
    value: productForm.subtitle,
    onChange: e => setProductForm({
      ...productForm,
      subtitle: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Categoría"), /*#__PURE__*/React.createElement("select", {
    value: productForm.category,
    onChange: e => setProductForm({
      ...productForm,
      category: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
  }, settings.categories.filter(c => c.id !== "all").map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Stock Disponible"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: productForm.stock,
    onChange: e => setProductForm({
      ...productForm,
      stock: parseInt(e.target.value) || 0
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Precio Normal ($ ARS) *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    required: true,
    placeholder: "45000",
    value: productForm.price,
    onChange: e => setProductForm({
      ...productForm,
      price: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Precio Promo / Oferta ($ ARS)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "38900",
    value: productForm.promoPrice,
    onChange: e => setProductForm({
      ...productForm,
      promoPrice: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs font-bold text-pink-600"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Talles (separados por coma)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "36, 38, 40, 42 o S, M, L",
    value: productForm.sizesStr,
    onChange: e => setProductForm({
      ...productForm,
      sizesStr: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Colores (separados por coma)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Negro, Celeste, Blanco",
    value: productForm.colorsStr,
    onChange: e => setProductForm({
      ...productForm,
      colorsStr: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-bold text-stone-700 block mb-1"
  }, "Foto (ruta local o link de internet)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ej: products/mi-foto.jpg o https://...",
    value: productForm.image,
    onChange: e => setProductForm({
      ...productForm,
      image: e.target.value
    }),
    className: "w-full bg-[#FAF7F2] border border-stone-300 rounded-xl p-2.5 text-xs"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-4 pt-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: productForm.isBestSeller,
    onChange: e => setProductForm({
      ...productForm,
      isBestSeller: e.target.checked
    }),
    className: "rounded text-pink-600 focus:ring-pink-500"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-800"
  }, "🔥 Más Vendido")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: productForm.isNew,
    onChange: e => setProductForm({
      ...productForm,
      isNew: e.target.checked
    }),
    className: "rounded text-pink-600 focus:ring-pink-500"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-800"
  }, "✨ Nuevo Drop")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: productForm.freeShipping,
    onChange: e => setProductForm({
      ...productForm,
      freeShipping: e.target.checked
    }),
    className: "rounded text-pink-600 focus:ring-pink-500"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-stone-800"
  }, "🚚 Envío Gratis"))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2.5 pt-3 border-t border-stone-200"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setProductModalOpen(false),
    className: "flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-1 salem-gradient-btn text-white font-bold py-2.5 rounded-xl shadow-md"
  }, "Guardar Prenda")))))));
}

// --- SECCIÓN INSTAGRAM FEED & COMUNIDAD ---
function InstagramFeedSection() {
  const {
    settings
  } = useStore();
  return /*#__PURE__*/React.createElement("section", {
    className: "py-14 bg-white border-t border-[#E8E1D5]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-xl mx-auto mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-bold mb-2"
  }, /*#__PURE__*/React.createElement(Icons.Instagram, {
    className: "w-3.5 h-3.5 text-pink-600"
  }), /*#__PURE__*/React.createElement("span", null, "@jeans_slm")), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-extrabold text-3xl text-stone-900"
  }, "Comunidad Salem en Instagram"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-stone-500 mt-1"
  }, "Mirá cómo combinan nuestras prendas las clientas y enterate antes que nadie de los nuevos drops."), /*#__PURE__*/React.createElement("a", {
    href: settings.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 mt-4 text-xs font-bold text-pink-600 hover:text-pink-800 underline"
  }, /*#__PURE__*/React.createElement("span", null, "Seguinos en Instagram (+3.9k seguidoras)"), /*#__PURE__*/React.createElement(Icons.ChevronRight, {
    className: "w-3.5 h-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-xl group relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: "brand/instagram-feed.jpg",
    alt: "Instagram Feed Salem",
    className: "w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: settings.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "bg-white text-stone-900 font-bold text-xs px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.Instagram, {
    className: "w-4 h-4 text-pink-600"
  }), /*#__PURE__*/React.createElement("span", null, "Ver publicaciones en @jeans_slm"))))));
}

// --- CONTENEDOR FLOTANTE DE NOTIFICACIONES (TOASTS) ---
function ToastContainer() {
  const {
    toasts,
    removeToast
  } = useStore();
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `pointer-events-auto p-3.5 rounded-2xl border shadow-xl flex items-start gap-3 backdrop-blur-md animate-slide-up ${t.type === "error" ? "bg-rose-50/95 border-rose-300 text-rose-900" : t.type === "info" ? "bg-stone-50/95 border-stone-300 text-stone-900" : "bg-white/95 border-pink-300 text-stone-900"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 shrink-0"
  }, t.type === "error" ? /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-4 h-4 text-rose-500"
  }) : /*#__PURE__*/React.createElement(Icons.Sparkles, {
    className: "w-4 h-4 text-pink-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-xs"
  }, t.title), t.description && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-stone-600 mt-0.5 truncate"
  }, t.description)), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeToast(t.id),
    className: "text-stone-400 hover:text-stone-700"
  }, /*#__PURE__*/React.createElement(Icons.X, {
    className: "w-3.5 h-3.5"
  })))));
}

// --- FOOTER OFICIAL DE LA TIENDA ---
function Footer() {
  const {
    settings,
    setIsLegalModalOpen,
    setLegalTab,
    setSelectedCategory,
    setCurrentView,
    setIsAdminOpen
  } = useStore();
  const handleOpenLegal = tab => {
    setLegalTab(tab);
    setIsLegalModalOpen(true);
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-[#121214] text-stone-400 text-xs pt-16 pb-12 border-t border-stone-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "brand/logo.png",
    className: "w-12 h-12 rounded-full border-2 border-pink-500 object-cover",
    alt: "Salem"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-display font-black text-xl text-white block"
  }, "JEANS SLM ✨"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-pink-400 font-semibold uppercase"
  }, settings.brandSubtitle))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-stone-400 leading-relaxed max-w-sm"
  }, settings.tagline, " Prendas urbanas, corsetería de autor, camperas de tendencia y calce fit soñado. Venta por mayor y por menor con envíos a toda la Argentina."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: settings.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-full bg-stone-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
  }, /*#__PURE__*/React.createElement(Icons.Instagram, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: settings.whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-full bg-stone-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
  }, /*#__PURE__*/React.createElement(Icons.MessageCircle, {
    className: "w-4 h-4"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-white text-sm mb-3"
  }, "Colecciones"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, settings.categories.filter(c => c.id !== "all").map(cat => /*#__PURE__*/React.createElement("li", {
    key: cat.id
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelectedCategory(cat.id);
      setCurrentView("catalog");
      const el = document.getElementById("catalogo-section");
      if (el) el.scrollIntoView({
        behavior: "smooth"
      });
    },
    className: "hover:text-pink-400 transition-colors cursor-pointer text-left"
  }, cat.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-white text-sm mb-3"
  }, "Contacto & Ayuda"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: settings.whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center gap-2 hover:text-pink-400 text-stone-300 font-medium"
  }, /*#__PURE__*/React.createElement(Icons.MessageCircle, {
    className: "w-4 h-4 text-emerald-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, settings.whatsappPhone))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: settings.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center gap-2 hover:text-pink-400 text-stone-300 font-medium"
  }, /*#__PURE__*/React.createElement(Icons.Instagram, {
    className: "w-4 h-4 text-pink-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "@", settings.instagramUser))), settings.supportEmail && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${settings.supportEmail}`,
    className: "flex items-center gap-2 hover:text-pink-400 text-stone-400 text-[11px]"
  }, /*#__PURE__*/React.createElement("span", null, "✉️"), /*#__PURE__*/React.createElement("span", {
    className: "break-all"
  }, settings.supportEmail))), settings.showroomAddress && /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-1.5 text-stone-400 text-[11px] pt-1"
  }, /*#__PURE__*/React.createElement("span", null, "📍"), /*#__PURE__*/React.createElement("span", null, settings.showroomAddress)), /*#__PURE__*/React.createElement("li", {
    className: "pt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenLegal("shipping"),
    className: "hover:text-pink-400 text-[11px] block"
  }, "Políticas de Envíos y Cambios")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenLegal("regret"),
    className: "text-pink-400 font-bold hover:underline text-[11px] block"
  }, "Botón de Arrepentimiento")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-white text-sm mb-3"
  }, "Medios de Pago & Envío"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-stone-400 mb-2"
  }, "Aceptamos todas las tarjetas de crédito, débito y transferencia bancaria con 15% OFF."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5 text-[10px] font-bold text-stone-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-800 px-2 py-1 rounded"
  }, "Visa"), /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-800 px-2 py-1 rounded"
  }, "Mastercard"), /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-800 px-2 py-1 rounded"
  }, "Mercado Pago"), /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-800 px-2 py-1 rounded"
  }, "Transferencia")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-1.5 text-[10px] font-bold text-stone-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-800 px-2 py-1 rounded"
  }, "Correo Argentino"), /*#__PURE__*/React.createElement("span", {
    className: "bg-stone-800 px-2 py-1 rounded"
  }, "Andreani")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500"
  }, /*#__PURE__*/React.createElement("p", null, "© ", new Date().getFullYear(), " Jeans SLM ✨ • Indumentaria Salem. Todos los derechos reservados."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 sm:gap-4 flex-wrap justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsAdminOpen(true),
    className: "text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 cursor-pointer bg-stone-900 px-2.5 py-1 rounded-lg border border-pink-500/30"
  }, "⚙️ Admin Tienda"), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenLegal("terms"),
    className: "hover:text-stone-300 cursor-pointer"
  }, "Privacidad"), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenLegal("shipping"),
    className: "hover:text-stone-300 cursor-pointer"
  }, "Defensa del Consumidor")))));
}

// --- COMPONENTE RAÍZ APP ---
function App() {
  const {
    currentView
  } = useStore();
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-pink-200 selection:text-pink-900"
  }, /*#__PURE__*/React.createElement(AnnouncementBar, null), /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    className: "flex-1"
  }, currentView === "home" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(BenefitsBar, null), /*#__PURE__*/React.createElement(CategoryTabs, null), /*#__PURE__*/React.createElement(CatalogSection, null), /*#__PURE__*/React.createElement(InstagramFeedSection, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CategoryTabs, null), /*#__PURE__*/React.createElement(CatalogSection, null))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(QuickViewModal, null), /*#__PURE__*/React.createElement(CartDrawer, null), /*#__PURE__*/React.createElement(CheckoutModal, null), /*#__PURE__*/React.createElement(WishlistModal, null), /*#__PURE__*/React.createElement(SizeGuideModal, null), /*#__PURE__*/React.createElement(WholesaleModal, null), /*#__PURE__*/React.createElement(LegalModal, null), /*#__PURE__*/React.createElement(AdminModal, null), /*#__PURE__*/React.createElement(ToastContainer, null));
}

// Componente Error Boundary para evitar pantallas en blanco
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-stone-50 text-stone-900"
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-md w-full bg-white p-8 rounded-3xl border border-pink-200 shadow-xl text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-2xl"
      }, "⚠️"), /*#__PURE__*/React.createElement("h2", {
        className: "text-xl font-bold font-display text-stone-900 mb-2"
      }, "Jeans SLM ✨"), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-stone-600 mb-4"
      }, "Hubo un problema temporal al cargar los componentes."), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-rose-500 font-mono bg-rose-50 p-3 rounded-xl mb-6 text-left overflow-auto max-h-32"
      }, this.state.error ? this.state.error.message : "Error desconocido"), /*#__PURE__*/React.createElement("button", {
        onClick: () => window.location.reload(),
        className: "w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
      }, "Recargar Tienda")));
    }
    return this.props.children;
  }
}

// Montar React en el elemento #root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(/*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(StoreProvider, null, /*#__PURE__*/React.createElement(App, null))));
}