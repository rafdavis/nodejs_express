// Importando o Express na aplicação //
const express = require("express") // CommonJS Modules (Node, forma antiga)

// Criando uma instância do Express //
const app = express()

//Criando a rota principal
app.get("/", (req, res) => {
    res.send("<h1>Hello world! <br>Bem vindo</h1>");
})

//Criando a rota Perfil
// :nome é um parâmetro obrigatório
// :nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req,res) => {
    const nome = req.params.nome // Coletando o parâmetro e guardando na variável

    //Verificando se o parâmetro nome existe
    if(nome){ // Se o nome = true
        res.send(`Olá, ${nome}! Seja Bem-vindo!!</h1>`);
    } else {
        res.send(`<h2>Faça login para acessar seu perfil</h2>`);
    }
});

//Criando a rota vídeos
// :playlist? e :video? parâmetros opcionais 
app.get("/videos/:playlist?/:video?", (req,res) => {
    const playlist = req.params.playlist
    const video = req.params.video
    //Verificando se playlist = true e video = undefined
    if (playlist && video == undefined){
        res.send(`<h2> Você está na playlist de ${playlist}.</h2>`)
    }
    // Verificando se os dois parâmetros são = true
    if(playlist && video){
        res.send(`<h2> Você está na playlist ${playlist}</h2><br> Reproduzindo vídeo ${video}...`)
        // Se não for informado nenhum parâmetro
    } else {
        res.send("<h1>Página de vídeos</h1>")
    }
    
})

//Iniciando o servidor na porta 8080 //
app.listen(8080, function(error) {
    if(error){
        console.log(`Ocorreu um erro: ${error}`)
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})