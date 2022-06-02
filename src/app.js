import express from 'express'

const app = express();

app.use(express.json());

const livros = [
    {"id": 1, 'titulo': 'Senhor dos Aneis'},
    {"id": 2, 'titulo': 'o Hobbit'}
]

// GET - RETORNAR ALGO /LER ALGO
// PUT - ATUALIZAR ALGO
// POST - CRIAR ALGO
// DELETE - DELETAR ALGO

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node - novo');
})

app.get('/livros', (req,res)=>{
    res.status(200).json(livros);
})

//retornar livro com base no id passado
app.get('/livros/:id', (req,res) =>{
    let index = buscalivro(req.params.id);
    res.json(livros[index]);
})

//cadastrar um novo livro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso');
})

// metodo de substituição de titulos pelo id
app.put('/livros/:id', (req,res) =>{
    let index = buscalivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res)=>{
    let {id} = req.params;
    let index = buscalivro(id);
    livros.splice(index, 1);
    res.send(`Livro de ID: ${id} removido com sucesso!\n`);
})

//funcao de buscar livro
function buscalivro(id){
    return livros.findIndex(livro =>livro.id == id);
}

export default app;