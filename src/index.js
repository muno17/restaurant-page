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
    resetAssign(home);
})


const menu = document.getElementById('menuTab');
menu.addEventListener('click', () => {
    mainBox.innerHTML = "";
    loadMenu();
    resetAssign(menu);
})


const contact = document.getElementById('contactTab');
contact.addEventListener('click', () => {
    mainBox.innerHTML = "";
    loadContact();
    resetAssign(contact);
})


function resetAssign(x) {
    let prev = document.getElementsByClassName('selected');
    prev[0].style.backgroundColor = "";
    prev[0].style.border = "";
    prev[0].style.borderRadius = "";
    prev[0].classList.remove('selected')

    x.setAttribute('class', 'selected');
    x.style.backgroundColor = "#8185bf";
    x.style.border = ".3rem solid white";
    x.style.borderRadius = ".4rem";
}