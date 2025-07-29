let precos = [100, 500, 100, 200, 50];

function solucao(precos) {
  let total = 0;
  let menorPreco = Infinity;

  for (let i = 0; i < precos.length; i++) {
    total += precos[i];
    if (precos[i] < menorPreco) {
      menorPreco = precos[i];
    }
  }

  if (precos.length >= 5) {
    return total - menorPreco;
  }

  return total;
}

console.log(solucao(precos));
