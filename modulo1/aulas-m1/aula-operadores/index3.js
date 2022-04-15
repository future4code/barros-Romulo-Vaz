// ------------------------- VERIFICAÇÃO DE JAVASCRIPT  ------------------------- 

/*console.log('Olá mundo!')
console.log ('Boa noite JB da JBL!')

//----------------------- EXPLICAÇÃO DE SOMA  ------------------------------------------


const valor1 = 10
const valor2 = 20
const valor3 = 40
const valor4 = 3*/

let resultado 


/*resultado = valor1 + valor4

console.log(`O resultado da operação é : ${resultado}`) 

//-------------------- EXPLICAÇÃO DE SUBTRAÇÃO ------------------------------------------ 

resultado = valor3 - valor2

console.log(`Diferença é : ${resultado}`) 


//-------------------- EXPLICAÇÃO DE MULTIPLICAÇÃO ------------------------------------------ 

resultado = valor1 * valor3
console.log(`O resultado da multiplicação é : ${resultado}`) 


//-------------------- EXPLICAÇÃO DE DIVISÃO ------------------------------------------

resultado = valor2/ valor1 

console.log( `O resultado da divisao é ${resultado}`)

console.log( "O resultado é", resultado)
console.log( "O resultado é" + "" +  resultado) 

//-------------------- EXPLICAÇÃO DE RESTO ------------------------------------------


resultado = valor3 % valor4
console.log ('O resultado é ', resultado)


//-------------------- EXPLICAÇÃO DE SIMPLIFICAÇÃO ------------------------------------------

let saldo = 200
console.log("o saldo é ", saldo)

let pix = 1000 

saldo = saldo + pix  // Isso daqui é igual a saldo += pix | Forma simplificada


saldo += pix


console.log(saldo) 


//-------------------- EXERCICIO 1 ------------------------------------------


//1.Somar 3 com 4
//2 .Multiplicar 3 com 5 e dividir o resultado por 2
//3. Subtrair 5 de 4 e multiplicar o resultado por -1
//4. Determinar o resto da divisão de 234 por 5

resultado = 3 +4 
console.log('1.)O resultado é ', resultado)

resultado = 3*5/2
console.log('2.) O resultado é ', resultado)

resultado = (5-4)*-1 
console.log('3.) O resultado é ', resultado)

resultado = 234 % 5
console.log('4.) O resultado é ', resultado)


//-------------------- EXPLICAÇÃO DE COMPARADORES ------------------------------------------

// === => Compara Valor e Tipo são iguais
// == => Compara apenas valor
// !== => Compara se os valores e tipos são diferentes
// X >  Y => Verifica se X é maior que Y
// X >= Y => Verifica se X é maior ou igual a Y
// X < Y => Verifica se X é menor que Y
// X <= Y => Verifica se X é menor ou igual a Y
// Podemos usar os comparadores para verificar se caso haja uma condição faça uma determinada ação. Por exemplo : Se a idade da pessoa for igual a 18 (idade === 18), ela pode entrar na festa. Se a idade da pessoa for diferente de 18 (idade !== 18) ela vai receber um hoje não Faro, venha na festinha quando tiver 18!


resultado = 1 === '1'
resultado = 13 === '13'
resultado = 29 === 29
resultado = '29' !== '29'

console.log('O resultado é ', resultado)

const numero1 = 10
const numero2 = 20
const numero3 = 10

resultado = numero1 >= 10
resultado = numero2 <= numero1
console.log(resultado)

resultado = numero2 < numero1
console.log(resultado)

resultado = numero2 < numero2
console.log(resultado)

resultado = numero2 <= numero2
console.log(resultado)


 let primeiroNumero = 10
 let segundoNumero = '10'

 resultado = primeiroNumero === segundoNumero

 console.log('O resultado da comparação é ', resultado)*/

//-------------------- EXERCICIO 2 ------------------------------------------

//Declarar e atribuir valores as variáveis

/*const primeiroNumero1 = 29
const segundoNumero2 = 40


// 1.  O primeiro número é igual ao segundo? True/False ---------------------------

resultado = primeiroNumero1 === segundoNumero2

console.log(resultado)


// 2. O primeiro número é diferente do segundo? True/False -------------------------

resultado = primeiroNumero1 !== segundoNumero2

console.log(resultado)

// 3. O primeiro número é maior que o segundo? True/False ----------------------------

resultado = primeiroNumero1 > segundoNumero2

console.log(resultado)

//4. O primeiro número é menor que o segundo? True/False ----------------------------

resultado = primeiroNumero1 < segundoNumero2

console.log(resultado)*/



//-------------------- EXPLICAÇÃO DE OPERADORES LÓGICOS------------------------------------------

/*let VarA = true
let VarB = false
let VarC = true 

resultado = VarA && VarB // False pois no E (&&) precisa ter tudo true para retornar true
console.log (resultado)


resultado = VarA &&  VarC // True pois no E (&&)pois todas as variãveis são True
console.log (resultado)

resultado = VarA  && VarB && VarC // False pois no E (&&) precisa ter tudo true para retornar true
console.log (resultado) 

//-------------------- EXERCICIO 3 ------------------------------------------

//Usar esses valores para os exercícios 3 e 4
let a = true
let b = false
let c = true 


//  1. Realize a operação: a && b
resultado = a && b
console.log("Ex 3 1.",resultado)

// 2. Realize a operação: b && c
resultado = b && c
console.log("Ex 3 2.",resultado)

//3. Realize a operação: a && c
resultado = a && c 
console.log("Ex 3 3.",resultado)

// 4. Realize a operação: a && b && c 
resultado = a && b && c
console.log("Ex 3 4.",resultado) 


//-------------------- EXERCICIO 4 ------------------------------------------ 

// Considere os valores:
// let a = true
// let b = false
// let c = true 


//  1. Realize a operação: a || b
resultado = a || b
console.log("Ex 4 1.", resultado)

// 2. Realize a operação: b || c
resultado = b || c
console.log("Ex 4 2.", resultado)

//3. Realize a operação: a || c
resultado = a || c
console.log("Ex 4 3.", resultado)

// 4. Realize a operação: a || b || c 
resultado = a || b || c
console.log("Ex 4 3.", resultado)


//-------------------- EXERCICIO 5 ------------------------------------------ 

/* Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:	
1.O nome da pessoa
2. A idade dessa pessoa
3. Um true ou false que diz se ela é maior de idade
4. Quantos anos ela terá em 2050 */

let nome = prompt ('Digite o seu nome')
let anoDeNascimento = Number( prompt( 'Digite seu ano de nascimento'))
let anoAtual = Number (prompt('Digite seu ano atual'))
let idadeAtual = anoAtual -anoDeNascimento
let maiorIdade = idadeAtual >= 18
let idade2050 = 2050 -anoDeNascimento

console.log('item1' , nome)

console.log('item 2' , idadeAtual)

console.log('item 3' , maiorIdade)

console.log('item 4' , idade2050)

//-------------------- EXPLICAÇÃO DE COMO IMPRIMIR RESPOSTAz------------------------------------------

/*let variavelExemplo = "bananinha"

// Template string  
console.log(` O que você quer escrever de string ${variavelExemplo} `)

// Concatenando com o + 
console.log( "O que você quer escrever de string" + " "+ variavelExemplo)

//Concatenando com ,

console.log('O que você quer escrever de string ', variavelExemplo)*/




