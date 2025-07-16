const x1 = 1;
const y1 = 1;
const x2 = 1;
const y2 = 4;

const distanciaCalculada = Math.sqrt(
  Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
);

console.log(
  `A distância entre os pontos (${x1}, ${y1}) e (${x2}, ${y2}) é: ${distanciaCalculada}`
);
