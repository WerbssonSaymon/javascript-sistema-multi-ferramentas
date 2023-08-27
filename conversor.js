function celsiusFahrenheit(celsius){
     let fahrenheit = (1.8 * celsius) + 32;
     return fahrenheit
}

function celsiusKelvin(celsius){
     let kelvin = celsius + 273.15;
     return kelvin
}

module.exports = celsiusFahrenheit;
module.exports = celsiusKelvin;
