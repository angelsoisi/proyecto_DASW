const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Receta = require('./Receta.js'); // Asegúrate de tener el modelo de Receta
const session = require('express-session');
const passport = require('passport');
const User = require("./models/User.js");
console.log(User);

const app = express();

// Configuración de la conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/UsuariosKitchen", {
});
mongoose.connection.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
mongoose.connection.once("open", () => {
  console.log("Conexión a MongoDB establecida.");
});


// ... configuración de express-session y passport ...
const LocalStrategy = require('passport-local').Strategy;

// ... Resto de tus importaciones ...

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: 'Usuario no encontrado.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Contraseña incorrecta.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

app.use(session({
  secret: 'tu_secreto',
  resave: true,
  saveUninitialized: true,
  cookie: { sameSite: 'lax' } // O 'strict' o 'none', dependiendo de tus necesidades
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});



// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Middleware para analizar el cuerpo de las peticiones recibidas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar la subida de recetas

app.post('/subirReceta', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('Usuario no autenticado');
  }

  try {
    const { nombre, descripcion, preparacion, tiempo, imagen } = req.body;
    const userId = req.user._id; // Asumiendo que Passport.js está configurando req.user

    const newReceta = new Receta({
      nombre,
      descripcion,
      preparacion,
      tiempo,
      imagen,
      userId
    });

    await newReceta.save();
    
    // Enviar la receta como respuesta JSON
    res.status(200).json(newReceta);
    
  } catch (err) {
    res.status(500).send("Error al subir la receta.");
  }
});



// Route to get all recipes for the logged-in user
app.get('/obtenerRecetas', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('Usuario no autenticado');
  }

  try {
    const userId = req.user._id; // Obtener el ID del usuario autenticado

    const recetas = await Receta.find({ userId: userId });
    res.json(recetas);
  } catch (err) {
    res.status(500).send("Error al obtener las recetas.");
  }
});

// Rutas para manejo de usuarios y autenticación
app.post("/sign_up", async function (req, res) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.redirect("index.html?error=emailInUse");
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.redirect("Menu.html");
  } catch (err) {
    console.log(err);
    res.redirect("index.html?error=registrationFailed");
  }
});

// Ruta de login
app.post("/login", passport.authenticate('local', {
  successRedirect: '/Menu.html',
  failureRedirect: '/login.html?error=invalidCredentials',
  failureFlash: false
}));
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.get("/", function (req, res) {
  res.redirect("index.html");
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
