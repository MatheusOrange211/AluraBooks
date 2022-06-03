import express from "express";
import LivroController from "../controllers/livrosController.js";

// Pra que esse arquivo? no inicio todas as informações de controle e rotas estavam no mesmo arquivo app.js
// contudo para que fique melhor organizado, divide-se os controladores no arquivo de controladores que por sua vez
// ficam dentro de uma classe onde la dentro definimos seu funcionamento. Em routes, definimos os verbos que trabalharão
// com cada controller, seja GET, POST, PUT ou DELETE.

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id",LivroController.listarLivrobyID)
    .post("/livros", LivroController.CadastrarLivro)
    .put("/livros/:id", LivroController.AtualizarLivro)
    .delete("/livros/:id", LivroController.ExcluirLivro)


export default router;