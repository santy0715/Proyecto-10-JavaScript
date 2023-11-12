/* los elementos del html se pueden ubicar por Id O por Clase.
este es por id
const navegacion = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
    
este es por clase                              */
const navegacion = document.querySelector(".menuPrincipal");
const abrir = document.querySelector(".abrirMenu");
const cerrar = document.querySelector(".cerrarMenu");

abrir.addEventListener("click", () =>{
    navegacion.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
navegacion.classList.remove("visible");
})