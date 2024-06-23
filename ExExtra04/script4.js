function calcularImposto() {
    let ano = parseInt(document.getElementById("ano").value);
    let valorTabela = parseFloat(document.getElementById("valorTabela").value);
  
    let taxa = 0;
    if (ano < 1990) {
      taxa = 0.01;
    } else {
      taxa = 0.015;
    }
  
    let imposto = valorTabela * taxa;
    let resultado = `O imposto a ser pago sera de R$ ${imposto.toFixed(2)}`;
  
    document.getElementById("resultado").innerHTML = resultado;
  }