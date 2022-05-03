//----------- Exercícios de Interpretação de Código -----------

//------------------------------ EXERCÍCIO 1 ------------------------------
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

R: Ele cria um loop onde para todo valor menor que 0 será adicionado sempre 5 a mais.
Imprime 10
*/

//------------------------------ EXERCÍCIO 2 ------------------------------
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

A) Imprime todos os números maiores que 18, da lista: [19, 21, 23, 25, 27, 30]

B) 
*/

//------------------------------ EXERCÍCIO 3 ------------------------------

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

R:Imprimiria 4 linhas com 1 asteristico na primeira, 2 na segunda, 3 na terceira
e 4 na quarta.
*/

//---------- Exercícios de Escrita de Código ----------

//------------------------------ EXERCÍCIO 1 ------------------------------

let pets = Number(prompt('Me diz quantos pets vc tem?'))
let nomePets = []

if(pets === 0){
  console.log("Que pena! Você tem que adotar um pet.")

} else {
  for (let seusPets = 0; seusPets < pets; seusPets++){
    let names = prompt('Agora me diz os nomes dos seus pets:')
    nomePets.push(names)
  }
}
console.log(nomePets)


//------------------------------ EXERCÍCIO 2 ------------------------------

const myArray = [06, 11, 2000, 14, 16, 18, 21]
for( let contar = 0; contar < myArray.length; contar++){
  console.log(contar) 
 }

 for(valor of myArray){
  let dividindo = valor / 10
  console.log(dividindo)
 }

 for( valor of myArray){
  if((valor % 2) === 0){

    newArray = [... myArray]
  }
 }

 console.log(newArray)
 for( let contar = 0; contar < myArray.length; contar++){
  console.log(`O elemento do index ${contar} é ${myArray[contar]}`)
 }

 let bigger = 0
 let small = myArray[0]
 for(let number of myArray){
  if (number > bigger){
    bigger = number
  } else if (number < small)
  small = number
}

console.log(bigger)
console.log(small)