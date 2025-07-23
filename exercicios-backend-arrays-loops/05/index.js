const original = [1, 4, 12, 21, 53, 88, 112];
const arrayDePares = [];

for (const pares of original) {
  if (pares % 2 === 0) {
    arrayDePares.push(pares);
  }
}
console.log(arrayDePares);
