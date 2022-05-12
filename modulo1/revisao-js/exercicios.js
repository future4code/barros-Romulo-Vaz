// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordenar = (a, b) => {
    return a>b ? 1 : a<b ? -1 : 0;
  }
  return array.sort(ordenar)
} 

// EXERCÍCIO 04
function retornaNumerosPares(array) {
     if(array[i] % 2 === 0){
     return array
    }  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
        
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (var i = 0; i < array.length; i++) {
   if ( array[i] > maior ) {
      maior = array[i];
    } 
  } return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) { 
  if(num1 < num2){
     return num1
   } else if(num2 < num1){
     return num2
   }  
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numPares = []
  for (let i = 0; numPares.length < n; i++) {
      if (i % 2 == 0) {
          numPares.push(i);
      }
  }
return numPares
}
retornaNPrimeirosPares(5)
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if((ladoA == ladoB) && (ladoB == ladoC)){
    return "Equilátero"
  } else if((ladoA == ladoB) || (ladoB == ladoC) || (ladoA == ladoC)){
    return "Isósceles"
  } else {
    return "Escaleno"
  }
} classificaTriangulo(ladoA(3), ladoB(4), ladoC(5))

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 return filme
}
const marvel = {
  nome: 'Doutor Estranho no Multiverso da Loucura',
  ano: 2022,
  diretor: 'Sam Raimi',
  atores: ['Kochitl Gomez', 'Elizabeth Olsen', 'Benedict Cumberbatch']
}
console.log(`Venha assistir ao filme ${marvel.nome}, de ${marvel.ano},
dirigido por ${marvel.diretor} e estrelado por ${marvel.atores[0]},
${marvel.atores[1]} e ${marvel.atores[2]}`)

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return pessoa
}
const infos = {
  nome: 'Rômulo Gabriel Silva Vaz',
  idade: 21,
  endereco: 'Rua Maria de Lourdes, Nº 201',
  email: 'romulovaz@gmail.com'
}
console.log(`nome: ${infos.nome},
    idade: ${infos.idade},
    email: ${infos.email},
    endereco: ${infos.endereco}`)

function substituir(nomeRecebido){
  const novoNome ={
      ...nomeRecebido, 
      subNome:['ANÔNIMO'],
    } 
    console.log(`nome: ${novoNome.subNome}
    idade: ${infos.idade}
    email: ${infos.email}
    endereco: ${infos.endereco}`) 
} 
substituir(infos)

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas
}
const requisitos = [
	{ nome: "Wanda Maximoff", idade: 28, altura: 1.7},
	{ nome: "Stephen Strange ", idade: 37, altura: 1.9},
	{ nome: "America Chavez", idade: 15, altura: 1.3},
	{ nome: "Charles Chavier", idade: 70, altura: 1.7},
	{ nome: "Peggy Carter", idade: 30, altura: 1.6},
	{ nome: "Billy Maximoff", idade: 12, altura: 1.3}
] 
 const requisitos1 = requisitos.filter ((suaAltura, suaIdade) => {
    if(suaAltura.altura >= 1.5){
		return suaAltura
	} else if(suaIdade.idade >= 14 && idade <= 60){
		return suaIdade
	}
 }) 
 console.log(requisitos1)

//EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas
}
const requisitosDois = [
	{ nome: "Wanda Maximoff", idade: 28, altura: 1.7},
	{ nome: "Stephen Strange ", idade: 37, altura: 1.9},
	{ nome: "America Chavez", idade: 15, altura: 1.3},
	{ nome: "Charles Chavier", idade: 70, altura: 1.7},
	{ nome: "Peggy Carter", idade: 30, altura: 1.6},
	{ nome: "Billy Maximoff", idade: 12, altura: 1.3}
] 
const requisitos2 = requisitosDois.filter ((suaAltura, suaIdade) => {
  if(suaAltura.altura <= 1.5){
  return suaAltura
} else if(suaIdade.idade <= 14 && idade >= 60){
  return suaIdade
}
}) 
console.log(requisitos2)

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 let somarDivida = 0
 let saldoAtual
 for(let index = 0; index < contas.compras.length; index++){
   somarDivida +=contas.compras[index]
 }
 for(let index = 0; index < contas.saldoAtual.length; index++){
   saldoAtual - somarDivida - contas.saldoAtual[index]
 }
 return saldoAtual
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}