// ==============================================
// script.js - MAGNO CENTRO JOYERO / ANGO JEWERLY SUITE
// ==============================================

// Configuración global
const CONFIG = {
    whatsappNumber: '3310632307',
    siteUrl: 'https://angojewerlysuite.github.io',
    companyName: 'MAGNO CENTRO JOYERO',
    useSubfolder: false
};


      //████████████████ostp████████████████████//

// ============================================
// FUNCIONES PRINCIPALES (siempre disponibles)
// ============================================

function showNotification(message, type = 'info') {
    // Eliminar notificación existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const bgColor = type === 'success' ? '#1E6131' : type === 'error' ? '#8B0000' : '#571E7D';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${bgColor};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    notification.innerHTML = `${icon} ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

      //████████████████ostp████████████████████//

// Función para detectar página actual
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || '';
    
    if (filename.includes('promo.html')) return 'promo';
    if (filename.includes('empresa.html')) return 'empresa';
    if (filename.includes('preview.html')) return 'preview';
    if (filename.includes('index.html') || filename === '' || filename === '/') return 'index';
    return 'index';
}

      //████████████████ostp████████████████████//

// ============================================
// CATÁLOGO PRINCIPAL (index.html)
// ============================================

const catalogData = [
    // ANILLOS (10)
    { number: 'AN-R001', description: 'Anillo Clásico Plata 925', image: 'AN-R001.png', category: 'anillos' },
    { number: 'AN-R002', description: 'Anillo Corazón con Circonita', image: 'AN-R002.png', category: 'anillos' },
    { number: 'AN-R003', description: 'Anillo Minimalista', image: 'AN-R003.png', category: 'anillos' },
    { number: 'AN-R004', description: 'Anillo Eslabón', image: 'AN-R004.png', category: 'anillos' },
    { number: 'AN-R005', description: 'Anillo Trenzado', image: 'AN-R005.png', category: 'anillos' },
    { number: 'AN-R006', description: 'Anillo Ancho', image: 'AN-R006.png', category: 'anillos' },
    { number: 'AN-R007', description: 'Anillo Delicado', image: 'AN-R007.png', category: 'anillos' },
    { number: 'AN-R008', description: 'Anillo Doble', image: 'AN-R008.png', category: 'anillos' },
    { number: 'AN-R009', description: 'Anillo Signature', image: 'AN-R009.png', category: 'anillos' },
    { number: 'AN-R010', description: 'Anillo Eternidad', image: 'AN-R010.png', category: 'anillos' },
    
    // COLLARES (8)
    { number: 'AN-C001', description: 'Collar Plata Cadena', image: 'AN-C001.png', category: 'collares' },
    { number: 'AN-C002', description: 'Collar con Dije Corazón', image: 'AN-C002.png', category: 'collares' },
    { number: 'AN-C003', description: 'Collar Gargantilla', image: 'AN-C003.png', category: 'collares' },
    { number: 'AN-C004', description: 'Collar con Perla', image: 'AN-C004.png', category: 'collares' },
    { number: 'AN-C005', description: 'Collar Largo', image: 'AN-C005.png', category: 'collares' },
    { number: 'AN-C006', description: 'Collar con Cruz', image: 'AN-C006.png', category: 'collares' },
    { number: 'AN-C007', description: 'Collar con Inicial', image: 'AN-C007.png', category: 'collares' },
    { number: 'AN-C008', description: 'Collar de Perlas', image: 'AN-C008.png', category: 'collares' },
    
    // PULSERAS (6)
    { number: 'AN-P001', description: 'Pulsera Plata Esclava', image: 'AN-P001.png', category: 'pulseras' },
    { number: 'AN-P002', description: 'Pulsera con Dijes', image: 'AN-P002.png', category: 'pulseras' },
    { number: 'AN-P003', description: 'Pulsera Tennis', image: 'AN-P003.png', category: 'pulseras' },
    { number: 'AN-P004', description: 'Pulsera Flexible', image: 'AN-P004.png', category: 'pulseras' },
    { number: 'AN-P005', description: 'Pulsera con Corazón', image: 'AN-P005.png', category: 'pulseras' },
    { number: 'AN-P006', description: 'Pulsera Italiana', image: 'AN-P006.png', category: 'pulseras' },
    
    // ARETES (6)
    { number: 'AN-A001', description: 'Aretes Argolla Plata', image: 'AN-A001.png', category: 'aretes' },
    { number: 'AN-A002', description: 'Aretes de Botón', image: 'AN-A002.png', category: 'aretes' },
    { number: 'AN-A003', description: 'Aretes Colgantes', image: 'AN-A003.png', category: 'aretes' },
    { number: 'AN-A004', description: 'Aretes con Circonita', image: 'AN-A004.png', category: 'aretes' },
    { number: 'AN-A005', description: 'Aretes Aro Mediano', image: 'AN-A005.png', category: 'aretes' },
    { number: 'AN-A006', description: 'Aretes Candonga', image: 'AN-A006.png', category: 'aretes' },
    
    // DIJES (4)
    { number: 'AN-D001', description: 'Dije Corazón Plata', image: 'AN-D001.png', category: 'dijes' },
    { number: 'AN-D002', description: 'Dije Inicial', image: 'AN-D002.png', category: 'dijes' },
    { number: 'AN-D003', description: 'Dije Cruz', image: 'AN-D003.png', category: 'dijes' },
    { number: 'AN-D004', description: 'Dije Ángel', image: 'AN-D004.png', category: 'dijes' }
];

      //████████████████ostp████████████████████//

