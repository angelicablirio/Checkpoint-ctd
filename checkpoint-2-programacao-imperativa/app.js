
let produtos = [
    {
      nome: 'Smart TV',
      valor: 4900,
      qualidade: 10,
      disponibilidade: true
    },
    {
      nome: 'Notebook',
      valor: 3100,
      qualidade: 8,
      isponibilidade: false
    },
    {
      nome: 'Mesa de jantar',
      valor: 1498,
      qualidade: 9,
      disponibilidade: true
    },
    {
      nome: 'Luminária',
      valor: 498,
      qualidade: 7,
      disponibilidade: true
    },
    {
      nome: 'Poltrona',
      valor: 999,
      qualidade: 9,
      disponibilidade: false
    },
    {
      nome: 'Estante para livros',
      valor: 500,
      qualidade: 8,
      disponibilidade: true 
    }
  ];
  
  let carrinho = produtos.filter((produto) => {
     return produto.valor >= 482 &&
            produto.valor <= 1600 && 
            produto.qualidade > 6 &&
            produto.disponibilidade === true
  });
  
  
  let mostrarItensDoCarrinho = carrinho.map((item) => (`${item.nome} R$ ${item.valor}`));

  let somarValorDoCarrinho = carrinho.reduce((acumulador, preco ) => {
    return acumulador + preco.valor
}, 0)
  
  console.log(`Os itens do carrinho são ${mostrarItensDoCarrinho}. A soma total do carrinho é R$ ${somarValorDoCarrinho}`);

