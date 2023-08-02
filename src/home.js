function loadHome() {
    const mainBox = document.getElementById('mainBox');
    mainBox.style.fontSize = '1.3rem';

    const homeTitle = document.createElement('div');
    homeTitle.innerHTML = `Rafa's All You Can Eat Buffet of Hedonism and Bar`;
    homeTitle.style.fontSize = '3rem';
    homeTitle.style.textAlign = 'center';
    homeTitle.style.border = '.3rem solid white';
    homeTitle.style.padding = '1rem';
    homeTitle.style.borderRadius ='.4rem';
    homeTitle.style.backgroundColor = "#8185bf";

    const info = document.createElement('div');
    info.innerHTML = `We make wings and pasta and empanadas and curries and 
                    dumplings and all of the other good stuff
                    <br> If you eat it, we got it
                    <br> If we don't got it, maybe try something better
                    <br> If you don't like it, then don't come LOL
                    <br>- Rafa`;
    info.style.border = ".3rem solid white";
    info.style.padding = "1rem";
    info.style.borderRadius = ".4rem";
    info.style.backgroundColor = "#8185bf";
    info.style.marginTop = '1.5rem';
    info.style.marginBottom = '1.5rem';

    const hours = document.createElement('div');
    hours.innerHTML = 'Open Daily 5pm - 4am';
    hours.style.border = ".3rem solid white";
    hours.style.padding = "1rem";
    hours.style.borderRadius = ".4rem";
    hours.style.backgroundColor = "#8185bf";
    hours.style.marginTop = '1.5rem';
    hours.style.marginBottom = '1.5rem';

    const location = document.createElement('div');
    location.innerHTML = '1234 Rafadafabobafa Lane';
    location.style.border = ".3rem solid white";
    location.style.padding = "1rem";
    location.style.borderRadius = ".4rem";
    location.style.backgroundColor = "#8185bf";
    location.style.marginTop = '1.5rem';


    mainBox.appendChild(homeTitle);
    mainBox.appendChild(info);
    mainBox.appendChild(hours);
    mainBox.appendChild(location);
}

export { loadHome };