"use strict";
document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('/subirReceta', {
        method: 'POST',
        body: formData
        // Aquí no estableces el encabezado 'Content-Type' ya que FormData lo hará por ti
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