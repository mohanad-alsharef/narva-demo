/* ===== NARVA WEBSITE JAVASCRIPT ===== */

// Language support
let currentLanguage = 'en';

// Product data from the CSV file
const products = [
  {
    id: 'narva-leather',
    name: 'NARVA Leather',
    nameAr: 'نارفا ليذر',
    tagline: 'Bold. Smooth. Unforgettable.',
    taglineAr: 'جريء. ناعم. لا يُنسى.',
    description: 'Narva Leather is where luxury meets daring spirit. Raspberry and saffron blend with a spark of pink pepper, leading to smooth leather, iris, and cedarwood. The finish of vanilla and musk leaves a bold yet inviting trail.',
    topNotes: 'Raspberry, Saffron, Pink Pepper',
    heartNotes: 'Leather, Iris, Cedarwood',
    baseNotes: 'Vanilla, Musk',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/narva-leather-1.jpg'
  },
  {
    id: 'narva-ouda',
    name: 'NARVA Ouda',
    nameAr: 'نارفا اودا',
    tagline: 'Opulent. Exotic. Captivating.',
    taglineAr: 'فاخر. شرقي. آسر.',
    description: 'Narva Ouda is a journey into deep oriental luxury. Passion fruit and exotic fruits meet saffron and Turkish rose, unfolding into rich oud, Indonesian patchouli, and benzoin. The warm base of leather, Akigalawood, amber, vanilla, and labdanum lingers irresistibly.',
    topNotes: 'Passion Fruit, Fruity Notes, Saffron, Turkish Rose',
    heartNotes: 'Oud, Indonesian Patchouli, Benzoin',
    baseNotes: 'Leather, Akigalawood, Amber, Vanilla, Labdanum',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/narva-ouda-1.jpg'
  },
  {
    id: 'yano',
    name: 'Yano',
    nameAr: 'يانو',
    tagline: 'Fresh. Playful. Uplifting.',
    taglineAr: 'منعش. مرح. مبهج.',
    description: 'Yano bursts with citrusy yuzu, lemon, and pear, softened by orange blossom. The heart of heliotrope and passion flower adds a floral playfulness, resting on musk, sandalwood, amber, and cedar for a balanced, uplifting scent.',
    topNotes: 'Orange Blossom, Yuzu, Lemon, Pear',
    heartNotes: 'Heliotrope, Passion Flower',
    baseNotes: 'Musk, Sandalwood, Amber, Cedarwood',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/yanu-1.jpg'
  },
  {
    id: 'narva-miro',
    name: 'NARVA Miro',
    nameAr: 'نارفا ميرو',
    tagline: 'Bright. Sweet. Comforting.',
    taglineAr: 'مشرق. حلو. مريح.',
    description: 'Narva Miro opens with zesty orange, bergamot, and lemon, leading to a juicy fruit heart. The base of white musk, amber, and Madagascan vanilla gives it a smooth, comforting finish.',
    topNotes: 'Orange, Bergamot, Lemon',
    heartNotes: 'Fruity Notes',
    baseNotes: 'White Musk, Amber, Madagascan Vanilla',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/narva-miro-1.jpg'
  },
  {
    id: 'narva-layla',
    name: 'NARVA Layla',
    nameAr: 'نارفا ليلى',
    tagline: 'Elegant. Feminine. Radiant.',
    taglineAr: 'أنيق. أنثوي. متألق.',
    description: 'Narva Layla blends orange blossom and bergamot with a heart of tuberose and Indian jasmine. The base of Madagascan vanilla, white musk, and Virginia cedar adds elegance and depth.',
    topNotes: 'Orange Blossom, Bergamot',
    heartNotes: 'Tuberose, Indian Jasmine',
    baseNotes: 'Madagascan Vanilla, White Musk, Virginia Cedar',
    size: '100ml – Eau de Parfum',
    gender: 'For Her',
    image: './assets/compress-images/1Z1A4975.jpg'
  },
  {
    id: 'narva-mano',
    name: 'NARVA Mano',
    nameAr: 'نارفا مانو',
    tagline: 'Warm. Spicy. Distinctive.',
    taglineAr: 'دافئ. حار. مميز.',
    description: 'Narva Mano opens with pink pepper, neroli, and lemon, revealing a heart of rum, Javanese vetiver, and sage. The base of tobacco leaves, vanilla, and styrax gives a smoky, sweet depth.',
    topNotes: 'Pink Pepper, Neroli, Lemon',
    heartNotes: 'Rum, Javanese Vetiver, Sage',
    baseNotes: 'Tobacco Leaves, Vanilla, Styrax',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/narva-mano-1.jpg'
  },
  {
    id: 'jona',
    name: 'Jona',
    nameAr: 'جونا',
    tagline: 'Floral. Bright. Joyful.',
    taglineAr: 'زهري. مشرق. مبهج.',
    description: 'Jona combines orange, mandarin, bergamot, and orange blossom with a floral heart of Turkish rose, jasmine, mimosa, and ylang-ylang. The base of patchouli, white musk, vanilla, vetiver, tonka bean, and galbanum adds richness.',
    topNotes: 'Orange, Mandarin, Bergamot, Orange Blossom',
    heartNotes: 'Turkish Rose, Jasmine, Mimosa, Ylang-Ylang',
    baseNotes: 'Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean, Galbanum',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/juna-1.jpg'
  },
  {
    id: 'omaro',
    name: 'Omaro',
    nameAr: 'اومارو',
    tagline: 'Fresh. Masculine. Confident.',
    taglineAr: 'منعش. رجولي. واثق.',
    description: 'Omaro opens with pineapple, bergamot, blackcurrant, and apple. The heart reveals birch wood, patchouli, Moroccan jasmine, and rose. A masculine base of musk, oakmoss, ambergris, and vanilla lingers with confidence.',
    topNotes: 'Pineapple, Bergamot, Blackcurrant, Apple',
    heartNotes: 'Birch Wood, Patchouli, Moroccan Jasmine, Rose',
    baseNotes: 'Musk, Oakmoss, Ambergris, Vanilla',
    size: '100ml – Eau de Parfum',
    gender: 'For Him',
    image: './assets/compress-images/umaro-1.jpg'
  },
  {
    id: 'narva-lodi',
    name: 'NARVA Lodi',
    nameAr: 'نارفا لودي',
    tagline: 'Unique. Cool. Leathered.',
    taglineAr: 'مميز. بارد. جلدي.',
    description: 'Narva Lodi blends Damascena absolute and spearmint oil for a cool start, evolving into cassis, ambrette seed absolute, and cinnamon oil. The base of vanilla and leather gives it an edgy finish.',
    topNotes: 'Damascena Absolute, Spearmint Oil',
    heartNotes: 'Cassis, Ambrette Seed Absolute, Cinnamon Oil',
    baseNotes: 'Vanilla, Leather',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/narva-lody-1.jpg'
  },
  {
    id: 'gravition',
    name: 'Gravition',
    nameAr: 'جرافيشن',
    tagline: 'Energetic. Crisp. Inviting.',
    taglineAr: 'مفعم بالطاقة. منعش. جذاب.',
    description: 'Gravition opens with pineapple, grapefruit, and bergamot, followed by cedarwood, patchouli, and jasmine. The base of oakmoss and woods creates an earthy freshness.',
    topNotes: 'Pineapple, Grapefruit, Bergamot',
    heartNotes: 'Cedarwood, Patchouli, Jasmine',
    baseNotes: 'Oakmoss, Woods',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/1Z1A4980.jpg'
  },
  {
    id: 'narva-ziza',
    name: 'NARVA Ziza',
    nameAr: 'نارفازيزا',
    tagline: 'Sweet. Floral. Charming.',
    taglineAr: 'حلو. زهري. ساحر.',
    description: 'Narva Ziza blends raspberry, lemon, and neroli with a romantic heart of rose. The base of vanilla, musk, and amberwood leaves a soft, charming trail.',
    topNotes: 'Raspberry, Lemon, Neroli',
    heartNotes: 'Rose',
    baseNotes: 'Vanilla, Musk, Amberwood',
    size: '100ml – Eau de Parfum',
    gender: 'Unisex',
    image: './assets/compress-images/1Z1A4985.jpg'
  }
];

