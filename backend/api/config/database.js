import mongoose from "mongoose";
import Config  from "./index.js";

const db = mongoose.connection

db.on('connecting', () => {
    console.log('Intentando conectar a la base de datos 🟨')
})
db.on('connected', () => {
    console.log('Se ha conectado a la base de datos 🟩')
})
db.on('error', () => {
    console.log('Error en la conexion de la base de datos 🟥')
})
export default () => {
mongoose.connect(Config.database.uri)};