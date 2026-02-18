# ==============================================
# DirMainRoot.ps1 - AN&GO Jewelry
# RÉPLICA EXACTA DE LA ESTRUCTURA HUNK160R
# ==============================================

Write-Host "🏗️  CREANDO ESTRUCTURA AN&GO (RÉPLICA HUNK160R)..." -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta

$rootPath = "C:\Proyectos\ango"

# ==============================================
# CREAR TODAS LAS CARPETAS (ESTRUCTURA IDÉNTICA)
# ==============================================
Write-Host "`n📁 CREANDO DIRECTORIOS..." -ForegroundColor Cyan

$folders = @(
    # Raíz y subcarpetas principales
    "$rootPath",
    "$rootPath\assets",
    "$rootPath\assets\css",
    "$rootPath\assets\icon",
    "$rootPath\assets\img",
    "$rootPath\assets\js",
    "$rootPath\assets\logo"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "  ✅ Creada: $folder" -ForegroundColor Green
    } else {
        Write-Host "  ⏩ Ya existe: $folder" -ForegroundColor Yellow
    }
}

# ==============================================
# ARCHIVOS CSS (empresa.css y styles.css)
# ==============================================
Write-Host "`n📄 CREANDO ARCHIVOS CSS..." -ForegroundColor Cyan

$empresaCss = @"
/* ==============================================
   empresa.css - AN&GO Jewelry
   Estilos específicos de la marca
   ============================================== */

:root {
    --ango-dark: #210724;      /* fondo principal */
    --ango-purple: #3C1351;    /* secciones */
    --ango-purple-light: #571E7D; /* botones */
    --ango-green: #1E6131;     /* mayoristas */
    --ango-green-dark: #074417; /* botones secundarios */
    --ango-gold: #C9A44C;      /* acentos dorados */
    --ango-text: #f5f5f5;
}

/* Estilos base de la marca */
.ango-brand {
    font-family: 'Playfair Display', serif;
    background: linear-gradient(135deg, var(--ango-gold), #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.ango-border {
    border: 2px solid var(--ango-gold);
    box-shadow: 0 0 20px rgba(201, 164, 76, 0.3);
}

.ango-bg {
    background: linear-gradient(135deg, var(--ango-dark), var(--ango-purple));
}

/* Efectos de joya */
.gem-shine {
    position: relative;
    overflow: hidden;
}

.gem-shine::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
}
"@

$empresaCss | Out-File -FilePath "$rootPath\assets\css\empresa.css" -Encoding utf8
Write-Host "  ✅ Creado: assets\css\empresa.css" -ForegroundColor Green

$stylesCss = @"
/* ==============================================
   styles.css - AN&GO Jewelry
   Estilos generales del catálogo
   ============================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--ango-dark);
    color: var(--ango-text);
    min-height: 100vh;
    position: relative;
}

/* Header */
.main-header {
    background: linear-gradient(135deg, var(--ango-dark), var(--ango-purple));
    border-bottom: 3px solid var(--ango-gold);
    padding: 40px 20px;
    text-align: center;
}

/* Grid de productos */
.catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    padding: 40px 20px;
    max-width: 1400px;
    margin: 0 auto;
}

/* Tarjetas de producto */
.product-card {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid var(--ango-gold);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(201, 164, 76, 0.3);
    border-color: var(--ango-gold);
}

/* Responsive */
@media (max-width: 768px) {
    .catalog-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        padding: 20px 10px;
    }
}

@media (max-width: 480px) {
    .catalog-grid {
        grid-template-columns: 1fr;
    }
}
"@

$stylesCss | Out-File -FilePath "$rootPath\assets\css\styles.css" -Encoding utf8
Write-Host "  ✅ Creado: assets\css\styles.css" -ForegroundColor Green

# ==============================================
# FAVICON (archivo vacío .ico)
# ==============================================
$favicon = "assets\icon\favicon.ico"
if (!(Test-Path "$rootPath\$favicon")) {
    New-Item -ItemType File -Path "$rootPath\$favicon" -Force | Out-Null
    Write-Host "  ✅ Creado: $favicon" -ForegroundColor Green
}

# ==============================================
# ARCHIVOS JS (script.js)
# ==============================================
$scriptJs = @"
// ==============================================
// script.js - AN&GO Jewelry
// Catálogo interactivo con WhatsApp
// ==============================================

