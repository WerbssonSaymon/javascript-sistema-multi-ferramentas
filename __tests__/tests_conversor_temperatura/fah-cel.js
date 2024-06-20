function fahrenheitCelsius(fahrenheit){
    let result = ((fahrenheit - 32) * 5) / 9;
    let celsius = parseFloat(result.toFixed(2))
    return celsius
}

module.exports = fahrenheitCelsius;