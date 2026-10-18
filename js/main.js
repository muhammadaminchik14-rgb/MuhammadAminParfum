// ================================================================
// PERFUME SHOP — Скрипт интернет-магазина парфюмерии
// ================================================================

/* ---------- Изображения: настоящие фото товаров + чёрно-золотой SVG ---------- */
// Настоящие фото ароматов (images/products/pNN.jpg). Для подарочных наборов — золотой SVG-бокс.
const productPhotos = {};
for (let i = 1; i <= 50; i++) {
    productPhotos[i] = 'images/products/p' + String(i).padStart(2, '0') + '.jpg';
}

function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// Силуэты флаконов (пропорции) — 4 варианта
const bottleShapes = [
    { bw: 168, bh: 204, br: 26, nw: 44, nh: 34, cw: 64, ch: 46, cr: 10 },
    { bw: 150, bh: 232, br: 66, nw: 40, nh: 30, cw: 54, ch: 40, cr: 8 },
    { bw: 192, bh: 176, br: 16, nw: 36, nh: 46, cw: 72, ch: 34, cr: 6 },
    { bw: 124, bh: 250, br: 58, nw: 34, nh: 30, cw: 48, ch: 54, cr: 24 }
];

// Уникальный чёрно-золотой SVG-визуал: флакон для ароматов, бокс для наборов
function goldSVG(p, variant) {
    variant = variant || 0;
    const s = bottleShapes[(p.id + variant) % bottleShapes.length];
    const k = (p.id * 7 + variant * 3);
    const g1 = ['#fdebd0', '#f9e79f', '#f7dc6f'][k % 3];
    const g2 = ['#f4d03f', '#f1c40f', '#e6b800'][k % 3];
    const g3 = ['#b7950b', '#9c640c', '#8a6d0a'][k % 3];
    const bg = ['#1a1a1e', '#16161a', '#121216'][k % 3];
    const cx = 400, cy = 452;
    const bodyY = cy - s.bh / 2;
    const neckY = bodyY - s.nh;
    const capY = neckY - s.ch;
    const initial = esc((p.brand || '?').replace(/^The\s+/i, '').charAt(0).toUpperCase());
    const nameShort = esc(p.name.length > 24 ? p.name.slice(0, 23) + '…' : p.name);
    let art = '';
    if (p.type === 'box') {
        // Подарочный бокс с лентой и бантами
        const w = 310 + (k % 3) * 34, h = 190 + (k % 2) * 46;
        const x = cx - w / 2, y = cy - h / 2 + 10;
        art =
`<g>
<rect x='${x}' y='${y + 48}' width='${w}' height='${h}' rx='14' fill='url(#gold)'/>
<rect x='${x - 16}' y='${y}' width='${w + 32}' height='58' rx='13' fill='url(#gold)'/>
<rect x='${cx - 17}' y='${y}' width='34' height='${h + 48}' fill='#141414' opacity='0.5'/>
<ellipse cx='${cx - 46}' cy='${y - 18}' rx='46' ry='27' fill='url(#gold)' transform='rotate(-20 ${cx - 46} ${y - 18})'/>
<ellipse cx='${cx + 46}' cy='${y - 18}' rx='46' ry='27' fill='url(#gold)' transform='rotate(20 ${cx + 46} ${y - 18})'/>
<circle cx='${cx}' cy='${y - 4}' r='17' fill='url(#gold)' stroke='#141414' stroke-width='2' opacity='0.85'/>
<text x='${cx}' y='${y + 48 + h / 2 + 14}' font-family='Georgia,serif' font-weight='bold' font-size='46' fill='#141414' text-anchor='middle' opacity='0.7'>${initial}</text>
</g>`;
    } else {
        art =
`<g>
<rect x='${cx - s.cw / 2}' y='${capY}' width='${s.cw}' height='${s.ch}' rx='${s.cr}' fill='url(#gold)'/>
<rect x='${cx - s.nw / 2}' y='${neckY}' width='${s.nw}' height='${s.nh}' fill='url(#gold)' opacity='0.85'/>
<rect x='${cx - s.bw / 2}' y='${bodyY}' width='${s.bw}' height='${s.bh}' rx='${s.br}' fill='url(#gold)'/>
<rect x='${cx - s.bw / 2 + 18}' y='${bodyY + 18}' width='${s.bw - 36}' height='${s.bh - 36}' rx='${Math.max(6, s.br - 8)}' fill='none' stroke='#0a0a0c' stroke-width='2' opacity='0.35'/>
<text x='${cx}' y='${bodyY + s.bh / 2 + 10}' font-family='Georgia,serif' font-weight='bold' font-size='${Math.min(52, Math.round(s.bw / 3))}' fill='#141414' text-anchor='middle' opacity='0.7'>${initial}</text>
</g>`;
    }
    const svg =
`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
<defs>
<radialGradient id='bg' cx='50%' cy='28%' r='85%'><stop offset='0%' stop-color='${bg}'/><stop offset='100%' stop-color='#08080a'/></radialGradient>
<linearGradient id='gold' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${g1}'/><stop offset='50%' stop-color='${g2}'/><stop offset='100%' stop-color='${g3}'/></linearGradient>
<linearGradient id='gl' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='${g2}'/><stop offset='100%' stop-color='${g3}'/></linearGradient>
</defs>
<rect width='800' height='800' fill='url(#bg)'/>
<text x='400' y='486' font-family='Georgia,serif' font-size='380' fill='url(#gold)' opacity='0.07' text-anchor='middle'>${initial}</text>
<rect x='44' y='44' width='712' height='712' rx='10' fill='none' stroke='url(#gl)' stroke-width='2' opacity='0.55'/>
<rect x='58' y='58' width='684' height='684' rx='6' fill='none' stroke='url(#gl)' stroke-width='1' opacity='0.28'/>
${art}
<text x='400' y='706' font-family='Georgia,serif' font-weight='bold' font-size='38' fill='url(#gl)' text-anchor='middle'>${esc(p.brand)}</text>
<text x='400' y='746' font-family='Arial,sans-serif' font-size='22' fill='#c9b458' text-anchor='middle'>${nameShort}</text>
</svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Главное изображение товара
function getImage(p) {
    return p.image || goldSVG(p);
}

// Запасное изображение при ошибке загрузки фото
window.onImgError = function (img) {
    img.onerror = null;
    const p = products.find(x => x.id === Number(img.dataset.pid));
    if (p) img.src = goldSVG(p);
};

/* ---------- Запасное изображение (для фото категорий и страниц) ---------- */
function imgFallback(img) {
    if (!img || img.dataset.fb) return;
    img.dataset.fb = '1';
    const label = String(img.alt || 'PARFUM').slice(0, 28);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
<defs>
<radialGradient id="bg" cx="50%" cy="28%" r="85%"><stop offset="0%" stop-color="#1a1a1e"/><stop offset="100%" stop-color="#08080a"/></radialGradient>
<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fdebd0"/><stop offset="50%" stop-color="#f4d03f"/><stop offset="100%" stop-color="#b7950b"/></linearGradient>
</defs>
<rect width="800" height="800" fill="url(#bg)"/>
<rect x="44" y="44" width="712" height="712" rx="10" fill="none" stroke="url(#gold)" stroke-width="2" opacity="0.55"/>
<rect x="58" y="58" width="684" height="684" rx="6" fill="none" stroke="url(#gold)" stroke-width="1" opacity="0.28"/>
<text x="400" y="380" font-family="Georgia,serif" font-size="120" fill="url(#gold)" opacity="0.9" text-anchor="middle">✦</text>
<text x="400" y="470" font-family="Arial,sans-serif" font-size="30" fill="#c9b458" text-anchor="middle">${esc(label)}</text>
</svg>`;
    img.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
}
window.imgFallback = imgFallback;

