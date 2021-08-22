(() => {
  const nav = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  nav.addEventListener('click', () => {
    nav.classList.toggle('burger_open');
    menu.classList.toggle('menu_open');

    document.body.style.overflowY =
      nav.className === 'burger burger_open' ? 'hidden' : 'initial';
  });
})();
