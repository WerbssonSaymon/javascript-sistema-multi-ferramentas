const {fahrenheitKelvin} = require('../../converor_temperatura/conversor_core');

describe('testa conversão de fahrenheit para kelvin', () => {
    test('testa se 20 graus fahrenheit não é 56 kelvin', () => {
       expect(fahrenheitKelvin(20)).not.toBe(56);
    }),
    test('testa se 20 graus fahrenheit é 266.483 kelvin', () => {
        expect(fahrenheitKelvin(20)).toBe(266.483);
    }),
    test('testa se um valor não é nulo', () => {
        expect(fahrenheitKelvin(10)).not.toBeNull();
    }),
    test('testa se um numero não é de um tipo diferente', () => {
        expect(fahrenheitKelvin(10)).not.toBeNaN();
    });
})