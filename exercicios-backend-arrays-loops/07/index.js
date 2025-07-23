const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComA = [];

for (let i = 0; i < nomes.length; i++) {
  let inicial = nomes[i];
  if (inicial[0].toLocaleLowerCase() === "a") {
    nomesComA.push(nomes[i]);
  }
}

console.log(nomesComA); 