/* ---------- Валюта: узбекский сум (UZS) ---------- */
// Базовые цены заданы условно; пересчитываем в реалистичные сумы
const UZS_FACTOR = 130;
function roundNice(n) { return Math.round(n / 10000) * 10000; }
function fmt(n) { return Math.round(n).toLocaleString('ru-RU') + (typeof getLang === 'function' && getLang() === 'uz' ? ' soʻm' : ' сўм'); }
window.fmt = fmt;

/* ---------- Исходные данные: 50 парфюмов + 20 боксов ---------- */
/* [name, brand, category, price, oldPrice, volume, rating, popularity, description] */
const srcProducts = [
    // === Женские парфюмы (20) ===
    ['Coco Mademoiselle', 'Chanel', 'women', 8990, 10500, 50, 4.8, 980, 'Свежий и чувственный аромат с нотами апельсина, розы и пачули.'],
    ["J'adore", 'Dior', 'women', 8500, null, 50, 4.7, 940, 'Сияющий цветочный букет с жасмином, розой и орхидеей.'],
    ['Black Opium', 'Yves Saint Laurent', 'women', 7990, 8900, 50, 4.6, 890, 'Энергичный аромат с нотами кофе, ванили и белых цветов.'],
    ['Bloom', 'Gucci', 'women', 8790, null, 50, 4.5, 760, 'Нежный цветочный букет с туберозой, жасмином и плющом.'],
    ['La Vie Est Belle', 'Lancôme', 'women', 7690, 8500, 50, 4.6, 870, 'Счастливый аромат с ирисом, жасмином и апельсиновым цветом.'],
    ['Daisy', 'Marc Jacobs', 'women', 7290, null, 50, 4.3, 640, 'Игривый аромат с земляникой, фиалкой и жасмином.'],
    ['No 5', 'Chanel', 'women', 12500, null, 100, 4.9, 920, 'Легендарный аромат с альдегидами, жасмином и ванилью.'],
    ['Miss Dior', 'Dior', 'women', 8900, null, 50, 4.7, 850, 'Романтический цветочный аромат с розой и мускусом.'],
    ['Born in Roma', 'Valentino', 'women', 7490, 8200, 50, 4.5, 710, 'Смелый аромат с жасмином, ванилью и кедром.'],
    ['Candy', 'Prada', 'women', 6990, null, 50, 4.4, 580, 'Сладкий карамельный аромат с мускусом и бензоином.'],
    ['Her', 'Burberry', 'women', 7890, null, 50, 4.5, 620, 'Фруктовый аромат с малиной, жасмином и мускусом.'],
    ['Good Girl', 'Carolina Herrera', 'women', 7590, 8300, 50, 4.6, 790, 'Соблазнительный аромат с туберозой, кофе и какао.'],
    ['Sexy Amber', 'Michael Kors', 'women', 5990, null, 50, 4.2, 380, 'Тёплый аромат с амбром, сандалом и жасмином.'],
    ['Floral', 'Coach', 'women', 5490, null, 50, 4.3, 410, 'Весенний аромат с туберозой, розой и грушей.'],
    ['Jimmy Choo', 'Jimmy Choo', 'women', 5790, null, 50, 4.2, 360, 'Элегантный аромат с тоей, орхидеей и кашмераном.'],
    ['Light Blue', 'Dolce & Gabbana', 'women', 6890, null, 50, 4.5, 670, 'Средиземноморский аромат с яблоком, жасмином и кедром.'],
    ['Omnia Crystalline', 'Bvlgari', 'women', 7290, null, 65, 4.4, 520, 'Прозрачный аромат с лотосом, чаем и мускусом.'],
    ['Live Irrésistible', 'Givenchy', 'women', 6590, null, 50, 4.3, 430, 'Яркий аромат с розой, пачули и мандарином.'],
    ['For Her', 'Narciso Rodriguez', 'women', 6990, null, 50, 4.5, 590, 'Шипровый аромат с мускусом, розой и ванилью.'],
    ['Peony Blush Suede', 'Jo Malone', 'women', 9800, null, 50, 4.6, 680, 'Изящный аромат с пионом, яблоком и кожей.'],

    // === Мужские парфюмы (20) ===
    ['Sauvage', 'Dior', 'men', 7490, null, 100, 4.7, 990, 'Свежий пряный аромат с бергамотом и амброксаном.'],
    ['Bleu de Chanel', 'Chanel', 'men', 8490, 9200, 100, 4.7, 960, 'Древесный аромат с сандалом, кедром и мускусом.'],
    ['Acqua di Gio Profumo', 'Giorgio Armani', 'men', 9190, 9900, 75, 4.8, 900, 'Морской аромат с бергамотом, ладаном и пачули.'],
    ['Eros', 'Versace', 'men', 6990, 7800, 100, 4.4, 820, 'Страстный аромат с мятой, яблоком и ванилью.'],
    ['Le Male', 'Jean Paul Gaultier', 'men', 6790, 7300, 125, 4.5, 770, 'Классика с мятой, лавандой и ванилью.'],
    ['1 Million', 'Paco Rabanne', 'men', 6590, null, 100, 4.3, 730, 'Дерзкий аромат с кожей, розой и корицей.'],
    ['Luna Rossa', 'Prada', 'men', 7290, null, 100, 4.4, 610, 'Свежий аромат с лавандой, нероли и ветивером.'],
    ['Bottled', 'Hugo Boss', 'men', 5890, null, 100, 4.2, 540, 'Деловой аромат с яблоком, мускусом и сандалом.'],
    ['Eternity', 'Calvin Klein', 'men', 5490, null, 100, 4.1, 480, 'Свежий аромат с лавандой, грейпфрутом и кедром.'],
    ['Polo Blue', 'Ralph Lauren', 'men', 6290, null, 125, 4.3, 500, 'Свободный аромат с базиликом, дыней и мускусом.'],
    ['The One', 'Dolce & Gabbana', 'men', 7190, null, 100, 4.5, 660, 'Тёплый аромат с амбром, имбиром и табаком.'],
    ['Man in Black', 'Bvlgari', 'men', 6890, null, 60, 4.4, 530, 'Мощный аромат с ромом, кожей и табаком.'],
    ['Gentleman', 'Givenchy', 'men', 6990, null, 100, 4.3, 560, 'Изысканный аромат с бергамотом, ирисом и пачули.'],
    ['Wanted', 'Azzaro', 'men', 5990, null, 100, 4.2, 450, 'Дерзкий аромат с лимоном, ванилью и табаком.'],
    ['Uomo', 'Valentino', 'men', 6890, null, 100, 4.4, 580, 'Современный аромат с кофе, ванилью и кедром.'],
    ['Brit', 'Burberry', 'men', 5790, null, 100, 4.1, 470, 'Сдержанный аромат с бергамотом, миндалём и ветивером.'],
    ['Red Aoud', 'Montale', 'men', 9900, null, 100, 4.5, 490, 'Восточный аромат с удом, розой и специями.'],
    ['Aventus', 'Creed', 'men', 24900, null, 100, 4.9, 720, 'Элитарный аромат с ананасом, яблоком и мускусом.'],
    ['Michael Kors for Men', 'Michael Kors', 'men', 5290, null, 100, 4.0, 340, 'Тёплый аромат с табаком, сандалом и амбром.'],
    ['212 VIP Men', 'Carolina Herrera', 'men', 5990, null, 80, 4.2, 430, 'Ночной аромат с водкой, имбиром и кожей.'],

    // === Унисекс парфюмы (10) ===
    ['Black Orchid', 'Tom Ford', 'unisex', 12900, 14500, 50, 4.9, 810, 'Роскошный аромат чёрной орхидеи, трюфеля и черной смородины.'],
    ['Jazz Club', 'Maison Margiela', 'unisex', 11900, null, 100, 4.9, 690, 'Аромат джаз-клуба: ром, табак, ваниль и коричневый сахар.'],
    ['Santal 33', 'Le Labo', 'unisex', 15900, null, 50, 4.8, 740, 'Культовый сандал с кедром, кардамоном и кожей.'],
    ['Molecule 01', 'Escentric Molecules', 'unisex', 7900, null, 100, 4.5, 620, 'Минималистичный аромат на молекуле Iso E Super.'],
    ['Zadig & Voltaire', 'Zadig & Voltaire', 'unisex', 6500, null, 50, 4.3, 450, 'Свободный аромат с ванилью, жасмином и кашмером.'],
    ['Quelques Fleurs', 'Houbigant', 'unisex', 8900, null, 100, 4.4, 380, 'Исторический цветочный букет с туберозой и лилией.'],
    ['By the Fireplace', 'Maison Margiela', 'unisex', 10900, null, 100, 4.8, 730, 'Уютный аромат у камина: ваниль, костровые и кашмира.'],
    ['Tobacco Vanille', 'Tom Ford', 'unisex', 16900, null, 50, 4.8, 780, 'Роскошный табачный аромат с ванилью и какао.'],
    ['Another 13', 'Le Labo', 'unisex', 14900, null, 50, 4.7, 610, 'Загадочный амбровый аромат с мускусом и ирисом.'],
    ['Silver Mountain Water', 'Creed', 'unisex', 18900, null, 100, 4.8, 650, 'Кристальный аромат горного источника с бергамотом.'],

    // === Боксы / наборы (20) ===
    ["J'adore Gift Set", 'Dior', 'box', 11900, 14000, 50, 4.7, 640, 'Подарочный набор J\'adore: духи 50 мл + миниатюры.'],
    ['Coco Mademoiselle Box', 'Chanel', 'box', 13900, null, 50, 4.8, 720, 'Элегантный набор Coco Mademoiselle в подарочной упаковке.'],
    ['Sauvage Gift Set', 'Dior', 'box', 10900, 12500, 100, 4.7, 810, 'Набор Sauvage: парфюм 100 мл + гель для душа.'],
    ['Versace Eros Box', 'Versace', 'box', 9900, null, 100, 4.5, 680, 'Подарочный набор Eros в фирменной коробке.'],
    ['1 Million Box', 'Paco Rabanne', 'box', 9200, null, 100, 4.4, 610, 'Набор 1 Million: парфюм + лосьон после бритья.'],
    ['La Vie Est Belle Box', 'Lancôme', 'box', 10500, 12000, 50, 4.6, 660, 'Подарочный набор La Vie Est Belle в роскошной коробке.'],
    ['Black Opium Box', 'Yves Saint Laurent', 'box', 11200, null, 50, 4.6, 640, 'Набор Black Opium с миниатюрами и шёлковым чехлом.'],
    ['Bloom Box', 'Gucci', 'box', 12400, null, 50, 4.5, 520, 'Цветочный набор Bloom в подарочной упаковке Gucci.'],
    ['Acqua di Gio Box', 'Giorgio Armani', 'box', 12900, null, 75, 4.8, 700, 'Набор Acqua di Gio: парфюм 75 мл + миниатюра.'],
    ['Daisy Box', 'Marc Jacobs', 'box', 9800, null, 50, 4.3, 460, 'Игривый набор Daisy с цветочной коробкой.'],
    ['Le Male Box', 'Jean Paul Gaultier', 'box', 9400, null, 125, 4.5, 590, 'Набор Le Male: парфюм 125 мл + гель для душа.'],
    ['Born in Roma Box', 'Valentino', 'box', 10200, null, 50, 4.5, 530, 'Подарочный набор Born in Roma в стильной коробке.'],
    ['Candy Box', 'Prada', 'box', 9600, null, 50, 4.4, 420, 'Набор Candy с карамельными нотами и миниатюрами.'],
    ['Her Box', 'Burberry', 'box', 10800, null, 50, 4.5, 480, 'Подарочный набор Burberry Her в фирменной упаковке.'],
    ['Good Girl Box', 'Carolina Herrera', 'box', 10900, 12000, 50, 4.6, 620, 'Набор Good Girl в фирменной коробке-каблучке.'],
    ['Black Orchid Box', 'Tom Ford', 'box', 15900, null, 50, 4.9, 570, 'Роскошный набор Tom Ford Black Orchid Private Blend.'],
    ['Bottled Box', 'Hugo Boss', 'box', 8200, null, 100, 4.2, 400, 'Набор Bottled: парфюм 100 мл + гель для душа.'],
    ['Omnia Box', 'Bvlgari', 'box', 10100, null, 65, 4.4, 380, 'Изысканный набор Omnia в подарочной коробке Bvlgari.'],
    ['Live Irrésistible Box', 'Givenchy', 'box', 9400, null, 50, 4.3, 350, 'Набор Live Irrésistible с яркой подарочной упаковкой.'],
    ['Red Aoud Box', 'Montale', 'box', 13500, null, 100, 4.5, 340, 'Элитарный набор Red Aoud в фирменном футляре.']
];

