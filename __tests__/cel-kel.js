function celsiusKelvin(celsius){
    let result = celsius + 273.15;
    let kelvin = parseFloat(result.toFixed(2))
    return kelvin
}

module.exports = celsiusKelvin;