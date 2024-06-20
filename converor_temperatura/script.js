//JQuery

$(document).ready(function() {
     // Esconde todas as divs
     $("main > div").hide();
 });
 
 function exibeConversor(classe){
     $('.'+classe).show();
 }
 
 function escondeConversor(classe){
     $('.'+classe).hide();
 }


 
// Funções de conversões de graus de temperatura

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

function celsiusKelvin(){
     let campoCelsius = document.getElementById('campoCelsius2').value;
     let celsius = parseFloat(campoCelsius);
     if (!isNaN(celsius)) {
          let kelvin = celsius + 273.15;
          document.getElementById('resultadoCelKel').value = kelvin;
     } else {
          alert('problema com o valor enviado');
     } 
}

function kelvinFahrenheit(){
     let campoKelvin = document.getElementById('campoKelvin').value;
     let kelvin = parseFloat(campoKelvin);
     if (!isNaN(kelvin)) {
          let result = ((kelvin - 273.15) * 9) / 5 + 32;
          let fahrenheit = parseFloat(result.toFixed(3))
          document.getElementById('resultadoKelFah').value = fahrenheit;
     } else {
          alert('problema com o valor enviado');
     } 
}

function kelvinCelsius(){
     let campoKelvin = document.getElementById('campoKelvin2').value;
     let kelvin = parseFloat(campoKelvin);
     if (!isNaN(kelvin)) {
          let result = kelvin - 273.15;
          let celsius = parseFloat(result.toFixed(3))
          document.getElementById('resultadoKelCel').value = celsius;
     } else {
          alert('problema com o valor enviado');
     } 
}

function fahrenheitCelsius(){
     let campoFahrenheit = document.getElementById('campoFahrenheit').value;
     let fahrenheit = parseFloat(campoFahrenheit);
     if (!isNaN(fahrenheit)) {
          let result = ((fahrenheit - 32) * 5) / 9;
          let celsius = parseFloat(result.toFixed(2))
          document.getElementById('resultadoFahCel').value = celsius;
     } else {
          alert('problema com o valor enviado');
     } 
}

function fahrenheitKelvin(){
     let campoFahrenheit = document.getElementById('campoFahrenheit2').value;
     let fahrenheit = parseFloat(campoFahrenheit);
     if (!isNaN(fahrenheit)) {
          let result = (((fahrenheit - 32) * 5) / 9) + 273.15;
          let kelvin = parseFloat(result.toFixed(3))
          document.getElementById('resultadoFahKel').value = kelvin;
     } else {
          alert('problema com o valor enviado');
     } 
}