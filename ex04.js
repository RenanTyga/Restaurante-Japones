// No array de clientes, adicione um objeto no final desse array e liste os clientes

var clientes = [
  {
    id: 1,
    nome: "Rogério Lucas",
    sobrenome: "Silva",
    idade: 30,
    contato: "4002-8922",
  },
  {
    id: 2,
    nome: "Roberto Carlos",
    sobrenome: "Braga",
    idade: 70,
    contato: "(11) 9 1111-1111",
  },
  {
    id: 3,
    nome: "Sylvester",
    sobrenome: "Stallone",
    idade: 80,
    contato: "(22) 9 2222-2222",
  },
];

function adicionar (nome, sobrenome,idade,contato){
    clientes.push({
        nome: nome,
        sobrenome:sobrenome,
        idade:idade,
        contato:contato,
    })
}
adicionar("Renan", "Rodrigues", 30, "(22) 9 2222-4545")


console.log(clientes)