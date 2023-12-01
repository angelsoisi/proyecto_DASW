"use strict";

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  ingredientes: [String],
  tiempo: String,
  preparacion: String,
  imagen: String
});

const Receta = mongoose.model('Receta', recetaSchema);

module.exports = Receta;
