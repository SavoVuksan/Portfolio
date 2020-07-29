
import './MatchMedia.js';
import Navigation from '../src/Navigation';


test('Navigation is active', () => {
    const nav = setupNavObject();
    nav.setActive(true);
    expect(nav.active).toBe(true);
});

test('Navigation active state is false', () => {
    const nav = setupNavObject();
    expect(nav.active).toBe(false);
});

function setupNavObject(){
    const openBtn = document.createElement('div');
    const closeBtn = document.createElement('div');
    const navCtn = document.createElement('div');
    const navs = [{caller: document.createElement('div'), target: document.createElement('div')}];
    return new Navigation(openBtn,closeBtn, navCtn, navs);
}