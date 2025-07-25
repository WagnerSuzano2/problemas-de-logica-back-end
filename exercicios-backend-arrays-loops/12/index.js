const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const LIMITE_DENTRO = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < LIMITE_DENTRO) {
  const pessoaEntrando = filaDeFora.shift();
  filaDeDentro.push(pessoaEntrando);
}

console.log(filaDeDentro);
console.log(filaDeFora);
