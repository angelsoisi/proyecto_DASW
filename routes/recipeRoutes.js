"use strict";

// recipeRoutes.js in the routes directory
const express = require('express');
const router = express.Router();
const Receta = require('../models/Receta'); // Adjust the path as necessary

// Route to create a new recipe
router.post('/', async (req, res) => {
  try {
    const { userId, nombre, descripcion, preparacion, tiempo, imagen } = req.body;
    const newReceta = new Receta({ userId, nombre, descripcion, preparacion, tiempo, imagen });
    await newReceta.save();
    res.status(201).json(newReceta);
  } catch (err) {
    res.status(500).send(`Error creating the recipe: ${err.message}`);
  }
});

// Route to retrieve all recipes
router.get('/', async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (err) {
    res.status(500).send(`Error fetching recipes: ${err.message}`);
  }
});

// Route to retrieve a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    if (!receta) return res.status(404).send('Recipe not found');
    res.status(200).json(receta);
  } catch (err) {
    res.status(500).send(`Error fetching the recipe: ${err.message}`);
  }
});

// Route to update a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const { nombre, descripcion, preparacion, tiempo, imagen } = req.body;
    const updatedReceta = await Receta.findByIdAndUpdate(req.params.id, {
      nombre,
      descripcion,
      preparacion,
      tiempo,
      imagen
    }, { new: true });
    if (!updatedReceta) return res.status(404).send('Recipe not found');
    res.status(200).json(updatedReceta);
  } catch (err) {
    res.status(500).send(`Error updating the recipe: ${err.message}`);
  }
});

// Route to delete a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const receta = await Receta.findByIdAndDelete(req.params.id);
    if (!receta) return res.status(404).send('Recipe not found');
    res.status(200).send('Recipe deleted');
  } catch (err) {
    res.status(500).send(`Error deleting the recipe: ${err.message}`);
  }
});

// Route to filter recipes by ingredients and time
router.get('/filter', async (req, res) => {
  try {
    const { ingredients, time } = req.query;

    // Build a query object based on the presence of ingredients and time filters
    let query = {};
    if (ingredients) {
      // Assuming ingredients are stored as an array of strings in the database
      query.ingredients = { $all: ingredients.split(',') };
    }
    if (time) {
      // Assuming time is stored as a string and you want an exact match
      query.tiempo = time;
    }

    const filteredRecetas = await Receta.find(query);
    res.status(200).json(filteredRecetas);
  } catch (err) {
    res.status(500).send(`Error while filtering recipes: ${err.message}`);
  }
});

module.exports = router;
