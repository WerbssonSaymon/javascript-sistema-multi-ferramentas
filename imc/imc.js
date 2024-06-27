function imcCalc(altura, peso){
    resultado = peso / (altura * altura)
    resultado = parseFloat(resultado.toFixed(2))
    return resultado
}

module.exports = imcCalc;

function calcularIMC() {
    let altura = parseFloat($("#altura").val());
    let peso = parseFloat($("#peso").val());
    let resultado = imcCalc(altura, peso);
    $("#resultado").text("Seu IMC é: " + resultado);
    console.log(altura, resultado)
}