/* ===== DOM ELEMENTS ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const faqItems = document.querySelectorAll('.faq__item');
const collectionGrid = document.getElementById('collection-grid');
const languageToggle = document.getElementById('language-toggle');
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const contactForm = document.getElementById('contact-form');

/* ===== SHOPPING CART ===== */
let cart = JSON.parse(localStorage.getItem('narva-cart')) || [];

/* ===== MOBILE NAVIGATION ===== */
function initMobileNavigation() {
  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navToggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('show-menu');
      navToggle.classList.remove('active');
    }
  });
}

/* ===== SMOOTH SCROLLING & ACTIVE NAVIGATION ===== */
function initSmoothScrolling() {
  // Handle navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop && 
          window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-link');
      }
    });
  });
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  faqItems.forEach(item => {
    const header = item.querySelector('.faq__header');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  });
}

/* ===== PRODUCT GRID LOADING ===== */
function loadProducts() {
  if (!collectionGrid) return;
  
  // Show loading state
  collectionGrid.innerHTML = '<div class="loading">Loading products...</div>';
  
  // Simulate loading delay for better UX
  setTimeout(() => {
    collectionGrid.innerHTML = '';
    
    products.forEach((product, index) => {
      const productCard = createProductCard(product);
      collectionGrid.appendChild(productCard);
      
      // Stagger animations
      setTimeout(() => {
        productCard.style.opacity = '1';
        productCard.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 500);
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product__card';
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  
  card.innerHTML = `
    <div class="product__image">
      <img src="${product.image}" alt="${product.name}" class="product__img" loading="lazy">
    </div>
    <div class="product__content">
      <h3 class="product__name">${product.name}</h3>
      <p class="product__tagline">${product.tagline}</p>
      <p class="product__notes">
        <strong>${currentLanguage === 'ar' ? 'البداية:' : 'Top:'}</strong> ${product.topNotes}<br>
        <strong>${currentLanguage === 'ar' ? 'القلب:' : 'Heart:'}</strong> ${product.heartNotes}<br>
        <strong>${currentLanguage === 'ar' ? 'القاعدة:' : 'Base:'}</strong> ${product.baseNotes}
      </p>
      <p class="product__description">${product.description}</p>
      <div class="product__price">$$299.00</div>
      <div class="product__actions">
        <button class="btn btn--primary btn--small" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
          ${currentLanguage === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart'}
        </button>
        <button class="btn btn--secondary btn--small" onclick="showProductModal(${JSON.stringify(product).replace(/"/g, '&quot;')})">
          ${currentLanguage === 'ar' ? 'عرض التفاصيل' : 'View Details'}
        </button>
      </div>
    </div>
  `;
  
  // Add hover effects
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
  
  return card;
}

/* ===== HEADER SCROLL EFFECT ===== */
function initHeaderScroll() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });
}

/* ===== INTERSECTION OBSERVER FOR ANIMATIONS ===== */
function initScrollAnimations() {
  if (!window.IntersectionObserver) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.featured__card, .about__feature');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

/* ===== IMAGE LAZY LOADING FALLBACK ===== */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

/* ===== ERROR HANDLING ===== */
function handleImageError(img) {
  img.style.display = 'none';
  const placeholder = document.createElement('div');
  placeholder.className = 'image-placeholder';
  placeholder.textContent = 'Image not available';
  placeholder.style.cssText = `
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;
  `;
  img.parentNode.appendChild(placeholder);
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', () => handleImageError(img));
  });
});

