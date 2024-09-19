const prompt = require('prompt-sync')() // adiciona o pacote ao programa
const veiculo = prompt('Vaiculo: ') // le os dados de entrada
const preco = Number(prompt('Preco R$: '))
const entrada = preco*0.50 //calcula o valor da entrada
const parcela =(preco*0.50)/12 //faz o calculo das parcelas

console.log(`Promocao: ${veiculo}`) //exibe as resposta
console.log(`Entrada de R$${entrada.toFixed(2)}`)
console.log(`+12x de R$${parcela.toFixed(2)}`)