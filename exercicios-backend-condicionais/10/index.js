const caractere = "!";

if (caractere == Number(caractere) || caractere == parseInt(caractere, 10)) {
  console.log("É um número");
} else if (
  caractere === "A" ||
  caractere === "E" ||
  caractere === "I" ||
  caractere === "O" ||
  caractere === "U"
) {
  console.log("Vogal maiúscula");
} else if (
  caractere === "a" ||
  caractere === "e" ||
  caractere === "i" ||
  caractere === "o" ||
  caractere === "u"
) {
  console.log("Vogal minúscula");
} else if (
  (caractere >= "A" && caractere <= "Z") ||
  (caractere >= "a" && caractere <= "z")
) {
  console.log("E uma consoante");
} else {
  console.log("Caractere desconhecido/invalido");
}
