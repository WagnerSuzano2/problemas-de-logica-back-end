const numeroCartao = "1111222233334444";
const ultimosQuatroDigitos = numeroCartao.slice(-4);
const primeirosQuatroDigitos = numeroCartao.slice(0, 4);
let asteriscos = "*".repeat(8);
const cartaoMascarado = primeirosQuatroDigitos + asteriscos + ultimosQuatroDigitos;
console.log(cartaoMascarado); 
