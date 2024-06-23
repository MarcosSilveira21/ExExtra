// Função para verificar o tipo de triângulo
function verificarTriangulo() {
    // Obter os valores dos lados do triângulo
    const x = parseFloat(document.getElementById('sideX').value);
    const y = parseFloat(document.getElementById('sideY').value);
    const z = parseFloat(document.getElementById('sideZ').value);

    // Verificação se os lados formam um triângulo
    let resultado = '';
    if (x + y > z && x + z > y && y + z > x) {
        // Verificar se é equilátero
        if (x === y && y === z) {
            resultado = 'Triângulo Equilátero: Todos os três lados são iguais.';
        }
        // Verificar se é isósceles
        else if (x === y || y === z || x === z) {
            resultado = 'Triângulo Isósceles: Dois lados são iguais.';
        }
        // Caso contrário, é escaleno
        else {
            resultado = 'Triângulo Escaleno: Todos os três lados são diferentes.';
        }
    } else {
        resultado = 'Não é um triângulo: A soma de dois lados deve ser maior que o terceiro.';
    }

    // Exibir o resultado
    document.getElementById('result').innerText = resultado;
}