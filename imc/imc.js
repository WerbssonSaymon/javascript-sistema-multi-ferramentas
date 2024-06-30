function imcCalc(altura, peso){
    if (altura <= 0 || peso <= 0){
        throw new Error("Use somente valores positivos")
    }
    if (altura === "" || peso === ""){
        throw new Error("Use somente numeros")
    }

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