document.addEventListener('DOMContentLoaded', function() {

    const CONFIG = {
        whatsappNumber: '3310632307',
        siteUrl: window.location.origin,
        companyName: 'AN&GO Jewelry'
    };

    // Datos del catálogo (34 productos como Hunk)
    const catalogData = [
        // Anillos (10)
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
        
        // Collares (8)
        { number: 'AN-C001', description: 'Collar Plata Cadena', image: 'AN-C001.png', category: 'collares' },
        { number: 'AN-C002', description: 'Collar con Dije Corazón', image: 'AN-C002.png', category: 'collares' },
        { number: 'AN-C003', description: 'Collar Gargantilla', image: 'AN-C003.png', category: 'collares' },
        { number: 'AN-C004', description: 'Collar con Perla', image: 'AN-C004.png', category: 'collares' },
        { number: 'AN-C005', description: 'Collar Largo', image: 'AN-C005.png', category: 'collares' },
        { number: 'AN-C006', description: 'Collar con Cruz', image: 'AN-C006.png', category: 'collares' },
        { number: 'AN-C007', description: 'Collar con Inicial', image: 'AN-C007.png', category: 'collares' },
        { number: 'AN-C008', description: 'Collar de Perlas', image: 'AN-C008.png', category: 'collares' },
        
        // Pulseras (6)
        { number: 'AN-P001', description: 'Pulsera Plata Esclava', image: 'AN-P001.png', category: 'pulseras' },
        { number: 'AN-P002', description: 'Pulsera con Dijes', image: 'AN-P002.png', category: 'pulseras' },
        { number: 'AN-P003', description: 'Pulsera Tennis', image: 'AN-P003.png', category: 'pulseras' },
        { number: 'AN-P004', description: 'Pulsera Flexible', image: 'AN-P004.png', category: 'pulseras' },
        { number: 'AN-P005', description: 'Pulsera con Corazón', image: 'AN-P005.png', category: 'pulseras' },
        { number: 'AN-P006', description: 'Pulsera Italiana', image: 'AN-P006.png', category: 'pulseras' },
        
        // Aretes (6)
        { number: 'AN-A001', description: 'Aretes Argolla Plata', image: 'AN-A001.png', category: 'aretes' },
        { number: 'AN-A002', description: 'Aretes de Botón', image: 'AN-A002.png', category: 'aretes' },
        { number: 'AN-A003', description: 'Aretes Colgantes', image: 'AN-A003.png', category: 'aretes' },
        { number: 'AN-A004', description: 'Aretes con Circonita', image: 'AN-A004.png', category: 'aretes' },
        { number: 'AN-A005', description: 'Aretes Aro Mediano', image: 'AN-A005.png', category: 'aretes' },
        { number: 'AN-A006', description: 'Aretes Candonga', image: 'AN-A006.png', category: 'aretes' },
        
        // Dijes (4)
        { number: 'AN-D001', description: 'Dije Corazón Plata', image: 'AN-D001.png', category: 'dijes' },
        { number: 'AN-D002', description: 'Dije Inicial', image: 'AN-D002.png', category: 'dijes' },
        { number: 'AN-D003', description: 'Dije Cruz', image: 'AN-D003.png', category: 'dijes' },
        { number: 'AN-D004', description: 'Dije Ángel', image: 'AN-D004.png', category: 'dijes' }
    ];

    console.log('✅ Catálogo AN&GO cargado con', catalogData.length, 'productos');
});
"@

$scriptJs | Out-File -FilePath "$rootPath\assets\js\script.js" -Encoding utf8
Write-Host "  ✅ Creado: assets\js\script.js" -ForegroundColor Green

# ==============================================
# ARCHIVOS DE IMAGEN (placeholders vacíos)
# ==============================================
Write-Host "`n🖼️  CREANDO ARCHIVOS DE IMAGEN PLACEHOLDER..." -ForegroundColor Cyan

# Lista de imágenes necesarias (34 como en Hunk)
$images = @(
    "C00000000.png", "C00000001.png", "AN-R001.png", "AN-R002.png", "AN-R003.png",
    "AN-R004.png", "AN-R005.png", "AN-R006.png", "AN-R007.png", "AN-R008.png",
    "AN-R009.png", "AN-R010.png", "AN-C001.png", "AN-C002.png", "AN-C003.png",
    "AN-C004.png", "AN-C005.png", "AN-C006.png", "AN-C007.png", "AN-C008.png",
    "AN-P001.png", "AN-P002.png", "AN-P003.png", "AN-P004.png", "AN-P005.png",
    "AN-P006.png", "AN-A001.png", "AN-A002.png", "AN-A003.png", "AN-A004.png",
    "AN-A005.png", "AN-A006.png", "AN-D001.png", "AN-D002.png", "AN-D003.png",
    "AN-D004.png", "PORTADA.png", "background.png", "background01.png"
)

foreach ($img in $images) {
    $imgPath = "$rootPath\assets\img\$img"
    if (!(Test-Path $imgPath)) {
        New-Item -ItemType File -Path $imgPath -Force | Out-Null
    }
}
Write-Host "  ✅ Creados 40+ archivos de imagen placeholder" -ForegroundColor Green

