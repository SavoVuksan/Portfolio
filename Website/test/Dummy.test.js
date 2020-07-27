import Dummy from '../src/Dummy.js';

test("DUMMY", () =>{
    expect(Dummy).not.toBe(undefined);
});

test('Dummy.test should return test', () =>{
    const dummy = new Dummy();
    expect(dummy.test()).toBe('test');
});