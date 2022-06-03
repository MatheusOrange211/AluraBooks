import mongoose from "mongoose";

mongoose.connect("mongodb+srv://matheus:12345@cluster0.uh8sb.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;