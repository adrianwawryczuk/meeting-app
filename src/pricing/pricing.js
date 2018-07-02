import './pricing.scss';
import smoothscroll from 'smoothscroll-polyfill';

document.addEventListener('DOMContentLoaded', initPricing, false);

function initPricing() {
    smoothscroll.polyfill();
    animateImages();
}

window.gotoAppTypes = () => {
    scrollTo('.app-types');
}

window.gotoDifference = () => {
    scrollTo('.difference');
}

function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
    });
}

function animateImages() {

    let showImageIndex = 0;

    changeImageClasses();

    setInterval(changeImageClasses, 2000);

    function changeImageClasses() {
        const imagesBlocks = document.querySelectorAll('.change-icon-interval');

        for (let block of imagesBlocks) {
            const images = block.querySelectorAll('img');

            for (let imageIndex = 0; imageIndex<images.length ; imageIndex++) {
                if (imageIndex !== showImageIndex) {
                    hideImage(images[imageIndex]);
                } else {
                    showImage(images[imageIndex])
                }
            }
        }

        if (showImageIndex === 5 ) {
            showImageIndex = 0;
        } else {
            showImageIndex++;
        }
    }



    function showImage(image) {
        image.classList.remove('transparent')
    }

    function hideImage(image) {
        if (!image.classList.contains('transparent')) {
            image.classList.add('transparent')
        }
    }
}



