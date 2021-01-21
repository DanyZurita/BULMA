'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello Bulma!');
});

// Initialize all elements with carousel class.
var carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('show', function (bulmaCarouselInstance) {
        console.log(bulmaCarouselInstance.index);
    });
}