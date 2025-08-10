const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};
curso.aulas.push({
  identificador: 1,
  nome: "Introdução a programação",
});
curso.aulas.push({
  identificador: 2,
  nome: "Variáveis",
});
curso.aulas.push({
  identificador: 3,
  nome: "Condicionais",
});
curso.aulas.push({
  identificador: 4,
  nome: "Arrays",
});

console.log(curso);
