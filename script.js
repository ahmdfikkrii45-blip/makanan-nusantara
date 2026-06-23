// ===== CITA RASA NUSANTARA - JAVASCRIPT ===== //

// ===== SHOPPING CART FUNCTIONALITY =====
let cart = [];

function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
        id: Date.now()
    };
    
    cart.push(item);
    updateCartCount();
    showNotification(`${productName} ditambahkan ke keranjang!`);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
        // Animate the cart
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #04A777 0%, #0077B6 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideInUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== PRODUCT FILTER =====
function filterProducts(region) {
    const products = document.querySelectorAll('[data-region]');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter products
    products.forEach(product => {
        if (region === 'all') {
            product.style.display = 'block';
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transform = 'scale(1)';
            }, 10);
        } else if (product.dataset.region === region) {
            product.style.display = 'block';
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transform = 'scale(1)';
            }, 10);
        } else {
            product.style.opacity = '0';
            product.style.transform = 'scale(0.95)';
            setTimeout(() => {
                product.style.display = 'none';
            }, 300);
        }
    });
}

// ===== SEARCH FUNCTIONALITY =====
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const products = document.querySelectorAll('[data-region]');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const region = product.querySelector('.region').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || region.includes(searchTerm) || searchTerm === '') {
            product.style.display = 'block';
            product.style.opacity = '1';
            product.style.transform = 'scale(1)';
        } else {
            product.style.opacity = '0';
            product.style.transform = 'scale(0.95)';
            setTimeout(() => {
                product.style.display = 'none';
            }, 300);
        }
    });
}

// ===== FILTER BY REGION FROM HOME PAGE =====
function filterByRegion(region) {
    // Navigate to products page and filter
    window.location.href = `products.html?region=${region}`;
}

// ===== NEWSLETTER SUBSCRIPTION =====
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Validate email
    if (!email) {
        alert('Silakan masukkan email Anda!');
        return;
    }
    
    // Simulate subscription
    showNotification('Terima kasih! Anda telah berlangganan newsletter kami.');
    event.target.reset();
}

// ===== CONTACT FORM SUBMISSION =====
function submitContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert('Silakan isi semua field yang diperlukan!');
        return;
    }
    
    // Simulate form submission
    showNotification('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
    event.target.reset();
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Check if there's a region parameter in URL
    const params = new URLSearchParams(window.location.search);
    const region = params.get('region');
    
    if (region && document.querySelector('.filter-btn')) {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            if (btn.textContent.toLowerCase().includes(region)) {
                btn.click();
            }
        });
    }
    
    // Add scroll animation to elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.product-card, .feature, .mission-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ===== CART ICON CLICK HANDLER =====
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Keranjang Anda masih kosong!');
            } else {
                let cartSummary = 'Keranjang Anda:\n\n';
                let total = 0;
                cart.forEach((item, index) => {
                    cartSummary += `${index + 1}. ${item.name} - Rp ${item.price.toLocaleString('id-ID')}\n`;
                    total += item.price;
                });
                cartSummary += `\nTotal: Rp ${total.toLocaleString('id-ID')}`;
                alert(cartSummary + '\n\nSilakan hubungi kami untuk proses checkout!');
            }
        });
    }
});

// ===== ADD SMOOTH TRANSITIONS =====
const style = document.createElement('style');
style.textContent = `
    * {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .product-card {
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-8px);
    }
`;
document.head.appendChild(style);

// ===== MOBILE MENU HANDLER =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// ===== ACTIVE LINK BASED ON CURRENT PAGE =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== LAZY LOADING FOR IMAGES & EMOJIS =====
function lazyLoadImages() {
    const images = document.querySelectorAll('[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

console.log('✅ Cita Rasa Nusantara - Website berhasil dimuat!');
