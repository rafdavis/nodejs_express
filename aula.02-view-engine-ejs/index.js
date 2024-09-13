// Importando o Express na aplicação //
const express = require("express"); // CommonJS Modules (Node, forma antiga)

// Criando uma instância do Express //
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

//Criando a rota principal
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

//Criando a rota Perfil
// :nome é um parâmetro obrigatório
// :nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  const listaPerfil = ["David", " Otavio", " Matheus"];
  const perfil = req.params.perfil;
  res.render("perfil", { perfil: perfil, listaPerfil: listaPerfil });
});

//Criando a rota vídeos
// :playlist? e :video? parâmetros opcionais
app.get("/videos/:playlist?", (req, res) => {
  const listaPlaylist = ["ZettaTuba", "MafiaCorujona", "Fadeout"];
  const playlist = req.params.playlist;
  res.render("videos", { playlist: playlist, listaPlaylist: listaPlaylist, });
});

// Criando ROTA PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;
  res.render(
    "produtos",
    // Enviando a variável para a página
    // Será chamada na página
    {
      produto: produto, // Variável que está no index (req.params)
      listaProdutos: listaProdutos,
      // Na página produtos.ejs haverpa uma testagem de condição
    }
  );
});

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  //ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [
    {produto: "Celular", valor: 3000},
    {produto: "Computador", valor:4000},
    {produto: "Tablet", valor: 2000},
    {produto: "Notebook", valor: 3800}, ]
  res.render("pedidos", {
    // ENVIANDO O ARRAY DE OBJETOS PARA A PÁGINA
    pedidos : pedidos});
});

//Iniciando o servidor na porta 8080 //
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
