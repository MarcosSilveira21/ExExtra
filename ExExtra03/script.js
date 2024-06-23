function decomporValor() {
    let valor = document.querySelector("#valor").valueAsNumber;
  
    let notas = [100, 50, 10, 5, 1];
    let quantidadeNotas = [0, 0, 0, 0, 0];
  
    for (let i = 0; i < notas.length; i++) {
      quantidadeNotas[i] = Math.floor(valor / notas[i]);
      valor %= notas[i];
    }
  
    let resultado = `Valor: R$ ${document.querySelector("#valor").value}\n`;
    resultado += `Notas necessárias:\n`;
    resultado += `R$ 100: ${quantidadeNotas[0]} nota(s)\n`;
    resultado += `R$ 50: ${quantidadeNotas[1]} nota(s)\n`;
    resultado += `R$ 10: ${quantidadeNotas[2]} nota(s)\n`;
    resultado += `R$ 5: ${quantidadeNotas[3]} nota(s)\n`;
    resultado += `R$ 1: ${quantidadeNotas[4]} nota(s)\n`;
  
    document.querySelector("#resultado").textContent = resultado;
  }