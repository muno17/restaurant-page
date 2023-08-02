function loader() {
    const body = document.getElementsByTagName('body')[0];
    body.style.padding = '0rem';
    body.style.margin = '0';
    body.style.minHeight = '100vh';
    body.style.display = 'flex';

    const page = document.getElementById('content');
    
    // create flex items
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');


    page.style.display = 'flex';
    page.style.flexDirection = 'column';
    page.style.justifyContent = 'space-evenly';
    page.style.alignItems = 'center';
    page.style.minHeight = "auto";
    page.style.padding = "0rem";
    page.style.margin = "0";
    page.style.fontFamily = 'ubuntu';
    page.style.color = 'white';
    page.style.flex = 'auto';

    header.style.backgroundColor = "#81a3bf";
    header.style.height = '5%';
    header.style.width = '100%';
    header.style.paddingTop = '1rem';
    header.style.paddingBottom = '.5rem';
    header.style.fontSize = '1.7rem';
    //add three navigation divs
    header.style.display = 'flex';
    header.style.justifyContent = 'space-evenly';
    const homeTab = document.createElement('div');
    header.appendChild(homeTab);
    homeTab.innerHTML = "Home";
    homeTab.setAttribute('id','homeTab');
    homeTab.style.border = ".3rem solid white";
    homeTab.style.borderRadius = ".4rem";
    homeTab.style.paddingRight = '1rem';
    homeTab.style.paddingLeft = '1rem';
    homeTab.style.backgroundColor = "#8185bf";
    homeTab.setAttribute('class', 'selected');
    const menuTab = document.createElement('div');
    header.appendChild(menuTab);
    menuTab.innerHTML = 'Menu';
    menuTab.setAttribute('id', 'menuTab');
    menuTab.style.paddingRight = "1rem";
    menuTab.style.paddingLeft = "1rem";
    const contactTab = document.createElement('div');
    header.appendChild(contactTab);
    contactTab.innerHTML = 'Contact';
    contactTab.setAttribute('id', 'contactTab');
    contactTab.style.paddingRight = "1rem";
    contactTab.style.paddingLeft = "1rem";



    main.setAttribute('id', 'mainArea');
    main.style.backgroundColor = "#DBDBDB";
    main.style.height = '100%';
    main.style.width = '100%';

    // add innner box to main area
    const mainBox = document.createElement("div");
    mainBox.setAttribute("id", "mainBox");
    mainBox.style.display = "flex";
    mainBox.style.flexDirection = "column";
    mainBox.style.justifyContent = "space-between";
    mainBox.style.alignItems = "center";
    mainBox.style.height = "100px min";
    mainBox.style.padding = "3rem";
    mainBox.style.margin = "4rem";
    mainBox.style.marginLeft = "15rem";
    mainBox.style.marginRight = "15rem";
    mainBox.style.backgroundColor = "#8E90A4";
    mainBox.style.boxShadow = "3px 3px 8px black";
    mainBox.style.textShadow = "3px 3px 10px black";
    mainBox.style.border = ".5rem solid white";
    mainBox.style.borderRadius = ".5rem";

    main.appendChild(mainBox);


    footer.style.backgroundColor = "#81a3bf";
    footer.style.height = '2%';
    footer.style.width = '100%';
    footer.style.textAlign = 'center';
    footer.style.fontSize = '1.2rem';
    footer.style.padding = '1rem';
    footer.style.marginBottom = '0';
    footer.style.boxShadow = '3px 3px 10px black';
    footer.innerHTML = '© 2023 Danny Muñoz';

    // add flex items to page
    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer)
}

export { loader };