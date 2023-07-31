import { loader } from './initialLoad.js';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

// initialize the page
loader();
loadHome();

const mainBox = document.getElementById("mainBox");

// event listeners change the tab that's being displayed
const home = document.getElementById('homeTab');
home.addEventListener('click', () => {
    mainBox.innerHTML = ''
    loadHome();
})


const menu = document.getElementById('menuTab');
menu.addEventListener('click', () => {
    mainBox.innerHTML = "";
    loadMenu();
})


const contact = document.getElementById('contactTab');
contact.addEventListener('click', () => {
    mainBox.innerHTML = "";
    loadContact();
})
