const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("ACESSO NEGADO ");
} else if (ehEstudante || idade < 18) {
  console.log("ACESSO LIBERADO MEIA ENTRADA, 10 reais");
} else {
  console.log("ACESSO LIBERADO, 20 reais");
}
