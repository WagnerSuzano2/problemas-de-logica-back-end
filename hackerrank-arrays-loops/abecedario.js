let letra = "m";
let palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

function solucao(letra, palavras) {
    
  let perdedora = 0;

  for (const nomes of palavras) {
    if (nomes[0] !== letra) {
      perdedora++;
    }
  }
  return perdedora;

}

console.log(solucao(letra, palavras));
