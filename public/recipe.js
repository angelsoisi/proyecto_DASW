"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener el valor de un parámetro de la URL por su nombre
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Obtener el ID de la receta de la URL
    const recipeId = getQueryParam('id');

    // Comprobar si hay un ID de receta
    if (!recipeId) {
        console.error('No recipe ID provided');
        return;
    }


    // Función para cargar los datos de la receta
    function loadRecipeData(id) {
        fetch(`/api/recipes/${id}`) // Asegúrate de tener una ruta en tu servidor para esto
            .then(response => {
                if (!response.ok) {
                    loadRecetaData(id);
                    return;
                }
                return response.json();
            })
            .then(recipeData => {
                // Actualiza los elementos del DOM con los datos de la receta
                document.getElementById('nombre').textContent = recipeData.nombre;
                document.getElementById('descripcion').textContent = recipeData.descripcion;
                document.getElementById('imagen').src = recipeData.imagen;
                document.getElementById('tiempo').textContent = recipeData.tiempo;
                document.getElementById('preparacion').textContent = recipeData.preparacion;

                // Agregar ingredientes a la lista
                const ingredientesList = document.getElementById('ingredientes');
                recipeData.ingredientes.forEach(ingrediente => {
                    const li = document.createElement('li');
                    li.textContent = ingrediente;
                    ingredientesList.appendChild(li);
                });
            })
            .catch(error => {
                
                console.error('Error fetching recipe:', error);
            });
    }

    function loadRecetaData(id) {
        fetch(`/obtenerReceta/${id}`) // Asegúrate de tener una ruta en tu servidor para esto
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(recetaData => {
                // Actualiza los elementos del DOM con los datos de la receta
                document.getElementById('nombre').textContent = recetaData.nombre;
                document.getElementById('descripcion').textContent = recetaData.descripcion;
                document.getElementById('imagen').src = recetaData.imagen;
                document.getElementById('tiempo').textContent = recetaData.tiempo;
                document.getElementById('preparacion').textContent = recetaData.preparacion;
                
                // Agregar ingredientes a la lista
                const ingredientesList = document.getElementById('ingredientes');
                recetaData.ingredientes.forEach(ingrediente => {
                    const li = document.createElement('li');
                    li.textContent = ingrediente;
                    ingredientesList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching recipe:', error);
            });
    }

    // Cargar los datos de la receta
    loadRecipeData(recipeId);
  });
