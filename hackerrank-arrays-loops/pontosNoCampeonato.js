let resultados = ["V", "E", "V", "E"];

function solucao(resultados) {
  let pontos = 0;
  for (let i = 0; i < resultados.length; i++) {
    if (resultados[i] === "V") {
      pontos += 3;
    } else if (resultados[i] === "E") {
      pontos += 1;
    }
  }
  return pontos;
}
console.log("Total de pontos:", solucao(resultados));
