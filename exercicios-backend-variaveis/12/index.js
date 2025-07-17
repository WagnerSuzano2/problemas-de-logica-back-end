let capital = 60000;
let montante = 90000;
let meses = 24;

const taxaJuros = (montante / capital) ** (1 / meses) - 1;

console.log(
  `o seu financiamento de R$ ${capital} reais teve uma taxa de juros de ${(
    taxaJuros * 100
  ).toFixed(3)}%, pois após ${meses} meses você teve que pagar R$ ${montante} reais.`
);
