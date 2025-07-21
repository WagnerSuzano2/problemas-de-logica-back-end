const tipoDePagamento = "credito";
const valorDoProduto = 13000;

let valorFinal = 0;

switch (tipoDePagamento) {
  case "debito":
  case "dinheiro":
    valorFinal = valorDoProduto - valorDoProduto * 0.1;
    break;

  case "credito":
    valorFinal = valorDoProduto - valorDoProduto * 0.05;
    break;

  case "cheque":
    valorFinal = valorDoProduto - valorDoProduto * 0.03;
    break;

  default:
    console.log("Tipo de pagamento inválido.");
    return;
}
console.log(`Valor a ser pago: R$ ${(valorFinal / 100).toFixed(2)}`);
