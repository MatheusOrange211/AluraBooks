import express from 'express';
import db from "./config/dbConnect.js";
import livros from "./model/livro.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso!")
});


const app = express();

app.use(express.json());

routes(app);

// const livros = [
//     {"id": 1, 'titulo': 'Senhor dos Aneis'},
//     {"id": 2, 'titulo': 'o Hobbit'}
// ]

// GET - RETORNAR ALGO /LER ALGO
// PUT - ATUALIZAR ALGO
// POST - CRIAR ALGO
// DELETE - DELETAR ALGO

//retornar livro com base no id passado -> removido pois foi alocado em controllers por ListarLivroById
// app.get('/livros/:id', (req,res) =>{
//     let index = buscalivro(req.params.id);
//     res.json(livros[index]);
// })

//cadastrar um novo livro - > removido pois foi alocado em controllers - CriarLivro
// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro foi cadastrado com sucesso');
// })

// metodo de substituição de titulos pelo id -> removido pois foi alocado em controllers em AtualizarLivro
// app.put('/livros/:id', (req,res) =>{
//     let index = buscalivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })

// Removido pois foi alocado em controllers em ExcluirLivro
// app.delete('/livros/:id', (req, res)=>{
//     let {id} = req.params;
//     let index = buscalivro(id);
//     livros.splice(index, 1);
//     res.send(`Livro de ID: ${id} removido com sucesso!\n`);
// })

//funcao de buscar livro
// function buscalivro(id){
//     return livros.findIndex(livro =>livro.id == id);
// }

export default app;