const categoryLabels = {
    women: 'Женщинам',
    men: 'Мужчинам',
    unisex: 'Унисекс',
    box: 'Наборы'
};

/* ---------- Сборка полных объектов товаров ---------- */
const products = srcProducts.map((r, i) => {
    const o = {
        id: i + 1,
        name: r[0],
        brand: r[1],
        category: r[2],
        price: roundNice(r[3] * UZS_FACTOR),
        oldPrice: r[4] ? roundNice(r[4] * UZS_FACTOR) : null,
        volume: r[5],
        rating: r[6],
        popularity: r[7],
        description: r[8],
        type: r[2] === 'box' ? 'box' : 'perfume',
        attributes: [
            { label: 'Объём', value: r[5] + ' мл', icon: '🧴' },
            { label: 'Категория', value: categoryLabels[r[2]], icon: '🏷' },
            { label: 'Бренд', value: r[1], icon: '✨' },
            { label: 'Страна', value: 'Оригинал, ЕС/США', icon: '🌍' }
        ]
    };
    // Настоящее фото аромата (ids 1–50); для подарочных наборов — уникальный золотой SVG-бокс
    o.image = productPhotos[o.id] || goldSVG(o);
    o.images = productPhotos[o.id] ? [o.image] : [goldSVG(o), goldSVG(o, 1), goldSVG(o, 2)];
    return o;
});

