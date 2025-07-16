let peso = 76;
let altura = 1.79;

//let quadrado = altura * altura;
//const quadrado = Math.pow(altura, 2); //// Mais legivel para potencias
const quadrado = altura ** 2; // Operador de exponenciacao (moderno)

let IMC = peso / quadrado;

console.log(`O IMC é: ${IMC.toFixed(2)}`);
