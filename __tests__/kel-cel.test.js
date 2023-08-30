const kelvinCelsius = require('./kel-cel');

describe('testa conversão de kelvin para celsius', () => {
    test('testa se 20 graus kelvin não é 56 celsius', () => {
       expect(kelvinCelsius(20)).not.toBe(56);
    }),
    test('testa se 20 graus kelvin é -253.150 celsius', () => {
        expect(kelvinCelsius(20)).toBe(-253.150);
    }),
    test('testa se um valor não é nulo', () => {
        expect(kelvinCelsius(10)).not.toBeNull();
    });
})