

function create_menu(){

    const menu_content = document.createElement('div');
    menu_content.classList.add('menu');

    for(let i=1; i<=3; i++){
        const dish = document.createElement('div');
        dish.classList.add('dish');
        const dish_name = document.createElement('h2');
        dish_name.textContent = `Dish_${i}`;
        dish_name.classList.add('dish-name');

        const dish_img = document.createElement('img');
        dish_img.classList.add('dish-img');
        dish_img.src = '../src/dish.jpeg';

        const dish_desc = document.createElement('p');
        dish_desc.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ut voluptatem unde ab inventore amet quos quaerat illo vel expedita. Numquam quaerat tenetur beatae error ab pariatur voluptatem voluptatibus totam.';

        dish.appendChild(dish_name);
        dish.appendChild(dish_img);
        dish.appendChild(dish_desc);
        menu_content.appendChild(dish);
    }

    return menu_content;
}

export default function render_menu(){
    const main = document.getElementById('main');
    main.innerText = '';

    main.appendChild(create_menu());
}