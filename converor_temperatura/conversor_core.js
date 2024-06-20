function celsiusFahrenheit(celsius){
    let fahrenheit = (1.8 * celsius) + 32;
    return fahrenheit
}


function celsiusKelvin(celsius){
    let result = celsius + 273.15;
    let kelvin = parseFloat(result.toFixed(2))
    return kelvin
}


function fahrenheitCelsius(fahrenheit){
    let result = ((fahrenheit - 32) * 5) / 9;
    let celsius = parseFloat(result.toFixed(2))
    return celsius
}


function fahrenheitKelvin(fahrenheit){
    let result = (((fahrenheit - 32) * 5) / 9) + 273.15;
    let kelvin = parseFloat(result.toFixed(3))
    return kelvin
}


function kelvinCelsius(kelvin){
    let result = kelvin - 273.15;
    let celsius = parseFloat(result.toFixed(3))
    return celsius
}



function kelvinFahrenheit(kelvin){
    let result = ((kelvin - 273.15) * 9) / 5 + 32;
    let fahrenheit = parseFloat(result.toFixed(3))
    return fahrenheit
}

module.exports = {
    celsiusFahrenheit,
    celsiusKelvin,
    fahrenheitCelsius,
    fahrenheitKelvin,
    kelvinCelsius,
    kelvinFahrenheit
}