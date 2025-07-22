const numeros = [2, 3, 4, 6];

let somaNumeros = 0;

for (let i = 0; i < numeros.length; i++) {
  somaNumeros += numeros[i];
}

// O loop 'for...of' itera diretamente sobre os VALORES do array.
// Em cada iteracao, a variavel 'numero' recebera um dos elementos do array 'numeros'.
//for (const numero of numeros) {
//  somaNumeros += numero; // Adiciona o numero atual a somaNumeros
//}

// O metodo 'forEach' executa uma funcao (callback) para cada elemento do array.
// A funcao de callback pode receber o elemento (aqui 'numero') e, opcionalmente, o indice.
//numeros.forEach(function(numero) {
//  somaNumeros += numero; // Adiciona o numero atual a somaNumeros
//});

// Com arrow function (mais comum em JavaScript moderno):
// numeros.forEach(numero => {
//     somaNumeros += numero;
// });

console.log(somaNumeros);
