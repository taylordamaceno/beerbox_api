// Definindo a estrutura de dados para armazenar as cervejas
let cervejas = [];

// Função para cadastrar uma nova cerveja
function cadastrarCerveja() {
  let codigo = prompt("Digite o código da cerveja:");
  let nome = prompt("Digite o nome da cerveja:");
  let descricao = prompt("Digite a descrição da cerveja:");
  let preco = parseFloat(prompt("Digite o preço da cerveja:"));
  let quantidade = parseInt(prompt("Digite a quantidade da cerveja:"));
  let tipo = prompt("Digite o tipo da cerveja (pilsen, ippa, paleale ou stout):");

  // Verifica se a cerveja já está cadastrada
  let cervejaExistente = cervejas.find((cerveja) => cerveja.codigo === codigo);

  if (cervejaExistente) {
    console.log("Cerveja já cadastrada.");
  } else {
    // Verifica se o tipo da cerveja é válido
    if (tipo !== "pilsen" && tipo !== "ippa" && tipo !== "paleale" && tipo !== "stout") {
      console.log("Tipo de cerveja inválido. Cerveja não cadastrada.");
    } else {
      // Adiciona a nova cerveja na estrutura de dados
      cervejas.push({
        codigo,
        nome,
        descricao,
        preco,
        quantidade,
        tipo,
      });
      console.log("Cerveja cadastrada com sucesso.");
    }
  }
}

// Função para listar todas as cervejas
function listarCervejas() {
  console.log("Lista de cervejas:");

  // Filtra apenas as cervejas dos tipos pilsen, ippa, paleale e stout
  let cervejasFiltradas = cervejas.filter((cerveja) => cerveja.tipo === "pilsen" || cerveja.tipo === "ippa" || cerveja.tipo === "paleale" || cerveja.tipo === "stout");

  cervejasFiltradas.forEach((cerveja) => {
    console.log("Código da cerveja:", cerveja.codigo);
    console.log("Nome da cerveja:", cerveja.nome);
    console.log("Tipo da cerveja:", cerveja.tipo);
    console.log("Preço da cerveja:", cerveja.preco);
    console.log("Quantidade da cerveja:", cerveja.quantidade);
  });
}
