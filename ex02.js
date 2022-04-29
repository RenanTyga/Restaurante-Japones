// No array de funcionário, adicione um objeto no final desse array e liste os funcionários

var funcionarios = [
  {
    nome: "Orihime Inoue",
    cargo: "Cozinheira",
    salario: 15000,
  },
  {
    nome: "Ichigo Kurosaki",
    cargo: "Degustado de prato",
    salario: 10000,
  },
  {
    nome: "Urahara kisuke",
    cargo: "Cozinheiro chefe",
    salario: 80000,
  },
];


function adicionar(nome, cargo, salario){
    funcionarios.push({
        nome:nome,
        cargo:cargo,
        salario:salario,
    })
}
adicionar("yosujgiro kasi","Assistente chefe", 4000 )



  console.log(funcionarios)