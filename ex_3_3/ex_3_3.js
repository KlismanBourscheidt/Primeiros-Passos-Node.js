const prompt = require("prompt-sync")() // adiciona o pacote ao programa
const salario = Number(prompt("Informe o salario do funcionário: ")) //le dados de entrada
const tempo = Number(prompt('Informe o tempo de casa do funcionário: (em anos)'))
const quadrienios = Math.floor(tempo/4) //calcula quadrienios
const acrescimo = salario*quadrienios/100 // calcula acrescimpo
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Acréscimo: R$${(salario+acrescimo).toFixed(2)}`)