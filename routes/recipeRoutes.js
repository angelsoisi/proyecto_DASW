"use strict";

// recipeRoutes.js in the routes directory
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); // Adjust the path as necessary
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).send('Error al obtener las recetas.');
  }
})

router.post('/', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
  } catch (err) {
    res.status(500).send('Error al crear la receta.');
  }
})

module.exports = router