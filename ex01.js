
// No array de cardápio, adicione um objeto no final desse array e liste seus itens

var cardapio = [
  {
    nome: "Sushi",
    preco: 50.0,
    descricao: "Arroz com peixe",
  },
  {
    nome: "Yakisoba",
    preco: 103.0,
    descricao: "Miojo gourmet",
  },
  {
    nome: "Sashimi",
    preco: 90.0,
    descricao: "Peixe cru!",
  },
];


function adicionar(nome, preco, descricao){
  cardapio.push({
    nome: nome,
    preco: preco,
    descricao:descricao,
  }
  )
}
adicionar("Lula", 30.0, "Grelhado")


console.log(cardapio)