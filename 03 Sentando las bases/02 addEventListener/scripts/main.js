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
const exito = document.querySelector(".exito");

const datainput = document.querySelector("#input-solucion")


/*
function obtenerdatos(event){

  //let texto = event.target.value;

for(let i = 0; i<)
  console.log(texto);
}*/

function recibirNombre(event) {
  event.preventDefault();
  exito.style.display = "block";
  let borrador = setTimeout(borrarmensaje , 5000)
}

function interceptarNombre(event) {
  //console.log(event.target.value);
  if(event.target.value.length<=4 || event.target.value.length>= 50)
  {
    errores.style.display = "block";
  }else{
    errores.style.display = "none";
  }
  //console.log(event.target.value);*/
}


function borrarmensaje(){
  exito.style.display = "none";
}


formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
datainput.addEventListener('input', obtenerdatos);