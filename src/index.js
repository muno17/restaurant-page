import { loader } from './initialLoad.js';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

// initialize the page
loader();
loadHome();

const main = document.getElementById("mainArea");

// event listeners change the tab that's being displayed
const home = document.getElementById('homeTab');
home.addEventListener('click', () => {
    main.innerHTML = ''
    loadHome();
})


const menu = document.getElementById('menuTab');
menu.addEventListener('click', () => {
    main.innerHTML = "";
    loadMenu();
})


const contact = document.getElementById('contactTab');
contact.addEventListener('click', () => {
    main.innerHTML = "";
    loadContact();
})
