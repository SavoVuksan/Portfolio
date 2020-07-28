const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');



applyEventListener(home, onTrigger);
applyEventListener(about, onTrigger);
applyEventListener(work, onTrigger);
applyEventListener(contact, onTrigger);

function applyEventListener(element, func){
    element.addEventListener('click',func);
}

function onTrigger(e){
    toggleActiveElement(e);
    const t = document.querySelector(e.target.getAttribute('target'));
    scrollTo(t);
}

function toggleActiveElement(e){
    const liactive = 'li-active';
    home.classList.remove(liactive);
    about.classList.remove(liactive);
    work.classList.remove(liactive);
    contact.classList.remove(liactive);
    e.target.classList.add(liactive);

}

function scrollTo(element){
    element.scrollIntoView({behavior: 'smooth'});
}