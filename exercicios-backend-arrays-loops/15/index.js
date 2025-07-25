const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];



for (let i = 0; i < original.length; i++) {
  const element = original[i];
  if (element % 2 === 0) {
    pares.push(element);
  } else {
    impares.push(element);
  }
}



for (const numeros of original) {
  if (numeros % 2 === 0) {
    pares.push(numeros);
  } else {
    impares.push(numeros);
  }
}


original.forEach((element) => {
  if (element % 2 === 0) {
    pares.push(element);
  } else {
    impares.push(element);
  }
});

console.log("Pares:", pares);
console.log("Impares:", impares);
