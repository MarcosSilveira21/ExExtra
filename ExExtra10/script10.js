function calcularSalario() {
    let nivel = document.querySelector("#ipnivel").valueAsNumber;
    let qtdAula = document.querySelector("#ipqtdAula").valueAsNumber;
  
    let valorHoraAula;
    if (nivel === 1) {
      valorHoraAula = 12.00;
    } else if (nivel === 2) {
      valorHoraAula = 17.00;
    } else if (nivel === 3) {
      valorHoraAula = 25.00;
    } else {
      alert("Erro: Nível de professor inválido");
      return;
    }
  
    let salario = valorHoraAula * qtdAula * 4.5;
    document.querySelector("#resultado").textContent = `Salário: R$ ${salario.toFixed(2)}`;
  }