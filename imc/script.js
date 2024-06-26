function imcCalc(altura, peso){
    result = peso / (altura * altura)
    result = parseFloat(result.toFixed(2))
    return result
}

module.exports = imcCalc;