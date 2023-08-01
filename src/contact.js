function loadContact() {
    const mainBox = document.getElementById("mainBox");
    mainBox.style.fontSize = "1.3rem";

    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = 'Contact Us';
    contactTitle.style.fontSize = '3rem';
    contactTitle.style.textAlign = 'center';
    contactTitle.style.border = ".3rem solid white";
    contactTitle.style.padding = "1rem";
    contactTitle.style.paddingRight = "3rem";
    contactTitle.style.paddingLeft = "3rem";
    contactTitle.style.borderRadius = ".4rem";
    contactTitle.style.backgroundColor = "#8185bf";

    mainBox.appendChild(contactTitle);
}

export { loadContact };