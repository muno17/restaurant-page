function loadHome() {
    const homePage = document.createElement('div');
    homePage.style.display = "flex";
    homePage.style.flexDirection = "column";
    homePage.style.justifyContent = "space-between";
    homePage.style.alignItems = "center";
    homePage.style.height = "60vh";
    homePage.style.padding = "3rem";
    homePage.style.margin = "4rem";
    homePage.style.marginLeft = "15rem";
    homePage.style.marginRight = "15rem";
    homePage.style.backgroundColor = "#DBDBDB";
    homePage.style.boxShadow = "3px 3px 8px black";
    homePage.style.textShadow = "3px 3px 10px black";
    homePage.style.border = ".5rem solid white";
    homePage.style.borderRadius = ".5rem";

    const homeTitle = document.createElement('div');
    homeTitle.innerHTML = `Rafa's Restaurant`;

    const info = document.createElement('div');
    info.innerHTML = 'We make wings and pasta and empanadas and curries and dumplings';

    const hours = document.createElement('div');
    hours.innerHTML = 'Open Daily 5pm - 4am';

    const locationa = document.createElement('div');
    locationa.innerHTML = '1234 Rafadafabobafa Lane';


    homePage.appendChild(homeTitle);
    homePage.appendChild(info);
    homePage.appendChild(hours);
    homePage.appendChild(locationa);


    // add homePage to DOM
    const main = document.getElementById('mainArea');
    main.appendChild(homePage);
}

export { loadHome };