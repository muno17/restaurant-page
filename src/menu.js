function loadMenu() {
    const mainBox = document.getElementById("mainBox");
    mainBox.style.fontSize = "1.3rem";

    const menuTitle = document.createElement("div");
    menuTitle.innerHTML = "Menu";
    menuTitle.style.fontSize = "3rem";
    menuTitle.style.textAlign = "center";
    menuTitle.style.border = ".3rem solid white";
    menuTitle.style.padding = "1rem";
    menuTitle.style.paddingRight = "3rem";
    menuTitle.style.paddingLeft = "3rem";
    menuTitle.style.borderRadius = ".4rem";
    menuTitle.style.backgroundColor = "#8185bf";

    const menuInfo = document.createElement("div");
    menuInfo.innerHTML =
        "We have no menu since this is a buffet you nerds but here are some of the many buffet sections we have for you to enjoy";
    menuInfo.style.fontSize = "1.5rem";
    menuInfo.style.textAlign = "center";
    menuInfo.style.marginTop = '2rem';
    menuInfo.style.marginBottom = '2rem';

    const buffets = document.createElement("div");

    const pastaBuffet = document.createElement("img");
    pastaBuffet.src =
        "https://media.istockphoto.com/id/482648031/photo/different-salads-at-a-buffet.jpg?s=612x612&w=0&k=20&c=R21ofdFxY_snrpK_guTSx6DjYWOrGdk5lan9WTtQQQM=";
    pastaBuffet.style.height = '20rem';
    pastaBuffet.style.width = '30rem';
    pastaBuffet.style.border = ".3rem solid white";
    pastaBuffet.style.borderRadius = ".5rem";
    
    const curryBuffet = document.createElement("img");
    curryBuffet.src =
        "https://media.istockphoto.com/id/1416487529/photo/buffet.jpg?s=612x612&w=0&k=20&c=kNQUuqtMSk95qj1-Rx8TcR5SoXIIl-0renrYjn2sEtc=";
    curryBuffet.style.height = "20rem";
    curryBuffet.style.width = "30rem";
    curryBuffet.style.border = ".3rem solid white";
    curryBuffet.style.borderRadius = ".5rem";

    const pizzaBuffet = document.createElement("img");
    pizzaBuffet.src =
        "https://flyingpie.com/wp-content/uploads/2020/04/lunch-2.jpg";
    pizzaBuffet.style.height = "20rem";
    pizzaBuffet.style.width = "30rem";
    pizzaBuffet.style.border = ".3rem solid white";
    pizzaBuffet.style.borderRadius = ".5rem";

    const soupBuffet = document.createElement("img");
    soupBuffet.src =
        "https://live.staticflickr.com/65535/49440391643_71e9432d1d_b.jpg";
    soupBuffet.style.height = "20rem";
    soupBuffet.style.width = "30rem";
    soupBuffet.style.border = ".3rem solid white";
    soupBuffet.style.borderRadius = ".5rem";

    buffets.appendChild(pastaBuffet);
    buffets.appendChild(curryBuffet);
    buffets.appendChild(pizzaBuffet);
    buffets.appendChild(soupBuffet);
    buffets.style.display = 'flex';
    buffets.style.flexDirection = 'column';
    buffets.style.justifyContent = 'space-evenly';
    buffets.style.alignItems = 'center';
    buffets.style.gap = '1.5rem';

    mainBox.appendChild(menuTitle);
    mainBox.appendChild(menuInfo);
    mainBox.appendChild(buffets);
}

export { loadMenu };
