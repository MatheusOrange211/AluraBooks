import mongoose from "mongoose";

// criando o esquema - o padrao a ser seguido
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo:{type: String, required:true},
        autor: {type: String, required: true},
        editora:{type: String, required:true},
        numeroPaginas: {type: Number}
    }
);
// definindo como ser a criado o banco
const livros = mongoose.model('livros', livroSchema);

export default livros;