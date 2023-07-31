function loader() {
    const body = document.getElementsByTagName('body')[0];
    body.style.padding = '0rem';
    body.style.margin = '0';

    const page = document.getElementById('content');
    
    // create flex items
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');


    page.style.display = 'flex';
    page.style.flexDirection = 'column';
    page.style.justifyContent = 'space-evenly';
    page.style.alignItems = 'center';
    page.style.height = "100vh";
    page.style.padding = "0rem";
    page.style.margin = "0";
    page.style.fontFamily = 'ubuntu';
    page.style.color = 'white';


    header.style.backgroundColor = "#BC81BF";
    header.style.height = '5%';
    header.style.width = '100%';
    header.style.paddingTop = '1rem';
    //add three navigation divs
    header.style.display = 'flex';
    header.style.justifyContent = 'space-evenly';
    const homeTab = document.createElement('div');
    header.appendChild(homeTab);
    homeTab.innerHTML = "Home";
    homeTab.setAttribute('id','homeTab');
    const menuTab = document.createElement('div');
    header.appendChild(menuTab);
    menuTab.innerHTML = 'Menu';
    menuTab.setAttribute('id', 'menuTab');
    const contactTab = document.createElement('div');
    header.appendChild(contactTab);
    contactTab.innerHTML = 'Contact';
    contactTab.setAttribute('id', 'contactTab');



    main.setAttribute('id', 'mainArea');
    main.style.backgroundColor = "#8E90A4";
    main.style.height = '100%';
    main.style.width = '100%';


    footer.style.backgroundColor = "#BC81BF";
    footer.style.height = '2%';
    footer.style.width = '100%';

    // add flex items to page
    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer)
}

export { loader };