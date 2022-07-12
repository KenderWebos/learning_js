const express = require("express");
const app = express();
const PORT = 9999;

let contador = 0;

function middleware(req,res,next) {
  if(contador === 10){
     return res.send("No puedes pasar");
  }
  next();
}

app.use("/", middleware)

app.get("/", (req, res) => {
    contador++;
    res.send(contador.toString());
}) 

/*
  lo mismo de arriba es equivalente a :
  app.get("/",middleware,(req, res) => {
    contador++;
    res.send(contador.toString());
})
*/

app.get("/reset", (req, res) => {
  contador = 0;
  res.redirect("/");
})

app.listen(PORT)