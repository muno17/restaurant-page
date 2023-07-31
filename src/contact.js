function loadContact() {
    const mainBox = document.getElementById("mainBox");
    mainBox.style.fontSize = "1.3rem";

    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = 'Contact Us';
    contactTitle.style.fontSize = '3rem';
    contactTitle.style.textAlign = 'center';

    mainBox.appendChild(contactTitle);
}

export { loadContact };