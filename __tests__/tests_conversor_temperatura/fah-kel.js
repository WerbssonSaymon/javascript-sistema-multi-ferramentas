function fahrenheitKelvin(fahrenheit){
    let result = (((fahrenheit - 32) * 5) / 9) + 273.15;
    let kelvin = parseFloat(result.toFixed(3))
    return kelvin
}

module.exports = fahrenheitKelvin;