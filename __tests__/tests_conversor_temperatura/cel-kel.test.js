const {celsiusKelvin} = require('../../converor_temperatura/conversor_core');

describe('testa conversão de celsius para kelvin', () => {
    test('testa se 20 graus celsius não é 56 kelvin', () => {
        expect(celsiusKelvin(20)).not.toBe(56);
    }),
    test('testa se 20 graus celsius é 293.15 kelvin', () => {
        expect(celsiusKelvin(20)).toBe(293.15);
    }),
    test('testa se um valor não é nulo', () => {
        expect(celsiusKelvin(10)).not.toBeNull();
    }),
    test('testa se um numero não é de um tipo diferente', () => {
        expect(celsiusKelvin(10)).not.toBeNaN();
    });
})