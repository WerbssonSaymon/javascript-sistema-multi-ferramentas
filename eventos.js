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