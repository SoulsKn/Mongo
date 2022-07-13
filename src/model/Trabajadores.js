const mongoose = require('mongoose');    //requerimos de mongoose para utilizar el esquema
const { Schema } = mongoose;

const TrabajadoresSchema = new Schema({      //se define el equema de los trabajadores
    nombre: String,
    rol: String,
    datos: { pais: String,
                rut: Number,
                estado: String },
});

module.exports = mongoose.model('Trabajadores', TrabajadoresSchema);  //se exporta el modelo de esquema 
                                                              //para la coleccion de Animales