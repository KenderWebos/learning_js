traerPais().then(mostrarNombre);

function mostrarNombre(n) {
  document.getElementById("mensaje").innerHTML = n.country[0].country_id;
}

async function traerPais(){

    const respuesta = await fetch("https://api.nationalize.io/pollos?name=kevin");

    if(!respuesta.OK){
        let oops = "404 no encontre nada";
        alert(oops);
        throw new Error(oops);
    }

    const nombre = respuesta.json();

    console.log(nombre);
    return nombre;
}