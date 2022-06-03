import autores from "../model/autor.js";

// classe de métodos estaticos voltados apenas para autores
class AutorController {
    // metodo get geral
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    };

    //GET BY ID
    static listarAutoresById = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if (!err) {
                res.status(200).json(autores);
            } else {
                res.status(400).send({ message: `${err.message} - Autor nao localizado.` })
            }
        })
    };

    // POST
    static CadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ menssage: `${err.menssage} - falha ao cadastrar autor` });
            } else {
                res.status(200).send(autor.toJSON());
            }
        })
    }

    // PUT
    static AtualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Atualizado com sucesso!" });
            } else {
                res.status(500).send({ menssage: `${err.message} - erro na tentativa de atualização` });
            }
        })
    }

    // DELETE
    static ExcluirAutor = (req, res)=>{
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({menssage: 'Autor removido com sucesso!'})
            }else{
                res.status(500).send({menssage: `${err.menssage} - Ouve um problema na tentativa de exclusão`})
            }
        })
    }
}


export default AutorController;