const {celsiusFahrenheit} = require('../../converor_temperatura/conversor_core');

describe('testa conversão de celsius para fahrenheit', () => {
    test('testa se 20 graus celsius não é 56 fahrenheit', () => {
       expect(celsiusFahrenheit(20)).not.toBe(56);
    }),
    test('testa se 20 graus celsius é 68 fahrenheit', () => {
        expect(celsiusFahrenheit(20)).toBe(68);
    }),
    test('testa se um valor não é nulo', () => {
        expect(celsiusFahrenheit(10)).not.toBeNull();
    }),
    test('testa se um numero não é de um tipo diferente', () => {
        expect(celsiusFahrenheit(10)).not.toBeNaN();
    });
})