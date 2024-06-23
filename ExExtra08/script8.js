function calcularPesoIdeal() {
    let altura = document.querySelector("#ipaltura").valueAsNumber;
    let sexo = document.querySelector("#sexo").value;
  
    let pesoIdeal;
    if (sexo === "masculino") {
      pesoIdeal = (72.7 * altura) - 58;
    } else {
      pesoIdeal = (62.1 * altura) - 44.7;
    }
  
    document.querySelector("#resultado").textContent = `Seu peso ideal sera de ${pesoIdeal.toFixed(2)} kg`;
  }