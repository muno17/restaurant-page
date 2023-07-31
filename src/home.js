function loadHome() {
    const mainBox = document.getElementById('mainBox');
    mainBox.style.fontSize = '1.3rem';

    const homeTitle = document.createElement('div');
    homeTitle.innerHTML = `Rafa's All You Can Eat Buffet of Hedonism and Bar`;
    homeTitle.style.fontSize = '3rem';
    homeTitle.style.textAlign = 'center';

    const info = document.createElement('div');
    info.innerHTML = `We make wings and pasta and empanadas and curries and 
                    dumplings and all of the other good stuff`;

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