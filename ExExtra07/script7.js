function calcularValor() {
    let codigoItem = document.getElementById('codigoItem').value.toLowerCase();
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let precos = {
      'cachorro quente': 11.00,
      'bauru': 8.50,
      'isto quente': 8.00,
      'hamburger': 9.00,
      'cheeseburger': 10.00,
      'efrigerante': 4.50
    };
  
    if (!precos.hasOwnProperty(codigoItem)) {
      document.getElementById('resultado').textContent = 'Codigo de item invalido!';
      return;
    }
  
    let preco = precos[codigoItem];
    let valorTotal = preco * quantidade;
    document.getElementById('resultado').textContent = `Item: ${codigoItem}, Quantidade: ${quantidade}, Valor Total: R$ ${valorTotal.toFixed(2)}`;
  }