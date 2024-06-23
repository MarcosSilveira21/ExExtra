function ordenarValores() {
    let valores = [
      document.querySelector("#valor1").valueAsNumber,
      document.querySelector("#valor2").valueAsNumber,
      document.querySelector("#valor3").valueAsNumber,
      document.querySelector("#valor4").valueAsNumber,
      document.querySelector("#valor5").valueAsNumber
    ];
  
    let temp;
    for (let i = 0; i < valores.length; i++) {
      for (let j = i + 1; j < valores.length; j++) {
        if (valores[i] < valores[j]) {
          temp = valores[i];
          valores[i] = valores[j];
          valores[j] = temp;
        }
      }
    }
  
    let resultado = "Valores em ordem decrescente:";
    for (let i = 0; i < valores.length; i++) {
      resultado += `${valores[i]}<br>`;
    }
  
    document.querySelector("#resultado").textContent = resultado;
  }