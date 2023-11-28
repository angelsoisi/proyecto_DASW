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

                <div class="container mt-4">
                  <div class="card">
                    <img
                      src="${receta.imagen}"
                      class="card-img-top"
                      alt="${receta.nombre}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">${receta.nombre}</h5>
                      <p class="card-text">
                        ${receta.preparacion}
                      </p>
                      <h6>Ingredientes</h6>
                      <ul>
                        <li>8 tortillas de maíz</li>
                        <li>2 pechugas de pollo cocidas y desmenuzadas</li>
                        <li>1 taza de crema ácida</li>
                        <li>1 taza de queso suizo rallado</li>
                        <li>1/2 cebolla picada</li>
                        <li>2 dientes de ajo picados</li>
                        <li>3 chiles poblanos asados, pelados y desvenados</li>
                        <li>1/2 taza de caldo de pollo</li>
                        <li>Sal y pimienta al gusto</li>
                        <li>Aceite vegetal</li>
                      </ul>
                      <p>Tiempo de Preparación: 30 minutos</p>
                      <h6>Preparación</h6>
                      <p>
                        1. En una sartén, calienta un poco de aceite y sofríe la cebolla y
                        el ajo hasta que estén dorados.<br />
                        2. Agrega los chiles poblanos asados y desvenados, y mezcla bien.<br />
                        3. Vierte el caldo de pollo y cocina por unos minutos.<br />
                        4. Licúa la mezcla hasta obtener una salsa suave. Agrega sal y
                        pimienta al gusto.<br />
                        5. Calienta las tortillas de maíz y rellénalas con el pollo
                        desmenuzado. Enrolla las tortillas y colócalas en un refractario.<br />
                        6. Baña las enchiladas con la salsa de chile poblano.<br />
                        7. Cubre con crema ácida y espolvorea el queso suizo rallado.<br />
                        8. Gratina en el horno precalentado a 180°C hasta que el queso se
                        derrita y se dore ligeramente.<br />
                        9. Sirve las enchiladas suizas calientes.<br />
                      </p>
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
