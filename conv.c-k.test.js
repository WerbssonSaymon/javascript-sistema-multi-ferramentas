const celsiusKelvin = require('./conversor');

describe('testa conversão de celsius para kelvin', () => {
    test('testa se 20 graus celsius é 100, erro esperado', () => {
        expect(celsiusKelvin(20)).toBe(100);
    }),
    test('testa se 20 graus celsius é 293.15', () => {
        expect(celsiusKelvin(20)).toBe(293.15);
    })
})