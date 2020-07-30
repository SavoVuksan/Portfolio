import Navigation from './Navigation.js';
import TabManager from './TabManager.js';
import HeadingController from './HeadingController.js';

const nav = createNavigation();
const tabMan = createTabManager();
const headingCtrl = createHeadingController();

function createHeadingController(){
    const heading = document.querySelector('#profession');
    const professions = [
        {
            profession: 'Software Developer',
            color: '#FCE38A'
    },
    {
        profession: 'Web Developer',
        color: '#f38181'
    },
    {
        profession:  'Game Developer',
        color: '#eaffd0'
    },
    {
        profession: 'Human',
        color: '#95e1d3'
    }
    ];
    return new HeadingController(heading, professions);
}

function createTabManager(){
    const tabs = [{
        caller: document.querySelector('#web'),
        target: document.querySelector('.web')
    },
{
    caller: document.querySelector('#games'),
    target: document.querySelector('.games')
},
{
    caller: document.querySelector('#multimedia'),
    target: document.querySelector('.multimedia')
}];
    return new TabManager(tabs);
}

function createNavigation(){
    const closeBtn = document.querySelector('.close');
    const openBtn = document.querySelector('.burger');
    const navCnt = document.querySelector('.nav');
    
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
    return  new Navigation(openBtn, closeBtn,navCnt, navs);
}