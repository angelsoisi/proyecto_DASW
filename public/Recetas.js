"use strict";

document.addEventListener('DOMContentLoaded', function() {
  function searchRecipes() {
    var input, filter, recipesContainer, recipes, title, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    recipesContainer = document.getElementById('lista-recetas');
    recipes = recipesContainer.getElementsByClassName('recipe');
  
    for (i = 0; i < recipes.length; i++) {
      title = recipes[i].getElementsByClassName('recipe-title')[0];
      txtValue = title.textContent || title.innerText;
  
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        recipes[i].style.display = "";
      } else {
        recipes[i].style.display = "none";
      }
    }
  }

  document.getElementById('searchButton').addEventListener('click', searchRecipes);
  
  fetch('/api/recipes') // Asegúrate de que la URL coincide con tu endpoint
    .then(response => response.json())
    .then(recetas => {
      const contenedor = document.getElementById('contenedorDeRecetas');
      recetas.forEach(receta => {
        const recetaHTML = `
            <div class="col-md-4">
                <div class="card">
                    <a href="recipe.html?id=${receta._id}">
                        <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}">
                    </a>
                    <div class="overlay">
                        <a href="recipe.html?id=${receta._id}" class="animated-text">Descúbrela!</a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${receta.nombre}</h5>
                        <p class="card-text">${receta.descripcion}</p>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += recetaHTML;
      });
    })
    .catch(error => {
        console.error('Error al cargar las recetas:', error);
    });
});