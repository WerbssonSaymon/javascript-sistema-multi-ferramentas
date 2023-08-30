function kelvinCelsius(kelvin){
    let result = kelvin - 273.15;
    let celsius = parseFloat(result.toFixed(3))
    return celsius
}

module.exports = kelvinCelsius;