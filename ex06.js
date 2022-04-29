// Crie uma função que receba uma letra e retorne todos os clientes que começam com a mesma letra

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


function ClientesPorLetra(letra){
    const InicialCliente = clientes.filter((cliente)=>{
      if(cliente.nome[0] == letra){
          return true
      }
  })
  return InicialCliente
}
console.log(ClientesPorLetra('R'))