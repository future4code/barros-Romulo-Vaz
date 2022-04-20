// -----------------INTERPRETAÇÃO DE CÓDIGO-----------------

//                        EXERCICIO 1

/*let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)*/

//RESPOSTA: Imprime 10 e 5

//                       EXERCICIO 2

/*let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)*/

//RESPOSTA: Imprime Null, Null e 20

/*let horasTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalho/salarioDia} por hora`)*/

//----------------------ESCRITA DE CÓDIGO----------------------------

//                        EXERCICIO 1

let meuNome
let minhaIdade

console.log( typeof meuNome , typeof minhaIdade )
 
/*RESPOSTA: não foi atribuido nenhum valor às variaveis, 
dessaforma elas são impressas como UNDEFINED, ou seja INDEFINIDAS.*/

//                        EXECICIO 2

let myName = prompt("Qual seu nome?")
let myAge = prompt("Qual sua idade?")

console.log( myName , myAge)
console.log(typeof myName , typeof myAge)


/*RESPOSTA: Primeiramente eu usei o comando TYPEOF na mesma linha
e acabou substituido os VALORES das variaveis, imprimindo apenas
seu tipo,logo em seguida eu usei o comando COSOLE.LOG separado
apenas para o TYPEOF e imprimiu os VALORES das variaveis e seus
TIPOS*/

//                       EXERCICIO 3

let vcAlmoçou = prompt("Você almoçou hoje?")
let vcDormiu = prompt("Voce dormiu hoje?")
let vcLeu = prompt("Voce leu hoje?")

console.log("Você almoçou hoje?", vcAlmoçou ) 
console.log("Voce dormiu hoje?" , vcDormiu )
console.log("Voce leu hoje?" , vcLeu )

let a = 10
let b = 25
let c = 18

a = c
b = a
c = b 

console.log("O novo valor de a é " , a)
console.log("O novo valor de b é " , b)
console.log("O novo valor de c é " , c)



/*OBS. Ao realizar um exercicio eu colocva os outros codigos 
como comentarios para não tornar a execução tão longa e confusa.*/