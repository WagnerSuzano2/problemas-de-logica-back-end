const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    const name = this.nomeDoCliente;
    let quantidadeProdutos = this.calcularTotalDeItens();
    let valorTotal = this.calcularTotalAPagar();

    console.log(`Cliente: ${name}`);
    console.log(`Total de Itens: ${quantidadeProdutos} itens`);
    console.log(`Total a pagar: R$ ${valorTotal.toFixed(2)}`);
  },
  addProduto: function (produto) {
    const { nome } = produto;
    const produtoExistente = this.produtos.find((p) => p.nome === nome);

    if (produtoExistente) {
      produtoExistente.qtd += produto.qtd;
    } else {
      this.produtos.push(produto);
    }
  },
  imprimirDetalhes: function () {
    const name = this.nomeDoCliente;
    let totalItens = this.calcularTotalDeItens();
    let totalProduto = this.calcularTotalAPagar();
    let indice = 0;
    console.log(`Cliente: ${name}`);

    this.produtos.forEach((produto) => {
      const { nome, qtd, precoUnit } = produto;

      indice++;
      console.log(
        `item ${indice} - ${nome} - ${qtd} und - R$ ${(
          (qtd * precoUnit) /
          100
        ).toFixed(2)}`
      );
    });

    console.log(`Total de Itens: ${totalItens} itens`);
    console.log(`Total a Pagar: R$ ${totalProduto.toFixed(2)}`);
  },
  calcularTotalDeItens: function () {
    let totalItens = 0;
    totalItens = this.produtos.reduce(
      (total, produto) => total + produto.qtd,
      0
    );
    return totalItens;
  },
  calcularTotalAPagar: function () {
    let totalAPagar = 0;
    let desconto = this.calcularDesconto();
    let totalComDesconto = 0;
    totalAPagar = this.produtos.reduce(
      (total, produto) => total + (produto.qtd * produto.precoUnit) / 100,
      0
    );
    totalComDesconto = totalAPagar - desconto;
    //console.log(
    //  `Total a Pagar (com desconto): R$ ${totalComDesconto.toFixed(2)}`
    //);
    return totalComDesconto;
  },
  calcularDesconto: function () {
    let descontoItens = 0;
    let descontoPorcentagem = 0;
    let maiorDesconto = 0;

    let precoBrutoEmReais = this.produtos.reduce(
      (total, produto) => total + (produto.qtd * produto.precoUnit) / 100,
      0
    );
    if (this.calcularTotalDeItens() > 4) {
      this.produtos.forEach((produto) => {
        if (produto.precoUnit < descontoItens) {
          descontoItens = produto.precoUnit / 100;
        }
      });
      //console.log(`Desconto itens aplicado: R$ ${descontoItens.toFixed(2)}`);
    }

    if (precoBrutoEmReais > 100) {
      descontoPorcentagem = precoBrutoEmReais * 0.1;
      //console.log(
      //  `Desconto porcentagem aplicado: R$ ${descontoPorcentagem.toFixed(2)}`
      //);
    }
    maiorDesconto = Math.max(descontoItens, descontoPorcentagem);
    //console.log(`Maior desconto: R$ ${maiorDesconto.toFixed(2)}`);
    return maiorDesconto;
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

//carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
//carrinho.calcularTotalDeItens();
//carrinho.calcularTotalAPagar();
//carrinho.calcularDesconto();
