function create_contact(){

    const contact_details = document.createElement('div');
    contact_details.classList.add('contact');

    const contact_name = document.createElement('p');
    contact_name.textContent = 'Askelllad';
    const contact_num = document.createElement('p');
    contact_num.textContent = '333111999';
    const contact_mail = document.createElement('p');
    contact_mail.textContent = 'nicolas_cartus_artulius@the_true_king';

    contact_details.appendChild(contact_name);
    contact_details.appendChild(contact_num);
    contact_details.appendChild(contact_mail);

    return contact_details;
}


export default function render_contact(){
    const main = document.getElementById('main');
    main.innerText = '';

    main.appendChild(create_contact());
}