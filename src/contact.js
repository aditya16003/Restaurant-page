export function contact(){

    const content = document.querySelector('.content');

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

    content.appendChild(contact_details);
}

export function contact_active(){
    const active = document.createElement('.active');
    active.classList.remove('active');

    const contact_details = document.querySelector('.contact');
    contact_details.classList.add('active');
}