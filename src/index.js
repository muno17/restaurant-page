import { loader } from './initialLoad.js';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

loader();
loadHome();

const home = document.getElementById('homeTab');
const menu = document.getElementById('menuTab');
const contact = document.getElementById('contactTab');