import './features.scss';
import $ from 'jquery';
import 'owl.carousel';
import smoothScroll from 'smoothscroll-polyfill';
import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';

smoothScroll.polyfill();

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

    const features = new Swiper('.swiper-container', {
        effect: 'coverflow',
        autoHeight: true,
        centeredSlides: true,
        slidesPerView: 4,
        initialSlide: 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 0,
            depth: 50,
            modifier: 6,
            stretch: 5,
            slideShadows : false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1,
            renderBullet: function (index, className) {
                const title = $('.features__title')[index].innerText;
                return `<span class="${className}">${title}</span>`;
            },
        },
        on: {
            init: resizeFeaturesContainer,
        }
    });

    features.on('transitionEnd', resizeFeaturesContainer)

    $('.top__discover').on('click', () => scrollTo('.swiper-container'))
});

function resizeFeaturesContainer() {
    const $featuresContainer = $('.features');
    const height = $('.features__container').outerHeight();

    $featuresContainer.css({
        paddingBottom: height - 150
    });
}

const positions = [
    'position-0',
    'position-1',
    'position-2',
    'position-3',
    'position-4',
    'position-5',
    'position-6',
    'position-7',
    'position-8',
];

function animateCarousel() {
    document.querySelectorAll('.owl-item').forEach(element => {
        element.classList.remove(...positions);
    });

    document.querySelectorAll('.owl-item.active').forEach((element, index) => {
        element.classList.add(positions[index]);
    })
}

function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
