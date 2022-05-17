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
  const arrayPares = []
  for(let i = 0;i < array.length; i++) {
    if(array[i] % 2 === 0) {
      arrayPares.push(array[i] * array[i])
    }
  }
  return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = array[0]
  for (let i = 0; i < array.length; i++) {
   if ( array[i] > maiorNum ) {
      maiorNum = array[i];
    } 
  } return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) { 
    let bigger
    let small
    if(num1 > num2) {
      bigger = num1;
      small = num2
    } else {
      bigger = num2;
      small = num1
    }
    const object = {
      maiorNumero: bigger,
      maiorDivisivelPorMenor: bigger % small === 0,
      diferenca: bigger - small
    }
    return object
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
  const ordenar = arrayOrdenado(array)
  const segundoMaior = ordenar[ordenar.length - 2]
  const segundoMenor = ordenar[1]
  return [segundoMaior, segundoMenor]
} 

// EXERCÍCIO 11
   function retornaChamadaDeFilme(filme) {
    let textoAtores = "";
    for (let a of filme.atores) {
      textoAtores += a + ", ";
    }
    const semVirgulaNoUltimo = textoAtores.slice(0, -2);

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${semVirgulaNoUltimo}.`
  } 

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const newObject ={...pessoa, nome: "ANÔNIMO"} 
   return newObject
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter( quemBrinca => {
    return(quemBrinca.altura >= 1.5 && quemBrinca.idade > 14 && quemBrinca.idade < 60)
  })
} retornaPessoasAutorizadas

//EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter( quemBrinca2 => {
    return(quemBrinca2.altura <= 1.5 || quemBrinca2.idade < 14 || quemBrinca2.idade >= 60)
  })
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
} retornaContasComSaldoAtualizado

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let ordemAlfabetica = consultas.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1 
    } else { return true }
  })
  return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let diaConsulta = consultas.sort((a, b) => {
      if (a.dataDaConsulta.split('/') > b.dataDaConsulta.split('/')) {
        return -1
      }else if(a.dataDaConsulta.split('/') < b.dataDaConsulta.split('/')){ 
        return 1 
      } else { return 0 }
    })
    return diaConsulta
}