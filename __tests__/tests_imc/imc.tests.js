const imcCalc = require('../../imc/imc')

describe('testar valores de conversão', () => {
    test('ver o resultado é igual a 31.11', () => {
        expect(imcCalc(1.50, 70)).toBe(31.11)
    }),
    test('ver o resultado é igual a 27.29', () => {
        expect(imcCalc(1.85, 93.40)).toBe(27.29)
    })
})