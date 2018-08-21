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
        startPosition: 1,

        responsive: {
            0: {
                items: 1
            },
            960: {
                items: 2
            }
        }
    });

    $('.features__phones').owlCarousel({
        center: true,
        items:1,
        loop:false,
        dots: false,
        startPosition: 8,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $('.top__discover').on('click', () => scrollTo('.features__phones'))
});

function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}
