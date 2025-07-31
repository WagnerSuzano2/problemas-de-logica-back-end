const sequencia = ">>>>>>>>>";

function solucao(sequencia) {
  let contador = 0;
  for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === ">") {
      contador++;
    } else if (sequencia[i] === "<") {
      contador--;
    }

    if (contador > 6) {
      contador = 0;
    } else if (contador < 0) {
      contador = 6;
    }
  }

  return contador;
}

console.log(solucao(sequencia));
