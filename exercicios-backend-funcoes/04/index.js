const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({ tipo: "Depósito", valor: valor });
    return `Depósito de R$${valor / 100} realizado para o cliente: ${
      this.nome
    }`;
  },
  sacar: function (valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      this.historicos.push({ tipo: "Saque", valor: valor });
      return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}`;
    } else {
      return `Saldo insuficiente para saque de: ${this.nome}`;
    }
  },
  extrato: function () {
    console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}`);
    console.log("Histórico:");

    this.historicos.forEach((movimento) => {
      console.log(`${movimento.tipo} de $${movimento.valor / 100}`);
    });
  },
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
contaBancaria.extrato();
