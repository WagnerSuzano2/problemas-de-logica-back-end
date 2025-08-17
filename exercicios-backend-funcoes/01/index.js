const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

function corrigirProva(prova) {
  const nomeAluno = prova.aluno;
  let acertou = 0;

  for (let i = 0; i < prova.questoes.length; i++) {
    const { resposta, correta } = prova.questoes[i];
    if (resposta === correta) {
      acertou++;
    }
  }
  const notaFinal = (prova.valor / prova.questoes.length) * acertou;

  return `O aluno(a) ${nomeAluno} acertou ${acertou} questões e obteve nota ${notaFinal}.`;
}

console.log(corrigirProva(prova));
