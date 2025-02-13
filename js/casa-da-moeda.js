// Função para converter Real em Dólar
function converterRealParaDolar() {
    // Obter o valor em Real do input
    let valorEmReal = parseFloat(prompt("Digite o valor em Reais:"));
    
    // Taxa de câmbio atual (Exemplo: 1 BRL = 0.20 USD)
    let taxaDeCambio = 0.20;
    
    // Verificar se o valor digitado é válido
    if (isNaN(valorEmReal) || valorEmReal <= 0) {
        alert("Por favor, insira um valor válido em Reais.");
    } else {
        // Calcular o valor em Dólares
        let valorEmDolar = valorEmReal * taxaDeCambio;
        alert("O valor em Dólares é: " + valorEmDolar.toFixed(2));
    }
}

// Chamar a função
converterRealParaDolar();
