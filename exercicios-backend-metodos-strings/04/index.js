let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let identificadorZeroEsquerda = identificador.padStart(6, "0");
let emailSemEspaco = email.trim();

const nomeFormatado = nome
  .split(" ")
  .map((palavra) => {
    const primeiraLetra = palavra[0].toUpperCase();
    const restanteNome = palavra.slice(1).toLowerCase();
    return primeiraLetra + restanteNome;
  })
  .join(" ");
console.log(identificadorZeroEsquerda);
console.log(emailSemEspaco);
console.log(nomeFormatado);
