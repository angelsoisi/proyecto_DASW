"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('recipeForm');

    document.getElementById('addIngredient').addEventListener('click', function() {
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'ingredientes[]';
        document.getElementById('ingredientes').appendChild(newInput);
    });

    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var ingredientes = Array.from(document.getElementsByName('ingredientes[]')).map(input => input.value);

            var nombre = document.getElementById('nombre').value;
            var descripcion = document.getElementById('descripcion').value;
            var preparacion = document.getElementById('preparacion').value;
            var tiempo = document.getElementById('tiempo').value;
            var imagen = document.getElementById('imagen').value;

            fetch('/subirReceta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    descripcion: descripcion,
                    ingredientes: ingredientes,
                    preparacion: preparacion,
                    tiempo: tiempo,
                    imagen: imagen
                })
            })
            .then(response => {
                if (!response.ok) {
                    alert('Error al subir la receta');
                    throw new Error('Network response was not ok.');
                  
                }
                return response.json();
            })
            .then(data => {
                alert('Receta subida con éxito');
                console.log('Success:', data);
                window.location.href = '/misrecetas.html'; // Redirigir al usuario
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});