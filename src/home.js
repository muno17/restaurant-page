function loadHome() {
    const homePage = document.createElement('div');
    homePage.style.display = "flex";
    homePage.style.flexDirection = "column";
    homePage.style.justifyContent = "spaceEvenly";
    homePage.style.alignItems = "center";
    homePage.style.height = "100vh";
    homePage.style.padding = "0rem";
    homePage.style.margin = "0";

    const homeTitle = document.createElement('div');
    homeTitle.innerHTML = `Rafa's Restaurant`;

    const info = document.createElement('div');
    info.innerHTML = 'We make wings and pasta and empanadas';

    const hours = document.createElement('div');
    hours.innerHTML = 'Open Daily 5pm - 4am';

    const location = document.createElement('div');
    location.innerHTML = '1234 Rafadafabobafa Lane';


    homePage.appendChild(homeTitle);
    homePage.appendChild(info);
    homePage.appendChild(hours);
    homePage.appendChild(location);


    // add homePage to DOM
    const main = document.getElementById('mainArea');
    main.appendChild(homePage);
}

export { loadHome };