const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = -Infinity;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(maiorNumero);
