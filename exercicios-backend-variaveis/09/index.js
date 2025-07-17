const numeroDeLados = 6; // n

// 1. Calcular a Soma dos ângulos internos (S)
const somaDosAngulosInternos = (numeroDeLados - 2) * 180; // S = (n - 2) * 180

// 2. Calcular o valor de CADA ângulo (a)
// a = S / n
const valorDeCadaAngulo = somaDosAngulosInternos / numeroDeLados; 

// Imprimir a SOMA dos ângulos internos
console.log(`A soma dos ângulos internos de um polígono com ${numeroDeLados} lados é ${somaDosAngulosInternos} graus.`); 

// Imprimir o valor de CADA ângulo
console.log(`O valor de cada ângulo interno do polígono é: ${valorDeCadaAngulo} graus.`);