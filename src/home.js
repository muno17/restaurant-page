function loadHome() {
    const mainBox = document.getElementById('mainBox');

    const homeTitle = document.createElement('div');
    homeTitle.innerHTML = `Rafa's Restaurant`;

    const info = document.createElement('div');
    info.innerHTML = 'We make wings and pasta and empanadas and curries and dumplings';

    const hours = document.createElement('div');
    hours.innerHTML = 'Open Daily 5pm - 4am';

    const locationa = document.createElement('div');
    locationa.innerHTML = '1234 Rafadafabobafa Lane';


    mainBox.appendChild(homeTitle);
    mainBox.appendChild(info);
    mainBox.appendChild(hours);
    mainBox.appendChild(locationa);
}

export { loadHome };