/* ---------- Состояние ---------- */
let cart = JSON.parse(localStorage.getItem('perfume_cart')) || [];
let filters = {
    category: 'all',
    brand: 'all',
    volume: 'all',
    sort: 'popular',
    search: ''
};

/* ---------- Элементы DOM ---------- */
const cartCountEl = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const sortFilter = document.getElementById('sort-filter');
const brandFilter = document.getElementById('brand-filter');
const volumeFilter = document.getElementById('volume-filter');
const searchInput = document.getElementById('search-input');
const resultsCount = document.getElementById('results-count');
const toastEl = document.getElementById('toast');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const orderModal = document.getElementById('order-modal');
const orderForm = document.getElementById('order-form');
const productModal = document.getElementById('product-modal');
const closeProductModalBtn = document.getElementById('close-product-modal');
const productModalBody = document.getElementById('product-modal-body');

/* ---------- Инициализация ---------- */
document.addEventListener('DOMContentLoaded', () => {
    setupCategoryTabs();
    initReviews();
    applyUrlCategory();
    setupNewsletter();
    populateBrandFilter();
    populateVolumeFilter();
    renderProducts();
    updateCartCount();
    renderCart();

    // Сортировка
    if (sortFilter) sortFilter.addEventListener('change', e => { filters.sort = e.target.value; renderProducts(); });
    // Бренд
    if (brandFilter) brandFilter.addEventListener('change', e => { filters.brand = e.target.value; renderProducts(); });
    // Объём
    if (volumeFilter) volumeFilter.addEventListener('change', e => { filters.volume = e.target.value; renderProducts(); });
    // Поиск
    if (searchInput) searchInput.addEventListener('input', e => { filters.search = e.target.value.toLowerCase().trim(); renderProducts(); });

    // Открытие корзины
    const openCartBtn = document.getElementById('open-cart');
    if (openCartBtn) openCartBtn.addEventListener('click', () => cartModal && cartModal.classList.add('open'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartModal && cartModal.classList.remove('open'));
    if (cartModal) cartModal.addEventListener('click', e => { if (e.target === cartModal) cartModal.classList.remove('open'); });

    // Оформление заказа
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) { showToast(t('Корзина пуста')); return; }
        cartModal.classList.remove('open');
        orderModal.classList.add('open');
    });
    if (closeOrderBtn) closeOrderBtn.addEventListener('click', () => orderModal.classList.remove('open'));
    if (orderModal) orderModal.addEventListener('click', e => { if (e.target === orderModal) orderModal.classList.remove('open'); });

    // Форма заказа
    if (orderForm) orderForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = orderForm.elements['customer-name'].value;
        showToast(t('Заказ оформлен, {name}! Мы свяжемся с вами в ближайшее время.').replace('{name}', name));
        cart = [];
        saveCart(); updateCartCount(); renderCart();
        orderForm.reset();
        orderModal.classList.remove('open');
    });

    // Закрытие модалки товара
    if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', () => productModal.classList.remove('open'));
    if (productModal) productModal.addEventListener('click', e => { if (e.target === productModal) productModal.classList.remove('open'); });

    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn && navMenu) mobileMenuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
});

