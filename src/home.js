export function home(){

    const home_content = document.createElement('div');
    home_content.classList.add('home');

    const heading = document.createElement('h1');
    heading.textContent = 'Restaurant at the End of the Universe';

    const img = document.createElement('img');
    img.src = "../src/bp.jpeg";
    img.alt = 'restaurant pic';


    const desc = document.createElement('p');
    desc.textContent = 'Our Restaurant is built on top of the ruins of FrogStar World B and exists in a time bubble near the End of the Universe, which we offer our guests spectecular views of.';

    const content = document.querySelector('.content');
    home_content.appendChild(heading);
    home_content.appendChild(img);
    home_content.appendChild(desc);
    home_content.classList.add('active');
    content.appendChild(home_content);
}

export function home_active(){
    const active = document.querySelector('.active');
    active.classList.remove('active');

    const home_content = document.querySelector('.home');
    home_content.classList.add('active');
}