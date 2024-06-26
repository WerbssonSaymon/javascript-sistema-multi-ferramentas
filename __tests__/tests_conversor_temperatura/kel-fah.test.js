const {kelvinFahrenheit} = require('../../converor_temperatura/conversor_core');

describe('testa conversão de kelvin para fahrenheit', () => {
    test('testa se 20 graus kelvin não é 56 fahrenheit', () => {
       expect(kelvinFahrenheit(20)).not.toBe(56);
    }),
    test('testa se 20 graus kelvin é -423.670 fahrenheit', () => {
        expect(kelvinFahrenheit(20)).toBe(-423.670);
    }),
    test('testa se um valor não é nulo', () => {
        expect(kelvinFahrenheit(10)).not.toBeNull();
    }),
    test('testa se um numero não é de um tipo diferente', () => {
        expect(kelvinFahrenheit(10)).not.toBeNaN();
    });
})