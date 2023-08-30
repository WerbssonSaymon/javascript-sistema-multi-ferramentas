const celsiusFahrenheit = require('./cel-fah');

describe('testa conversão de celsius para fahrenheit', () => {
    test('testa se 20 graus celsius é 56 fahrenheit, erro esperado', () => {
       expect(celsiusFahrenheit(20)).toBe(56);
    }),
    test('testa se 20 graus celsius é 68 fahrenheit', () => {
        expect(celsiusFahrenheit(20)).toBe(68);
    })
})