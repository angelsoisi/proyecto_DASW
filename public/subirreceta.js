"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('recipeForm');
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

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
                    preparacion: preparacion,
                    tiempo: tiempo,
                    imagen: imagen
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                window.location.href = '/misrecetas.html'; // Redirigir al usuario
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});