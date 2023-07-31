import render_home from "./home";
import render_contact from "./contact";
import render_menu from "./menu";


function create_header(){
    const header = document.createElement('div');
    header.classList.add('header');

    header.appendChild(create_nav());

    return header;
}

function create_nav(){
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const home_btn = document.createElement('button');
    home_btn.classList.add('nav-option');
    home_btn.setAttribute('id', 'home_btn');
    home_btn.textContent = 'Home';
    home_btn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return;
        active_btn(e);
        render_home();
    })

    const menu_btn = document.createElement('button');
    menu_btn.classList.add('nav-option');
    menu_btn.textContent = 'Menu';
    menu_btn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return;
        active_btn(e);
        render_menu();
    })

    const contact_btn = document.createElement('button');
    contact_btn.classList.add('nav-option');
    contact_btn.textContent = 'Contact';
    contact_btn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return;
        active_btn(e);
        render_contact();
    })

    nav.appendChild(home_btn);
    nav.appendChild(menu_btn);
    nav.appendChild(contact_btn);

    return nav;
}

function create_main(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}




function active_btn(option){
    const active = document.querySelector('.active');
    if(active){
        active.classList.remove('active');
    }

    option.target.classList.add('active');
}


export default function load_page(){
    const content = document.querySelector('.content');


    content.appendChild(create_header());
    content.appendChild(create_main());
    render_home();

    const home_btn = document.getElementById('home-btn');
    home_btn.classList.add('active');
}
