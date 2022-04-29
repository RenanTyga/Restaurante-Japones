// Crie uma função que ao receber a idade inicial e final e em seguida retorne todos os clientes que estão nesse intervalo

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




  function filtrarIdade (idadeInicial, idadeFinal){
    const entreIdade = clientes.filter((cliente) => {
        if(cliente.idade >= idadeInicial && cliente.idade <= idadeFinal)
        return true
    })
    return entreIdade
}
const resultado = filtrarIdade(20,40)
console.log(resultado)