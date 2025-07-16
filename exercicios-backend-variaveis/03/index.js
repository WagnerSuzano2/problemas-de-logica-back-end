// Dados do problema
const precoTenis = 129.99;
const dinheiroDisponivel = 80.00;

// 1. Calcular o valor do desconto necessário
const valorDescontoNecessario = precoTenis - dinheiroDisponivel;
// Ex: 129.99 - 80.00 = 49.99

// 2. Aplicar a regra de tres para encontrar a porcentagem
// Se precoTenis (129.99) representa 100%
// Entao valorDescontoNecessario (49.99) representa X%
// X = (valorDescontoNecessario * 100) / precoTenis

const porcentagemDescontoNecessaria = (valorDescontoNecessario * 100) / precoTenis;

console.log(`Para comprar o tenis, voce precisa de um desconto de: ${porcentagemDescontoNecessaria.toFixed(2)}%`);
// Saída esperada: "Para comprar o tenis, voce precisa de um desconto de: 38.46%"