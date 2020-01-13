'use strict';

/*const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
}

function interceptarNombre(event) {
  console.log(event.target.value);
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre); */

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const errores = document.querySelector('.error');

function recibirNombre(event) {
  console.log("El formulario se envio correctamente")
  event.preventDefault();
  console.log(event);
}

function interceptarNombre(event) {
  //console.log(event.target.value);
  if(event.target.value.length<=4 || event.target.value.length>= 50)
  {
    errores.style.display = "block";
    console.log("ERROR: El nombre debe ser entre 5 y 50 caracteres")
  }else{
    errores.style.display = "none";
  }
  //console.log(event.target.value);*/
}


  
formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);