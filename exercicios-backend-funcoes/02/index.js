const carro = {
  ligado: false,
  velocidade: 0,
  imprimirStatus() {
    const status = this.ligado ? "ligado" : "desligado";
    console.log(`Carro ${status}. Velocidade: ${this.velocidade}.`);
  },

  ligar() {
    if (this.ligado) {
      console.log("Este carro já está ligado.");
    } else {
      this.ligado = true;
      this.imprimirStatus();
    }
  },

  desligar() {
    if (!this.ligado) {
      console.log("Este carro já está desligado.");
    } else if (this.velocidade > 0) {
      console.log("Não é possível desligar o carro em movimento.");
    } else {
      this.ligado = false;
      this.imprimirStatus();
    }
  },

  acelerar() {
    if (!this.ligado) {
      this.ligar();
    }

    this.velocidade += 10;
    this.imprimirStatus();
  },

  desacelerar() {
    if (!this.ligado) {
      console.log("Não é possível desacelerar um carro desligado.");
    } else {
      this.velocidade = Math.max(0, this.velocidade - 10);

      if (this.velocidade === 0) {
        this.desligar();
      } else {
        this.imprimirStatus();
      }
    }
  },
};


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
