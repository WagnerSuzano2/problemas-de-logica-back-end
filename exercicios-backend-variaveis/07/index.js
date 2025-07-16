let populacaoInicial = 1000; // população inicial
let taxaTransmissao = 4; // taxa de transmissao
let tempoDecorrido = 7; // tempo decorrido em dias

// Calculando a potencia: taxaTransmissao elevado a (tempoDecorrido dividido por 7)
const fatorCrescimento = taxaTransmissao ** (tempoDecorrido / 7);

// Calculando a populacao final
const pessoasInfectadas = populacaoInicial * fatorCrescimento;

console.log(
  `Após ${tempoDecorrido} dias, a população infectada será de ${pessoasInfectadas.toFixed(
    0
  )} pessoas.`
);
// Use toFixed(0) para arredondar para um numero inteiro de pessoas, ja que nao ha "meia pessoa"
