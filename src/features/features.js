import './features.scss';
import $ from 'jquery';
import 'owl.carousel';

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
});
