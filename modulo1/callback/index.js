//------------------- Exercícios de Interpretação de Código --------------------

//------------------- EXERCÍCIO 1 -------------------
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

A) Imprime todo o array:
*/

//------------------- EXERCÍCIO 2 -------------------

/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

A) Imprime um novo arrays apenas com os itens "nome" do array original:
{"Amanda Rangel", "Laís Petra", "Letícia Chijo" }
*/
//------------------- EXERCÍCIO 3 -------------------

/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

A) Imprime um novo arrays com todos os itens que são diferentes do item "Chijo":
{"Mandi" , "Laura"}
*/

//------------------- Exercícios de Escrita de Código --------------------

//------------------- EXERCÍCIO 1 -------------------
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map ((osNomes) => {
     return osNomes.nome
 })
 console.log(nomePets)

 const racaPets = pets.filter ((asRacas) => {
     return asRacas.raca === "Salsicha"
 })
 console.log(racaPets)

 const desconto = pets.filter ((descontinho) => {
     return descontinho.raca === "Poodle"
 })

 const filtrarDesconto = desconto.map ((filtrar) => {
     return filtrar.nome
 })
 console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${filtrarDesconto}!`)
*/

//------------------- EXERCÍCIO 2 -------------------
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 /*const nomeProdutos = produtos.map ((compras) => {
     return compras.nome
 })
 console.log(nomeProdutos)

  const minhasCompras = produtos.map ((novasCompras) => {
     return novasCompras.nome   
 })
  const outrasCompras = produtos.map ((novosPrecos) => {
      return novosPrecos.preco * 5/100
  })
 const listaMercado = []
  console.log(minhasCompras)

 const minhasBebidas = produtos.filter((soBebidas) => {
    return soBebidas.categoria === "Bebidas"
 })
 const filtrarBebidas = minhasBebidas.map((bebidasFiltadas) => {
     return bebidasFiltadas.nome
 })
 console.log(filtrarBebidas)

 const ype = produtos.filter((nomesYpe) => {
     return nomesYpe.nome === "Ypê"
 })
 const filtarYpe = ype.map((produtosYpe) => {
     return produtosYpe.nome
 })
 console.log(filtarYpe.${})
 */