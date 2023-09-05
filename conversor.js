// Função que converte celsius para fahrenheit
// function celsiusFahrenheit(celsius){
//      let fahrenheit = (1.8 * celsius) + 32;
//      return fahrenheit
// }

// Função que converte celsius para kelvin
function celsiusKelvin(celsius){
     let kelvin = celsius + 273.15;
     return kelvin
}

// Função que converte kelvin para fahrenheit
function kelvinFahrenheit(kelvin){
     let result = ((kelvin - 273.15) * 9) / 5 + 32;
     let fahrenheit = parseFloat(result.toFixed(3))
     return fahrenheit
}

// Função que converte kelvin para celsius
function kelvinCelsius(kelvin){
     let result = kelvin - 273.15;
     let celsius = parseFloat(result.toFixed(3))
     return celsius
}

// Função que converte fahrenheit para celsius
function fahrenheitCelsius(fahrenheit){
     let result = ((fahrenheit - 32) * 5) / 9;
     let celsius = parseFloat(result.toFixed(2))
     return celsius
}

// Função que converte fahrenheit para kelvin
function fahrenheitKelvin(fahrenheit){
     let result = (((fahrenheit - 32) * 5) / 9) + 273.15;
     let kelvin = parseFloat(result.toFixed(3))
     return kelvin
}

// Área de manipulação dos formularios

function celsiusFahrenheit(){
     let campoCelsius = document.getElementById('campoCelsius').value;
     let celsius = parseFloat(campoCelsius);
     if (!isNaN(celsius)) {
          let fahrenheit = (1.8 * celsius) + 32;
          document.getElementById('resultadoCelFah').value = fahrenheit;
     } else {
          alert('problema com o valor enviado');
     }
}

