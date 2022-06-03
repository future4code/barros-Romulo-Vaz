
```javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let quantidade = []
  
  for(let i = 0; i < arrayDeNumeros.length; i++) {
    if(numeroEscolhido === arrayDeNumeros[i]){
      quantidade.push(arrayDeNumeros[i])
    }
  }
    if(quantidade.length > 0){
      return `O número ${numeroEscolhido} aparece ${quantidade.length}x`
    } else {
      return "Número não encontrado"
    }
}

```