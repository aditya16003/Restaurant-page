function create_home(){

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

    return home_content;
}


export default function render_home(){
    const main = document.getElementById('main');
    main.innerText = '';

    main.appendChild(create_home());
}

