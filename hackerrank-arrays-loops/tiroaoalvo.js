const disparos = [0, 10, 50, 70, 80, 30];

function solucao(disparos) {
  let acertos = 0;
  for (let i = 0; i < disparos.length; i++) {
    if (disparos[i] > 70) {
      acertos++;
    }
  }
  if (acertos >= 3) {
    console.log(acertos);
  } else {
    console.log("ELIMINADO");
  }
}
solucao(disparos);
