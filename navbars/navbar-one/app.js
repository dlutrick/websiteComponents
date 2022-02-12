// Toggle Menu
const menu = {
    toggleBtn: document.querySelector('.toggleBtn'),
    menuContainer: document.querySelector('.header__navbar')
};

function toggleMenu(){
    if (menu.menuContainer.classList.contains('header__navbar__close')){
        menu.menuContainer.classList.remove('header__navbar__close');
        menu.toggleBtn.classList.remove('fa-bars');
        menu.toggleBtn.classList.add('fa-xmark');
    } else if (!menu.menuContainer.classList.contains('header__navbar__close')){
        menu.menuContainer.classList.add('header__navbar__close');
        menu.toggleBtn.classList.add('fa-bars');
        menu.toggleBtn.classList.remove('fa-xmark');
    }
};

menu.toggleBtn.addEventListener('click', toggleMenu);