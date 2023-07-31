import {home, home_active} from "./home";
import { contact, contact_active } from "./contact";
import { menu , menu_active} from "./menu";

export default function pageLoad(){

    const content = document.querySelector('.content');

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const home_btn = document.createElement('button');
    home_btn.textContent = 'Home';
    home_btn.id = 'home';
    home_btn.classList.add('btn');
    home_btn.onclick = home_active;
    const menu_btn = document.createElement('button');
    menu_btn.textContent = 'Menu';
    menu_btn.id = 'menu';
    menu_btn.classList.add('btn');
    menu_btn.onclick = menu_active;
    const contact_btn = document.createElement('button');
    contact_btn.textContent = 'Contact';
    contact_btn.id = 'contact';
    contact_btn.classList.add('btn');
    contact_btn.onclick = contact_active;

    nav.appendChild(home_btn);
    nav.appendChild(menu_btn);
    nav.appendChild(contact_btn);
    
    content.appendChild(nav);

    console.log(nav);

    home();
    menu();
    contact();


}