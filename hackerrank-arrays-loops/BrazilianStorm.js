notas = [100, 100, 100, 50];

function solucao(notas) {
  let media = 0;
  let total = 0;
  let menor = Infinity;
  let maior = -Infinity;
  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
    if (notas[i] > maior) {
      maior = notas[i];
    }
    if (notas[i] < menor) {
      menor = notas[i];
    }
  }
  total = total - menor - maior;
  media = total / (notas.length - 2);
  console.log(media);
}
console.log("Resultado da média:");
solucao(notas);
