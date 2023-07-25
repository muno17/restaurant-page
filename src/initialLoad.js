function loader() {
    const page = document.getElementById('content');
    
    // create flex items
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    header.innerHTML = 'header';
    header.style.backgroundColor = "#BC81BF";

    main.innerHTML = 'main';
    main.style.backgroundColor = "#8E90A4";

    footer.innerHTML = 'footer';
    footer.style.backgroundColor = "#BC81BF";

    // add flex items to page
    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer)
}

export { loader };