const capital = 1000;
const taxa = 0.125;
const tempo = 5; // Em meses, conforme o problema

const montanteFinal = capital * (1 + taxa) ** tempo; // Use um nome claro para o resultado

console.log(`O montante após ${tempo} meses é: R$ ${montanteFinal.toFixed(2)}`);
// Exibe o resultado formatado com duas casas decimais
// O resultado é exibido com clareza, facilitando a compreensão do montante final
