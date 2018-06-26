import { CountUp } from './countUp';
import './index.scss';

initIndustries();

initNumbers();

initPlayButtons();

function initNumbers() {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
    };

    var numbers = [
        {
            animation: new CountUp('eventsNumber', 0, 250, 0, 2.5, options),
            selector: 'eventsNumber',
            animated: false,
        },
        {
            animation: new CountUp('usersNumber', 0, 100000, 0, 1.5, options),
            selector: 'usersNumber',
            animated: false,
        },
        {
            animation: new CountUp('screenViewsNumber', 0, 6400000, 0, 1.5, options),
            selector: 'screenViewsNumber',
            animated: false,
        },
        {
            animation: new CountUp('timeUsageNumber', 0, 5, 0, 3.5, options),
            selector: 'timeUsageNumber',
            animated: false,
        },
        {
            animation: new CountUp('countriesNumber', 0, 31, 0, 2.5, options),
            selector: 'countriesNumber',
            animated: false,
        },
        {
            animation: new CountUp('continentsNumber', 0, 6, 0, 2.5, options),
            selector: 'continentsNumber',
            animated: false,
        },
    ];

    window.addEventListener('scroll', function() {
        for (var i = 0; i < numbers.length; i++) {
            var number = numbers[i];

            if (isNumbersInViewport(number.selector) && !number.animated) {
                number.animation.start();
                number.animated = true;
            }
        }
    });

    function isNumbersInViewport(elementId) {
        var el = document.getElementById(elementId);

        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

function initIndustries() {
    var classVisible = 'industries__info--visible';
    var buttons = document.querySelectorAll('[data-show]');
    var interval = createInterval();

    forEach(buttons, function(button) {
        button.addEventListener('click', function(element) {

            if (interval) {
                clearInterval(interval);
            }

            showIndustry(element.target, true);
        });
    });

    function showIndustry(element) {
        hideAllIndustries();

        var dataShowName = element.attributes.getNamedItem('data-show').value;

        document.querySelector('[data-showid="' + dataShowName + '"]')
                .classList
                .add(classVisible);

        element.classList.add('industries__button--active');

    }

    function hideAllIndustries() {

        forEach(document.querySelectorAll('.industries__button--active'), function(element) {
            element.classList.remove('industries__button--active');
        });

        forEach(document.querySelectorAll('.' + classVisible), function(element) {
            element.classList.remove(classVisible);
        });
    }

    function getAllIndustries() {
        return document.querySelectorAll('[data-show]');
    }

    function createInterval() {
        var index = 0;

        showIndustry(getAllIndustries()[0]);

        return setInterval(function() {

            showIndustry(getAllIndustries()[index]);

            incrementIndex();
        }, 5000);

        function incrementIndex() {
            if (index < 3) {
                index++;
            } else {
                index = 0;
            }
        }
    }
}

function initPlayButtons() {
    var buttons = document.querySelectorAll('[data-id]');
    var videos = document.querySelectorAll('.code-features__video');

    forEach(buttons, function(button) {
        button.addEventListener('click', function(element) {
            toggleVideo(element.target.attributes.getNamedItem('data-id').value);
        });
    });

    forEach(videos, function(video) {

        video.addEventListener('ended', function(video) {

            var button = document.querySelector('[data-id="' + video.target.id + '"]');

            button.classList.remove('code-features__video-play--playing');
        });

        video.addEventListener('click', function(video) {
            if (!video.target.paused) {
                toggleVideo(video.target.id);
            }
        });
    });

    function toggleVideo(dataId) {
        var button = document.querySelector('[data-id="' + dataId + '"]');

        var video = document.getElementById(dataId);
        if (video.paused) {
            video.play();
            button.classList.add('code-features__video-play--playing');
        } else {
            video.pause();
            button.classList.remove('code-features__video-play--playing');
        }
    }
}

window.toggleMenu = function() {
    var menu = document.querySelector('.nav_menu');

    if (menu.classList.contains('nav_menu--visible')) {
        removeNavMenuVisible();
    } else {
        menu.classList.add('nav_menu--visible');
    }
};

function removeNavMenuVisible() {
    var menu = document.querySelector('.nav_menu');

    menu.classList.remove('nav_menu--visible');
}

function forEach(elements, callback) {
    for (var i = 0; i < elements.length; i++) {
        callback(elements[i]);
    }
}

