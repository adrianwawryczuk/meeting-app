import './features.scss';
import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:false,
        dots: true,
        margin:60,
        startPosition: 1
    });
});
