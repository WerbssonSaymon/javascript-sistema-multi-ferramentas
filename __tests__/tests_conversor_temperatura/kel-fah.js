function kelvinFahrenheit(kelvin){
    let result = ((kelvin - 273.15) * 9) / 5 + 32;
    let fahrenheit = parseFloat(result.toFixed(3))
    return fahrenheit
}

module.exports = kelvinFahrenheit;