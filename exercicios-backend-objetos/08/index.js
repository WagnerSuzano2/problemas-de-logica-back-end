const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

for (let i = 0; i < usuarios.length; i++) {
  const { nome } = usuarios[i];
  let pets = usuarios[i].pets.length;
  if (pets > 1) {
    console.log(`Sou ${nome} e tenho ${pets} pets.`);
  } else if (pets === 1) {
    console.log(`Sou ${nome} e tenho 1 pet.`);
  } else {
    console.log(`Sou ${nome} e não tenho pets.`);
  }
}
