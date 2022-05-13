// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  //return array.reverse()
  const inverterArray = []
  for(let i = 0; i < array.length; i++){
    inverterArray.unshift(array[i])
  }
  return inverterArray
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
     const par = array.filter((item, index, array) => {
       return item % 2 === 0 })
       return par
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
  const array2 = array
  const biggerSmall = []
const max = array2.reduce((a,b) => {
  return Math.max(a, b - 1)
})
const min = array2.reduce((a,b) => {
  return Math.min(a, b + 1)
})
biggerSmall.push(max)
biggerSmall.push(min)
return biggerSmall
}

// EXERCÍCIO 11
const marvel = {
	nome: 'Doutor Estranho no Multiverso da Loucura',
	ano: 2022,
	diretor: 'Sam Raimi',
	atores: ['Kochitl Gomez', 'Elizabeth Olsen', 'Benedict Cumberbatch']
   }
   function retornaChamadaDeFilme(filme) {
  
   let infosFilme = (filme.nome, filme.ano, filme.diretor, filme.atores, filme.atores)
   return infosFilme
  }
   console.log(`Venha assistir ao filme ${marvel.nome}, de ${marvel.ano},
	dirigido por ${marvel.diretor} e estrelado por 
	${marvel.atores}`)

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const newObject ={...pessoa, nome: "ANÔNIMO"} 
   return newObject
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
 pessoas = [
	{ nome: "Wanda Maximoff", idade: 28, altura: 1.7},
	{ nome: "Stephen Strange ", idade: 37, altura: 1.9},
	{ nome: "America Chavez", idade: 15, altura: 1.3},
	{ nome: "Charles Chavier", idade: 70, altura: 1.7},
	{ nome: "Peggy Carter", idade: 30, altura: 1.6},
	{ nome: "Billy Maximoff", idade: 12, altura: 1.3}
] 
 const requisitos1 = pessoas.filter ((suaAltura, suaIdade) => {
    if(suaAltura.altura >= 1.5){
		return suaAltura
	} else if(suaIdade.idade >= 14 && idade <= 60){
		return suaIdade
	}
 }) 
 return requisitos1
}

//EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   let naoAutorizadas = []
   for (quemBrinca of pessoas) {
     if(quemBrinca.altura >= 1.5 || (quemBrinca.idade < 14 || quemBrinca.idade >= 60)){
       naoAutorizadas.push(quemBrinca)
     }
     return naoAutorizadas
   }
} 
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 for ( let i = 0; i < contas.length; i ++) {

  let entradas = []
  calcularSaldo(contas)

  function calcularSaldo(utilizador) {
    utilizador[i].compras.forEach(nr => entradas.push(nr * 1))
    console.log(entradas)
  }
  function somarNum(numeros){
    return numeros.reduce((sum, nr) => + nr, 0)
  }
  contas[i].compras = []
  contas[i].saldoTotal + somarNum(entradas)
 }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let ordemAlfabetica =
  consultas.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1 
    } else { return true }
  })
  return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let ordemConsulta = 
    consultas.sort((a, b) => {
      if (a.dataConsuta < b.dataConsuta.split('/')) {
        return -1
      }else if(a. dataConsuta.split('/') > b.dataConsuta.split('/')){ 
        return 1 
      } else { return 0 }
    })
    return ordemConsulta
}