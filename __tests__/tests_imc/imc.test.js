const imcCalc = require('../../imc/script')

describe('calcular imc', () => {
    test("calculando imc", () => {
        expect(imcCalc(1.50, 70)).toBe(31.11)
    })
})