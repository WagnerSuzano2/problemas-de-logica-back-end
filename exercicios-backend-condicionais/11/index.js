const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

let valorParcelaEmReais = 0;

if (mesesDecorridos > 60) {
  console.log(
    "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o aluno já cumpriu o tempo de contrato."
  );
} else if (totalJaPagoPeloAluno >= 1800000) {
  console.log(
    "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o aluno já quitou a dívida."
  );
} else if (rendaMensalEmCentavos < 200000) {
  console.log(
    "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais."
  );
} else {
  valorParcelaEmReais = (rendaMensalEmCentavos * 0.18) / 100; // Calcula 18% da renda, e converte para reais
  console.log(
    `O valor da parcela desse mês é R$ ${valorParcelaEmReais.toFixed(0)} reais`
  );
}