// ============================================
// FUNCIONES PARA CATÁLOGO PRINCIPAL
// ============================================

function createWhatsAppMessage(item) {
    const encodedDesc = encodeURIComponent(item.description);
    const previewUrl = `${CONFIG.siteUrl}/preview.html?num=${item.number}&desc=${encodedDesc}&img=${item.image}&cat=${item.category}`;
    
    const message = `✨ MAGNO CENTRO JOYERO - SOLICITUD DE INFORMACIÓN ✨

━━━━━━━━━━━━━━━━━━━━━
💍 *PIEZA CONSULTADA:*
└─ ${item.description}

🆔 *CÓDIGO:* 
└─ ${item.number}

━━━━━━━━━━━━━━━━━━━━━
🔗 *VER IMAGEN:* 
${previewUrl}
━━━━━━━━━━━━━━━━━━━━━

⏱️ Fecha: ${new Date().toLocaleDateString('es-MX')}
📍 Tienda: MAGNO CENTRO JOYERO
📞 WhatsApp: 33 1063 2307

_🔍 Quedo atento a disponibilidad y precio_`;

    return encodeURIComponent(message);
}

      //████████████████ostp████████████████████//

function redirectToWhatsApp(item) {
    const cleanNumber = CONFIG.whatsappNumber.replace(/\D/g, '');
    const message = createWhatsAppMessage(item);
    const whatsappUrl = `https://wa.me/52${cleanNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    showNotification('✅ Consulta enviada a WhatsApp', 'success');
}

function handleWhatsAppClick(event) {
    const button = event.currentTarget;
    const partNumber = button.dataset.part;
    const item = catalogData.find(p => p.number === partNumber);
    
    if (item) {
        redirectToWhatsApp(item);
    } else {
        showNotification('❌ Error al generar la consulta', 'error');
    }
}

function filterCatalog(searchTerm) {
    const catalogGrid = document.querySelector('.catalog-grid');
    if (!catalogGrid) return;
    
    const cards = catalogGrid.querySelectorAll('.product-card');
    const term = searchTerm.toLowerCase().trim();
    
    cards.forEach(card => {
        const partNumber = card.querySelector('.part-number')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.part-description')?.textContent.toLowerCase() || '';
        card.style.display = (partNumber.includes(term) || description.includes(term)) ? 'flex' : 'none';
    });
}

function renderCatalog(data = catalogData) {
    const catalogGrid = document.querySelector('.catalog-grid');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', item.category || 'general');

        card.innerHTML = `
            <div class="product-image-frame">
                <div class="quantum-corner corner-1"></div>
                <div class="quantum-corner corner-2"></div>
                <div class="quantum-corner corner-3"></div>
                <div class="quantum-corner corner-4"></div>

                <div class="part-indicator">
                    <i class="fas fa-gem"></i> ${(item.category || 'general').toUpperCase()}
                </div>

                <div class="scale-bar"></div>

                <div class="image-container">
                    <img src="assets/img/${item.image}" 
                         alt="${item.description}"
                         loading="lazy"
                         onerror="this.src='assets/img/C00000000.png'">
                </div>

                <div class="image-overlay">
                    <span><i class="fas fa-expand-alt"></i> ${item.description.substring(0, 25)}${item.description.length > 25 ? '…' : ''}</span>
                </div>
            </div>

            <div class="product-info">
                <span class="part-number">${item.number}</span>
                <div class="part-description">${item.description}</div>
                
                <div class="part-location">
                    <i class="fas fa-store"></i>
                    <span>Disponible en tienda</span>
                    <span class="stock-badge">Consultar</span>
                </div>

                <button class="whatsapp-btn" data-part="${item.number}">
                    <i class="fab fa-whatsapp"></i> Info WhatsApp
                </button>
            </div>
        `;

        catalogGrid.appendChild(card);
    });

    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', handleWhatsAppClick);
    });
}

      //████████████████ostp████████████████████//

// ============================================
// FUNCIONES PARA PÁGINA PROMO (DÍA DE LAS MADRES)
// ============================================

const promoProducts = [
    {
        id: 'IP10A',
        code: 'IP10A',
        name: 'Dije Inicial Plata .925',
        category: 'iniciales',
        subcategory: 'dijes',
        weight: '4.1grs',
        price: 499,
        oldPrice: 589,
        image: 'assets/img/temporada/IP10A_4.1grs.jpeg',
        description: 'Dije de inicial en plata de ley .925',
        discount: 15,
        tags: ['inicial', 'personalizable', 'madres']
    },
    {
        id: 'IP10B',
        code: 'IP10B',
        name: 'Dije Nombre Completo',
        category: 'nombres',
        subcategory: 'dijes',
        weight: '5.2grs',
        price: 699,
        oldPrice: 825,
        image: 'assets/img/temporada/IP10A_4.1grs.jpeg',
        description: 'Dije personalizado con nombre hasta 7 letras',
        discount: 15,
        tags: ['nombre', 'personalizable', 'madres']
    },
    {
        id: 'FA01',
        code: 'FA01',
        name: 'Dije Corazón Familiar',
        category: 'familia',
        subcategory: 'dijes',
        weight: '3.8grs',
        price: 599,
        oldPrice: 705,
        image: 'assets/img/temporada/IP10A_4.1grs.jpeg',
        description: 'Corazón con espacio para iniciales de la familia',
        discount: 15,
        tags: ['corazon', 'familia', 'madres']
    },
    {
        id: 'CB01',
        code: 'CB01',
        name: 'Combo Mamá Primeriza',
        category: 'combos',
        subcategory: 'combos',
        price: 799,
        oldPrice: 1058,
        image: 'assets/img/temporada/IP10A_4.1grs.jpeg',
        description: 'Dije inicial mamá + dije bebé',
        discount: 24,
        tags: ['combo', 'primeriza', 'madres']
    },
    {
        id: 'CB02',
        code: 'CB02',
        name: 'Combo Familia',
        category: 'combos',
        subcategory: 'combos',
        price: 1299,
        oldPrice: 1767,
        image: 'assets/img/temporada/IP10A_4.1grs.jpeg',
        description: 'Mamá + 2 hijos (personalizable)',
        discount: 26,
        tags: ['combo', 'familia', 'madres']
    }
];

      //████████████████ostp████████████████████//

// Verificar si preview viene de promo
function checkPreviewSource() {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const productId = urlParams.get('id');
    
    if (from === 'promo' && productId) {
        console.log('Preview abierto desde promo, producto:', productId);
        
        setTimeout(() => {
            const partNumber = document.getElementById('part-number');
            if (partNumber && partNumber.textContent.includes(productId)) {
                const badge = document.querySelector('.badge');
                if (badge) {
                    badge.innerHTML = '🌸 OFERTA DÍA DE LAS MADRES 🌸';
                    badge.style.background = '#ff6b6b';
                    badge.style.color = 'white';
                }
            }
        }, 500);
    }
}

      //████████████████ostp████████████████████//

// Generar grid de iniciales A-Z
function generateInitialsGrid() {
    const grid = document.querySelector('.initials-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const item = document.createElement('div');
        item.className = 'initial-item';
        item.textContent = letter;
        item.dataset.letter = letter;
        
        item.addEventListener('click', function() {
            document.querySelectorAll('.initial-item').forEach(el => {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
            updatePreview(this.dataset.letter);
        });
        
        grid.appendChild(item);
    }
}

      //████████████████ostp████████████████████//

function updatePreview(letter) {
    const select = document.getElementById('initialSelector');
    if (select) {
        select.value = letter;
    }
    
    const preview = document.querySelector('.preview-image');
    if (preview) {
        preview.style.transform = 'scale(1.05)';
        setTimeout(() => {
            preview.style.transform = 'scale(1)';
        }, 200);
    }
}

      //████████████████ostp████████████████████//

function setupInitialSelector() {
    const select = document.getElementById('initialSelector');
    if (!select) return;
    
    select.innerHTML = '<option value="">Selecciona una inicial</option>';
    
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const option = document.createElement('option');
        option.value = letter;
        option.textContent = `Inicial ${letter}`;
        select.appendChild(option);
    }
    
    select.addEventListener('change', function() {
        const letter = this.value;
        if (letter) {
            document.querySelectorAll('.initial-item').forEach(el => {
                el.classList.toggle('selected', el.dataset.letter === letter);
            });
        }
    });
}

      //████████████████ostp████████████████████//

function setupPromoFilters() {
    const pills = document.querySelectorAll('.promo-pills .pill');
    
    pills.forEach(pill => {
        pill.addEventListener('click', function(e) {
            e.preventDefault();
            
            pills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            if (this.classList.contains('home-pill')) {
                window.location.href = 'index.html';
                return;
            }
            
            filterPromoProducts(filter);
            
            const section = document.querySelector('.promo-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

      //████████████████ostp████████████████████//

function filterPromoProducts(category) {
    const filtered = category === 'todos' 
        ? promoProducts 
        : promoProducts.filter(p => p.category === category);
    
    displayPromoProducts(filtered);
    
    if (filtered.length === 0) {
        showNotification(`🌸 No hay productos en ${category}`, 'info');
    }
}

      //████████████████ostp████████████████████//

function displayPromoProducts(products) {
    const container = document.getElementById('promo-products-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const card = createPromoProductCard(product);
        container.appendChild(card);
    });
}

      //████████████████ostp████████████████████//

function createPromoProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card promo-card';
    card.dataset.id = product.id;
    
    const discount = product.oldPrice ? 
        Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ''}
            <button class="quick-view" onclick="quickView('${product.id}')">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-code">${product.code} | ${product.weight || ''}</p>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.oldPrice ? 
                    `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
            </div>
            ${product.category === 'iniciales' || product.category === 'nombres' ?
                `<button class="personalize-btn" onclick="personalizeProduct('${product.id}')">
                    <i class="fas fa-pen"></i> PERSONALIZAR
                </button>` :
                `<button class="add-to-cart" onclick="addToCartPromo('${product.id}')">
                    <i class="fas fa-shopping-cart"></i> AGREGAR
                </button>`
            }
        </div>
    `;
    
    return card;
}

      //████████████████ostp████████████████████//

function setupComboButtons() {
    document.querySelectorAll('.combo-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const combo = this.closest('.combo-card');
            const comboName = combo.querySelector('h4').textContent;
            
            this.innerHTML = '✓ AGREGADO <i class="fas fa-check"></i>';
            this.style.background = '#4CAF50';
            this.style.borderColor = '#4CAF50';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.innerHTML = 'LO QUIERO';
                this.style.background = 'transparent';
                this.style.color = 'var(--ango-gold)';
            }, 2000);
            
            showNotification(`🌸 Combo "${comboName}" agregado`, 'success');
        });
    });
}

      //████████████████ostp████████████████████//

window.personalizeProduct = function(productId) {
    const product = promoProducts.find(p => p.id === productId);
    if (!product) return;
    
    showPersonalizationModal(product);
};

      //████████████████ostp████████████████████//

function showPersonalizationModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal personalization-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h2><i class="fas fa-pen-fancy"></i> Personalizar ${product.name}</h2>
            <div class="personalization-form">
                <div class="form-group">
                    <label>¿Qué inicial o nombre deseas?</label>
                    <input type="text" id="personalizationText" 
                           placeholder="Ej: M, ANA, MARÍA" maxlength="7">
                </div>
                <div class="form-group">
                    <label>Tipo de grabado</label>
                    <select id="engravingType">
                        <option value="standard">Estándar</option>
                        <option value="cursive">Cursiva</option>
                        <option value="bold">Negrita</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Mensaje adicional (opcional)</label>
                    <textarea id="extraMessage" placeholder="Ej: Te quiero mamá" rows="2"></textarea>
                </div>
                <button class="add-to-cart-btn" onclick="confirmPersonalization('${product.id}')">
                    CONFIRMAR PERSONALIZACIÓN
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

      //████████████████ostp████████████████████//

window.confirmPersonalization = function(productId) {
    const text = document.getElementById('personalizationText')?.value;
    if (!text) {
        alert('🌸 Por favor ingresa la inicial o nombre');
        return;
    }
    
    const product = promoProducts.find(p => p.id === productId);
    const engravingType = document.getElementById('engravingType')?.value || 'standard';
    const extraMessage = document.getElementById('extraMessage')?.value || '';
    
    let engravingText = '';
    switch(engravingType) {
        case 'cursive': engravingText = 'cursiva'; break;
        case 'bold': engravingText = 'negrita'; break;
        default: engravingText = 'estándar';
    }
    
    const message = encodeURIComponent(
        `🌸 Hola, me interesa personalizar el *${product.name}* (Código: ${productId})\n` +
        `🔤 Texto: *${text}*\n` +
        `✍️ Tipo de grabado: *${engravingText}*\n` +
        `${extraMessage ? `💬 Mensaje: ${extraMessage}\n` : ''}` +
        `Quedo atento a disponibilidad y precio final.`
    );
    
    window.open(`https://wa.me/52${CONFIG.whatsappNumber}?text=${message}`, '_blank');
    
    showNotification(`✅ Consulta enviada para "${text}"`, 'success');
    document.querySelector('.modal')?.remove();
};

      //████████████████ostp████████████████████//

