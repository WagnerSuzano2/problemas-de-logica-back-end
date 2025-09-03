const comentario = "Esse COVID é muito perigoso!";
let comentarioFinal;

const comentarioEmMinusculas = comentario.toLowerCase();

if (
  comentarioEmMinusculas.includes("covid") ||
  comentarioEmMinusculas.includes("pandemia")
) {
  comentarioFinal = "Comentário bloqueado por conter palavras proibidas";
} else {
  comentarioFinal = "Comentário autorizado";
}

console.log(comentarioFinal);