const closeOrderBtn = document.getElementById('close-order');

/* ---------- Вкладки категорий ---------- */
function setupCategoryTabs() {
    const tabsWrap = document.querySelector('.category-tabs');
    if (!tabsWrap) return;
    tabsWrap.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabsWrap.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filters.category = tab.dataset.cat;
            renderProducts();
        });
    });
}

/* ---------- Категория из URL: catalog.html?cat=women ---------- */
function applyUrlCategory() {
    const cat = new URLSearchParams(window.location.search).get('cat');
    if (!cat || !['women', 'men', 'unisex', 'box'].includes(cat)) return;
    filters.category = cat;
    document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === cat);
    });
}

/* ---------- Подписка на новости ---------- */
function setupNewsletter() {
    const btn = document.getElementById('news-btn');
    const email = document.getElementById('news-email');
    const msg = document.getElementById('news-msg');
    if (!btn || !email) return;

    const submit = () => {
        const value = email.value.trim();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        if (!valid) {
            if (msg) { msg.textContent = 'Пожалуйста, введите корректный email'; msg.className = 'news-msg err'; }
            else showToast('Введите корректный email');
            email.focus();
            return;
        }
        let list = [];
        try { list = JSON.parse(localStorage.getItem('ps_subscribers') || '[]'); } catch (e) { list = []; }
        if (!list.includes(value)) list.push(value);
        try { localStorage.setItem('ps_subscribers', JSON.stringify(list)); } catch (e) { /* приватный режим */ }
        if (msg) { msg.textContent = 'Готово! Вы подписаны — ждите новости и скидки ✨'; msg.className = 'news-msg ok'; }
        showToast('Спасибо за подписку на новости!');
        email.value = '';
    };

    btn.addEventListener('click', submit);
    email.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); submit(); }
    });
    email.addEventListener('input', () => {
        if (msg) { msg.textContent = ''; msg.className = 'news-msg'; }
    });
}

/* ---------- Заполнение фильтров (бренд/объём) ---------- */
function populateBrandFilter() {
    if (!brandFilter) return;
    const brands = [...new Set(products.map(p => p.brand))].sort((a, b) => a.localeCompare(b));
    brandFilter.innerHTML = '<option value="all">Все бренды</option>' +
        brands.map(b => `<option value="${b}">${b}</option>`).join('');
}

function populateVolumeFilter() {
    if (!volumeFilter) return;
    const volumes = [...new Set(products.map(p => p.volume))].sort((a, b) => a - b);
    volumeFilter.innerHTML = '<option value="all">Все объёмы</option>' +
        volumes.map(v => `<option value="${v}">${v} мл</option>`).join('');
}

/* ---------- Фильтрация и сортировка ---------- */
function getFilteredProducts() {
    let list = products.filter(p => {
        const catOk = filters.category === 'all' || p.category === filters.category;
        const brandOk = filters.brand === 'all' || p.brand === filters.brand;
        const volOk = filters.volume === 'all' || p.volume === Number(filters.volume);
        const searchOk = !filters.search ||
            p.name.toLowerCase().includes(filters.search) ||
            p.brand.toLowerCase().includes(filters.search) ||
            p.description.toLowerCase().includes(filters.search);
        return catOk && brandOk && volOk && searchOk;
    });

    // Сортировка
    switch (filters.sort) {
        case 'popular':
            list.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'price-asc':
            list.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            list.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            list.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            list.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'volume-asc':
            list.sort((a, b) => a.volume - b.volume);
            break;
    }
    return list;
}

