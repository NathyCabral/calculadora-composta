function calcularInvestimento() {
    var capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
    var taxaJuros = parseFloat(document.getElementById("taxaJuros").value);
    var periodo = parseFloat(document.getElementById("periodo").value);
    var resultado;

    // Cálculo do montante com juros compostos
    var taxaJurosDecimal = taxaJuros / 100;
    var montante = capitalInicial * Math.pow(1 + taxaJurosDecimal, periodo);

    resultado = parseFloat(montante.toFixed(2));

    // Exibindo o resultado formatado
    var resultadoTexto = "Resultado:";
    var resultadoNumero = resultado;

    document.getElementById("resultadoNumero").textContent = resultadoNumero;
    document.getElementsByTagName("p")[0].textContent = resultadoTexto;
}
