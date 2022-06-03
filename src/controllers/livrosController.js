import livros from "../model/livro.js";

class LivroController {
    // metodo get geral
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros);
            })
    };

    // metodo get por id
    static listarLivrobyID = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if (!err) {
                res.status(200).json(livros);
            } else {
                res.status(400).send({ menssage: `${err.menssage} - ID não localizado.` });
            }
        })
    };
    // metodo post
    static CadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ menssage: `${err.menssage} - falha ao cadastrar livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    // metodo put
    static AtualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Atualizado com sucesso!" });
            } else {
                res.status(500).send({ menssage: `${err.message} - erro na tentativa de atualização` });
            }
        })
    }

    // excluir - delete
    static ExcluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ menssage: 'Livro removido com sucesso!' })
            } else {
                res.status(500).send({ menssage: `${err.menssage} - Ouve um problema na tentativa de exclusão` })
            }
        })
    }

    static listarLivrosByEditora = (req, res)=>{
        const editora = req.body.editora
        livros.find({'editora': editora}, {}, (err, livros)=>{
            res.status(200).send(livros);
        })
    }
}

export default LivroController;
