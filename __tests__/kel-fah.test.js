const kelvinFahrenheit = require('./kel-fah');

describe('testa conversão de kelvin para fahrenheit', () => {
    test('testa se 20 graus kelvin é 56 fahrenheit, erro esperado', () => {
       expect(kelvinFahrenheit(20)).toBe(56);
    }),
    test('testa se 20 graus kelvin é -423.670 fahrenheit', () => {
        expect(kelvinFahrenheit(20)).toBe(-423.670);
    })
})