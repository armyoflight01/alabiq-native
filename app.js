// =========================================================
// ALABIQ — We DeliveRED | Full Client-Side E-Commerce Engine
// Zero database required — state persisted in localStorage
// =========================================================

const STORES = [
  {
    id: 'black-pinoy',
    name: 'BLACK PINOY',
    type: 'restaurant',
    cuisine: 'Filipino',
    badge: 'POPULAR',
    badgeClass: 'popular',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 30,
    rating: 4.9,
    deliveryTime: '15–25 min',
    logoBg: 'linear-gradient(135deg, #1e1b4b 0%, #dc2626 60%, #facc15 100%)',
    logoText: '👨🏾‍🍳 BLACK PINOY',
    logoColor: '#ffffff',
    description: 'Authentic Filipino home-style favorites, silog meals, sisig, and Pinoy street classics delivered hot 24/7.'
  },
  {
    id: 'chowking',
    name: 'CHOWKING',
    type: 'restaurant',
    cuisine: 'Chinese',
    badge: 'NEW',
    badgeClass: 'new',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 30,
    rating: 4.8,
    deliveryTime: '20–30 min',
    logoBg: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    logoText: '🥢 Chowking',
    logoColor: '#ffffff',
    description: 'Oriental Chinese-Filipino fusion: Chao Fan fried rice, Lauriat boxes, dimsum, Halo-Halo, and crispy chicken.'
  },
  {
    id: 'chuchay-isabela',
    name: 'CHUCHAY ISABELA SPECIAL PRODUCTS',
    type: 'restaurant',
    cuisine: 'Filipino',
    badge: 'NEW',
    badgeClass: 'new',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 30,
    rating: 4.9,
    deliveryTime: '15–25 min',
    logoBg: 'linear-gradient(135deg, #fef9c3 0%, #fde047 100%)',
    logoText: '👑 CHUCHAY ISABELA',
    logoColor: '#713f12',
    description: 'Isabela specialty delicacies, pancit cabagan, native kakanin, longganisa, and authentic regional dishes.'
  },
  {
    id: 'happy-ending',
    name: 'HAPPY ENDING STREET FOOD',
    type: 'restaurant',
    cuisine: 'Filipino',
    badge: 'POPULAR',
    badgeClass: 'popular',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 30,
    rating: 4.8,
    deliveryTime: '15–20 min',
    logoBg: 'linear-gradient(135deg, #111827 0%, #b91c1c 100%)',
    logoText: '🍢 HAPPY ENDING',
    logoColor: '#fde047',
    description: 'Loaded street food platters, grilled BBQ skewers, overload fries, milk teas, and late-night cravings.'
  },
  {
    id: 'sakura-tokyo',
    name: 'SAKURA TOKYO RAMEN & SUSHI',
    type: 'restaurant',
    cuisine: 'Japanese',
    badge: 'POPULAR',
    badgeClass: 'popular',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 35,
    rating: 4.9,
    deliveryTime: '20–30 min',
    logoBg: 'linear-gradient(135deg, #0f172a 0%, #e11d48 100%)',
    logoText: '🍣 SAKURA TOKYO',
    logoColor: '#ffffff',
    description: 'Hand-rolled maki, spicy volcano rolls, rich tonkotsu ramen, and crispy chicken katsu bento boxes.'
  },
  {
    id: 'shawarma-riyadh',
    name: 'AL RIYADH FLAME GRILL',
    type: 'restaurant',
    cuisine: 'Middle Eastern',
    badge: 'FEATURED',
    badgeClass: 'featured',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 25,
    rating: 4.9,
    deliveryTime: '15–20 min',
    logoBg: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)',
    logoText: '🔥 RIYADH GRILL',
    logoColor: '#ffffff',
    description: 'Charcoal-grilled platters, Arabic shawarma boxes, kabsa rice, fresh hummus, and garlic broasted chicken.'
  },
  {
    id: 'al-wafa',
    name: 'AL WAFA HYPERMARKET',
    type: 'grocery',
    cuisine: 'Groceries',
    badge: 'POPULAR',
    badgeClass: 'popular',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 40,
    rating: 4.9,
    deliveryTime: '25–35 min',
    logoBg: 'linear-gradient(135deg, #ecfdf5 0%, #10b981 100%)',
    logoText: '🛒 AL WAFA HYPERMARKET',
    logoColor: '#064e3b',
    description: 'Full-scale hypermarket with fresh produce, dairy, bakery, household essentials, and imported pantry staples.'
  },
  {
    id: 'at-tawi',
    name: 'AT TAWI TRADING & SPECIALTIES',
    type: 'grocery',
    cuisine: 'Groceries',
    badge: 'FEATURED',
    badgeClass: 'featured',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 30,
    rating: 4.8,
    deliveryTime: '20–30 min',
    logoBg: 'linear-gradient(135deg, #fef3c7 0%, #d97706 100%)',
    logoText: '📦 AT TAWI TRADING',
    logoColor: '#451a03',
    description: 'Wholesale & retail Asian specialty ingredients, spices, sauces, frozen goods, and beverage cases.'
  },
  {
    id: 'pinas-supermarket',
    name: 'PINAS SUPERMARKET',
    type: 'grocery',
    cuisine: 'Groceries',
    badge: 'POPULAR',
    badgeClass: 'popular',
    hours: 'Open 24/7',
    deliveryFee: 10,
    minOrder: 30,
    rating: 4.9,
    deliveryTime: '20–30 min',
    logoBg: 'linear-gradient(135deg, #ffe4e6 0%, #f43f5e 100%)',
    logoText: '🇵🇭 PINAS SUPERMARKET',
    logoColor: '#881337',
    description: 'Your favorite Filipino & Asian supermarket in Riyadh — snacks, canned goods, noodles, and frozen meats.'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Items', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=240&q=80' },
  { id: 'Chinese', name: 'Chinese', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=240&q=80' },
  { id: 'Filipino', name: 'Filipino', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=240&q=80' },
  { id: 'Japanese', name: 'Japanese', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=240&q=80' },
  { id: 'Middle Eastern', name: 'Arabic Grill', img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=240&q=80' },
  { id: 'Groceries', name: 'Groceries', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=240&q=80' },
  { id: 'Desserts', name: 'Desserts', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=240&q=80' }
];

const PRODUCTS = [
  {
    id: 'p1',
    storeId: 'black-pinoy',
    storeName: 'BLACK PINOY',
    name: 'Sizzling Chicken Sisig Platter',
    category: 'Filipino',
    price: 34,
    oldPrice: 42,
    trending: true,
    deal: true,
    desc: 'Crispy chopped grilled chicken tossed in calamansi-chili dressing with garlic rice & egg.',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p2',
    storeId: 'black-pinoy',
    storeName: 'BLACK PINOY',
    name: 'Beef Tapsilog Supreme',
    category: 'Filipino',
    price: 29,
    oldPrice: null,
    trending: true,
    deal: false,
    desc: 'Marinated tender beef tapa with sinangag garlic fried rice, sunny-side eggs, and spiced vinegar.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p3',
    storeId: 'black-pinoy',
    storeName: 'BLACK PINOY',
    name: 'Kare-Kare Crispy Bagnet Bowl',
    category: 'Filipino',
    price: 38,
    oldPrice: 45,
    trending: false,
    deal: true,
    desc: 'Rich roasted peanut stew with crispy belly, eggplant, string beans, and savory bagoong.',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p4',
    storeId: 'chowking',
    storeName: 'CHOWKING',
    name: 'Chinese-Style Fried Chicken Lauriat',
    category: 'Chinese',
    price: 36,
    oldPrice: 42,
    trending: true,
    deal: true,
    desc: 'Crispy golden chicken, pancit canton, egg fried rice, steamed siomai, and buchi dessert.',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p5',
    storeId: 'chowking',
    storeName: 'CHOWKING',
    name: 'Beef Chao Fan & Steamed Siomai',
    category: 'Chinese',
    price: 24,
    oldPrice: null,
    trending: true,
    deal: false,
    desc: 'Wok-seared smoky beef fried rice topped with 4 pieces of juicy pork-free chicken & shrimp siomai.',
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p6',
    storeId: 'chowking',
    storeName: 'CHOWKING',
    name: 'SuperSangkap Halo-Halo Fiesta',
    category: 'Desserts',
    price: 19,
    oldPrice: 24,
    trending: true,
    deal: true,
    desc: 'Shaved ice layered with leche flan, ube ice cream, sweet beans, macapuno, and langka.',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p7',
    storeId: 'chuchay-isabela',
    storeName: 'CHUCHAY ISABELA',
    name: 'Pancit Cabagan Special Bilao (Med)',
    category: 'Filipino',
    price: 45,
    oldPrice: 55,
    trending: true,
    deal: true,
    desc: 'Authentic Isabela miki noodles stir-fried in rich soy-garlic sauce with quail eggs & crispy toppings.',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p8',
    storeId: 'chuchay-isabela',
    storeName: 'CHUCHAY ISABELA',
    name: 'Isabela Native Moriecos & Kakanin Box',
    category: 'Desserts',
    price: 28,
    oldPrice: null,
    trending: false,
    deal: false,
    desc: 'Handcrafted glutinous rice delicacy stuffed with caramelized coconut latik.',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p9',
    storeId: 'happy-ending',
    storeName: 'HAPPY ENDING',
    name: 'Street Food Barkada Grill Platter',
    category: 'Filipino',
    price: 42,
    oldPrice: 50,
    trending: true,
    deal: true,
    desc: 'Assorted grilled chicken skewers, kwek-kwek, fishballs, kikiam, and trio dipping sauces.',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p10',
    storeId: 'happy-ending',
    storeName: 'HAPPY ENDING',
    name: 'Brown Sugar Boba Pearl Milk Tea (L)',
    category: 'Desserts',
    price: 16,
    oldPrice: null,
    trending: true,
    deal: false,
    desc: 'Creamy Okinawa roasted brown sugar milk tea with warm chewy tapioca pearls.',
    img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p11',
    storeId: 'sakura-tokyo',
    storeName: 'SAKURA TOKYO',
    name: 'Spicy Salmon & Tempura Roll Platter (16pc)',
    category: 'Japanese',
    price: 54,
    oldPrice: 64,
    trending: true,
    deal: true,
    desc: 'Crunchy shrimp tempura maki and torched spicy salmon rolls with wasabi & pickled ginger.',
    img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p12',
    storeId: 'sakura-tokyo',
    storeName: 'SAKURA TOKYO',
    name: 'Black Garlic Shoyu Ramen Bowl',
    category: 'Japanese',
    price: 39,
    oldPrice: null,
    trending: false,
    deal: false,
    desc: '12-hour slow-simmered broth, artisan ramen noodles, marinated ajitama egg, nori, and grilled chicken.',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p13',
    storeId: 'shawarma-riyadh',
    storeName: 'RIYADH GRILL',
    name: 'Arabic Chicken Shawarma Box',
    category: 'Middle Eastern',
    price: 26,
    oldPrice: 32,
    trending: true,
    deal: true,
    desc: 'Sliced saj shawarma bites served with spiced fries, toum garlic cream, and pickles.',
    img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p14',
    storeId: 'al-wafa',
    storeName: 'AL WAFA HYPERMARKET',
    name: 'Fresh Organic Fruit & Veggie Basket (5kg)',
    category: 'Groceries',
    price: 49,
    oldPrice: 59,
    trending: true,
    deal: true,
    desc: 'Farm-fresh tomatoes, cucumbers, avocados, bananas, apples, and leafy greens delivered chilled.',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p15',
    storeId: 'at-tawi',
    storeName: 'AT TAWI TRADING',
    name: 'Premium Jasmine Fragrant Rice (10kg Sack)',
    category: 'Groceries',
    price: 68,
    oldPrice: 78,
    trending: false,
    deal: true,
    desc: 'AAA long-grain aromatic Thai jasmine rice ideal for daily family meals.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p16',
    storeId: 'pinas-supermarket',
    storeName: 'PINAS SUPERMARKET',
    name: 'Pinoy Pantry Fiesta Bundle (12 Items)',
    category: 'Groceries',
    price: 55,
    oldPrice: 68,
    trending: true,
    deal: true,
    desc: 'Includes Silver Swan soy sauce, Datu Puti vinegar, Pancit Canton 6-pack, Mama Sita mixes & snacks.',
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80'
  }
];

const VOUCHERS = {
  ALABIQ20: { code: 'ALABIQ20', type: 'percent', value: 20, desc: '20% OFF your entire order' },
  RED10: { code: 'RED10', type: 'fixed', value: 10, desc: 'SAR 10.00 instant discount' },
  FREEDEL: { code: 'FREEDEL', type: 'freedel', value: 10, desc: 'Free Delivery (Saves SAR 10.00)' }
};

// =========================================================
// APPLICATION STATE (Persisted in localStorage)
// =========================================================
const state = {
  currentView: 'restaurants', // Default to the e-commerce shop view (Reference 1), switchable to Home, Groceries, Shops, etc.
  selectedCategory: 'all',
  searchQuery: '',
  location: localStorage.getItem('alabiq_location') || 'Riyadh, Saudi Arabia',
  cart: JSON.parse(localStorage.getItem('alabiq_cart') || '[]'),
  favorites: JSON.parse(localStorage.getItem('alabiq_favs') || '["black-pinoy"]'),
  orders: JSON.parse(localStorage.getItem('alabiq_orders') || '[]'),
  user: JSON.parse(localStorage.getItem('alabiq_user') || 'null'),
  promoCode: null,
  activeStoreModal: null,
  authMode: 'signin'
};

function saveState() {
  localStorage.setItem('alabiq_location', state.location);
  localStorage.setItem('alabiq_cart', JSON.stringify(state.cart));
  localStorage.setItem('alabiq_favs', JSON.stringify(state.favorites));
  localStorage.setItem('alabiq_orders', JSON.stringify(state.orders));
  localStorage.setItem('alabiq_user', JSON.stringify(state.user));
}

// =========================================================
// UI HELPERS & TOASTS
// =========================================================
function showToast(message, icon = '🔥') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

// =========================================================
// NAVIGATION & VIEW SWITCHING
// =========================================================
function switchView(viewName, filterCat = null) {
  state.currentView = viewName;
  if (filterCat) {
    state.selectedCategory = filterCat;
  }

  // Update Sub-Nav active tabs
  document.querySelectorAll('.sub-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  // Update Mobile Bottom Nav active tabs
  document.querySelectorAll('.mob-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  // Hide all view sections, show target
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// RENDERING ENGINE
// =========================================================
function renderHeaderState() {
  // Location
  const locText = document.getElementById('currentLocationText');
  if (locText) locText.textContent = state.location;

  // Cart Badge
  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById('cartBadgeCount');
  const mobCartBadge = document.getElementById('mobCartBadge');
  if (cartBadge) cartBadge.textContent = totalItems;
  if (mobCartBadge) mobCartBadge.textContent = totalItems;

  // Orders Badge
  const ordersBadge = document.getElementById('ordersBadgeCount');
  if (ordersBadge) {
    ordersBadge.textContent = state.orders.length;
    ordersBadge.style.display = state.orders.length > 0 ? 'inline-block' : 'none';
  }

  // User Auth Button
  const loginBtn = document.getElementById('headerLoginBtn');
  if (loginBtn) {
    if (state.user) {
      loginBtn.innerHTML = `👤 ${state.user.name.split(' ')[0]}`;
      loginBtn.onclick = () => switchView('auth');
    } else {
      loginBtn.innerHTML = `Log in`;
      loginBtn.onclick = () => switchView('auth');
    }
  }

  // Recent Orders sidebar widget
  const recentOrdersBox = document.getElementById('recentOrdersWidgetContent');
  if (recentOrdersBox) {
    if (state.orders.length > 0) {
      const latest = state.orders[0];
      recentOrdersBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
          <div>
            <strong style="font-size:0.82rem;color:#0f172a;">Order #${latest.id}</strong>
            <span style="display:block;font-size:0.74rem;color:#059669;font-weight:700;">● ${latest.status}</span>
          </div>
          <button class="btn-orange-pill" style="padding:5px 12px;font-size:0.72rem;" onclick="openOrdersDrawer()">Track</button>
        </div>
      `;
    } else if (state.user) {
      recentOrdersBox.innerHTML = `<p>Hi <strong>${state.user.name}</strong>! Add your favorite meals to place your first fast order.</p>`;
    } else {
      recentOrdersBox.innerHTML = `<p><span class="link-orange" onclick="switchView('auth')">Sign in</span> to reorder from your last meals.</p>`;
    }
  }
}

function renderCategories() {
  const container = document.getElementById('categoriesRow');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card ${state.selectedCategory === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
      <div class="category-img">
        <img src="${cat.img}" alt="${cat.name}" loading="lazy" />
      </div>
      <span class="category-name">${cat.name}</span>
    </div>
  `).join('');
}

function selectCategory(catId) {
  state.selectedCategory = catId;
  renderCategories();
  renderStores();
  renderProducts();
}

function scrollCarousel(elementId, amount) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }
}

function buildStoreCardHTML(store) {
  const isFav = state.favorites.includes(store.id);
  return `
    <div class="store-card" onclick="openStoreModal('${store.id}')">
      <div class="store-card-top">
        <span class="store-badge ${store.badgeClass}">${store.badge}</span>
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, '${store.id}')" title="Save to Favorites">
          ${isFav ? '♥' : '♡'}
        </button>
        <div class="store-logo-box" style="background: ${store.logoBg}; color: ${store.logoColor};">
          <div>
            <div style="font-size:0.95rem;line-height:1.2;">${store.logoText}</div>
            <div style="font-size:0.62rem;opacity:0.85;margin-top:4px;font-weight:700;">★ ${store.rating} • ${store.deliveryTime}</div>
          </div>
        </div>
      </div>
      <div class="store-card-body">
        <div>
          <h3 class="store-title" title="${store.name}">${store.name}</h3>
          <p class="store-cuisine">${store.cuisine}</p>
        </div>
        <div class="store-meta">
          <div class="store-meta-row">
            <span class="open-pill">🕒 ${store.hours}</span>
            <span style="font-weight:700;color:#0f172a;">★ ${store.rating}</span>
          </div>
          <div>From SAR ${store.deliveryFee.toFixed(2)} delivery • Min. SAR ${store.minOrder}</div>
        </div>
      </div>
    </div>
  `;
}

function buildProductCardHTML(product) {
  return `
    <div class="product-card">
      <div class="product-thumb">
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
        <span class="product-store-pill" onclick="openStoreModal('${product.storeId}')" style="cursor:pointer;">
          🏪 ${product.storeName}
        </span>
      </div>
      <div class="product-body">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <div class="product-price">
            SAR ${product.price.toFixed(2)}
            ${product.oldPrice ? `<small style="text-decoration:line-through;margin-left:4px;">SAR ${product.oldPrice}</small>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart('${product.id}')">
            + Add
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderStores() {
  const q = state.searchQuery.trim().toLowerCase();
  const filteredStores = STORES.filter(s => {
    const matchCat = state.selectedCategory === 'all' || s.cuisine.toLowerCase() === state.selectedCategory.toLowerCase();
    const matchSearch = !q || s.name.toLowerCase().includes(q) || s.cuisine.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const shopStoresGrid = document.getElementById('popularStoresGrid');
  if (shopStoresGrid) {
    shopStoresGrid.innerHTML = filteredStores.length
      ? filteredStores.map(buildStoreCardHTML).join('')
      : `<p style="color:#64748b;grid-column:1/-1;padding:20px 0;">No partner stores match your filter. Try selecting "All Items".</p>`;
  }

  // Home page Popular Near You
  const homeStoresGrid = document.getElementById('homePopularStoresGrid');
  if (homeStoresGrid) {
    homeStoresGrid.innerHTML = STORES.slice(0, 4).map(buildStoreCardHTML).join('');
  }

  // Groceries View Grid
  const groceriesStoresGrid = document.getElementById('groceriesStoresGrid');
  if (groceriesStoresGrid) {
    const grocStores = STORES.filter(s => s.type === 'grocery');
    groceriesStoresGrid.innerHTML = grocStores.map(buildStoreCardHTML).join('');
  }

  // Shops / All Partner Stores View (Reference 4)
  const shopsRestaurantGrid = document.getElementById('shopsRestaurantGrid');
  if (shopsRestaurantGrid) {
    shopsRestaurantGrid.innerHTML = STORES.filter(s => s.type === 'restaurant').map(buildStoreCardHTML).join('');
  }
  const shopsPartnerGrid = document.getElementById('shopsPartnerGrid');
  if (shopsPartnerGrid) {
    shopsPartnerGrid.innerHTML = STORES.filter(s => s.type === 'grocery').map(buildStoreCardHTML).join('');
  }
}

function renderProducts() {
  const q = state.searchQuery.trim().toLowerCase();
  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat = state.selectedCategory === 'all' || p.category.toLowerCase() === state.selectedCategory.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.storeName.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const catalogGrid = document.getElementById('shopProductsGrid');
  if (catalogGrid) {
    catalogGrid.innerHTML = filteredProducts.length
      ? filteredProducts.map(buildProductCardHTML).join('')
      : `<p style="color:#64748b;grid-column:1/-1;padding:20px 0;">No dishes or products match your search.</p>`;
  }

  // Groceries products
  const groceryProductsGrid = document.getElementById('groceryProductsGrid');
  if (groceryProductsGrid) {
    groceryProductsGrid.innerHTML = PRODUCTS.filter(p => p.category === 'Groceries').map(buildProductCardHTML).join('');
  }

  // Deals products
  const dealsProductsGrid = document.getElementById('dealsProductsGrid');
  if (dealsProductsGrid) {
    dealsProductsGrid.innerHTML = PRODUCTS.filter(p => p.deal).map(buildProductCardHTML).join('');
  }

  // New & Trending products
  const trendingProductsGrid = document.getElementById('trendingProductsGrid');
  if (trendingProductsGrid) {
    trendingProductsGrid.innerHTML = PRODUCTS.filter(p => p.trending).map(buildProductCardHTML).join('');
  }
}

function toggleFavorite(event, storeId) {
  event.stopPropagation();
  const idx = state.favorites.indexOf(storeId);
  const store = STORES.find(s => s.id === storeId);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showToast(`Removed ${store ? store.name : 'store'} from favorites`, '🤍');
  } else {
    state.favorites.push(storeId);
    showToast(`Added ${store ? store.name : 'store'} to favorites!`, '❤️');
  }
  saveState();
  renderStores();
}

// =========================================================
// STORE MENU MODAL
// =========================================================
function openStoreModal(storeId) {
  const store = STORES.find(s => s.id === storeId);
  if (!store) return;
  state.activeStoreModal = store;

  const storeItems = PRODUCTS.filter(p => p.storeId === storeId);
  const modal = document.getElementById('storeMenuModal');
  const header = document.getElementById('storeModalHeaderContent');
  const body = document.getElementById('storeModalBodyContent');

  header.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;">
      <div style="width:68px;height:68px;border-radius:16px;background:${store.logoBg};color:${store.logoColor};display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.8rem;text-align:center;padding:8px;">
        ${store.logoText}
      </div>
      <div>
        <span class="store-badge ${store.badgeClass}" style="position:static;display:inline-block;margin-bottom:4px;">${store.badge}</span>
        <h3 style="font-size:1.3rem;font-weight:900;color:#0f172a;">${store.name}</h3>
        <p style="font-size:0.82rem;color:#475569;">${store.description}</p>
        <div style="font-size:0.76rem;color:#059669;font-weight:700;margin-top:4px;">
          🕒 ${store.hours} • 🛵 ${store.deliveryTime} • From SAR ${store.deliveryFee.toFixed(2)} delivery
        </div>
      </div>
    </div>
  `;

  body.innerHTML = `
    <h4 style="font-size:1rem;font-weight:800;margin-bottom:16px;">Popular Menu Items (${storeItems.length})</h4>
    <div class="products-grid">
      ${storeItems.map(buildProductCardHTML).join('')}
    </div>
  `;

  modal.classList.add('open');
}

function closeStoreModal() {
  const modal = document.getElementById('storeMenuModal');
  if (modal) modal.classList.remove('open');
}

// =========================================================
// SHOPPING CART & CHECKOUT ENGINE
// =========================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      productId: product.id,
      name: product.name,
      storeName: product.storeName,
      price: product.price,
      img: product.img,
      qty: 1
    });
  }

  saveState();
  renderHeaderState();
  renderCartDrawer();
  showToast(`Added "${product.name}" to your AlabIQ cart!`, '🛒');
}

function updateCartQty(productId, delta) {
  const idx = state.cart.findIndex(item => item.productId === productId);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveState();
  renderHeaderState();
  renderCartDrawer();
}

function applyPromoCode(codeStr) {
  const code = (codeStr || document.getElementById('promoInput')?.value || '').trim().toUpperCase();
  if (!code) return;
  if (VOUCHERS[code]) {
    state.promoCode = VOUCHERS[code];
    showToast(`Promo ${code} applied: ${VOUCHERS[code].desc}!`, '🎉');
    renderCartDrawer();
  } else {
    showToast(`Invalid code. Try ALABIQ20, RED10, or FREEDEL`, '⚠️');
  }
}

function copyVoucherAndSwitch(code) {
  state.promoCode = VOUCHERS[code];
  showToast(`Voucher ${code} activated! Automatically applied at checkout.`, '🏷️');
  switchView('restaurants');
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let delivery = subtotal > 0 ? 10 : 0;
  let discount = 0;

  if (subtotal > 0 && state.promoCode) {
    if (state.promoCode.type === 'percent') {
      discount = +(subtotal * (state.promoCode.value / 100)).toFixed(2);
    } else if (state.promoCode.type === 'fixed') {
      discount = Math.min(subtotal, state.promoCode.value);
    } else if (state.promoCode.type === 'freedel') {
      discount = delivery;
    }
  }

  const total = Math.max(0, subtotal + delivery - discount);
  return { subtotal, delivery, discount, total };
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawerBackdrop').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cartDrawerBackdrop').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

function renderCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const footer = document.getElementById('cartDrawerFooter');
  if (!body || !footer) return;

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:48px 16px;">
        <div style="font-size:3rem;margin-bottom:12px;">🛵</div>
        <h4 style="font-size:1.05rem;font-weight:800;margin-bottom:6px;">Your AlabIQ cart is empty</h4>
        <p style="font-size:0.84rem;color:#64748b;margin-bottom:20px;">Browse Black Pinoy, Chowking, Al Wafa Hypermarket and more to add items.</p>
        <button class="btn-orange-pill" onclick="closeCartDrawer();switchView('restaurants')">Explore Restaurants</button>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  const { subtotal, delivery, discount, total } = calculateCartTotals();

  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:14px;">
      ${state.cart.map(item => `
        <div style="display:flex;align-items:center;gap:12px;padding-bottom:12px;border-bottom:1px solid #f1f5f9;">
          <img src="${item.img}" alt="${item.name}" style="width:58px;height:58px;border-radius:12px;object-fit:cover;" />
          <div style="flex:1;">
            <span style="font-size:0.68rem;color:#f97316;font-weight:800;">${item.storeName}</span>
            <h5 style="font-size:0.86rem;font-weight:800;color:#0f172a;">${item.name}</h5>
            <div style="font-size:0.82rem;font-weight:800;color:#dc2626;">SAR ${(item.price * item.qty).toFixed(2)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:999px;padding:4px 8px;">
            <button onclick="updateCartQty('${item.productId}', -1)" style="font-weight:900;width:20px;">−</button>
            <span style="font-size:0.82rem;font-weight:800;">${item.qty}</span>
            <button onclick="updateCartQty('${item.productId}', 1)" style="font-weight:900;width:20px;color:#ea580c;">+</button>
          </div>
        </div>
      `).join('')}
    </div>

    <div style="margin-top:18px;background:#fff3eb;padding:12px;border-radius:12px;border:1px solid #fed7aa;">
      <label style="font-size:0.72rem;font-weight:800;color:#9a3412;display:block;margin-bottom:6px;">PROMO VOUCHER (Try: ALABIQ20, RED10, FREEDEL)</label>
      <div style="display:flex;gap:8px;">
        <input id="promoInput" type="text" placeholder="Enter voucher code" value="${state.promoCode ? state.promoCode.code : ''}" style="flex:1;padding:8px 12px;border-radius:8px;border:1px solid #fdba74;font-size:0.82rem;" />
        <button class="btn-orange-pill" onclick="applyPromoCode()">Apply</button>
      </div>
    </div>

    <div style="margin-top:16px;">
      <label style="font-size:0.72rem;font-weight:800;color:#475569;display:block;margin-bottom:6px;">PAYMENT METHOD</label>
      <select id="checkoutPaymentMethod" style="width:100%;padding:10px;border-radius:10px;border:1px solid #cbd5e1;font-size:0.84rem;font-weight:600;">
        <option value="Cash on Delivery (COD)">💵 Cash on Delivery (COD)</option>
        <option value="Mada / Credit Card">💳 Mada / Credit Card</option>
        <option value="Apple Pay / STC Pay">📱 Apple Pay / STC Pay</option>
      </select>
    </div>
  `;

  footer.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:6px;font-size:0.84rem;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;"><span>Subtotal</span><strong>SAR ${subtotal.toFixed(2)}</strong></div>
      <div style="display:flex;justify-content:space-between;"><span>Delivery Fee (${state.location})</span><strong>SAR ${delivery.toFixed(2)}</strong></div>
      ${discount > 0 ? `<div style="display:flex;justify-content:space-between;color:#059669;"><span>Promo Discount (${state.promoCode.code})</span><strong>-SAR ${discount.toFixed(2)}</strong></div>` : ''}
      <div style="display:flex;justify-content:space-between;font-size:1.05rem;font-weight:900;color:#0f172a;padding-top:8px;border-top:1px solid #e2e8f0;">
        <span>Total</span><span style="color:#dc2626;">SAR ${total.toFixed(2)}</span>
      </div>
    </div>
    <button class="auth-submit-btn" onclick="placeOrder()">
      🚀 Place Order • SAR ${total.toFixed(2)}
    </button>
  `;
}

function placeOrder() {
  if (state.cart.length === 0) return;
  const { total } = calculateCartTotals();
  const paymentMethod = document.getElementById('checkoutPaymentMethod')?.value || 'Cash on Delivery';

  const newOrder = {
    id: Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [...state.cart],
    total,
    location: state.location,
    payment: paymentMethod,
    status: 'Preparing at Store',
    step: 2
  };

  state.orders.unshift(newOrder);
  state.cart = [];
  state.promoCode = null;
  saveState();
  renderHeaderState();
  closeCartDrawer();
  openOrdersDrawer();
  showToast(`Order #${newOrder.id} confirmed! Live rider assigned.`, '🛵');
}

// =========================================================
// LIVE ORDERS & TRACKING DRAWER
// =========================================================
function openOrdersDrawer() {
  renderOrdersDrawer();
  document.getElementById('ordersDrawerBackdrop').classList.add('open');
  document.getElementById('ordersDrawer').classList.add('open');
}

function closeOrdersDrawer() {
  document.getElementById('ordersDrawerBackdrop').classList.remove('open');
  document.getElementById('ordersDrawer').classList.remove('open');
}

function advanceOrderSimulation(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  const steps = ['Order Confirmed', 'Preparing at Store', 'Rider Picked Up (Live GPS)', 'Delivered — Enjoy!'];
  order.step = Math.min(4, (order.step || 2) + 1);
  order.status = steps[order.step - 1];
  saveState();
  renderOrdersDrawer();
  renderHeaderState();
  showToast(`Order #${order.id}: ${order.status}`, '📍');
}

function renderOrdersDrawer() {
  const body = document.getElementById('ordersDrawerBody');
  if (!body) return;

  if (state.orders.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:48px 16px;">
        <div style="font-size:3rem;margin-bottom:12px;">📦</div>
        <h4 style="font-size:1.05rem;font-weight:800;margin-bottom:6px;">No active orders yet</h4>
        <p style="font-size:0.84rem;color:#64748b;">When you place an order or book an airport ride, live GPS tracking appears right here.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = state.orders.map(o => `
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:16px;margin-bottom:16px;box-shadow:0 4px 12px rgba(0,0,0,0.03);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <strong style="font-size:0.92rem;">Order #${o.id}</strong>
        <span style="background:#ecfdf5;color:#047857;font-size:0.72rem;font-weight:800;padding:4px 10px;border-radius:999px;">● ${o.status}</span>
      </div>
      <div style="font-size:0.76rem;color:#64748b;margin-bottom:10px;">
        📍 ${o.location} • 🕒 ${o.date} • ${o.payment}
      </div>
      <div style="background:#f8fafc;padding:10px;border-radius:10px;font-size:0.8rem;margin-bottom:12px;">
        ${o.items.map(i => `<div>${i.qty}x ${i.name}</div>`).join('')}
        <div style="margin-top:6px;font-weight:800;color:#dc2626;">Total: SAR ${o.total.toFixed(2)}</div>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:10px;">
        ${[1, 2, 3, 4].map(stepNum => `
          <div style="flex:1;height:6px;border-radius:999px;background:${(o.step || 2) >= stepNum ? '#ea580c' : '#e2e8f0'};"></div>
        `).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.74rem;color:#475569;">🛵 Rider: Capt. Tariq (AlabIQ Fleet)</span>
        ${(o.step || 2) < 4 ? `<button class="btn-orange-pill" style="padding:5px 12px;font-size:0.72rem;" onclick="advanceOrderSimulation(${o.id})">Simulate Next Step →</button>` : `<span style="font-size:0.75rem;color:#059669;font-weight:800;">✓ Completed</span>`}
      </div>
    </div>
  `).join('');
}

// =========================================================
// RIDES & PICK-AND-DROP FARE ESTIMATOR (REFERENCE 4)
// =========================================================
function calculateRideFare() {
  const serviceType = document.getElementById('rideServiceType')?.value || 'airport';
  const distanceKm = parseFloat(document.getElementById('rideDistanceKm')?.value || '18');
  const baseFare = serviceType === 'airport' ? 45 : serviceType === 'package' ? 15 : 18;
  const perKm = serviceType === 'airport' ? 2.2 : 1.5;
  const estimated = Math.round(baseFare + distanceKm * perKm);

  const display = document.getElementById('rideFareResult');
  if (display) {
    display.textContent = `SAR ${estimated}.00`;
  }
  return estimated;
}

function bookRideNow(event) {
  event.preventDefault();
  const pickup = document.getElementById('ridePickupInput')?.value || 'Al Olaya, Riyadh';
  const dropoff = document.getElementById('rideDropoffInput')?.value || 'King Khalid International Airport (RUH)';
  const serviceSelect = document.getElementById('rideServiceType');
  const serviceLabel = serviceSelect?.options[serviceSelect.selectedIndex]?.text || 'Airport Transfer';
  const fare = calculateRideFare();

  const rideOrder = {
    id: Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [{ qty: 1, name: `${serviceLabel}: ${pickup} → ${dropoff}` }],
    total: fare,
    location: dropoff,
    payment: 'Fixed Upfront Fare',
    status: 'Driver En Route (6 mins away)',
    step: 3
  };

  state.orders.unshift(rideOrder);
  saveState();
  renderHeaderState();
  openOrdersDrawer();
  showToast(`Booked ${serviceLabel}! Upfront fare locked at SAR ${fare}.00`, '🚖');
}

// =========================================================
// AUTHENTICATION (REFERENCE 3 SPLIT-SCREEN)
// =========================================================
function toggleAuthMode() {
  state.authMode = state.authMode === 'signin' ? 'signup' : 'signin';
  const title = document.getElementById('authHeading');
  const sub = document.getElementById('authSubheading');
  const nameGroup = document.getElementById('authNameGroup');
  const submitBtn = document.getElementById('authSubmitBtn');
  const switchText = document.getElementById('authSwitchPrompt');

  if (state.authMode === 'signup') {
    title.textContent = 'Create account';
    sub.textContent = 'Join AlabIQ for fast food delivery, groceries & airport rides';
    nameGroup.style.display = 'block';
    submitBtn.innerHTML = '→ Create Account';
    switchText.innerHTML = `Already have an account? <span style="color:#ea580c;font-weight:800;cursor:pointer;" onclick="toggleAuthMode()">Sign In</span>`;
  } else {
    title.textContent = 'Sign in';
    sub.textContent = 'Enter your credentials to access your account';
    nameGroup.style.display = 'none';
    submitBtn.innerHTML = '→ Sign In';
    switchText.innerHTML = `Don't have an account? <span style="color:#ea580c;font-weight:800;cursor:pointer;" onclick="toggleAuthMode()">Sign Up</span>`;
  }
}

function togglePasswordVisibility() {
  const pwd = document.getElementById('authPasswordInput');
  if (!pwd) return;
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('authEmailInput').value.trim();
  const nameInput = document.getElementById('authNameInput')?.value.trim();
  const displayName = nameInput || email.split('@')[0] || 'AlabIQ Member';

  state.user = {
    name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
    email
  };
  saveState();
  renderHeaderState();
  showToast(`Welcome back to AlabIQ, ${state.user.name}!`, '👋');
  switchView('restaurants');
}

function logoutUser() {
  state.user = null;
  saveState();
  renderHeaderState();
  showToast('Signed out of your AlabIQ account.', '👋');
}

// =========================================================
// LOCATION MODAL & INTERACTIVE HOME WIDGETS
// =========================================================
function openLocationModal() {
  document.getElementById('locationModal').classList.add('open');
}

function closeLocationModal() {
  document.getElementById('locationModal').classList.remove('open');
}

function setDeliveryLocation(city) {
  state.location = city;
  saveState();
  renderHeaderState();
  closeLocationModal();
  showToast(`Delivery location updated to ${city}`, '📍');
}

function switchPhonePreview(mode) {
  document.querySelectorAll('.phone-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  const screen = document.getElementById('phoneScreenContent');
  if (!screen) return;

  if (mode === 'map') {
    screen.innerHTML = `
      <div style="padding:36px 16px 14px;background:#fff3eb;border-bottom:1px solid #fed7aa;">
        <span style="font-size:0.65rem;font-weight:800;color:#ea580c;">LIVE GPS TRACKING</span>
        <h4 style="font-size:0.95rem;font-weight:900;">Order #84920 • Black Pinoy</h4>
        <p style="font-size:0.72rem;color:#64748b;">Arriving in 14 mins • Riyadh Al Olaya</p>
      </div>
      <div style="flex:1;background:radial-gradient(circle at 30% 30%, #fff7ed, #f1f5f9);position:relative;display:flex;align-items:center;justify-content:center;">
        <svg width="220" height="220" viewBox="0 0 220 220">
          <path d="M 30 180 Q 95 120 185 45" stroke="#ea580c" stroke-width="4" stroke-dasharray="6 4" fill="none" />
          <circle cx="30" cy="180" r="9" fill="#0f172a" />
          <circle cx="185" cy="45" r="11" fill="#dc2626" />
          <circle cx="115" cy="105" r="14" fill="#ea580c" opacity="0.25" />
          <circle cx="115" cy="105" r="7" fill="#ea580c" />
        </svg>
        <div style="position:absolute;bottom:14px;left:14px;right:14px;background:#fff;padding:10px 12px;border-radius:14px;box-shadow:0 4px 14px rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:space-between;">
          <div>
            <strong style="font-size:0.76rem;display:block;">Capt. Fahad (We DeliveRED)</strong>
            <span style="font-size:0.68rem;color:#059669;">★ 4.98 • Honda Delivery Scooter</span>
          </div>
          <span style="background:#dcfce7;color:#166534;font-weight:800;font-size:0.68rem;padding:4px 8px;border-radius:999px;">On Time</span>
        </div>
      </div>
    `;
  } else {
    screen.innerHTML = `
      <div style="padding:36px 14px 10px;background:#fff;">
        <div style="background:#dc2626;color:#fff;border-radius:14px;padding:12px;margin-bottom:10px;">
          <span style="font-size:0.62rem;font-weight:800;opacity:0.9;">WE DELIVERED FAST</span>
          <h4 style="font-size:0.9rem;font-weight:900;">500+ Partners in Riyadh</h4>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${STORES.slice(0, 3).map(s => `
            <div onclick="openStoreModal('${s.id}')" style="cursor:pointer;display:flex;align-items:center;gap:10px;padding:8px;border:1px solid #e2e8f0;border-radius:12px;">
              <div style="width:38px;height:38px;border-radius:10px;background:${s.logoBg};color:${s.logoColor};display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:900;text-align:center;">
                ${s.name.slice(0, 6)}
              </div>
              <div style="flex:1;">
                <strong style="font-size:0.75rem;display:block;">${s.name}</strong>
                <span style="font-size:0.65rem;color:#64748b;">${s.cuisine} • ${s.deliveryTime}</span>
              </div>
              <span style="font-size:0.7rem;font-weight:800;color:#ea580c;">Order →</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}

function renderAll() {
  renderHeaderState();
  renderCategories();
  renderStores();
  renderProducts();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  switchPhonePreview('map');
  calculateRideFare();

  // Live search bar listener
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      if (state.currentView !== 'restaurants') {
        switchView('restaurants');
      } else {
        renderStores();
        renderProducts();
      }
    });
  }

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }
  });
});
