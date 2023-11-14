var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://127.0.0.1:27017/UsuariosKitchen");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

var app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.post("/sign_up", async function (req, res) {
   var name = req.body.name;
   var email = req.body.email;
   var plainPassword = req.body.password;

   const existingUser = await db.collection("usuarios").findOne({ email: email });

   if (existingUser) {
     return res.redirect("index.html?error=emailInUse");
   }

   const hashedPassword = await bcrypt.hash(plainPassword, 10);

   var data = {
     name: name,
     email: email,
     password: hashedPassword,
   };

   db.collection("usuarios").insertOne(data, function (err, collection) {
     if (err) throw err;
     console.log("Record inserted Successfully");
     return res.redirect("Menu.html");
   });
});


app.get("/login", function (req, res) {
  
  res.sendFile(__dirname + "login.html");
});


app.post("/login", async function (req, res) {
   var email = req.body.email;
   var password = req.body.password;
 
   const user = await db.collection("usuarios").findOne({ email: email });
 
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
  res.set({
    "Access-control-Allow-Origin": "*",
  });
  return res.redirect("index.html");
}).listen(3000);

console.log("server listening at port 3000");
