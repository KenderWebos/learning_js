const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const routes = require("./routes/index.js");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
let count = 0;
app.use((req, res, next) =>{console.log("Se realizo una solicitud: " + req.url + " - " + count); next(); count++;}) //res.send o

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(routes);

// app.get("/", (req, res) => {
//     contador++;
//     res.send(contador.toString());
// }) 

app.get("/", (req, res) => {
    res.send( "Hola mundo");
}) 

app.get("/home", (req, res) => {
    res.send( path.join(__dirname, "views") );
}) 

app.get("/kender", (req, res) => {
    res.send( '${req.url} - ${req.method}' );
})

app.get("/datetime", (req, res) => {
    res.send( new Date().toLocaleString())
})

//static files

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {console.log("Server running on port "+app.get("port"))});