const cpf = "12345678900";
const cnpj = "12345678900110";

if (cpf.length === 11) {
  let parte1 = cpf.slice(0, 3);
  let parte2 = cpf.slice(3, 6);
  let parte3 = cpf.slice(6, 9);
  let parte4 = cpf.slice(9, 11);
  let cpfFormatado = `${parte1}.${parte2}.${parte3}-${parte4}`;
  console.log(cpfFormatado);
} else {
  console.log("CPF inválido");
}

if (cnpj.length === 14) {
  let parte1 = cnpj.slice(0, 2);
  let parte2 = cnpj.slice(2, 5);
  let parte3 = cnpj.slice(5, 8);
  let parte4 = cnpj.slice(8, 12);
  let parte5 = cnpj.slice(12, 14);
  let cnpjFormatado = `${parte1}.${parte2}.${parte3}/${parte4}-${parte5}`;
  console.log(cnpjFormatado);
} else {
  console.log("CNPJ inválido");
}
