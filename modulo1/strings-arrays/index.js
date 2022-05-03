//-------------EXERCICÍOS DE INTERPRETAÇÃO DE CÓDIGO-----------------

//--------------------EXERCICÍO 1------------------

/*
let array
console.log('a. ', array)
R: Imprime INDEFINIDO, pois não foi atribuido valor a variavel.  
array = null
console.log('b. ', array)
R: Imprime NULL, pois foi atribuido valor nulo a variavel
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
R: Imprime o número 11, que é a quantidade de itens dentro da lista.
let i = 0
console.log('d. ', array[i])
R: Imprime todas as variaveis, que estão na lista
array[i+1] = 19
console.log('e. ', array)
R: Substitui o valor que está na posição 1 de acordo com o número de indice, 
da lista, estando na posião 0 o número 3 e na posição 1 o número 4, que será 
substituidp pelo número 19, ao ser impresso no console.
const valor = array[i+6]
console.log('f. ', valor)
R: Imprime o número que está na posição que foi declarada, neste caso
o número 9, que está na posição 6.
*/

// OBS. Eu tive que imprimir no console para poder entender melhor a questão.

//------------------EXERCICÍO 2------------------

/*
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
R: Eu usei a frase: "Açai é a melhor comida"
Imprime tudo em letras maiusculas e com as letras A sendo substituidas pela letra I.
Imprime: IÇII É I MELHOR COMIDI
*/

//-------------EXERCICÍO DE ESCRITA DE CÓDIGO-----------------

//----------------EXERCICÍO 1--------------

const seuEmail = prompt("Digite seu email: ")
const seuNome = prompt("Digite seu nome: ")

console.log('O e-mail' , seuEmail , 'foi cadastrado com sucesso. Seja bem-vinda(o)', seuNome)

//---------------EXERCICÍO 2---------------

let minhasComidas = ['Açai', 'Coxinha', 'Sorvete', 'Amendoim', 'Brigadeiro']

console.log('A. ', minhasComidas)

console.log('B' , 'Essas são minhas comidas preferidas: ')
console.log('C. ', minhasComidas[0])
console.log('D. ', minhasComidas[1])
console.log('E. ', minhasComidas[2])
console.log('F. ', minhasComidas[3])
console.log('G. ', minhasComidas[4])

const comidaFavorita = prompt('Qual sua comida favorita?')
minhasComidas.splice(1 , 1 , comidaFavorita)

console.log(minhasComidas)

//-------------EXERCICÍO 3-----------------

const listaDeTarefas =[] 
const tarefas1 = prompt('Digite uma atividade da sua rotina:')
const tarefas2 = prompt('Digite outra atividade:')
const tarefas3 = prompt('Digite uma ultima atividade:')

listaDeTarefas.push(tarefas1 , tarefas2 , tarefas3)

console.log('Minha lista de tarefas:' , listaDeTarefas)

let tarefaRealizada = Number(prompt("Qual tarefa você fez hoje? Digite 1, 2 ou 3: "))
listaDeTarefas.splice(tarefaRealizada -1, 1)

console.log(listaDeTarefas) 