var test = document.querySelector(".tabs-nav__btn");
var demo = document.querySelector(".footer__text");

let nav__close = document.querySelector(".nav__burger--close")
let nav__btn__close = document.querySelector(".nav__burger--button--close")
let nav__line__first = document.querySelector(".nav__burger--line--first")
let nav__line__second = document.querySelector(".nav__burger--line--second")
let nav__line__third = document.querySelector(".nav__burger--line--third")
let burger__list = document.querySelector(".burger__list")
let menu__links = document.querySelectorAll(".nav__item--active")

let nav__search = document.querySelector(".nav__search")
let search__text = document.querySelector(".nav__search--text")
let search__close = document.querySelector(".search__close")
let search__item__first = document.querySelector(".nav__item--search--first")


document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 1000,
});

nav__close.addEventListener('click',
function() {
  burger__list.classList.remove('burger__list--fastremove');
  nav__btn__close.classList.toggle('nav__burger--button--active');
  nav__line__first.classList.toggle('nav__line--first--active');
  nav__line__second.classList.toggle('nav__line--second--active');
  nav__line__third.classList.toggle('nav__line--trird--active');
  burger__list.classList.toggle('burger__list--active');
  document.body.classList.toggle('stop-scroll');
})

menu__links.forEach(function (el1) {
  el1.addEventListener('click', function() {
    nav__btn__close.classList.toggle('nav__burger--button--active');
    nav__line__first.classList.toggle('nav__line--first--active');
    nav__line__second.classList.toggle('nav__line--second--active');
    nav__line__third.classList.toggle('nav__line--trird--active');
    burger__list.classList.toggle('burger__list--fastremove');
    burger__list.classList.toggle('burger__list--active');
    document.body.classList.toggle('stop-scroll');
  })
})

nav__search.addEventListener('click',
function() {
  nav__search.classList.add('nav__search--active');
  search__text.classList.add('nav__search--text--active');
  search__close.classList.add('search__close--active');
  search__item__first.classList.add('nav__item--search--active');
})

search__close.addEventListener('click',
function() {
  nav__search.classList.remove('nav__search--active');
  search__text.classList.remove('nav__search--text--active');
  search__close.classList.remove('search__close--active');
  search__item__first.classList.remove('nav__item--search--active');
})
