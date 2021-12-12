function openMenu() {
    const elementMenu = this.closest('li.menu__item');
    const elementMenuSub = elementMenu.querySelector('ul.menu_sub');
    if (elementMenuSub) {
        elementMenuSub.className = 'menu menu_sub menu_active';
        return false;
    }
}

function closeMenu() {
    const elementMenuSub = this.querySelector('ul.menu_sub');
    if (elementMenuSub) {
        elementMenuSub.className = 'menu menu_sub';
    }
}

const linkMenu = document.querySelectorAll('ul.menu_main > li > a');
for (let i = 0, length = linkMenu.length; i < length; i++) {
    linkMenu[i].onclick = openMenu;
}

const elementMenu = document.querySelectorAll('ul.menu_main > li');
for (let i = 0, length = elementMenu.length; i < length; i++) {
    elementMenu[i].onmouseleave = closeMenu;
}