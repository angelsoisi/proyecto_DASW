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
                <div class="col-md-4" >
                  <div class="card">
                    <a href="/receta?id=${receta._id}">
                      <img
                        src="${receta.imagen}"
                        class="card-img-top"
                        alt="${receta.nombre}"
                      />
                    </a>
                    <div class="card-body">
                      <div class="overlay">
                        <a href="receta.html?id=${receta._id}" class="animated-text">Descubrir!</a>
                      </div>
                      <h5 class="card-title">${receta.nombre}</h5>
                      <p class="card-text">${receta.descripcion}</p>
                    </div>
                  </div>
                </div>
            `;
            listaRecetas.appendChild(elementoReceta);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

