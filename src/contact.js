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
    contactTitle.style.marginTop = '1.5rem';
    contactTitle.style.marginBottom = '1.5rem';

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `Call us at 420-666-6969 with any questions/concerns
                            <br>
                            <br> We are conveniently located in your dreams`;

    contactInfo.style.textAlign = "center";
    contactInfo.style.border = ".3rem solid white";
    contactInfo.style.padding = "1rem";
    contactInfo.style.borderRadius = ".4rem";
    contactInfo.style.backgroundColor = "#8185bf";
    contactInfo.style.marginTop = '1.5rem';

    mainBox.appendChild(contactTitle);
    mainBox.appendChild(contactInfo);
}

export { loadContact };