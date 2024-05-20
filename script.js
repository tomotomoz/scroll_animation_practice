const fade = document.querySelector('.fade')
document.addEventListener('DOMContentLoaded', function(){
  setTimeout(function () {
    fade.classList.add('close')
}, 900)
});


const targets = document.getElementsByClassName('animationTarget');
for(let i = targets.length; i--;){
let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
  if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
  }
  }
});
observer.observe(targets[i]);
}


const navTitles = document.querySelectorAll('.nav-area > .nav > li')
const active = document.querySelector('.header-inner')
const menuBtn = document.getElementById('menu-btn') 

menuBtn.addEventListener('click', function(){
  active.classList.toggle('open');
});

navTitles.forEach((navTitle) => {
  navTitle.addEventListener('click', function(){
    active.classList.remove('open');
  });
});