/* ===== PERFORMANCE OPTIMIZATION ===== */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounce scroll events
const debouncedScrollHandler = debounce(() => {
  // Handle scroll events here if needed
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

/* ===== LANGUAGE SWITCHING ===== */
function initLanguageSwitching() {
  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
    localStorage.setItem('narva-language', currentLanguage);
  });
  
  // Load saved language preference
  const savedLanguage = localStorage.getItem('narva-language');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    updateLanguage();
  }
}

function updateLanguage() {
  // Update document direction
  document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
  
  // Update language toggle
  languageToggle.setAttribute('data-current', currentLanguage);
  
  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-en][data-ar]');
  translatableElements.forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });
  
  // Update cart count
  updateCartCount();
}

/* ===== SHOPPING CART FUNCTIONS ===== */
function initShoppingCart() {
  cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('open');
  });
  
  cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
  });
  
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      alert(currentLanguage === 'ar' ? 'سيتم توجيهك إلى صفحة الدفع' : 'Redirecting to checkout...');
      // Here you would integrate with your payment processor
    } else {
      alert(currentLanguage === 'ar' ? 'السلة فارغة' : 'Cart is empty');
    }
  });
  
  // Close cart when clicking outside
  document.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
      cartSidebar.classList.remove('open');
    }
  });
  
  updateCartCount();
  renderCart();
}

