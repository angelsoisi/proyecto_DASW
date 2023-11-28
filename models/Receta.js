"use strict";

const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Esto crea una referencia al modelo de usuario
    required: true
  },
  nombre: String,
  descripcion: String,
  preparacion: String,
  tiempo: String,
  imagen: String
});

const Receta = mongoose.model('Receta', recetaSchema);

module.exports = Receta;