window.addToCartPromo = function(productId) {
    const product = promoProducts.find(p => p.id === productId);
    if (!product) return;
    
    const message = encodeURIComponent(
        `✨ Hola, me interesa la pieza *${product.name}* (Código: ${productId}) de la colección Día de las Madres. ¿Me puedes dar el precio y disponibilidad?`
    );
    
    window.open(`https://wa.me/52${CONFIG.whatsappNumber}?text=${message}`, '_blank');
    
    showNotification(`🌸 Redirigiendo a WhatsApp...`, 'success');
};

      //████████████████ostp████████████████████//

window.quickView = function(productId) {
    const product = promoProducts.find(p => p.id === productId);
    if (!product) return;
    
    const previewUrl = `preview.html?num=${product.code}&desc=${encodeURIComponent(product.name)}&img=temporada/IP10A_4.1grs.jpeg&cat=${product.category}&from=promo&id=${productId}`;
    
    window.location.href = previewUrl;
};

      //████████████████ostp████████████████████//

window.shareOnWhatsApp = function(productId) {
    const product = promoProducts.find(p => p.id === productId);
    if (!product) return;
    
    const message = encodeURIComponent(
        `✨ Hola, vi la pieza *${product.name}* (Código: ${product.code}) en el catálogo de MAGNO CENTRO JOYERO y me interesa. Quedo atento a disponibilidad y precio.`
    );
    
    window.open(`https://wa.me/52${CONFIG.whatsappNumber}?text=${message}`, '_blank');
};

      //████████████████ostp████████████████████//

