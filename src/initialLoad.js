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
    page.style.justifyContent = 'spaceEvenly';
    page.style.alignItems = 'center';
    page.style.height = "100vh";
    page.style.padding = "0rem";
    page.style.margin = "0";



    header.innerHTML = 'header';
    header.style.backgroundColor = "#BC81BF";
    header.style.height = '10%';
    header.style.width = '100%';

    main.innerHTML = 'main';
    main.style.backgroundColor = "#8E90A4";
    main.style.height = '100%';
    main.style.width = '100%';

    footer.innerHTML = 'footer';
    footer.style.backgroundColor = "#BC81BF";
    footer.style.height = '2%';
    footer.style.width = '100%';

    // add flex items to page
    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer)
}

export { loader };