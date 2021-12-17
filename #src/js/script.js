"use strict"

//google карта
function initMap() {
    var pos = { lat: 55.7152018588073, lng: 37.708101326854894 };
    var opt = {
        center: pos,
        zoom: 10
    };

    var myMap = new google.maps.Map(document.getElementById("map"), opt);
    var marker = new google.maps.Marker({
        map: myMap,
        position: pos
    });
}

//slider
$('.slider__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="banner__slider-btn slider-btn-left slider-btn-left-black"><img src="img/left.svg" alt="" class="prev"></button>',
    nextArrow: '<button class="banner__slider-btn slider-btn-right slider-btn-right-black"><img src="img/left.svg" alt="" class="next"></button>'
});

//табы
$('.tabs__item').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('active');
    $($(this).parent().siblings().find('div')).removeClass('tab__content-active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('tab__content-active');
    $('.slider__wrapper').slick('setPosition');
});

//burger-menu

const hb = document.querySelector('.burger__menu');
const menu = document.querySelector('nav');
const body = document.querySelector('body');
const menuItem = document.querySelector('nav__list__item');

hb.addEventListener('click', function() {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    hb.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClickLinck);
    });

    function onMenuClickLinck(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        
            window.scrollTo({
                top: gotoBlockValue,
            })
        
        }
        
    }
}

