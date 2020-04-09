import { throttle } from './utils.js';

let mainNavLinks = document.querySelectorAll('nav ul li a');
let mainSections = document.querySelectorAll('main section');
let lastId;
let cur = [];

function handleScroll(event) {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
}

export function initNav() {
    window.addEventListener('scroll', throttle(handleScroll, 200));
}
