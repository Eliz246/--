const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');

window.addEventListener('scroll', ()=>{
    if(!document.body.classList.contains('lock')){
        header.classList.toggle('scrolled',window.scrollY>20);
    }
});
function toggleMenu(open){
    burger.classList.toggle('active', open);
    menu.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
};
burger.addEventListener('click', ()=>{
   toggleMenu(!menu.classList.contains('open')); 
});