/**
 * tipagem dinamica
 */

// declaração de variaveis
let nome, idade, peso, altura, vip, imc



// ENTRADA DE DADOS
nome = "Luis Gustavo"
idade = 19
peso = 86
altura = 1.80
vip = true

// A linha abaixo verifica o tipo da variavel

// console.log(typeof(vip))

console.clear()

// processamento
// imc (indice de massa corporal) | fcm frequencia cardiaca maxima 
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)

// saida
console.log("Ficha do aluno")
console.log("----------------------------")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FCM: ${fcm} BPM`)