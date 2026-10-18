// ================================================================
// AI-ассистент Parfum Shop — подбор ароматов и ответы на вопросы
// ================================================================
(function () {
    'use strict';

    const products = window.products || [];

    /* ---------- Создание виджета ---------- */
    const fab = document.createElement('button');
    fab.className = 'ai-fab';
    fab.id = 'ai-fab';
    fab.setAttribute('aria-label', 'AI-ассистент');
    fab.innerHTML = '<span class="ai-fab-ic">✦</span>';

    const panel = document.createElement('div');
    panel.className = 'ai-panel';
    panel.id = 'ai-panel';
    panel.innerHTML = `
        <div class="ai-head">
            <div class="ai-avatar">✦</div>
            <div class="ai-head-txt">
                <strong>AI-ассистент</strong>
                <span>Parfum Shop · всегда онлайн</span>
            </div>
            <button class="ai-close" id="ai-close" aria-label="Закрыть">×</button>
        </div>
        <div class="ai-messages" id="ai-messages"></div>
        <div class="ai-chips" id="ai-chips"></div>
        <form class="ai-inputrow" id="ai-form" autocomplete="off">
            <input type="text" id="ai-input" placeholder="Спросите: подбери аромат…" />
            <button type="submit" aria-label="Отправить">➤</button>
        </form>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const messages = document.getElementById('ai-messages');
    const chips = document.getElementById('ai-chips');
    const form = document.getElementById('ai-form');
    const input = document.getElementById('ai-input');
    const closeBtn = document.getElementById('ai-close');

    let open = false;

    function toggle(state) {
        open = (state === undefined) ? !open : state;
        panel.classList.toggle('open', open);
        fab.classList.toggle('open', open);
        if (open) setTimeout(() => input.focus(), 200);
    }

    fab.addEventListener('click', () => toggle());
    closeBtn.addEventListener('click', () => toggle(false));

    /* ---------- Быстрые подсказки ---------- */
    function defaultChips() {
        return [
            'Подберите для неё ♀️',
            'Подберите для него ♂️',
            'Нужен подарок 🎁',
            'Что популярно?',
            'До 1 000 000 сўм',
            'Какая доставка?'
        ];
    }

    function renderChips(list) {
        chips.innerHTML = '';
        list.forEach(c => {
            const b = document.createElement('button');
            b.className = 'ai-chip';
            b.type = 'button';
            b.textContent = t(c);
            b.addEventListener('click', () => handleUser(c));
            chips.appendChild(b);
        });
    }

    /* ---------- Отображение сообщений ---------- */
    function addMsg(kind, html) {
        const wrap = document.createElement('div');
        wrap.className = 'ai-msg ' + kind;
        wrap.innerHTML = html;
        messages.appendChild(wrap);
        messages.scrollTop = messages.scrollHeight;
        return wrap;
    }

    function productCardHTML(p) {
        const img = window.getImage ? window.getImage(p) : '';
        const stars = window.renderStars ? window.renderStars(p.rating) : '';
        return `
            <div class="ai-prod">
                <img src="${img}" data-pid="${p.id}" onerror="onImgError(this)" alt="${p.name}">
                <div class="ai-prod-info">
                    <span class="ai-prod-brand">${p.brand} · ${p.volume} мл</span>
                    <span class="ai-prod-name">${p.name}</span>
                    <div class="ai-prod-row">
                        <span class="ai-prod-price">${window.fmt(p.price)}</span>
                        <span class="ai-prod-stars">${stars}</span>
                    </div>
                    <button class="ai-prod-btn" onclick="addToCart(${p.id})">${t('В корзину')}</button>
                </div>
            </div>`;
    }

    /* ---------- "Мозг" ассистента ---------- */
    function analyze(text) {
        const t = text.toLowerCase();
        const c = { cat: null, maxPrice: null, wantBox: false, notes: [], brand: null };

        if (/женщ|для не\b|для неё|для нее|ей\b|девуш|женск|подружк|маме|сестр|ayol|qiz\b|singil|kelin/.test(t)) c.cat = 'women';
        if (/мужч|для него|ему\b|парн|мужск|другу|брату|папе|erkak|aka\b|ukam|og'il/.test(t)) c.cat = 'men';
        if (/унисекс|универсал|uniseks|universal/.test(t)) c.cat = 'unisex';
        if (/бокс|набор|подар|коробк|подарочн|sovg|quti|boks|plam/.test(t)) c.wantBox = true;

        let m = t.match(/до\s*(\d[\d\s]{0,12})/) || t.match(/(\d[\d\s]{0,12})\s*(?:сўм|сум|sum|soʻm)/) || t.match(/(\d[\d\s]{0,12})\s*so[mʻ']+/);
        if (m && m[1].replace(/\s/g, '')) {
            let v = parseInt(m[1].replace(/\s/g, ''), 10) || 0;
            if (/млн|миллион|mln/.test(t)) v *= 1000000;
            else if (/тыс|тысяч/.test(t) || /\bk\b/.test(t)) v *= 1000;
            if (v > 0) c.maxPrice = v;
        }
        const cheap = /дешев|дёшев|недорог|бюджет|дешевле|дёшевле|подешевле|arzon/.test(t);
        if (cheap && !c.maxPrice) c.maxPrice = 1000000;

        const noteMap = {
            'роз': ['роз'], 'цитрус': ['апельсин', 'бергамот', 'мандарин', 'лимон'],
            'ванил': ['ванил'], 'мускус': ['мускус'], 'дерев': ['сандал', 'кедр', 'ветивер', 'дерев'],
            'кож': ['кож'], 'табак': ['табак'], 'кофе': ['кофе'],
            'цвет': ['жасмин', 'роз', 'тубероз', 'пион', 'орхиде', 'лили', 'цвет'],
            'фрукт': ['яблок', 'груша', 'малин', 'земляник', 'ананас', 'фрукт'],
            'свеж': ['свеж', 'аква', 'морск'], 'сладк': ['сладк', 'карамел', 'ванил']
        };
        for (const k in noteMap) if (t.includes(k)) c.notes.push.apply(c.notes, noteMap[k]);

        const brands = Array.from(new Set(products.map(p => p.brand)));
        for (const b of brands) if (t.includes(b.toLowerCase())) c.brand = b;

        return { t, c, cheap };
    }

    function faq(q) {
        if (/доставк|курьер|отправ|получить|когда привезут|yetkaz|kuryer/.test(q))
            return window.t('🚚 <b>Доставка</b>: по Ташкенту — от 1 дня, по Узбекистану — 1–3 дня. Курьер, пункты выдачи. Бесплатно при заказе от 500 000 сўм.');
        if (/оплат|карт|наличн|сбп|счёт|счет|tolov|karta|naqd/.test(q))
            return window.t('💳 <b>Оплата</b>: картой (Visa / MasterCard / МИР), СБП, наличными курьеру или при получении. Предоплата не обязательна.');
        if (/оригинал|подлин|фейк|качеств|сертиф|точн|orijinal|haqiqiy|sertifikat/.test(q))
            return window.t('✅ Только <b>оригинальная</b> парфюмерия с сертификатами от официальных дистрибьюторов. Вернём 100% стоимости при малейшем сомнении.');
        if (/возврат|обмен|отказ|передумал|qaytar|almashtir/.test(q))
            return window.t('↩️ <b>Возврат</b> — в течение 14 дней, если товар не использован и цела упаковка. Деньги возвращаем за 3 рабочих дня.');
        if (/цен|сколько сто|стоимост|дорог|дешевл|narx|qimmat/.test(q))
            return window.t('💰 Цены — за оригинальную парфюмерию. Средний чек 700 000 – 3 000 000 сўм. Есть наборы-боксы и скидки до −15%.');
        if (/работ|график|часы|когда открыто|до скольки|ish vaqti|ochiq/.test(q))
            return window.t('⏰ Магазин открыт <b>ежедневно 09:00–22:00</b>, без выходных. Менеджер на связи круглосуточно.');
        return null;
    }

    function recommend(c) {
        let list = products.slice();
        if (c.cat) list = list.filter(p => p.category === c.cat);
        if (c.wantBox) list = list.filter(p => p.type === 'box');
        if (c.brand) list = list.filter(p => p.brand === c.brand);
        if (c.maxPrice) list = list.filter(p => p.price <= c.maxPrice);

        if (c.notes.length) {
            const scored = list.map(p => {
                const hay = (p.name + ' ' + p.description + ' ' + p.brand).toLowerCase();
                let s = 0; c.notes.forEach(n => { if (hay.includes(n)) s += 3; });
                return { p, s };
            });
            const hit = scored.filter(x => x.s > 0);
            const pool = hit.length ? hit : scored;
            pool.sort((a, b) => b.s - a.s || b.p.popularity - a.p.popularity);
            return pool.slice(0, 3).map(x => x.p);
        }
        list.sort((a, b) => b.popularity - a.popularity || b.rating - a.rating);
        return list.slice(0, 3);
    }

    function respond(text) {
        const r = analyze(text);
        const q = r.t, c = r.c, cheap = r.cheap;

        if (/привет|здрав|хай|добр|hello|hi\b|ку\b|assalom|salom/.test(q))
            return { text: t('Здравствуйте! Я <b>AI-ассистент</b> Parfum Shop ✦ Подберу аромат под вкус, повод и бюджет — и отвечу на любые вопросы. С чего начнём?'), chips: defaultChips() };

        const f = faq(q);
        if (f) return { text: f, chips: defaultChips() };

        const asksRec = /что взять|что выбрать|посовет|рекомен|подбер|подобра|помоги|выбор|лучш|топ|популярн|хочу|ищу|нужен аромат|аромат|hid|tanla|mos kel|tavsiya/.test(q);
        if (asksRec || c.cat || c.wantBox || c.notes.length || c.maxPrice || cheap || c.brand) {
            if (c.brand && !c.cat && !c.wantBox && !c.notes.length && !c.maxPrice) {
                const recs = products.filter(p => p.brand === c.brand).sort((a, b) => b.popularity - a.popularity).slice(0, 3);
                if (recs.length) return { text: t('✨ Коллекция <b>{b}</b> — вот бестселлеры:').replace('{b}', c.brand), products: recs, chips: defaultChips() };
            }
            const recs = recommend(c);
            if (!recs.length) return { text: t('Не нашёл точных совпадений. Уточните: для кого (♀️ / ♂️), повод и бюджет — и я подберу точнее.'), chips: defaultChips() };
            let intro;
            if (c.wantBox) intro = t('🎁 Отличный выбор для подарка! Вот наборы-боксы:');
            else if (c.cat === 'women') intro = t('♀️ Вот что подойдёт <b>для неё</b>:');
            else if (c.cat === 'men') intro = t('♂️ Вот что подойдёт <b>для него</b>:');
            else if (c.cat === 'unisex') intro = t('👥 Универсальные ароматы, подходят всем:');
            else if (c.maxPrice || cheap) intro = t('💸 Варианты в вашем бюджете:');
            else if (c.notes.length) intro = t('🖤 Подобрал по вашим нотам:');
            else intro = t('🖤 Вот мои рекомендации:');
            return { text: intro, products: recs, chips: defaultChips() };
        }

        return { text: t('Могу подобрать аромат по полу, нотам, поводу и бюджету, а также рассказать про доставку и оплату. Выберите вариант ниже или напишите свободно 👇'), chips: defaultChips() };
    }

    /* ---------- Обработка ввода ---------- */
    function handleUser(text) {
        if (!text || !text.trim()) return;
        addMsg('user', esc(t(text)));
        renderChips([]);
        // имитация "раздумья"
        const typing = addMsg('bot', '<span class="ai-typing"><i></i><i></i><i></i></span>');
        setTimeout(() => {
            typing.remove();
            const res = respond(text);
            let html = '<div class="ai-bot-text">' + res.text + '</div>';
            const wrap = addMsg('bot', html);
            if (res.products && res.products.length) {
                const box = document.createElement('div');
                box.className = 'ai-prods';
                box.innerHTML = res.products.map(productCardHTML).join('');
                wrap.appendChild(box);
                messages.scrollTop = messages.scrollHeight;
            }
            renderChips(res.chips || defaultChips());
        }, 550);
    }

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const v = input.value;
        input.value = '';
        handleUser(v);
    });

    /* ---------- Приветствие ---------- */
    const GREET = 'Здравствуйте! Я <b>AI-ассистент</b> Parfum Shop ✦<br>Подберу аромат под ваш вкус и бюджет. Спросите или выберите вариант ниже 👇';
    addMsg('bot', t(GREET));
    renderChips(defaultChips());

    /* ---------- Сброс чата при смене языка ---------- */
    window.aiReset = function () {
        messages.innerHTML = '';
        addMsg('bot', t(GREET));
        renderChips(defaultChips());
    };
})();
