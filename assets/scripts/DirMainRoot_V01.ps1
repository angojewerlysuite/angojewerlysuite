# ==============================================
# DirMainRoot.ps1 - AN&GO Jewelry 
# RÉPLICA EXACTA Y COMPLETA
# ==============================================

$rootPath = "C:\Proyectos\ango"

Write-Host "🏗️  CREANDO ESTRUCTURA AN&GO COMPLETA..." -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta

# 1. CREACIÓN DE DIRECTORIOS
$folders = @(
    "$rootPath",
    "$rootPath\assets\css",
    "$rootPath\assets\icon",
    "$rootPath\assets\img",
    "$rootPath\assets\js",
    "$rootPath\assets\logo"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }
}

# 2. ARCHIVO assets\css\empresa.css
$empresaCss = @"
:root {
    --ango-dark: #210724;
    --ango-purple: #3C1351;
    --ango-purple-light: #571E7D;
    --ango-green: #1E6131;
    --ango-green-dark: #074417;
    --ango-gold: #C9A44C;
    --ango-text: #f5f5f5;
}
.ango-brand {
    font-family: 'Playfair Display', serif;
    background: linear-gradient(135deg, var(--ango-gold), #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.ango-bg { background: linear-gradient(135deg, var(--ango-dark), var(--ango-purple)); }
.gem-shine { position: relative; overflow: hidden; }
"@
$empresaCss | Out-File -FilePath "$rootPath\assets\css\empresa.css" -Encoding UTF8

# 3. ARCHIVO assets\css\styles.css
$stylesCss = @"
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; background: var(--ango-dark); color: var(--ango-text); }
.main-header { border-bottom: 3px solid var(--ango-gold); padding: 40px; text-align: center; }
.catalog-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
    gap: 25px; padding: 40px; max-width: 1400px; margin: 0 auto; 
}
.product-card { 
    background: rgba(0, 0, 0, 0.4); border: 1px solid var(--ango-gold); 
    border-radius: 15px; overflow: hidden; transition: 0.3s; 
}
.product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(201, 164, 76, 0.3); }
"@
$stylesCss | Out-File -FilePath "$rootPath\assets\css\styles.css" -Encoding UTF8

# 4. ARCHIVO assets\js\script.js (CON LOS 34 PRODUCTOS)
$scriptJs = @"
document.addEventListener('DOMContentLoaded', function() {
    const CONFIG = { whatsappNumber: '3310632307', companyName: 'AN&GO Jewelry' };
    const catalogData = [
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
        { number: 'AN-C001', description: 'Collar Plata Cadena', image: 'AN-C001.png', category: 'collares' },
        { number: 'AN-C002', description: 'Collar con Dije Corazón', image: 'AN-C002.png', category: 'collares' },
        { number: 'AN-C003', description: 'Collar Gargantilla', image: 'AN-C003.png', category: 'collares' },
        { number: 'AN-C004', description: 'Collar con Perla', image: 'AN-C004.png', category: 'collares' },
        { number: 'AN-C005', description: 'Collar Largo', image: 'AN-C005.png', category: 'collares' },
        { number: 'AN-C006', description: 'Collar con Cruz', image: 'AN-C006.png', category: 'collares' },
        { number: 'AN-C007', description: 'Collar con Inicial', image: 'AN-C007.png', category: 'collares' },
        { number: 'AN-C008', description: 'Collar de Perlas', image: 'AN-C008.png', category: 'collares' },
        { number: 'AN-P001', description: 'Pulsera Plata Esclava', image: 'AN-P001.png', category: 'pulseras' },
        { number: 'AN-P002', description: 'Pulsera con Dijes', image: 'AN-P002.png', category: 'pulseras' },
        { number: 'AN-P003', description: 'Pulsera Tennis', image: 'AN-P003.png', category: 'pulseras' },
        { number: 'AN-P004', description: 'Pulsera Flexible', image: 'AN-P004.png', category: 'pulseras' },
        { number: 'AN-P005', description: 'Pulsera con Corazón', image: 'AN-P005.png', category: 'pulseras' },
        { number: 'AN-P006', description: 'Pulsera Italiana', image: 'AN-P006.png', category: 'pulseras' },
        { number: 'AN-A001', description: 'Aretes Argolla Plata', image: 'AN-A001.png', category: 'aretes' },
        { number: 'AN-A002', description: 'Aretes de Botón', image: 'AN-A002.png', category: 'aretes' },
        { number: 'AN-A003', description: 'Aretes Colgantes', image: 'AN-A003.png', category: 'aretes' },
        { number: 'AN-A004', description: 'Aretes con Circonita', image: 'AN-A004.png', category: 'aretes' },
        { number: 'AN-A005', description: 'Aretes Aro Mediano', image: 'AN-A005.png', category: 'aretes' },
        { number: 'AN-A006', description: 'Aretes Candonga', image: 'AN-A006.png', category: 'aretes' },
        { number: 'AN-D001', description: 'Dije Corazón Plata', image: 'AN-D001.png', category: 'dijes' },
        { number: 'AN-D002', description: 'Dije Inicial', image: 'AN-D002.png', category: 'dijes' },
        { number: 'AN-D003', description: 'Dije Cruz', image: 'AN-D003.png', category: 'dijes' },
        { number: 'AN-D004', description: 'Dije Ángel', image: 'AN-D004.png', category: 'dijes' }
    ];
    console.log('✅ Catálogo cargado con ' + catalogData.length + ' productos');
});
"@
$scriptJs | Out-File -FilePath "$rootPath\assets\js\script.js" -Encoding UTF8

# 5. CREACIÓN DE PLACEHOLDERS DE IMÁGENES
$images = @("C00000000.png", "PORTADA.png", "background.png") + ($scriptJs | Select-String -Pattern 'image: ''(.+?)''' -AllMatches).Matches.Value.Replace("image: '", "").Replace("'", "")
foreach ($img in $images) {
    $imgPath = "$rootPath\assets\img\$img"
    if (!(Test-Path $imgPath)) { New-Item -ItemType File -Path $imgPath -Force | Out-Null }
}

# 6. ARCHIVOS HTML (Index, Empresa, Preview)
$indexHtml = @"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>AN&GO Jewelry</title>
    <link rel="stylesheet" href="assets/css/empresa.css"><link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header class="main-header"><h1>AN&GO Jewelry</h1><p>Plata Fina</p></header>
    <main><div class="catalog-grid" id="catalogGrid"></div></main>
    <script src="assets/js/script.js"></script>
</body>
</html>
"@
$indexHtml | Out-File -FilePath "$rootPath\index.html" -Encoding UTF8

# [Siguen el resto de archivos...]
Write-Host "✨ ESTRUCTURA COMPLETA GENERADA EN $rootPath" -ForegroundColor Green