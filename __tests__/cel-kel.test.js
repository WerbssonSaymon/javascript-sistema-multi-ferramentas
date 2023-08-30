const celsiusKelvin = require('./cel-kel');

describe('testa conversão de celsius para kelvin', () => {
    test('testa se 20 graus celsius é 56 kelvin, erro esperado', () => {
        expect(celsiusKelvin(20)).toBe(56);
    }),
    test('testa se 20 graus celsius é 293.15 kelvin', () => {
        expect(celsiusKelvin(20)).toBe(293.15);
    })
})