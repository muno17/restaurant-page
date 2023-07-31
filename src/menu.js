function loadMenu() {
    const mainBox = document.getElementById("mainBox");
    mainBox.style.fontSize = "1.3rem";

    const menuTitle = document.createElement('div');
    menuTitle.innerHTML = 'Menu';
    menuTitle.style.fontSize = '3rem';
    menuTitle.style.textAlign = 'center';

    mainBox.appendChild(menuTitle);
}


export { loadMenu };