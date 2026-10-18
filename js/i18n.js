// ================================================================
// i18n — переключатель языка УЗБ / РУС
// Словарь: русская строка -> узбекская (латиница).
// Статические тексты переводятся автоматически (обход текстовых узлов),
// динамические — через t() в main.js / ai.js.
// ================================================================
(function () {
    'use strict';

    const UZ = {
        /* ---------- Общее: верхняя панель, подвал ---------- */
        '⏰ Ежедневно: 09:00–22:00': '⏰ Har kuni: 09:00–22:00',
        '🚚 Бесплатная доставка от 500 000 сўм': '🚚 500 000 soʻmdan bepul yetkazib berish',
        '📍 Яндекс Карты': '📍 Yandex xaritalari',
        '© 2026 ANVAROV Maison de Parfum. Все права защищены.': '© 2026 ANVAROV Maison de Parfum. Barcha huquqlar himoyalangan.',
        'Разработано с ❤️': 'Muhabbat bilan yaratildi ❤️',

        /* ---------- Навигация ---------- */
        'Главная': 'Bosh sahifa',
        'Каталог': 'Katalog',
        'О нас': 'Biz haqimizda',
        'Контакты': 'Aloqa',
        'Поиск ароматов...': 'Hidlarini qidirish...',
        'Каталог ароматов': 'Hidlar katalogi',

        /* ---------- Герой ---------- */
        'Искусство аромата': 'Hid sanʼati',
        'в каждом флаконе': 'har bir flakonda',
        'Оригинальная парфюмерия от мировых домов моды. Chanel, Dior, Tom Ford, Gucci и многие другие с доставкой по всему Узбекистану.':
            'Dunyo moda uylaridan original parfümeriya. Chanel, Dior, Tom Ford, Gucci va yana koʻplab brendlar — butun Oʻzbekiston boʻylab yetkazib berish bilan.',
        'Связаться с нами': 'Biz bilan bogʻlanish',

        /* ---------- Категории ---------- */
        'Категории парфюмерии': 'Parfümeriya turlari',
        'Выберите свой идеальный аромат': 'Ozingizga mos ideal hidni tanlang',
        'Для женщин': 'Ayollar uchun',
        'Нежные цветочные и фруктовые ноты': 'Nozik gulli va mevali notalar',
        'Для мужчин': 'Erkaklar uchun',
        'Свежие древесные и пряные ароматы': 'Yangi daraxtli va achchiq hidlar',
        'Унисекс': 'Uniseks',
        'Универсальные ароматы для всех': 'Hammasi uchun universal hidlar',

        /* ---------- Популярное ---------- */
        'Популярные ароматы': 'Ommabop hidlar',
        'Лидеры продаж этого месяца': 'Shu oy sotuv yetakchilari',
        'Все товары →': 'Barcha mahsulotlar →',

        /* ---------- Атрибуты ---------- */
        'Быстрая доставка': 'Tezkor yetkazib berish',
        'От 1 дня по Ташкенту и регионам': 'Toshkent va viloyatlar boʻylab 1 kundan',
        'Оригинальное качество': 'Original sifat',
        'Все парфюмы с сертификатами': 'Barcha parfümlar sertifikat bilan',
        'Оплата любым способом': 'Istalgan usulda toʻlov',
        'Карта, наличные, онлайн': 'Karta, naqd, onlayn',
        'Поддержка 24/7': 'Qoʻllab-quvvatlash 24/7',
        'Поможем выбрать аромат': 'Hid tanlashda yordam beramiz',

        /* ---------- Услуги ---------- */
        'Услуги и подарки': 'Xizmatlar va sovgʻalar',
        'Соберём ваш вечер целиком — от аромата до упаковки': 'Kechangizni toʻliq yigʻamiz — hididan qadoqlashigacha',
        '💐 Букеты с цветами': '💐 Gullar bilan buket',
        'Парфюм + живые цветы к вашему вечеру. Подберём букет под аромат и повод — от романтического свидания до торжества.':
            'Parfüm + kechangiz uchun jonli gullar. Hid va holatga mos buket tanlaymiz — romantik uchrashuvdan tantanagacha.',
        'Заказать букет →': 'Buket buyurtma qilish →',
        '🎁 Упаковка · 32 варианта': '🎁 Qadoqlash · 32 xil',
        'Подарочные упаковки: коробки, боксы, ленты, открытки. Цена добавляется к заказу — отметьте в комментарии.':
            'Sovgʻa qadoqlari: qutilar, bokslar, lentalar, ochiq kartochkalar. Narx buyurtmaga qoʻshiladi — izohda belgilang.',
        'Выбрать упаковку →': 'Qadoqlash tanlash →',

        /* ---------- Почему мы ---------- */
        'Почему мы?': 'Nega biz?',
        '10 причин выбрать именно наш магазин': 'Aynan bizni tanlash uchun 10 sabab',
        'Подлинный аромат': 'Haqiqiy hid',
        'Каждый флакон — из проверенных источников: сертификаты, честное происхождение и ни одного компромисса с качеством':
            'Har bir flakon ishonchli manbalardan: sertifikatlar, halol kelib chiqishi va sifat boʻyicha birorta kompromissiz',
        'История с 13 октября 2022': '2022-yil 13-oktabrdan boshlangan tarix',
        'Первый бутик открылся в Миноре в Ташкенте — с тех пор мы выросли до четырёх магазинов, но любовь к ароматам осталась прежней':
            'Birinchi butik Toshkentdagi Minorda ochildi — shu vaqt ichida toʻrttagacha oʻsdik, ammo hidlargacha boʻlgan muhabbat oʻzgarmadi',
        'Четыре адреса в Ташкенте': 'Toshkentda toʻrtta manzil',
        'Буюк Ипак Йули, 58 и 105В · Мирзо Улугбека, 60 · Сергели-2 — всегда есть бутик рядом с вами':
            'Buyuk Ipak Yoʻli, 58 va 105V · Mirzo Ulugʻbek, 60 · Sergeli-2 — har doim yoningizda butik bor',
        'Личный консультант': 'Shaxsiy maslahatchi',
        'Не просто продавец, а знаток ароматов: подберёт ноты под ваш характер, сезон и повод':
            'Oddiy sotuvchi emas, balki hid bilimdoni: xarakteringiz, mavsum va holatga mos notalarni tanlaydi',
        'Живое знакомство с ароматом': 'Hid bilan jonli tanishuv',
        'Тестеры в каждом магазине: нанесите аромат на коже, поживите с ним полчаса — и только потом решайте':
            'Har bir doʻkonda testerlar: hidni teringizga surting, yarim soat yuring — faqat keyin qaror qabul qiling',
        'Доставка на следующий день': 'Keyingi kuni yetkazib berish',
        'По Ташкенту — за один день, по всему Узбекистану — 1–2 дня. Бесплатно при заказе от 500 000 сўм':
            'Toshkent boʻylab — bir kunda, butun Oʻzbekiston boʻylab — 1–2 kun. 500 000 soʻmdan buyurtmaga bepul',
        'Оплата, как вам удобно': 'Qulayingizdagidek toʻlov',
        'Наличные, карта, Payme или Click — платите при получении или онлайн, как привычнее вам':
            'Naqd, karta, Payme yoki Click — qabul qilishda yoki onlayn toʻlang, qaysi biri sizga qulay boʻlsa',
        'Парфюм и живые цветы': 'Parfüm va jonli gullar',
        'Соберём букет под ваш аромат и повод — красивый вечер начинается с деталей':
            'Hid va holatingizga mos buket yigʻamiz — chiroyli kecha tafsilotlardan boshlanadi',
        'Упаковка на любой вкус': 'Har qanday did uchun qadoqlash',
        '32 варианта коробок, боксов, лент и открыток — подарок будет готов к вручению':
            '32 xil quti, boks, lenta va kartochka — sovgʻa topshirishga tayyor boʻladi',
        '14 дней на обмен': 'Almashtirish uchun 14 kun',
        'Если аромат не стал вашим — обменяем или вернём деньги без лишних вопросов':
            'Hid sizniki boʻlmasa — ortiqcha savollarsiz almashtiramiz yoki pulni qaytaramiz',

        /* ---------- Наш магазин ---------- */
        'Наш магазин': 'Bizning doʻkon',
        'Наши бутики в Ташкенте — изнутри и снаружи': 'Toshkentdagi butiklarimiz — ichkaridan va tashqaridan',
        'Внутри бутика': 'Butik ichida',
        'Наш вход': 'Kirishimiz',

        /* ---------- Отзывы ---------- */
        'Отзывы клиентов': 'Mijozlar fikrlari',
        'Имя, звёзды и слова — расскажите о своём опыте': 'Ism, yulduzlar va soʻzlar — tajribangizni ayting',
        'Оставить отзыв': 'Fikr qoldirish',
        'Ваше имя': 'Ismingiz',
        'Ваши слова о магазине...': 'Doʻkon haqida soʻzlaringiz...',
        'Отправить отзыв': 'Fikr yuborish',
        'Спасибо за отзыв!': 'Fikringiz uchun rahmat!',
        'Заказал Sauvage, доставили на следующий день. Аромат настоящий, упаковали в подарочный бокс — жена в восторге!':
            'Sauvage buyurtma qildim, keyingi kuni yetkazib berishdi. Hid haqiqiy, sovgʻa boksida qadoqlashdi — xotam juda xursand!',
        'Помогли выбрать парфюм под мой бюджет, дали протестировать. Отдельное спасибо за букет из роз к вечеру.':
            'Byudjetimga mos parfüm tanlashda yordam berishdi, sinab koʻrishga berishdi. Alohida rahmat kechki pushtagi uchun!',
        'Хороший магазин, цены приятные. Беру тут ароматы уже второй год, всё нравится.':
            'Yaxshi doʻkon, narxlari yoqimli. Ikki yildan beri shu yerdan hid olaman, hammasi yoqadi.',

        /* ---------- Instagram ---------- */
        'Мы в Instagram': 'Biz Instagramʼdaymiz',
        'Свежие видео и новинки @anvarov_parfum': 'Yangi videolar va yangiliklar @anvarov_parfum',
        'Смотреть в Instagram →': 'Instagramʼda koʻrish →',

        /* ---------- Подвал ---------- */
        'Интернет-магазин оригинальной парфюмерии от мировых брендов. Широкий ассортимент, низкие цены и быстрая доставка.':
            'Dunyo brendlaridan original parfümeriya internet-doʻkoni. Keng assortiment, arzon narxlar va tezkor yetkazib berish.',
        'Интернет-магазин оригинальной парфюмерии от мировых брендов.':
            'Dunyo brendlaridan original parfümeriya internet-doʻkoni.',
        'Покупателям': 'Xaridorlar uchun',
        'Доставка и оплата': 'Yetkazib berish va toʻlov',
        'Возврат товара': 'Mahsulotni qaytarish',
        'Оптовые закупки': 'Ulgurji xaridlar',
        'Обратная связь': 'Qayta aloqa',
        'Подписка на новости': 'Yangiliklar obunasi',
        'Получайте уведомления о новых ароматах и скидках': 'Yangi hidlar va chegirmalar haqida xabar oling',
        'Ваш email': 'Emailingiz',
        'Подписаться': 'Obuna boʻlish',
        'Новинки': 'Yangiliklar',

        /* ---------- О нас ---------- */
        'О магазине Parfum Shop': 'Parfum Shop doʻkoni haqida',
        'Мы — команда ценителей парфюмерии, которая создала пространство, где каждый может найти свой идеальный аромат. В нашем каталоге представлены только оригинальные духи от ведущих мировых домов моды: Chanel, Dior, Tom Ford, Gucci, Yves Saint Laurent и многие другие.':
            'Biz parfümeriya ixlosmandlaridan iborat jamoamiz va har kim oʻz ideal hidini topadigan makon yaratdik. Katalogimizda faqat dunyoning yetakchi moda uylaridan original atirlar mavjud: Chanel, Dior, Tom Ford, Gucci, Yves Saint Laurent va yana koʻplab.',
        'Мы тщательно отбираем каждый флакон, сотрудничая с официальными дистрибьюторами, чтобы гарантировать подлинность и качество каждой капли. Наша цель — сделать парфюмерное искусство доступным для всех, предлагая честные цены и внимательный сервис.':
            'Har bir flakorni ehtiyotkorlik bilan tanlaymiz, rasmiy distribyutorlar bilan hamkorlik qilib, har bir tomchining aslligi va sifatini kafolatlash uchun. Maqsadimiz — parfümeriya sanʼatini hamma uchun mavjud qilish, halol narxlar va eʼtiborli xizmat taklif etish.',
        'Заказывая у нас, вы получаете не просто аромат, а частицу роскоши, внимательное отношение и быструю доставку по всему Узбекистану.':
            'Bizdan buyurtma berib, siz faqat hidni emas, balki nafislik boʻlagi, eʼtiborli munosabat va butun Oʻzbekiston boʻylab tezkor yetkazib berishni olasiz.',
        'довольных клиентов': 'mamnun mijozlar',
        'мировых брендов': 'dunyo brendlari',
        'поддержка клиентов': 'mijozlarni qoʻllab-quvvatlash',
        'Наша история': 'Bizning tariximiz',
        'Как всё начиналось': 'Hammasi qanday boshlangani',
        '13 октября 2022': '2022-yil 13-oktabr',
        'Первый магазин в «Миноре»': '«Minordagi» birinchi doʻkon',
        'Мы открыли первый магазин парфюмерии в Миноре в Ташкенте, в Узбекистане. С этого дня началась наша история — с любви к ароматам и внимания к каждому покупателю.':
            'Toshkentdagi Minorda, Oʻzbekistonda birinchi parfümeriya doʻkonini ochdik. Shu kundan bizning tariximiz boshlandi — hidlarga boʻlgan muhabbat va har bir xaridorga eʼtibordan.',
        'Новые районы столицы': 'Poytaxtning yangi tumanlari',
        'Открылись магазины на улице Буюк Ипак Йули — в самом сердце парфюмерной торговли Ташкента, рядом с метро «Буюк Ипак Йули».':
            'Buyuk Ipak Yoʻli koʻchasida doʻkonlar ochildi — Toshkent parfümeriya savdosining markazida, «Buyuk Ipak Yoʻli» metrosi yonida.',
        'Сегодня': 'Bugun',
        '4 магазина и доставка по всему Узбекистану': '4 doʻkon va butun Oʻzbekiston boʻylab yetkazib berish',
        'Четыре магазина в Ташкенте, тысячи довольных клиентов, букеты с живыми цветами и 32 варианта подарочной упаковки. И всё это — только оригинальная парфюмерия.':
            'Toshkentda toʻrtta doʻkon, minglab mamnun mijozlar, jonli gullar bilan buketlar va 32 xil sovgʻa qadoqlari. Va bularning hammasi — faqat original parfümeriya.',
        'Директор компании': 'Kompaniya direktori',
        'Наши магазины в Ташкенте': 'Toshkentdagi doʻkonlarimiz',
        'Ждём вас ежедневно — выбирайте удобный филиал': 'Har kuni kutamiz — qulay filialingizni tanlang',
        'Мирзо-Улугбекский район': 'Mirzo Ulugʻbek tumani',
        'метро «Буюк Ипак Йули»': '«Buyuk Ipak Yoʻli» metrosi',
        'Сергелийский район, массив Сергели-2': 'Sergeli tumani, Sergeli-2 massivi',
        'метро «Туран»': '«Turan» metrosi',
        'Ежедневно 09:00–22:00': 'Har kuni 09:00–22:00',
        '🗺 Филиалы на Яндекс Картах': '🗺 Yandex xaritalaridagi filiallar',

        /* ---------- Контакты ---------- */
        'ул. Буюк Ипак Йули, 58 (м. «Буюк Ипак Йули»)': 'Buyuk Ipak Yoʻli koʻchasi, 58 («Buyuk Ipak Yoʻli» metrosi)',
        'ул. Буюк Ипак Йули, 105В (м. «Буюк Ипак Йули»)': 'Buyuk Ipak Yoʻli koʻchasi, 105V («Buyuk Ipak Yoʻli» metrosi)',
        'ул. Мирзо Улугбека, 60 (м. «Буюк Ипак Йули»)': 'Mirzo Ulugʻbek koʻchasi, 60 («Buyuk Ipak Yoʻli» metrosi)',
        'Сергели-2, 1 (м. «Туран»)': 'Sergeli-2, 1 («Turan» metrosi)',
        'Телефон': 'Telefon',
        'Электронная почта': 'Elektron pochta',
        'Мы в мессенджерах и соцсетях': 'Biz messenjer va ijtimoiy tarmoqlardamiz',
        'Филиалы на Яндекс Картах': 'Yandex xaritalaridagi filiallar',
        'Режим работы': 'Ish vaqti',
        'Ежедневно 09:00 – 22:00 (без выходных)': 'Har kuni 09:00 – 22:00 (dam olish kunisiz)',
        'Филиал в Сергели-2: 09:00 – 22:00': 'Sergeli-2 filiali: 09:00 – 22:00',
        'Доставка': 'Yetkazib berish',
        'Курьером по Ташкенту и регионам Узбекистана. Бесплатно от 500 000 сўм.':
            'Toshkent va Oʻzbekiston viloyatlariga kuryer orqali. 500 000 soʻmdan bepul.',
        'Напишите нам': 'Bizga yozing',
        'Как к вам обращаться': 'Sizga qanday murojaat qilaylik',
        'Тема сообщения': 'Xabar mavzusi',
        'Вопрос о товаре': 'Mahsulot haqida savol',
        'Другое': 'Boshqa',
        'Ваше сообщение': 'Xabaringiz',
        'Расскажите, чем мы можем вам помочь...': 'Qanday yordam bera olishimizni ayting...',
        'Я согласен с условиями обработки персональных данных': 'Shaxsiy maʼlumotlarni qayta ishlash shartlariga roziman',
        'Отправить сообщение': 'Xabar yuborish',
        'Адрес доставки': 'Yetkazib berish manzili',
        'Город, улица, дом, квартира': 'Shahar, koʻcha, uy, kvartira',
        'Комментарий к заказу': 'Buyurtmaga izoh',
        'Пожелания по доставке (не обязательно)': 'Yetkazib berish boʻyicha istaklar (majburiy emas)',

        /* ---------- Каталог ---------- */
        'Оригинальная парфюмерия и подарочные наборы': 'Original parfümeriya va sovgʻa toʻplamlari',
        'Поиск по названию, бренду...': 'Nomi, brendi boʻyicha qidirish...',
        'Все': 'Barchasi',
        'Женщинам': 'Ayollar uchun',
        'Мужчинам': 'Erkaklar uchun',
        '🎁 Наборы': '🎁 Toʻplamlar',
        'Наборы': 'Toʻplamlar',
        'Популярное': 'Ommabop',
        'Цена: маленький → большой': 'Narx: kichikdan → kattaga',
        'Цена: большой → маленький': 'Narx: kattadan → kichikga',
        'По рейтингу': 'Reyting boʻyicha',
        'Объём: от меньшего': 'Hajm: kichigidan',
        'По названию (А-Я)': 'Nomi boʻyicha (A-Z)',
        'Все бренды': 'Barcha brendlar',
        'Все объёмы': 'Barcha hajmlar',

        /* ---------- Динамические строки (main.js) ---------- */
        'В корзину': 'Savatga',
        '🎁 Набор': '🎁 Toʻplam',
        'Ничего не найдено': 'Hech narsa topilmadi',
        'Сбросить фильтры': 'Filtrlarni tozalash',
        '{n} товаров · {cat}': '{n} mahsulot · {cat}',
        'все категории': 'barcha kategoriyalar',
        'Быстрый просмотр': 'Tezkor koʻrish',
        'Корзина пуста': 'Savat boʻsh',
        'Заказ оформлен, {name}! Мы свяжемся с вами в ближайшее время.':
            'Buyurtma rasmiylashtirildi, {name}! Tez orada siz bilan bogʻlanamiz.',
        'Добавлено: {name}': 'Qoʻshildi: {name}',
        'Ваша корзина пуста': 'Savatingiz boʻsh',
        'Перейти в каталог': 'Katalogga oʻtish',
        'Удалить': 'Oʻchirish',
        'продаж': 'sotuv',
        'Характеристики': 'Xususiyatlar',
        'Товар не найден': 'Mahsulot topilmadi',
        'В каталог': 'Katalogga',
        'Объём': 'Hajm',
        'Категория': 'Kategoriya',
        'Бренд': 'Brend',
        'Страна': 'Mamlakat',
        'Оригинал, ЕС/США': 'Original, YE/AQSH',
        'Продолжить покупки': 'Xaridni davom ettirish',
        'Ваша корзина (страница)': 'Savatingiz',
        'Оформление заказа': 'Buyurtmani rasmiylashtirish',
        'Итог заказа': 'Buyurtma yakuni',
        'Товары': 'Mahsulotlar',
        'Бесплатно': 'Bepul',
        'Итого': 'Jami',
        'Оформить заказ': 'Buyurtma berish',
        'При оформлении заказа с вами свяжется менеджер для уточнения деталей доставки.':
            'Buyurtmani rasmiylashtirishda menejer yetkazib berish tafsilotlari uchun siz bilan bogʻlanadi.',
        'Изображение': 'Rasm',
        'Цена': 'Narx',
        'Кол-во': 'Soni',
        'Сумма': 'Jami',
        'Подтвердить заказ': 'Buyurtmani tasdiqlash',
        'Загрузка товара...': 'Mahsulot yuklanmoqda...',
        'Вам также может понравиться': 'Sizga quyidagilar ham yoqishi mumkin',
        '← Вернуться в каталог': '← Katalogga qaytish',

        /* ---------- AI-ассистент ---------- */
        'AI-ассистент': 'AI-yordamchi',
        'Parfum Shop · всегда онлайн': 'Parfum Shop · doim onlayn',
        'Спросите: подбери аромат…': 'Soʻring: hid tanlab bering…',
        'Подберите для неё ♀️': 'Uchun tanlang ♀️',
        'Подберите для него ♂️': 'Unga tanlang ♂️',
        'Нужен подарок 🎁': 'Sovgʻa kerak 🎁',
        'Что популярно?': 'Nima ommabop?',
        'До 1 000 000 сўм': '1 000 000 soʻmgacha',
        'Какая доставка?': 'Yetkazib berish qanday?',
        'Здравствуйте! Я <b>AI-ассистент</b> Parfum Shop ✦ Подберу аромат под вкус, повод и бюджет — и отвечу на любые вопросы. С чего начнём?':
            'Assalomu alaykum! Men <b>AI-yordamchi</b>man Parfum Shop ✦ Siz didingiz, holatingiz va byudjetingizga mos hid tanlayman — istalgan savolingizga javob beraman. Qayerdan boshlaymiz?',
        'Здравствуйте! Я <b>AI-ассистент</b> Parfum Shop ✦<br>Подберу аромат под ваш вкус и бюджет. Спросите или выберите вариант ниже 👇':
            'Assalomu alaykum! Men <b>AI-yordamchi</b>man Parfum Shop ✦<br>Siz didingiz va byudjetingizga mos hid tanlayman. Soʻring yoki quyidagilardan tanlang 👇',
        '🚚 <b>Доставка</b>: по Ташкенту — от 1 дня, по Узбекистану — 1–3 дня. Курьер, пункты выдачи. Бесплатно при заказе от 500 000 сўм.':
            '🚚 <b>Yetkazib berish</b>: Toshkent boʻylab — 1 kundan, Oʻzbekiston boʻylab — 1–3 kun. Kuryer, topshirish punktlari. 500 000 soʻmdan buyurtmaga bepul.',
        '💳 <b>Оплата</b>: картой (Visa / MasterCard / МИР), СБП, наличными курьеру или при получении. Предоплата не обязательна.':
            '💳 <b>Toʻlov</b>: karta (Visa / MasterCard), Payme / Click, kuryerga naqd yoki qabul qilishda. Oldindan toʻlov majburiy emas.',
        '✅ Только <b>оригинальная</b> парфюмерия с сертификатами от официальных дистрибьюторов. Вернём 100% стоимости при малейшем сомнении.':
            '✅ Faqat <b>original</b> parfümeriya — rasmiy distribyutorlar sertifikatlari bilan. Eng kichik shubha boʻlsa, 100% pulni qaytaramiz.',
        '↩️ <b>Возврат</b> — в течение 14 дней, если товар не использован и цела упаковка. Деньги возвращаем за 3 рабочих дня.':
            '↩️ <b>Qaytarish</b> — 14 kun ichida, mahsulot ishlatilmagan va qadoq butun boʻlsa. Pulni 3 ish kunida qaytaramiz.',
        '💰 Цены — за оригинальную парфюмерию. Средний чек 700 000 – 3 000 000 сўм. Есть наборы-боксы и скидки до −15%.':
            '💰 Narxlar — original parfümeriya uchun. Oʻrtacha chek 700 000 – 3 000 000 soʻm. Boks toʻplamlari va −15% gacha chegirmalar bor.',
        '⏰ Магазин открыт <b>ежедневно 09:00–22:00</b>, без выходных. Менеджер на связи круглосуточно.':
            '⏰ Doʻkon <b>har kuni 09:00–22:00</b> ochiq, dam olish kunisiz. Menejer tunu kun aloqada.',
        '✨ Коллекция <b>{b}</b> — вот бестселлеры:': '✨ <b>{b}</b> kolleksiyasi — eng ommaboplar:',
        'Не нашёл точных совпадений. Уточните: для кого (♀️ / ♂️), повод и бюджет — и я подберу точнее.':
            'Aniq moslik topa olmadim. Aniqlashtiring: kim uchun (♀️ / ♂️), holat va byudjet — aniqroq tanlayman.',
        '🎁 Отличный выбор для подарка! Вот наборы-боксы:': '🎁 Sovgʻa uchun ajoyib tanlov! Boks toʻplamlari:',
        '♀️ Вот что подойдёт <b>для неё</b>:': '♀️ <b>Ayol uchun</b> mos keladiganlar:',
        '♂️ Вот что подойдёт <b>для него</b>:': '♂️ <b>Erkak uchun</b> mos keladiganlar:',
        '👥 Универсальные ароматы, подходят всем:': '👥 Universal hidlar, hammasiga mos:',
        '💸 Варианты в вашем бюджете:': '💸 Byudjetingizdagi variantlar:',
        '🖤 Подобрал по вашим нотам:': '🖤 Siz notalaringiz boʻyicha tanladim:',
        '🖤 Вот мои рекомендации:': '🖤 Menga tavsiyalarim:',
        'Могу подобрать аромат по полу, нотам, поводу и бюджету, а также рассказать про доставку и оплату. Выберите вариант ниже или напишите свободно 👇':
            'Jins, notalar, holat va byudjet boʻyicha hid tanlayman, shuningdek yetkazib berish va toʻlov haqida aytib beraman. Quyidagilardan tanlang yoki erkin yozing 👇',

        /* ---------- Описания товаров (70) ---------- */
        'Свежий и чувственный аромат с нотами апельсина, розы и пачули.': 'Apelsin, atirgul va patchuli notalari bilan yangi va hissiy hid.',
        'Сияющий цветочный букет с жасмином, розой и орхидеей.': 'Jasmin, atirgul va orxideya bilan yorqin gullar buketi.',
        'Энергичный аромат с нотами кофе, ванили и белых цветов.': 'Kofe, vanil va oq gullar notalari bilan joʻshqin hid.',
        'Нежный цветочный букет с туберозой, жасмином и плющом.': 'Tuberoza, jasmin va ivit bilan nozik gullar buketi.',
        'Счастливый аромат с ирисом, жасмином и апельсиновым цветом.': 'Iris, jasmin va apelsin gullari bilan baxtli hid.',
        'Игривый аромат с земляникой, фиалкой и жасмином.': 'Qulupnay, fialka va jasmin bilan oʻyinqiroq hid.',
        'Легендарный аромат с альдегидами, жасмином и ванилью.': 'Aldegidlar, jasmin va vanil bilan afsonaviy hid.',
        'Романтический цветочный аромат с розой и мускусом.': 'Atirgul va misk bilan romantik gulli hid.',
        'Смелый аромат с жасмином, ванилью и кедром.': 'Jasmin, vanil va kedr bilan jasur hid.',
        'Сладкий карамельный аромат с мускусом и бензоином.': 'Misk va benzoin bilan shirin karamel hid.',
        'Фруктовый аромат с малиной, жасмином и мускусом.': 'Malina, jasmin va misk bilan mevali hid.',
        'Соблазнительный аромат с туберозой, кофе и какао.': 'Tuberoza, kofe va kakao bilan jozibador hid.',
        'Тёплый аромат с амбром, сандалом и жасмином.': 'Ambr, sandal va jasmin bilan iliq hid.',
        'Весенний аромат с туберозой, розой и грушей.': 'Tuberoza, atirgul va nok bilan bahorga oid hid.',
        'Элегантный аромат с тоей, орхидеей и кашмераном.': 'Orxideya va kashmeran bilan nafis hid.',
        'Средиземноморский аромат с яблоком, жасмином и кедром.': 'Olma, jasmin va kedr bilan yer dengizi hid.',
        'Прозрачный аромат с лотосом, чаем и мускусом.': 'Lotus, choy va misk bilan shaffof hid.',
        'Яркий аромат с розой, пачули и мандарином.': 'Atirgul, patchuli va mandarin bilan yorqin hid.',
        'Шипровый аромат с мускусом, розой и ванилью.': 'Misk, atirgul va vanil bilan shipr hid.',
        'Изящный аромат с пионом, яблоком и кожей.': 'Piyo, olma va teri bilan nozik hid.',
        'Свежий пряный аромат с бергамотом и амброксаном.': 'Bergamot va ambroxan bilan yangi achchiq hid.',
        'Древесный аромат с сандалом, кедром и мускусом.': 'Sandal, kedr va misk bilan daraxt hid.',
        'Морской аромат с бергамотом, ладаном и пачули.': 'Bergamot, lubon va patchuli bilan dengiz hid.',
        'Страстный аромат с мятой, яблоком и ванилью.': 'Yalpiz, olma va vanil bilan ishqiy hid.',
        'Классика с мятой, лавандой и ванилью.': 'Yalpiz, lavanda va vanil bilan klassika.',
        'Дерзкий аромат с кожей, розой и корицей.': 'Tere, atirgul va doljin bilan dadil hid.',
        'Свежий аромат с лавандой, нероли и ветивером.': 'Lavanda, neroli va vetiver bilan yangi hid.',
        'Деловой аромат с яблоком, мускусом и сандалом.': 'Olma, misk va sandal bilan ishbor hid.',
        'Свежий аромат с лавандой, грейпфрутом и кедром.': 'Lavanda, greyfrut va kedr bilan yangi hid.',
        'Свободный аромат с базиликом, дыней и мускусом.': 'Rayhon, qovun va misk bilan erkin hid.',
        'Тёплый аромат с амбром, имбиром и табаком.': 'Ambr, zanjabil va tamaki bilan iliq hid.',
        'Мощный аромат с ромом, кожей и табаком.': 'Rom, tere va tamaki bilan kuchli hid.',
        'Изысканный аромат с бергамотом, ирисом и пачули.': 'Bergamot, iris va patchuli bilan nafis hid.',
        'Дерзкий аромат с лимоном, ванилью и табаком.': 'Limon, vanil va tamaki bilan dadil hid.',
        'Современный аромат с кофе, ванилью и кедром.': 'Kofe, vanil va kedr bilan zamonaviy hid.',
        'Сдержанный аромат с бергамотом, миндалём и ветивером.': 'Bergamot, bodom va vetiver bilan jiddiy hid.',
        'Восточный аромат с удом, розой и специями.': 'Oud, atirgul va ziravorlar bilan sharqiy hid.',
        'Элитарный аромат с ананасом, яблоком и мускусом.': 'Ananas, olma va misk bilan elit hid.',
        'Тёплый аромат с табаком, сандалом и амбром.': 'Tamaki, sandal va ambr bilan iliq hid.',
        'Ночной аромат с водкой, имбиром и кожей.': 'Vodka, zanjabil va tere bilan tungi hid.',
        'Роскошный аромат чёрной орхидеи, трюфеля и чёрной смородины.': 'Qora orxideya, truffel va qora smorodina bilan nafis hid.',
        'Аромат джаз-клуба: ром, табак, ваниль и коричневый сахар.': 'Jazz klubining hidi: rom, tamaki, vanil va qahva shakar.',
        'Культовый сандал с кедром, кардамоном и кожей.': 'Kedr, kardamon va tere bilan kult sandal.',
        'Минималистичный аромат на молекуле Iso E Super.': 'Iso E Super molekulasi asosidagi minimalistik hid.',
        'Свободный аромат с ванилью, жасмином и кашмером.': 'Vanil, jasmin va kashmir bilan erkin hid.',
        'Исторический цветочный букет с туберозой и лилией.': 'Tuberoza va liliya bilan tarixiy gullar buketi.',
        'Уютный аромат у камина: ваниль, костровые и кашмира.': 'Kamin yonidagi qulay hid: vanil, olov hidlari va kashmir.',
        'Роскошный табачный аромат с ванилью и какао.': 'Vanil va kakao bilan nafis tamaki hid.',
        'Загадочный амбровый аромат с мускусом и ирисом.': 'Misk va iris bilan sirli ambr hid.',
        'Кристальный аромат горного источника с бергамотом.': 'Bergamot bilan togʻ manbasining kristall hidi.',
        'Подарочный набор J\'adore: духи 50 мл + миниатюры.': 'J\'adore sovgʻa toʻplami: atir 50 ml + miniatyuralar.',
        'Элегантный набор Coco Mademoiselle в подарочной упаковке.': 'Coco Mademoiselle elegant sovgʻa toʻplami qadoqda.',
        'Набор Sauvage: парфюм 100 мл + гель для душа.': 'Sauvage toʻplami: parfüm 100 ml + dush geli.',
        'Подарочный набор Eros в фирменной коробке.': 'Eros sovgʻa toʻplami firma qutisida.',
        'Набор 1 Million: парфюм + лосьон после бритья.': '1 Million toʻplami: parfüm + soʻqovdan keyin losyon.',
        'Подарочный набор La Vie Est Belle в роскошной коробке.': 'La Vie Est Belle sovgʻa toʻplami nafis qutida.',
        'Набор Black Opium с миниатюрами и шёлковым чехлом.': 'Black Opium toʻplami miniatyuralar va ipak gʻilof bilan.',
        'Цветочный набор Bloom в подарочной упаковке Gucci.': 'Bloom gulli toʻplami Gucci sovgʻa qadoqida.',
        'Набор Acqua di Gio: парфюм 75 мл + миниатюра.': 'Acqua di Gio toʻplami: parfüm 75 ml + miniatyura.',
        'Игривый набор Daisy с цветочной коробкой.': 'Gulli qutisi bilan oʻyinqiroq Daisy toʻplami.',
        'Набор Le Male: парфюм 125 мл + гель для душа.': 'Le Male toʻplami: parfüm 125 ml + dush geli.',
        'Подарочный набор Born in Roma в стильной коробке.': 'Born in Roma sovgʻa toʻplami uslubiy qutida.',
        'Набор Candy с карамельными нотами и миниатюрами.': 'Karamel notalari va miniatyuralar bilan Candy toʻplami.',
        'Подарочный набор Burberry Her в фирменной упаковке.': 'Burberry Her sovgʻa toʻplami firma qadoqida.',
        'Набор Good Girl в фирменной коробке-каблучке.': 'Good Girl toʻplami firma kabin qutisida.',
        'Роскошный набор Tom Ford Black Orchid Private Blend.': 'Tom Ford Black Orchid Private Blend nafis toʻplami.',
        'Набор Bottled: парфюм 100 мл + гель для душа.': 'Bottled toʻplami: parfüm 100 ml + dush geli.',
        'Изысканный набор Omnia в подарочной коробке Bvlgari.': 'Omnia nafis toʻplami Bvlgari sovgʻa qutisida.',
        'Набор Live Irrésistible с яркой подарочной упаковкой.': 'Live Irrésistible toʻplami yorqin sovgʻa qadoqda.',
        'Элитарный набор Red Aoud в фирменном футляре.': 'Red Aoud elit toʻplami firma futlarida.'
    };

    let LANG = (function () {
        try { return localStorage.getItem('ps_lang') === 'uz' ? 'uz' : 'ru'; }
        catch (e) { return 'ru'; }
    })();

    const origText = new WeakMap();
    const norm = s => (s || '').replace(/\s+/g, ' ').trim();

    function tr(s) {
        if (LANG !== 'uz' || !s) return s;
        return UZ[norm(s)] || s;
    }

    // Перевод динамических строк (вызывается из main.js / ai.js)
    window.t = function (s) { return tr(s); };
    window.getLang = function () { return LANG; };

    function walk(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let n;
        while ((n = walker.nextNode())) nodes.push(n);
        for (const node of nodes) {
            const el = node.parentElement;
            if (!el || el.closest('script, style, noscript, textarea, code')) continue;
            if (!origText.has(node)) origText.set(node, node.nodeValue);
            const orig = origText.get(node);
            if (norm(orig)) node.nodeValue = tr(orig);
        }
    }

    function applyStatic() {
        if (!document.body) return;
        walk(document.body);
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
            if (el.dataset.origPh === undefined) el.dataset.origPh = el.placeholder;
            el.placeholder = tr(el.dataset.origPh);
        });
        document.querySelectorAll('[title]').forEach(el => {
            const orig = el.getAttribute('title');
            if (!orig) return;
            if (el.dataset.origTitle === undefined) el.dataset.origTitle = orig;
            el.setAttribute('title', tr(el.dataset.origTitle));
        });
        document.querySelectorAll('.lang-switch button').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === LANG);
        });
        document.documentElement.lang = LANG;
    }

    window.applyLang = applyStatic;

    function setLang(lang) {
        if ((lang !== 'uz' && lang !== 'ru') || lang === LANG) return;
        LANG = lang;
        try { localStorage.setItem('ps_lang', lang); } catch (e) { /* noop */ }
        applyStatic();
        if (typeof window.onLangChange === 'function') window.onLangChange();
    }
    window.setLang = setLang;

    document.addEventListener('DOMContentLoaded', function () {
        applyStatic();
        document.querySelectorAll('.lang-switch button').forEach(b => {
            b.addEventListener('click', () => setLang(b.dataset.lang));
        });
    });
})();
