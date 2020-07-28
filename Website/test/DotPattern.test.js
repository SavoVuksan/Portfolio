import DotPattern from '../src/DotPattern.js'; 

test('Is DotPattern defined', () => {
    let pattern = new DotPattern();
    expect(pattern).toBeDefined();
});

test('Dot array should output 9', () => {
    let pattern = new DotPattern();
    const rows = pattern.createDots(3, 3);
    let count = 0;
    rows.forEach(row => count += row.childElementCount)
    expect(count).toBe(9);
});

test('DotPatterns properties are set', () => {
    let pattern = new DotPattern();
    pattern.pointCountX = 3;
    pattern.pointCountY = 3;
    pattern.pointSize = 10;
    pattern.pointColor = '#ffffff';
    pattern.spacing = 10;

    expect(pattern.pointCountX).toBe(3);
    expect(pattern.pointCountY).toBe(3);
    expect(pattern.pointSize).toBe(10);
    expect(pattern.pointColor).toBe('#ffffff');
    expect(pattern.spacing).toBe(10);

});