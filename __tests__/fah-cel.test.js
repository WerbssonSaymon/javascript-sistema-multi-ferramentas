const fahrenheitCelsius = require('./fah-cel');

describe('testa conversão de fahrenheit para celsius', () => {
    test('testa se 20 graus fahrenheit não é 56 celsius', () => {
       expect(fahrenheitCelsius(20)).not.toBe(56);
    }),
    test('testa se 20 graus fahrenheit é -6.67 celsius', () => {
        expect(fahrenheitCelsius(20)).toBe(-6.67);
    }),
    test('testa se um valor não é nulo', () => {
        expect(fahrenheitCelsius(10)).not.toBeNull();
    }),
    test('testa se um numero não é de um tipo diferente', () => {
        expect(fahrenheitCelsius(10)).not.toBeNaN();
    });
})