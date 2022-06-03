import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutoresById)
    .post("/autores", AutorController.CadastrarAutor)
    .put("/autores/:id", AutorController.AtualizarAutor)
    .delete("/autores/:id", AutorController.ExcluirAutor)

export default router;