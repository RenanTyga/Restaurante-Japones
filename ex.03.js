// Pegar id do cliente e retorna o mesmo e caso não exista retorne a mensagem "Cliente não encontrado"

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

function buscarId (id, clientes) {
  var idxClientes = clientes.findIndex((cliente) => cliente.id === id);
  if (idxClientes >= 0) {
      return clientes[idxClientes]
  } else {
      return console.log("Cliente não encontrado")
  } 
}
buscarId(5, clientes)


