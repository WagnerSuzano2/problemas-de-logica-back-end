const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

function solucao(primeiraLetra, segundaLetra, palavras) {
  let palavrasFiltradas = [];

  for (const palavra of palavras) {
    if (palavra.length >= 2) {
      if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        palavrasFiltradas.push(palavra);
      }
    }
  }
  return palavrasFiltradas;
}

const resultado = solucao(primeiraLetra, segundaLetra, palavras);

if (resultado.length === 0) {
  console.log("NENHUMA");
} else {
  for (const palavraEncontrada of resultado) {
    console.log(palavraEncontrada);
  }
}