function loadPromoProducts() {
    const container = document.getElementById('promo-products-grid');
    if (container) {
        displayPromoProducts(promoProducts);
    }
}

      //████████████████ostp████████████████████//

function initPromoPage() {
    console.log('🌸 Inicializando página Día de las Madres');
    
    if (document.querySelector('.initials-grid')) {
        generateInitialsGrid();
    }
    
    if (document.querySelector('.promo-pills')) {
        setupPromoFilters();
    }
    
    if (document.getElementById('initialSelector')) {
        setupInitialSelector();
    }
    
    if (document.querySelector('.combo-btn')) {
        setupComboButtons();
    }
    
    loadPromoProducts();
}

      //████████████████ostp████████████████████//

// ============================================
// INICIALIZACIÓN ÚNICA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const page = getCurrentPage();
    console.log('📍 Página detectada:', page);
    
    // Agregar estilos de animación
    addAnimationStyles();
    
    // Inicializar según la página
    switch(page) {
        case 'promo':
            initPromoPage();
            break;
        case 'preview':
            checkPreviewSource();
            break;
        case 'index':
            renderCatalog();
            
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => filterCatalog(e.target.value));
            }
            
            setTimeout(() => {
                showNotification('👋 Bienvenido a MAGNO CENTRO JOYERO', 'info');
            }, 1000);
            break;
        case 'empresa':
            // Código específico para empresa
            break;
    }

      //████████████████ostp████████████████████//
    
    // Función global para copiar dirección
    window.copyAddress = function() {
        const address = "Dionisio Rodríguez. 14, P. Hospicio 22, Local 31 B, 44360 Guadalajara, Jal.";
        navigator.clipboard.writeText(address).then(() => {
            showNotification("📍 Dirección copiada", "success");
        }).catch(() => {
            showNotification("❌ Error al copiar", "error");
        });
    };
    
    console.log(`✅ ${CONFIG.companyName} - Script inicializado correctamente`);
});

      //████████████████ostp████████████████████//