function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      price: 299 // Default price in USD
    });
  }
  
  saveCart();
  updateCartCount();
  renderCart();
  
  // Show success message
  const message = currentLanguage === 'ar' ? 'تم إضافة المنتج إلى السلة' : 'Product added to cart';
  showNotification(message, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      saveCart();
      updateCartCount();
      renderCart();
    }
  }
}

function saveCart() {
  localStorage.setItem('narva-cart', JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">${currentLanguage === 'ar' ? 'السلة فارغة' : 'Cart is empty'}</p>`;
    cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        <div class="cart-item-quantity">
          <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
        ${currentLanguage === 'ar' ? 'حذف' : 'Remove'}
      </button>
    </div>
  `).join('');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

/* ===== PRODUCT MODAL ===== */
function initProductModal() {
  modalClose.addEventListener('click', () => {
    productModal.classList.remove('show');
  });
  
  // Close modal when clicking outside
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      productModal.classList.remove('show');
    }
  });
}

function showProductModal(product) {
  modalBody.innerHTML = `
    <div class="product-modal-content">
      <div class="product-modal-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-modal-details">
        <h2>${product.name}</h2>
        <p class="product-modal-tagline">${product.tagline}</p>
        <div class="product-modal-notes">
          <h3>${currentLanguage === 'ar' ? 'الرائحة' : 'Fragrance Notes'}</h3>
          <p><strong>${currentLanguage === 'ar' ? 'البداية:' : 'Top:'}</strong> ${product.topNotes}</p>
          <p><strong>${currentLanguage === 'ar' ? 'القلب:' : 'Heart:'}</strong> ${product.heartNotes}</p>
          <p><strong>${currentLanguage === 'ar' ? 'القاعدة:' : 'Base:'}</strong> ${product.baseNotes}</p>
        </div>
        <p class="product-modal-description">${product.description}</p>
        <div class="product-modal-price">$$299.00</div>
        <div class="product-modal-actions">
          <button class="btn btn--primary" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
            ${currentLanguage === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart'}
          </button>
          <button class="btn btn--secondary" onclick="productModal.classList.remove('show')">
            ${currentLanguage === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  `;
  
  productModal.classList.add('show');
}

/* ===== NOTIFICATIONS ===== */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would send the form data to your backend
    console.log('Contact form submitted:', data);
    
    const message = currentLanguage === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully';
    showNotification(message, 'success');
    
    contactForm.reset();
  });
}

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🌟 NARVA Website Loaded');
  
  // Initialize all features
  initMobileNavigation();
  initSmoothScrolling();
  initFAQ();
  initHeaderScroll();
  initScrollAnimations();
  initLazyLoading();
  initLanguageSwitching();
  initShoppingCart();
  initProductModal();
  initContactForm();
  loadProducts();
  
  // Add loading complete class
  document.body.classList.add('loaded');
});

/* ===== ACCESSIBILITY ENHANCEMENTS ===== */
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('active');
  }
});

// Focus management for FAQ
faqItems.forEach(item => {
  const header = item.querySelector('.faq__header');
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      header.click();
    }
  });
});

/* ===== EXPORT FOR TESTING ===== */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products,
    createProductCard,
    debounce
  };
}
