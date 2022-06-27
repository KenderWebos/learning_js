const cmd = document.getElementsByClassName("console")[0];  // fake console
const textEditor = document.getElementById("text-editor"); // formulario
const scriptText = document.getElementById("script-text"); // text area

function handleSubmit(event) {
  
  event.preventDefault();  // previene acciones por defecto del evento 

  const script = document.createElement("script"); // creamos una etiqueta script <script></script>
  script.type = "text/javascript"; // le damos un tipo de texto
  script.text = scriptText.value; // le asignamos como texto el texto del textarea

  document.body.appendChild(script); // agregar script al final del body
}


function handleInput(e){
  cmd.innerHTML = eval(e.target.value); // 
}

scriptText.addEventListener("input",handleInput); // evento input del textarea
textEditor.addEventListener("submit", handleSubmit); // evento submit del formulario


// function main()
// {
//     console.innerHTML = "Hello " + name;
//     console.innerHTML = "Hello " + name;
//   parrafo.textContent = "Hello " + name; // le asignamos un texto
//   consolew.console.log(console instanceof HTMLElement);
// }
