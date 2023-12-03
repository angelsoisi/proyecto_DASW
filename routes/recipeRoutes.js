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

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).send('Error retrieving the recipe: ' + err.message);
    }
});

module.exports = router;