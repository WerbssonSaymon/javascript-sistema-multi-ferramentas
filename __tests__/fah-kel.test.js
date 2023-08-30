const fahrenheitKelvin = require('./fah-kel');

describe('testa conversão de fahrenheit para kelvin', () => {
    test('testa se 20 graus fahrenheit é 56 kelvin, erro esperado', () => {
       expect(fahrenheitKelvin(20)).toBe(56);
    })
    test('testa se 20 graus fahrenheit é 266.483 kelvin', () => {
        expect(fahrenheitKelvin(20)).toBe(266.483);
    })
})