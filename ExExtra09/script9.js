function calcularPagamento() {
    let preco = document.querySelector("#preco").valueAsNumber;
    let condicao = document.querySelector('input[name="condicao"]:checked').value;
  
    let valorAPagar;
    if (condicao === "a") {
      valorAPagar = preco * 0.9; // 10% de desconto
    } else if (condicao === "b") {
      valorAPagar = preco * 0.85; // 15% de desconto
    } else if (condicao === "c") {
      valorAPagar = preco; // preço normal de etiqueta
    } else if (condicao === "d") {
      valorAPagar = preco * 1.1; // preço normal de etiqueta mais 10% de juros
    } else {
      alert("Erro: Condicao de pagamento invlaida");
      return;
    }
  
    document.querySelector("#resultado").textContent = `Valor a pagar: R$ ${valorAPagar.toFixed(2)}`;
  }