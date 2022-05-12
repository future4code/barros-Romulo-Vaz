//---------------- EXERCÍCIOS DE INTERPRETAÇÃO DECÓDIGO----------------

//---------------- EXERCÍCIO 1 ------------------
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

A) Imprime a multiplicação entre a variavel declarada no valor 2 por 5
e em seguida 10 multiplicado por 5.
B) Nda será impreso pois a variavel não foi invocada através do comando console.log
*/

//---------------- EXERCÍCIO 2 ------------------
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

A) Ela solicitaum texto ao usuario, que será impresso todo em 
letras minusculas e verificara se a palavra CENOURA está contida
no texto, em caso positivo será impresso TRUE, emcaso negativo 
imprime FALSE. Essa função verifica atraves do método "includes()"
se um elemento array contémum determinado elemento.

B) As três entradas tem saidas iguais: 
eu gosto de cenura
true
*/
//---------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ----------------

// EXERCÍCIO 1
//A)
/*
function minhasInfos() {
console.log(`Eu sou Rômulo, tenho 21 anos, moro em Paragominas e sou Desenvolvedor.`)
}
	
minhasInfos()
*/
// B)
/*
function minhasInfos(nome,idade, cidade, profissao){
	console.log(`Eu sou ${nome}, tenho ${idade} anos, 
	moro em ${cidade} e sou ${profissao}.`)
}

minhasInfos("Rômulo", 21, "Paragominas", "Desenvolvedor")
*/

// EXERCÍCIO 2
// A)
/*
function soma(num1, num2){
	return num1 + num2
}
console.log(soma(5,3))
/*

// B)

function boo(fist, second){
	return fist >= second 
}
console.log(boo(5,3))
//console.log(boo(3,5))
*/

// C)
/*
function imPar(number){
	return number %2 == 0
}
console.log(imPar(8))
*/

// D)

// EXERCÍCIO 3
/*
let num1 = Number(prompt('Digite um numero:'))
let num2 = Number(prompt('Digite outro numero:'))
console.log(`Números inseridos: ${num1} e ${num2} `)

const somar = () => {
    const resultado = num1 + num2
    return resultado
}
const resp1 = somar(num1, num2)
console.log(`Soma: ${resp1}`)

const subtração = () => {
    const resultado = num1 - num2
    return resultado
}
const resp2 = subtração (num1, num2)
console.log(`Diferença: ${resp2}`)

const multiplicação = () => {
    const resultado = num1 * num2
    return resultado
}
const resp3 = multiplicação (num1, num2)
console.log(`Multiplicação: ${resp3}`)

const divisão = () => {
    const resultado = num1 / num2
    return resultado
}
const resp4 = divisão (num1, num2)
console.log(`Divisão: ${resp4}`)
*/