// ============================================
// ESTILOS ADICIONALES
// ============================================

function addAnimationStyles() {
    // Verificar si ya existen
    if (document.getElementById('animation-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            animation: slideIn 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }
        
        .modal.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #1a1a1a, #000);
            padding: 30px;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            border: 2px solid #C9A44C;
            position: relative;
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 1.5rem;
            cursor: pointer;
            color: #C9A44C;
        }
        
        .personalization-form {
            margin-top: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #C9A44C;
            font-size: 0.9rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(201,164,76,0.3);
            border-radius: 8px;
            color: white;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            border-color: #C9A44C;
            outline: none;
        }
        
        .initial-item {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(201,164,76,0.2);
            border-radius: 10px;
            font-size: 1.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .initial-item:hover,
        .initial-item.selected {
            background: #C9A44C;
            color: #000;
            border-color: transparent;
            transform: scale(1.05);
        }
        
        .discount-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: #ff6b6b;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 2;
        }
        
        .quick-view {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: #C9A44C;
            border: 1px solid #C9A44C;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s;
            z-index: 2;
        }
        
        .quick-view:hover {
            background: #C9A44C;
            color: #000;
        }
        
        .personalize-btn,
        .add-to-cart {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .personalize-btn {
            background: #C9A44C;
            color: #000;
        }
        
        .add-to-cart {
            background: transparent;
            border: 2px solid #C9A44C;
            color: #C9A44C;
        }
        
        .add-to-cart:hover {
            background: #C9A44C;
            color: #000;
        }
    `;
    
    document.head.appendChild(style);
}

      //████████████████ostp████████████████████//
