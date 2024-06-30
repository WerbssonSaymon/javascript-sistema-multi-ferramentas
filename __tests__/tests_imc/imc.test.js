const imcCalc = require('../../imc/imc')

describe('testar valores de conversão', () => {
    test('ver o resultado é igual a 31.11', () => {
        expect(imcCalc(1.50, 70)).toBe(31.11)
    }),
    test('ver o resultado é igual a 27.29', () => {
        expect(imcCalc(1.85, 93.40)).toBe(27.29)
    }),
    test('ver o resultado é igual a 21.55', () => {
        expect(imcCalc(1.75, 66)).toBe(21.55);
    }),
    test('ver o resultado é igual a 16.20', () => {
        expect(imcCalc(1.80, 52.50)).toBe(16.20);
    }),
    test('ver o resultado é 24.49 com precisão de duas casas decimais', () => {
        expect(imcCalc(1.75, 75)).toBe(24.49);
    })
})

describe('testar valores 0 e negativos', () => {
    test('ver a altura 0 chama o error', () => {
        expect(() => imcCalc(0, 70)).toThrow(Error)
    }),
    test('ver o peso 0 chama o error', () => {
        expect(() => imcCalc(1.70, 0)).toThrow(Error)
    }),
    test('ver a altura negativa chama o erro', () => {
        expect(() => imcCalc(-1.70, 50)).toThrow(Error)
    }),
    test('ver o peso negativo chama o erro', () => {
        expect(() => imcCalc(1.70, -50)).toThrow(Error)
    }),
    test('ver o resultado é NaN para strings não numéricas', () => {
        expect(imcCalc("altura", "peso")).toBe(NaN);
    })
})