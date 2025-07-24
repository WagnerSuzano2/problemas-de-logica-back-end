const numeros = [8, 11, 4, 1];

let menorNumero = numeros[0];
let maiorNumero = numeros[0];
let diferenca = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < menorNumero) {
    menorNumero = numeros[i];
  }
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

diferenca = maiorNumero - menorNumero;
console.log(`A diferença entre o maior e o menor número é: ${diferenca}`);
