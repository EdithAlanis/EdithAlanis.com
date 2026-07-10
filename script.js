
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
toggle?.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
