// ==============================================
// script.js - MAGNO CENTRO JOYERO / ANGO JEWERLY SUITE
// ==============================================

document.addEventListener('DOMContentLoaded', function() {

    const CONFIG = {
        whatsappNumber: '3310632307',
        siteUrl: 'https://angojewerlysuite.github.io',
        companyName: 'MAGNO CENTRO JOYERO',
        useSubfolder: false
    };

    const catalogGrid = document.querySelector('.catalog-grid');
    const searchInput = document.getElementById('searchInput');

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

    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) existingNotification.remove();

        const notification = document.createElement('div');
        notification.className = 'notification';
        
        const bgColor = type === 'success' ? '#1E6131' : '#571E7D';
        
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
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function filterCatalog(searchTerm) {
        if (!catalogGrid) return;
        const cards = catalogGrid.querySelectorAll('.product-card');
        const term = searchTerm.toLowerCase().trim();
        
        cards.forEach(card => {
            const partNumber = card.querySelector('.part-number')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.part-description')?.textContent.toLowerCase() || '';
            card.style.display = (partNumber.includes(term) || description.includes(term)) ? 'flex' : 'none';
        });
    }

    window.copyAddress = function() {
        const address = "Dionisio Rodríguez. 14, P. Hospicio 22, Local 31 B, 44360 Guadalajara, Jal.";
        navigator.clipboard.writeText(address).then(() => {
            showNotification("📍 Dirección copiada", "success");
        }).catch(() => {
            showNotification("❌ Error al copiar", "error");
        });
    };

    function renderCatalog(data = catalogData) {
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

    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    function init() {
        addAnimationStyles();
        renderCatalog();
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => filterCatalog(e.target.value));
        }
        
        setTimeout(() => {
            showNotification('👋 Bienvenido a MAGNO CENTRO JOYERO', 'info');
        }, 1000);
        
        console.log('✅ Catálogo MAGNO CENTRO JOYERO listo');
    }

    init();
});