//         EXERCICÍO DE INTERPRETAÇÃO DO CÓDIGO

//EXERCICÍO 1:
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
R: false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
R: false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
R: false

console.log("d. ", typeof resultado)
R: booleano

-EXERCICÍO 2:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

R: Sim, o probelma está no tipo de variavel, pois ela foi declarada como
STRING, e para realizar operações é preciso converte-las em NUMBER.


EXERCICÍO 3:

R: Convertendo as variaveis de STRING para NUMBER
let primeiroNumero = Number ( prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//                EXERCICÍO DE ESCRITA DE CÓDIGO

//EXERCICÍO 1:

let minhaIdade = Number(prompt('Qual sua idade?'))
let amigoIdade = Number(prompt('Qual a idade do seu melhor amigo?'))


console.log('Minha idade é maior do que a do meu amigo?' , minhaIdade > amigoIdade)
console.log( 'Diferença de idade: ' , minhaIdade - amigoIdade)

//EXERCICÍO 2:

let numberPar = Number(prompt('Insira um número PAR: '))
let restoPar = numberPar % 2

console.log('O resto é:' , restoPar )

//R: Todo número PAR dividido por 2 tem o resto igual a ZERO.

//EXERCICÍO 3:

let suaIdade = Number(prompt ('Qual sua idade?'))
let idadeMeses = suaIdade * 12
let idadeDias = suaIdade * 365
let idadeHoras = suaIdade * 8760

trings-
console.log('Quantos meses de vida eu tenho:' , idadeMeses)
console.log('Quantos dias de vida eu tenho:' , idadeDias)
console.log('Quantas horas de vida eu tenho:' , deHoras)st


//EXERCICÍO 4:

let numberOne = Number(prompt('Diga um número:'))
let numberTwo = Number(prompt('Diga outro número:'))

let resultado
// 1- O primeiro numero é maior que segundo? true
resultado = numberOne > numberTwo

console.log('O primeiro numero é maior que segundo?' , resultado)

// 2- O primeiro numero é igual ao segundo? false
resultado = numberOne === numberTwo
console.log('O primeiro numero é igual ao segundo' , resultado)

// 3- O primeiro numero é divisível pelo segundo? true
resultado = !!(numberOne / numberTwo)
console.log('O primeiro numero é divisível pelo segundo?' , resultado)

// 4- O segundo numero é divisível pelo primeiro? true
resultado = !!(numberTwo / numberOne)
console.log('O segundo numero é divisível pelo primei , resultado) 

//obs: O true ou false vai depender dos números inseridos e do resultado das operações.
