import Navigation from './Navigation.js';
const closeBtn = document.querySelector('.nav>close');
const openBtn = document.querySelector('.burger');
const navs = [
    {
        caller: document.querySelector('#home'),
        target: document.querySelector('.home-container') 
    },
    {
        caller: document.querySelector('#about'),
        target: document.querySelector('.wai-container')
    },
    {
        caller: document.querySelector('#work'),
        target: document.querySelector('.work-container')
    },
    {
        caller: document.querySelector('#contact'),
        target: document.querySelector('.contact-container')
    }
];

const nav = new Navigation(openBtn, closeBtn, navs);