/* ---------- Отрисовка каталога ---------- */
function renderProducts() {
    if (!productsGrid) return;
    const isHomepage = !document.getElementById('sort-filter');
    let list = getFilteredProducts();
    if (isHomepage) list = list.slice(0, 8);

    if (resultsCount) {
        const catName = filters.category === 'all' ? t('все категории') : t(categoryLabels[filters.category]);
        resultsCount.textContent = t('{n} товаров · {cat}').replace('{n}', list.length).replace('{cat}', catName);
    }

    productsGrid.innerHTML = '';

    if (list.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-gray);"><p style="font-size:18px;">' + t('Ничего не найдено') + '</p><button class="btn btn-outline" style="margin-top:15px;" onclick="resetFilters()">' + t('Сбросить фильтры') + '</button></div>';
        return;
    }

    list.forEach(p => productsGrid.appendChild(createProductCard(p)));
    if (typeof applyReveal === 'function') applyReveal(productsGrid);
}

function createProductCard(p) {
    const card = document.createElement('article');
    card.className = 'product-card fade-in';
    const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    const starsHtml = renderStars(p.rating);
    const badge = p.type === 'box'
        ? `<span class="product-badge" style="background:var(--primary-color);">${t('🎁 Набор')}</span>`
        : (p.oldPrice ? `<span class="product-badge">-${discount}%</span>` : '');
    const ph = null;

    card.innerHTML = `
        <div class="product-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy" data-pid="${p.id}" onerror="onImgError(this)">
            ${badge}
            <button class="product-wishlist" aria-label="В избранное">♡</button>
        </div>
        <div class="product-info">
            <div class="product-category">${p.brand} · ${p.volume} мл</div>
            <h3 class="product-title">${p.name}</h3>
            <p class="product-description">${t(p.description)}</p>
            <div class="product-price-row">
                <div>
                    <span class="product-price">${fmt(p.price)}</span>
                    ${p.oldPrice ? `<span class="product-old-price">${fmt(p.oldPrice)}</span>` : ''}
                </div>
                <div class="stars" style="margin:0;">${starsHtml}</div>
            </div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${p.id})">${t('В корзину')}</button>
                <button class="btn-quick-view" onclick="openProductModal(${p.id})" title="${t('Быстрый просмотр')}">👁</button>
            </div>
        </div>
    `;
    return card;
}

function resetFilters() {
    filters = { category: 'all', brand: 'all', volume: 'all', sort: 'popular', search: '' };
    if (brandFilter) brandFilter.value = 'all';
    if (volumeFilter) volumeFilter.value = 'all';
    if (sortFilter) sortFilter.value = 'popular';
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    const allTab = document.querySelector('.cat-tab[data-cat="all"]');
    if (allTab) allTab.classList.add('active');
    renderProducts();
}

function renderStars(rating) {
    const full = Math.floor(rating);
    let html = '';
    for (let i = 0; i < 5; i++) html += (i < full ? '★' : '☆');
    return html;
}

/* ---------- Корзина ---------- */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    saveCart(); updateCartCount(); renderCart();
    showToast(t('Добавлено: {name}').replace('{name}', product.name));
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart(); updateCartCount(); renderCart();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty < 1) item.qty = 1;
    saveCart(); updateCartCount(); renderCart();
}

function saveCart() { localStorage.setItem('perfume_cart', JSON.stringify(cart)); }

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCountEl) cartCountEl.textContent = total;
}

