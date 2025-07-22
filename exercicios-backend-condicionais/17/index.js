//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorParcela = valorDoProduto / quantidadeDoParcelamento / 100;

let restanteparcelas = valorPago / valorParcela;

console.log(
  `Restam ${
    quantidadeDoParcelamento - restanteparcelas
  } parcelas de R$${valorParcela}`
);
