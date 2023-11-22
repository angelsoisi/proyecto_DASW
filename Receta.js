"use strict";

const mongoose = require('mongoose'); // Asegúrate de incluir esta línea al principio del archivo

const recetaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  preparacion: String,
  tiempo: String,
  imagen: String
});

const Receta = mongoose.model('Receta', recetaSchema);

module.exports = Receta;

