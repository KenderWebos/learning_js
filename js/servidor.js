const administrator = "KenderWebos"
const http = require("http");

console.log("comenzando servidor...");

function sitioWeb(req, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Mi primer servidor, el administrador es: " + administrator);
}

let servidor = http.createServer(sitioWeb);

servidor.listen(8888, "192.168.0.10"); //127.0.0.1 es el localhost

console.log("servidor corriendo en el puerto 8888");