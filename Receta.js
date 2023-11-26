"use strict";

const mongoose = require('mongoose'); // Import the mongoose module

// Define a new schema for a "Receta" (Recipe)
const recetaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  preparacion: String,
  tiempo: String,
  imagen: String
});

// Create a model from the schema
const Receta = mongoose.model('Receta', recetaSchema);

// Export the model
module.exports = Receta;

