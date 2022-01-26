const StringManipulation = require('../js/stringManipulation');


test('Expect evalFirstCapital to evaluate true', async () => {
    expect(StringManipulation.evalFirstCapital('TEST')).toEqual(true);
    expect(StringManipulation.evalFirstCapital('T')).toEqual(true);
    expect(StringManipulation.evalFirstCapital('This is another phrase, testing to see if the component works')).toEqual(true);
});

test('Expect evalFirstCapital to evaluate false', async () => {
    expect(StringManipulation.evalFirstCapital('tEST')).toEqual(false);
    expect(StringManipulation.evalFirstCapital('test')).toEqual(false);
    expect(StringManipulation.evalFirstCapital('this is a phrase, testing to see if the component works')).toEqual(false);
})

test('Expect value that is a number to evaluate false', async () => {
    expect(StringManipulation.evalFirstCapital('1')).toEqual(false);
    expect(StringManipulation.evalFirstCapital(1)).toEqual(false);
})