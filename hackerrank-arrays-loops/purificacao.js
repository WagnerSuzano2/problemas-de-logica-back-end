let stringCorrompida = "*Canis %lupus )familiaris";

function solucao(stringCorrompida) {
  let stringPurificada = "";
  const caracteresCorrompidos = "!@#$%&*()";

  for (let i = 0; i < stringCorrompida.length; i++) {
    const letra = stringCorrompida[i];
    let ehCorrompido = false;
    
    for (let j = 0; j < caracteresCorrompidos.length; j++) {
      if (letra === caracteresCorrompidos[j]) {
        ehCorrompido = true;
        break;
      }
    }

    if (!ehCorrompido) {
      stringPurificada += letra;
    }
  }
  return stringPurificada;
}

console.log(solucao(stringCorrompida));