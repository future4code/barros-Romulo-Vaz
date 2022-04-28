//------- - Exercícios de Interpretação de Código -------

//-------- EXERCÍCIO 1 --------

/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

A)
Ele testa se o RESTO da divisão do valor que o usuario digitou por 2, é igual a zero.
Se der zero, imprime que o usuario passou no teste, se não diz que não passou.
B)
Para todo número par, pois esses tem seu resto iguais a zero.
C)
Para todo número impar, que terão restos diferentes de zero. 
*/

//-------- EXERCÍCIO 2 --------

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A)
Ele imprime o preço de determinada fruta que foi digitada pelo usuario.
B)
"O preço da fruta Maçã é R$ 2,25"
C)
"O preço da fruta Pera é R$ 5,5", pois o default é entendido pelo 
computadorcomo o fim do switch.
*/

//-------- EXERCÍCIO 3 --------

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

A)
Solicita um número ao usuario.
B)
Imprime "Esse número passou no teste"
Imprime undefined, pois não foi declarado nenhum código caso 
seja dado um valor menor que 10.
C)
Sim,pois a variavel mensagem foi declarada dentro do escorpo local
e foi chamada no escorpo global, dessa forma o computador, não consegue
imprimir a mensagem.
*/

//---------Exercícios de Escrita de Código ----------

//-------- EXERCÍCIO 1 --------

let idade = Number(prompt("Digite sua idade: "))

if( idade >= 18){
    console.log("Você pode dirigir!")
} else {
    if( idade < 18){
        console.log("Você não pode dirigir.")
    }
}
*/

//-------- EXERCÍCIO 2 --------

let turno = prompt(`Qual turno você estuda?
Digite M(Matutino), V(Vespertino) ou N(Noturno)`)

if( turno === "M"){
    console.log("Bom Dia!")
} else if( turno === "V"){
    console.log("Boa Tarde!")
} else if( turno === "N"){
    console.log("Boa Noite!")
}


//-------- EXERCÍCIO 3 --------

let turno = prompt(`Qual turno você estuda?
Digite M(Matutino), V(Vespertino) ou N(Noturno)`)

switch(turno){

    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break; 
    default:    
}

console.log(turno)


//-------- EXERCÍCIO 4 --------

let filme = prompt("Qual gênero de filme vamos assistir? ")
let ingresso = Number(prompt("Qual preço do ingresso?"))

console.log(`Bem Vinde ao Cinemark`)

if( filme === "fantasia" && ingresso < 15 ){
  console.log("Bom Filme :) ")
} else if( filme !== "fantasia" && ingresso > 15 ){
  console.log("Escolha outro filme :( ")
}

/*console.log(`E não perca a estreia de  
DOUTOR ESTRANHO NO MULTIVERSO DA LOUCURA
dia 05/05.`)*/

// DESAFIO 1:

let filme = prompt("Qual gênero de filme vamos assistir? ")
let ingresso = Number(prompt("Qual preço do ingresso?"))
let lanche =  prompt("Vamos comprar um lanchinho!")

console.log(`Bem Vinde ao Cinemark`)

if( filme === "fantasia" && ingresso < 15 ){
  console.log(`Aproveite seu lanche: ${lanche}`)
  console.log("Bom Filme :) ")
} else if( filme !== "fantasia" && ingresso > 15 ){
  console.log("Escolha outro filme :( ")
}
