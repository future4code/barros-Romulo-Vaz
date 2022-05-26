``` EXERCICIO 1 ```
``` 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

 qtdeCarrosVendidos = 3
 valorTotalVendas = 130000
 
 let comissao = (valorTotalVendas/qtdeCarrosVendidos * 5/100) * 3
 
 let salario = 2000 + comissao 
 
 return salario
} ```
``` EXERCICIO 2```
function calculaPrecoTotal(quantidade){
    let valor = 1.3
    if(quantidade >= 12){
        valor = 1
    }
    return quantidade * valor
}