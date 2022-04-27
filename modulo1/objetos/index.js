//----------- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO ----------

//----------- EXERCÍCIO 1 ----------
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

A) 
Imprime o nome do primeiro ator segundo o número de indice: Matheus Nachtergaele
Imprime o nome da ultima atriz: Virginia Cavendish
Imprime o ultimo objeto da array segundo o número de indice: {canal: "Globo", horario: "14h"}
*/

//----------- EXERCÍCIO 2 ----------
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

A)
Imprime: nome: "Juca", idade: 3, raca: "SRD".
Imprime: nome: "Juca"
Imprime: nome: "Juco"
 
B)
Spread permite adicionar itens de um objeto á outro.
*/

//----------- EXERCÍCIO 3 ----------

/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

A)
Imprime: false 
Imprime: undefined

B) false é a propriedade do item backender, 
porém não existe o item altura, chamado no console.log,
imprimindo o valor undefined
*/

//--------- EXERCÍCIO DE ESCRITA DE CÓDIGO ----------

//--------- EXERCÍCIO 1 ----------

function nomeEapelido(objeto) {
	return objeto
}

const people = {
    nome: "Rômulo" ,
    apelidos: ['Yell' , 'Yellow' , 'Amarelo'],

  
}  
console.log(`Eu sou ${people.nome}, mas podem me chamar de: 
${people.apelidos[1]} `)

function receber(apelidosRecebidos){
    const novosApelidos ={
        ...apelidosRecebidos, 
        apelidos2:['Biel' , 'Rô' , 'Gab'],
    }
    console.log(`Mas se vcs quiserem podem me chamar de
    ${novosApelidos.apelidos2[0]} ou 
    ${novosApelidos.apelidos2[1]} ou
    ${novosApelidos.apelidos2[2]}, eu também gosto.` );
}

receber(people)


//--------- EXERCÍCIO 2 ----------

const infos1 ={
name1:'Rômulo Vaz',
age1: 21,
job1: 'Bailarinho'
}

const infos2 ={
name2: 'João',
age2: 21,
job2:'Maquiador'
}

function minhaLista(inf1,inf2){
let listaDeinfos =[inf1.name1, inf1.name1.length, inf1.age1, inf1.job1.length, 
        inf2.name2, inf2.name2.length, inf2.age2, inf2.job2.length]

    return listaDeinfos
}
console.log(minhaLista(infos1,infos2));


//--------- EXERCÍCIO 3 ----------

const carrinho = []

let fruit1={
    nome:"Açai",
         disponibilidade: true
     }
let fruit2={
    nome:"Maça",
         disponibilidade: true
     }
let fruit3={
    nome:"Jambo",
         disponibilidade: false
     }
function escolherFruta(fruta){
carrinho.push(fruta)
     }


