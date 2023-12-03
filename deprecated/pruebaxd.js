"use strict";

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var confirmContrasena = document.getElementById('confirmContrasena').value;

    var contrasenaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(contrasena);

    if (contrasenaValida && contrasena === confirmContrasena) {

      document.getElementById('mensajeExito').style.display = 'block';
      console.log('Usuario registrado correctamente');

    } else {
      alert('La contraseña debe tener al menos una mayúscula, una minúscula, un número y tener al menos 6 caracteres. Asegúrate de que las contraseñas coincidan.');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginButton').addEventListener('click', function() {
    $('#login').modal('hide');
  });
});