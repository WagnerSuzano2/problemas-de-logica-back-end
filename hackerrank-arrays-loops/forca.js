let palavra = "abelha";
let palpite = "a";

function solucao(palpite, palavra) {
  let acertos = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === palpite) {
      acertos++;
    }
  }
  return acertos;
}
console.log("Número de acertos:", solucao(palpite, palavra));
