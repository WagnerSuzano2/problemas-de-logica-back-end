const letras = ["A", "a", "B", "C", "E", "e"];
let letra = "6";
let letrasEncontradas = 0;

if (!((letra >= "a" && letra <= "z") || (letra >= "A" && letra <= "Z"))) {
  console.log("A letra deve ser uma letra do alfabeto, entre A e Z, ou a e z.");
  process.exit(1);
}

for (let i = 0; i < letras.length; i++) {
  if (
    letras[i] === letra.toLocaleUpperCase() ||
    letras[i] === letra.toLowerCase()
  ) {
    letrasEncontradas++;
  }
}
if (letrasEncontradas > 0) {
  console.log(
    `Foram encontradas ${letrasEncontradas} letras ` +
      `${letra.toLocaleUpperCase()}` +
      " ou " +
      `${letra.toLocaleLowerCase()}` +
      "."
  );
} else {
  console.log(
    "Nenhuma letra " +
      `${letra.toLocaleUpperCase()}` +
      " ou " +
      `${letra.toLocaleLowerCase()}` +
      " foi encontrada."
  );
}
