import Navigation from '../src/Navigation';

test('Navigation.active is toggling', () => {
    const nav = new Navigation();
    expect(nav.active).toBe(false);
    nav.toggle();
    expect(nav.active).toBe(true);
});

test('Navigation is active', () => {
    const nav = new Navigation();
    nav.setActive(true);
    expect(nav.active).toBe(true);
});

test('Navigation active state is false', () => {
    const nav = new Navigation();
    expect(nav.active).toBe(false);
});