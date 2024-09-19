const prompt = require("prompt-sync")() //adiciona pacote para entrada de dados
const num1 = Number(prompt('Primeiro numero: ')) // le os numeros
const num2 = Number(prompt('Segundo Numero: '))
const soma = num1+num2
console.log(`Soma é: ${soma}`)