const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Receta = require('./Receta.js'); // Asegúrate de tener el modelo de Receta
const session = require('express-session');
const passport = require('passport');

const app = express();

// Configuración de la conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/UsuariosKitchen", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
mongoose.connection.once("open", () => {
  console.log("Conexión a MongoDB establecida.");
});


// ... configuración de express-session y passport ...
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Usuario no encontrado.' });
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) { return done(err); }
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Contraseña incorrecta.' });
        }
      });
    });
  }
));


app.use(session({ secret: 'tu_secreto', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);  // o user._id si estás usando MongoDB
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
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
    res.status(200).send("Receta subida con éxito.");
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
  var name = req.body.name;
  var email = req.body.email;
  var plainPassword = req.body.password;

  const existingUser = await mongoose.connection.collection("usuarios").findOne({ email: email });

  if (existingUser) {
    return res.redirect("index.html?error=emailInUse");
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  var data = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  mongoose.connection.collection("usuarios").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
    return res.redirect("Menu.html");
  });
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  const user = await mongoose.connection.collection("usuarios").findOne({ email: email });

  if (!user) {
    return res.redirect("login.html?error=invalidCredentials");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.redirect("login.html?error=invalidCredentials");
  }

  return res.redirect("Menu.html");
});

app.get("/", function (req, res) {
  res.redirect("index.html");
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
