"use strict";

// Al cargar la página, recuperamos las recetas y las mostramos
document.addEventListener('DOMContentLoaded', function() {
    fetch('/obtenerRecetas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(recetas => {
        console.log('Recetas fetched:', recetas); // Log the fetched recipes
        const listaRecetas = document.getElementById('lista-recetas'); // Asegúrate de que este elemento exista en tu HTML

        // Limpiar listaRecetas antes de agregar nuevos elementos
        listaRecetas.innerHTML = '';

        // Iterar sobre el array de recetas y crear un elemento para cada una
        recetas.forEach(receta => {
            const elementoReceta = document.createElement('div');
            elementoReceta.innerHTML = `
                <h2>${receta.nombre}</h2>
                <p>${receta.descripcion}</p>
                <p>${receta.preparacion}</p>
                <p>${receta.tiempo}</p>
                <img src="${receta.imagen}" alt="${receta.nombre}">
            `;
            listaRecetas.appendChild(elementoReceta);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
