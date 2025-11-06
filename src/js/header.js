(() => {
  const menu = document.querySelector('.js-menu-container');
  const btn = document.querySelector('.js-open-menu');
  if (!menu || !btn) return;

  const iconUse = btn.querySelector('use');
  const getSpriteBase = () => {
    if (!iconUse) return null;
    const href = iconUse.getAttribute('href') || iconUse.getAttribute('xlink:href');
    return href ? href.split('#')[0] : null;
  };

  let onKeydown = null;
  let onClickOutside = null;

  const addDynamicListeners = () => {
    if (!onKeydown) {
      onKeydown = e => e.key === 'Escape' && closeMenu();
      document.addEventListener('keydown', onKeydown);
    }
    if (!onClickOutside) {
      onClickOutside = e => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
      };
      document.addEventListener('click', onClickOutside);
    }
  };

  const removeDynamicListeners = () => {
    if (onKeydown) document.removeEventListener('keydown', onKeydown);
    if (onClickOutside) document.removeEventListener('click', onClickOutside);
    onKeydown = null;
    onClickOutside = null;
  };

  const openMenu = () => {
    const base = getSpriteBase();
    menu.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Закрити мобільне меню');
    if (base && iconUse) iconUse.setAttribute('href', `${base}#icon-close`);
    document.body.classList.add('no-scroll');
    addDynamicListeners();
  };

  const closeMenu = () => {
    const base = getSpriteBase();
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Відкрити мобільне меню');
    if (base && iconUse) iconUse.setAttribute('href', `${base}#icon-burger`);
    document.body.classList.remove('no-scroll');
    removeDynamicListeners();
  };

  const toggleMenu = () => (menu.classList.contains('is-open') ? closeMenu() : openMenu());

  btn.addEventListener('click', toggleMenu);

  menu.querySelectorAll('.nav-link, .mobile-order-btn').forEach(a => {
    a.addEventListener('click', () => menu.classList.contains('is-open') && closeMenu());
  });

  const mq = window.matchMedia('(min-width: 1440px)');
  const handleMq = e => e.matches && menu.classList.contains('is-open') && closeMenu();
  mq.addEventListener('change', handleMq);

  window.addEventListener('beforeunload', () => {
    removeDynamicListeners();
    mq.removeEventListener('change', handleMq);
  });
})();
