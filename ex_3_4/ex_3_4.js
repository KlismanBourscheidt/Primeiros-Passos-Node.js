const prompt = require('prompt-sync')() //adiciona o pacote ao programa
const pesoKg = Number(prompt('Peso da racao em quilo: (colocar em quilos)')) // receber os dados da racao
const consumo = Number(prompt('Consumo diario: (Colocar em gramas)')) //recebe a informacao de quanto ele consome no dia
const pesoGr = pesoKg*1000 // transforma os quilos em gramas
const duracao = Math.floor(pesoGr/consumo) // transforma em dias
const sobra = pesoGr%consumo

console.log(`Duracao ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)