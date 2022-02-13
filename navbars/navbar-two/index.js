const menuElements = {
    toggleIcon: document.getElementById('toggleBtn'),
    menu: document.querySelector('.navbar')
}

function showMenu(){
    if (menuElements.menu.classList.contains('closemenu')){
        menuElements.menu.classList.remove('closemenu');
    } else if (!menuElements.menu.classList.contains('closemenu')){
        menuElements.menu.classList.add('closemenu');
    }
};

menuElements.toggleIcon.addEventListener('click', showMenu);