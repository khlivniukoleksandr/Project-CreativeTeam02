(() => {
  const menu = document.querySelector('.js-menu-container');
  const btn = document.querySelector('.js-open-menu');
  if (!menu || !btn) return;

  // ===== Іконки зі sprite.svg
  const ICON_CLOSED = 'icon-menu';   // бургер
  const ICON_OPENED = 'icon-close';  // хрестик

  // <use> всередині кнопки
  const iconUse = btn.querySelector('use');

  // База посилання на sprite (підтримка href та xlink:href)
  const getSpriteBase = () => {
    if (!iconUse) return null;
    const href = iconUse.getAttribute('href') || iconUse.getAttribute('xlink:href');
    if (!href) return null;
    // очікуємо формат "./img/icons.svg#id" або "img/icons.svg#id"
    return href.split('#')[0] || null;
  };

  // Перемкнути іконку в кнопці
  const setIcon = id => {
    const base = getSpriteBase();
    if (!base || !iconUse) return;
    iconUse.setAttribute('href', `${base}#${id}`);
    iconUse.setAttribute('xlink:href', `${base}#${id}`); // для сумісності
  };

  // Аксесібіліті: приховати/показати усіх сусідів, крім хедера і самого меню
  const setSiblingsAriaHidden = (hidden) => {
    const header = document.getElementById('header');
    [...document.body.children].forEach(el => {
      if (el === header || el === menu) return;
      el.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    });
  };

  // Компенсація ширини скролбару, щоб не "стрибав" контент
  const applyScrollbarCompensation = (enable) => {
    const hasVerticalScroll = window.innerWidth > document.documentElement.clientWidth;
    const scrollbar = hasVerticalScroll ? (window.innerWidth - document.documentElement.clientWidth) : 0;
    document.documentElement.style.setProperty(
      '--scrollbar-comp',
      enable ? `${scrollbar}px` : '0px'
    );
    // При бажанні можете ще додати padding-right до фіксованих хедерів, якщо треба
  };

  let onKeydown = null;
  let onClickOutside = null;

  const addDynamicListeners = () => {
    if (!onClickOutside) {
      onClickOutside = (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
      };
      document.addEventListener('click', onClickOutside);
    }

    if (!onKeydown) {
      onKeydown = (e) => {
        if (e.key === 'Escape') closeMenu();
      };
      document.addEventListener('keydown', onKeydown);
    }
  };

  const removeDynamicListeners = () => {
    if (onKeydown) document.removeEventListener('keydown', onKeydown);
    if (onClickOutside) document.removeEventListener('click', onClickOutside);
    onKeydown = null;
    onClickOutside = null;
  };

  // Відкрити меню
  const openMenu = () => {
    menu.classList.add('is-open');

    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Закрити мобільне меню');

    // Робимо фон (сусідів) недоступним для читачів екрану
    setSiblingsAriaHidden(true);
    // Саме меню — видиме для читачів
    menu.setAttribute('aria-hidden', 'false');

    // Лочимо скрол і компенсуємо скролбар
    document.body.classList.add('no-scroll');
    applyScrollbarCompensation(true);

    // Іконка: бургер -> хрестик
    setIcon(ICON_OPENED);

    // Поставити фокус усередину
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])'
    ].join(',');

    const firstFocusable = menu.querySelector(focusableSelector);
    setTimeout(() => (firstFocusable || menu).focus(), 0);

    addDynamicListeners();
  };

  // Закрити меню
  const closeMenu = () => {
    menu.classList.remove('is-open');

    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Відкрити мобільне меню');

    // Повертаємо доступність фону
    setSiblingsAriaHidden(false);
    menu.setAttribute('aria-hidden', 'true');

    // Розлочуємо скрол, прибираємо компенсацію
    document.body.classList.remove('no-scroll');
    applyScrollbarCompensation(false);

    // Іконка: хрестик -> бургер
    setIcon(ICON_CLOSED);

    removeDynamicListeners();
    btn.focus();
  };

  // Тоглер
  const toggleMenu = () => {
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  };

  // Клік по кнопці
  btn.addEventListener('click', toggleMenu);

  // Закриття по посиланнях меню
  menu.addEventListener('click', (e) => {
    const link = e.target.closest('.js-close-menu');
    if (link) closeMenu();
  });

})();
