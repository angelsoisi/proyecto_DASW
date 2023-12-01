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

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
