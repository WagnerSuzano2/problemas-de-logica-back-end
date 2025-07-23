const numeros = [54, 22, 14, 87, 10, 284];
let encontrarNumero = 10;
let indice = -1;

if (
  !(typeof encontrarNumero === "number" && Number.isFinite(encontrarNumero)) ||
  (typeof encontrarNumero === "string" &&
    encontrarNumero.trim() !== "" &&
    Number.isFinite(Number(encontrarNumero))) 
) {
  console.log(`"${encontrarNumero}" NÃO é um número válido ou utilizável.`);
  process.exit(1);
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === encontrarNumero) {
    console.log(`O número ${encontrarNumero} foi encontrado no índice ${i}.`);
    indice = i;
    break;
  }
}

if (indice === -1) {
  console.log(`O número ${encontrarNumero} não foi encontrado.`);
}
