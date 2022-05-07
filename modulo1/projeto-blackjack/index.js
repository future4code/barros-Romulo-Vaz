//---------------------- PROJETO BLACKJACK ---------------------
console.log("Boas vinde ao jogo de Blackjack!")

let (confirm("Quer iniciar uma nova rodada?"))

    if(jogo) {
        let carta1Usuario = comprarCarta()
        let carta2Usuario = comprarCarta()
        let carta1PC = comprarCarta()
        let carta2PC = comprarCarta()
        
        let pontosDoUsuario = carta1Usuario.valor + carta2Usuario.valor
        let pontosDoPC = carta1PC.valor + carta2PC.valor

        console.log(`Usuário - cartas: ${ carta1Usuario.texto} e ${carta2Usuario.texto} `)
        console.log(`J.A.R.V.I.S. - cartas: ${carta1PC.texto} e ${carta2PC.texto}`)

        if (pontosDoUsuario > pontosDoPC){
            console.log('O usuário GANHOU :)')
        } else if( pontosDoPC > pontosDoUsuario){
            console.log('O J.A.R.V.I.S GANHOU :]')
        } else if(pontosDoUsuario === pontosDoPC){
            console.log("EMPATOU KKK")
        }
    } else {
        console.log("|THE ENDGAME|")
    }
 