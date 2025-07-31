const preco = [20, 15, 8, 2, 12];

function solucao(precos) {
  let menorprejuizo = Infinity;
  for (let i = 0; i < precos.length - 1; i++) {
    for (let j = i + 1; j < precos.length; j++) {
      const precocCompra = precos[i];
      const precoVenda = precos[j];
      const prejuizo = precocCompra - precoVenda;
      if (prejuizo > 0) {
        if (prejuizo < menorprejuizo) {
          menorprejuizo = prejuizo;
        }
      }
    }
  }
  return menorprejuizo;
}

console.log(solucao(preco));