# ==============================================
# ARCHIVOS DE LOGO
# ==============================================
$logos = @(
    "ango_logo.png",
    "ango_logo01.png",
    "ango_logo02.png"
)

foreach ($logo in $logos) {
    $logoPath = "$rootPath\assets\logo\$logo"
    if (!(Test-Path $logoPath)) {
        New-Item -ItemType File -Path $logoPath -Force | Out-Null
    }
}
Write-Host "  ✅ Creados archivos de logo" -ForegroundColor Green

# ==============================================
# ARCHIVOS HTML PRINCIPALES
# ==============================================
Write-Host "`n📄 CREANDO ARCHIVOS HTML..." -ForegroundColor Cyan

# index.html (placeholder)
$indexHtml = @'
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AN&GO Jewelry - Plata Fina</title>
    <link rel="icon" type="image/x-icon" href="assets/icon/favicon.ico">
    <link rel="stylesheet" href="assets/css/empresa.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header class="main-header">
        <img src="assets/logo/ango_logo.png" alt="AN&GO" style="width: 150px;">
        <h1>AN&GO Jewelry</h1>
        <p>Plata fina · Diseño único</p>
    </header>

    <main>
        <div class="catalog-grid" id="catalogGrid"></div>
    </main>

    <script src="assets/js/script.js"></script>
</body>
</html>
'@

$indexHtml | Out-File -FilePath "$rootPath\index.html" -Encoding utf8
Write-Host "  ✅ Creado: index.html" -ForegroundColor Green

# empresa.html (placeholder)
$empresaHtml = @'
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AN&GO - Nuestra Empresa</title>
    <link rel="stylesheet" href="assets/css/empresa.css">
</head>
<body>
    <div class="ango-brand">
        <h1>AN&GO Jewelry</h1>
        <p>Excelencia en plata desde 2024</p>
    </div>
</body>
</html>
'@

$empresaHtml | Out-File -FilePath "$rootPath\empresa.html" -Encoding utf8
Write-Host "  ✅ Creado: empresa.html" -ForegroundColor Green

# preview.html (placeholder)
$previewHtml = @'
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vista Previa AN&GO</title>
    <meta property="og:title" content="AN&GO Jewelry">
    <meta property="og:description" content="Plata fina mexicana">
    <meta property="og:image" content="">
    <meta property="og:type" content="product">
</head>
<body>
    <h1>Vista Previa de Producto</h1>
    <div id="product-preview"></div>
    <script>
        // Parámetros de URL
        const params = new URLSearchParams(window.location.search);
        document.getElementById('product-preview').innerHTML = `
            <h2>${params.get('num') || 'AN000'}</h2>
            <p>${decodeURIComponent(params.get('desc') || 'Producto AN&GO')}</p>
            <img src="assets/img/${params.get('img') || 'PORTADA.png'}" style="max-width:300px;">
        `;
    </script>
</body>
</html>
'@

$previewHtml | Out-File -FilePath "$rootPath\preview.html" -Encoding utf8
Write-Host "  ✅ Creado: preview.html" -ForegroundColor Green

# ==============================================
# RESUMEN FINAL
# ==============================================
Write-Host "`n========================================" -ForegroundColor Magenta
Write-Host "✅ ESTRUCTURA AN&GO COMPLETADA!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "📂 RUTA: $rootPath" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 ESTRUCTURA CREADA:" -ForegroundColor Cyan
Write-Host "  📁 ango/"
Write-Host "  ├── 📁 assets/"
Write-Host "  │   ├── 📁 css/"
Write-Host "  │   │   ├── 📄 empresa.css"
Write-Host "  │   │   └── 📄 styles.css"
Write-Host "  │   ├── 📁 icon/"
Write-Host "  │   │   └── 📄 favicon.ico"
Write-Host "  │   ├── 📁 img/"
Write-Host "  │   │   ├── 📄 (40+ archivos png)"
Write-Host "  │   │   └── 📄 PORTADA.png"
Write-Host "  │   ├── 📁 js/"
Write-Host "  │   │   └── 📄 script.js"
Write-Host "  │   └── 📁 logo/"
Write-Host "  │       ├── 📄 ango_logo.png"
Write-Host "  │       ├── 📄 ango_logo01.png"
Write-Host "  │       └── 📄 ango_logo02.png"
Write-Host "  ├── 📄 index.html"
Write-Host "  ├── 📄 empresa.html"
Write-Host "  └── 📄 preview.html"
Write-Host ""
Write-Host "🚀 PRÓXIMO PASO: Reemplazar los archivos placeholder" -ForegroundColor Yellow
Write-Host "   con el contenido real de AN&GO" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Magenta
'@

# Ejecutar el script
Write-Host "⚡ EJECUTANDO..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
Write-Host "✨ ESTRUCTURA CREADA EXITOSAMENTE EN C:\Proyectos\ango" -ForegroundColor Green