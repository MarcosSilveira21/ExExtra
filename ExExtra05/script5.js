function calcularAumento() {
    let salario = parseFloat(document.getElementById('salario').value);
    let cargo = document.getElementById('cargo').value.toLowerCase();
  
    let porcentagens = {
      'gerente': 0.10,
      'engenheiro': 0.20,
      'tecnico': 0.30
    };
  
    let aumento = 0;
    if (porcentagens.hasOwnProperty(cargo)) {
      aumento = salario * porcentagens[cargo];
    } else {
      aumento = salario * 0.40;
    }
  
    let novoSalario = salario + aumento;
  
    document.getElementById('resultado').innerHTML = `
      <p>Salário atual: R$ ${salario.toFixed(2)}</p>
      <p>Novo salário: R$ ${novoSalario.toFixed(2)}</p>
      <p>Diferença: R$ ${aumento.toFixed(2)}</p>
    `;
  }