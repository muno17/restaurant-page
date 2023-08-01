function loadMenu() {
    const mainBox = document.getElementById("mainBox");
    mainBox.style.fontSize = "1.3rem";

    const menuTitle = document.createElement('div');
    menuTitle.innerHTML = 'Menu';
    menuTitle.style.fontSize = '3rem';
    menuTitle.style.textAlign = 'center';
    menuTitle.style.border = ".3rem solid white";
    menuTitle.style.padding = "1rem";
    menuTitle.style.paddingRight = '3rem'; 
    menuTitle.style.paddingLeft = '3rem';
    menuTitle.style.borderRadius = ".4rem";
    menuTitle.style.backgroundColor = "#8185bf";

    mainBox.appendChild(menuTitle);
}


export { loadMenu };