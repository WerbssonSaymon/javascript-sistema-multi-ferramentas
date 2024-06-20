function imcCalc(altura, peso){
    resultado = peso / (altura * altura)
    resultado = parseFloat(resultado.toFixed(2))
    return resultado
}

module.exports = imcCalc;