const fahrenheitCelsius = require('./fah-cel');

describe('testa conversão de fahrenheit para celsius', () => {
    test('testa se 20 graus fahrenheit é 56 celsius, erro esperado', () => {
       expect(fahrenheitCelsius(20)).toBe(56);
    }),
    test('testa se 20 graus fahrenheit é -6.67 celsius', () => {
        expect(fahrenheitCelsius(20)).toBe(-6.67);
    })
})