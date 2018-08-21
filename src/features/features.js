import './features.scss';
import $ from 'jquery';
import 'owl.carousel';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

$(document).ready(function(){
    $('.cms__owl').owlCarousel({
        center: true,
        items:2,
        loop:false,
        dots: true,
        margin:60,
        startPosition: 1
    });

    $('.features__phones').owlCarousel({
        center: true,
        items:1,
        loop:false,
        dots: false,
        nav: false,
        startPosition: 9
    });

    $('.top__discover').on('click', () => scrollTo('.features__phones'))
});

function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        offsetTop: -100
    });
}