function renderCart() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px 20px;"><p style="font-size:18px; color:var(--text-gray); margin-bottom:20px;">' + t('Ваша корзина пуста') + '</p><button class="btn btn-primary" onclick="document.getElementById(\'cart-modal\').classList.remove(\'open\')">' + t('Перейти в каталог') + '</button></div>';
        if (cartTotalEl) cartTotalEl.textContent = fmt(0);
        const sub = document.getElementById('cart-subtotal'); if (sub) sub.textContent = fmt(0);
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const ph = null;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" class="cart-item-image" data-pid="${item.id}" onerror="onImgError(this)"></td>
            <td><div class="cart-item-name">${item.name}</div><div style="font-size:13px; color:var(--text-gray);">${item.brand} · ${item.volume} мл</div></td>
            <td class="cart-item-price">${fmt(item.price)}</td>
            <td><div class="cart-item-qty"><button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button><span class="qty-value">${item.qty}</span><button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button></div></td>
            <td class="cart-item-price">${fmt(item.price * item.qty)}</td>
            <td><a href="#" class="remove-item" onclick="event.preventDefault(); removeFromCart(${item.id}); return false;">${t('Удалить')}</a></td>
        `;
        cartItemsContainer.appendChild(tr);
    });

    if (cartTotalEl) cartTotalEl.textContent = fmt(total);
    const sub = document.getElementById('cart-subtotal'); if (sub) sub.textContent = fmt(total);
}

/* ---------- Модалка товара ---------- */
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const starsHtml = renderStars(product.rating);
    const ph = null;
    const thumbnails = product.images.map((img, i) => `<img src="${img}" class="thumb${i === 0 ? ' active' : ''}" alt="${product.name}" onclick="selectThumbnail(this, '${img}')" data-pid="${product.id}" onerror="onImgError(this)">`).join('');
    const attributesHtml = product.attributes.map(a => `<div class="attr-item"><span class="attr-icon">${a.icon}</span><div class="attr-text"><strong>${t(a.label)}</strong><span>${t(a.value)}</span></div></div>`).join('');

    productModalBody.innerHTML = `
        <div class="detail-container" style="grid-template-columns:1fr; gap:25px;">
            <div>
                <div class="detail-image-main" style="height:450px;"><img src="${product.image}" alt="${product.name}" data-pid="${product.id}" onerror="onImgError(this)"></div>
                <div class="detail-thumbnails">${thumbnails}</div>
            </div>
            <div class="detail-info">
                <div class="detail-category">${product.brand}</div>
                <h2 class="detail-title">${product.name}</h2>
                <div class="detail-rating"><div class="stars">${starsHtml}</div><span style="font-size:14px; color:var(--text-gray);">${product.rating} · ${product.popularity}+ ${t('продаж')}</span></div>
                <div class="detail-price-block"><span class="detail-current-price">${fmt(product.price)}</span>${product.oldPrice ? `<span class="detail-old-price">${fmt(product.oldPrice)}</span>` : ''}${product.oldPrice ? `<span class="detail-discount">-${discount}%</span>` : ''}</div>
                <div class="detail-description">${product.description}</div>
                <div class="detail-actions"><button class="btn btn-primary" style="flex:1;" onclick="addToCart(${product.id}); productModal.classList.remove('open');">${t('В корзину')}</button></div>
                <h3 style="margin-top:30px; margin-bottom:15px; font-size:18px;">${t('Характеристики')}</h3>
                <div class="attributes-grid">${attributesHtml}</div>
            </div>
        </div>
    `;
    productModal.classList.add('open');
}

function selectThumbnail(el, src) {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const mainImg = document.querySelector('.detail-image-main img');
    if (mainImg) mainImg.src = src;
}

/* ---------- Уведомления ---------- */
function showToast(message) {
    if (!toastEl) return;
    toastEl.querySelector('span:last-child').textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 3000);
}

/* ---------- Глобальные функции для onclick в HTML ---------- */
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.openProductModal = openProductModal;
window.selectThumbnail = selectThumbnail;
window.resetFilters = resetFilters;
// Для ИИ-ассистента
window.products = products;
window.goldSVG = goldSVG;
window.getImage = getImage;
window.renderStars = renderStars;

/* ---------- Страница товара (product.html) ---------- */
const productDetailContainer = document.getElementById('product-detail-container');
const relatedProductsGrid = document.getElementById('related-products-grid');

function renderProductDetail(product) {
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const starsHtml = renderStars(product.rating);
    const ph = null;
    const thumbnails = product.images.map((img, i) => `<img src="${img}" class="thumb${i === 0 ? ' active' : ''}" alt="${product.name}" data-pid="${product.id}" onerror="onImgError(this)">`).join('');
    const attributesHtml = product.attributes.map(a => `<div class="attr-item"><span class="attr-icon">${a.icon}</span><div class="attr-text"><strong>${t(a.label)}</strong><span>${t(a.value)}</span></div></div>`).join('');

    productDetailContainer.innerHTML = `
        <div class="detail-container">
            <div>
                <div class="detail-image-main" style="height:550px;"><img src="${product.image}" alt="${product.name}" data-pid="${product.id}" onerror="onImgError(this)"></div>
                <div class="detail-thumbnails">${thumbnails}</div>
            </div>
            <div class="detail-info">
                <div class="detail-category">${product.brand}</div>
                <h1 class="detail-title">${product.name}</h1>
                <div class="detail-rating"><div class="stars">${starsHtml}</div><span style="font-size:14px; color:var(--text-gray);">${product.rating} · ${product.popularity}+ ${t('продаж')}</span></div>
                <div class="detail-price-block"><span class="detail-current-price">${fmt(product.price)}</span>${product.oldPrice ? `<span class="detail-old-price">${fmt(product.oldPrice)}</span>` : ''}${product.oldPrice ? `<span class="detail-discount">-${discount}%</span>` : ''}</div>
                <div class="detail-description">${product.description}</div>
                <div class="detail-actions" style="margin-top:25px;"><div class="qty-selector"><button class="qty-btn" onclick="updateQty(${product.id}, -1)">−</button><span class="qty-value">1</span><button class="qty-btn" onclick="updateQty(${product.id}, 1)">+</button></div><button class="btn btn-primary" style="flex:1;" onclick="addToCart(${product.id})">${t('В корзину')}</button></div>
                <h3 style="margin-top:35px; margin-bottom:15px; font-size:18px;">${t('Характеристики')}</h3>
                <div class="attributes-grid">${attributesHtml}</div>
            </div>
        </div>
    `;
}

function renderRelatedProducts(currentProduct) {
    if (!relatedProductsGrid) return;
    const related = products.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category).slice(0, 4);
    relatedProductsGrid.innerHTML = '';
    related.forEach(p => relatedProductsGrid.appendChild(createProductCard(p)));
    if (typeof applyReveal === 'function') applyReveal(relatedProductsGrid);
}

/* ---------- Рендер страницы товара — см. самый конец файла
     (перенесён туда, чтобы не обращаться к переменным секции анимаций до их объявления, TDZ) ---------- */

/* ================================================================
   АНИМАЦИИ — появление при прокрутке + параллакс hero
   ================================================================ */
let revealObserver = null;
let revealTimer = null;
const pendingReveal = new Set();

function ensureObserver() {
    if (revealObserver) return revealObserver;
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                pendingReveal.delete(e.target);
                revealObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return revealObserver;
}

// Ручная проверка: работает даже если вкладка скрыта и IO «молчит»
function revealIfVisible(el) {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - 40 && r.bottom > 0) {
        el.classList.add('in');
        if (revealObserver) revealObserver.unobserve(el);
        pendingReveal.delete(el);
        return true;
    }
    return false;
}

function checkPendingReveals() {
    pendingReveal.forEach(el => revealIfVisible(el));
    if (pendingReveal.size === 0 && revealTimer) {
        clearInterval(revealTimer);
        revealTimer = null;
    }
}

function watchReveals() {
    if (pendingReveal.size > 0 && !revealTimer) {
        revealTimer = setInterval(checkPendingReveals, 400);
    }
}

const REVEAL_SEL = '.section-header, .category-card, .product-card, .attr-item, .service-card, .why-item, .timeline-item, .branch-card, .branches-socials, .stat-item, .filter-bar, .products-header, .about-image, .about-text, .contact-item, .contact-form, .detail-image-main, .detail-info, .cart-summary, .cart-table, .empty-cart, .footer-col';

function applyReveal(scope) {
    scope = scope || document;
    if (!scope.querySelectorAll) return;
    const io = ensureObserver();
    let idx = 0;
    scope.querySelectorAll(REVEAL_SEL).forEach((el) => {
        if (el.dataset.rev) return;
        el.dataset.rev = '1';
        el.classList.add('reveal');
        el.style.transitionDelay = ((idx++ % 6) * 55) + 'ms';
        // Элементы уже в зоне видимости показываем сразу (без «пустого» первого кадра)
        if (!revealIfVisible(el)) {
            pendingReveal.add(el);
            io.observe(el);
        }
    });
    watchReveals();
}

function initAnimations() {
    applyReveal(document);

    // Страховка от «зависшего» IntersectionObserver (скрытая вкладка и т.п.)
    let rafTick = false;
    const safeCheck = () => {
        if (rafTick || pendingReveal.size === 0) return;
        rafTick = true;
        requestAnimationFrame(() => { checkPendingReveals(); rafTick = false; });
    };
    window.addEventListener('scroll', safeCheck, { passive: true });
    window.addEventListener('resize', safeCheck, { passive: true });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checkPendingReveals(); });

    // Параллакс для фона hero
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.willChange = 'transform';
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                if (y < window.innerHeight) {
                    heroBg.style.transform = 'translateY(' + (y * 0.22) + 'px) scale(1.12)';
                }
                ticking = false;
            });
        }, { passive: true });
    }
}

document.addEventListener('DOMContentLoaded', initAnimations);

/* ---------- Рендер страницы товара (выполняется последним, после объявления всех функций и переменных) ---------- */
if (productDetailContainer) {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);
    if (product) {
        document.title = `${product.name} — Parfum Shop`;
        renderProductDetail(product);
        renderRelatedProducts(product);
    } else {
        productDetailContainer.innerHTML = '<div style="text-align:center; padding:80px 20px; color:var(--text-gray);"><p style="font-size:18px; margin-bottom:20px;">' + t('Товар не найден') + '</p><a href="catalog.html" class="btn btn-primary">' + t('В каталог') + '</a></div>';
    }
}

/* ================================================================
   ОТЗЫВЫ КЛИЕНТОВ — имя, звёзды и слова (хранилище: localStorage)
   ================================================================ */
const RV_KEY = 'ps_reviews';
const RV_SEED = [
    { name: 'Дилшод А.', stars: 5, text: 'Заказал Sauvage, доставили на следующий день. Аромат настоящий, упаковали в подарочный бокс — жена в восторге!', date: '2026-09-12' },
    { name: 'Нигора Р.', stars: 5, text: 'Помогли выбрать парфюм под мой бюджет, дали протестировать. Отдельное спасибо за букет из роз к вечеру.', date: '2026-09-28' },
    { name: 'Jasur T.', stars: 4, text: 'Хороший магазин, цены приятные. Беру тут ароматы уже второй год, всё нравится.', date: '2026-10-05' }
];

function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function loadReviews() {
    try {
        const s = JSON.parse(localStorage.getItem(RV_KEY));
        if (Array.isArray(s) && s.length) return s;
    } catch (e) { /* noop */ }
    return RV_SEED.map(r => ({ ...r }));
}

function saveReviews(list) {
    try { localStorage.setItem(RV_KEY, JSON.stringify(list)); } catch (e) { /* noop */ }
}

function renderReviews() {
    const grid = document.getElementById('reviews-list');
    if (!grid) return;
    const list = loadReviews();
    grid.innerHTML = list.map(r => {
        const stars = Math.min(5, Math.max(1, parseInt(r.stars, 10) || 5));
        return `
        <div class="review-card">
            <div class="review-head">
                <span class="review-name">${escHtml(r.name)}</span>
                <span class="review-stars" aria-label="${stars} из 5">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</span>
            </div>
            <p class="review-text">${escHtml(r.text)}</p>
            <div class="review-date">${escHtml(r.date || '')}</div>
        </div>`;
    }).join('');
}

function initReviews() {
    const form = document.getElementById('review-form');
    if (!form) return;
    let rating = 5;
    const starBtns = Array.prototype.slice.call(form.querySelectorAll('.star-btn'));
    const paint = () => starBtns.forEach(b => b.classList.toggle('on', parseInt(b.dataset.star, 10) <= rating));
    starBtns.forEach(b => {
        b.addEventListener('click', () => { rating = parseInt(b.dataset.star, 10); paint(); });
        b.addEventListener('mouseenter', () => starBtns.forEach(x => x.classList.toggle('on', parseInt(x.dataset.star, 10) <= parseInt(b.dataset.star, 10))));
        b.addEventListener('mouseleave', paint);
    });
    paint();
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = (document.getElementById('rv-name').value || '').trim();
        const text = (document.getElementById('rv-text').value || '').trim();
        if (!name || !text) return;
        const list = loadReviews();
        list.unshift({ name: name, stars: rating, text: text, date: new Date().toISOString().slice(0, 10) });
        saveReviews(list.slice(0, 30));
        form.reset();
        rating = 5;
        paint();
        renderReviews();
        showToast(t('Спасибо за отзыв!'));
    });
    renderReviews();
}
window.renderReviews = renderReviews;

/* ================================================================
   СМЕНА ЯЗЫКА — перерисовываем динамические блоки
   ================================================================ */
window.onLangChange = function () {
    renderProducts();
    renderCart();
    renderReviews();
    if (productDetailContainer) {
        const params = new URLSearchParams(window.location.search);
        const p = products.find(x => x.id === parseInt(params.get('id'), 10));
        if (p) {
            renderProductDetail(p);
            renderRelatedProducts(p);
        }
    }
    if (typeof window.aiReset === 'function') window.aiReset();
};
