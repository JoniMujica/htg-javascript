'use strict';

let data1;
let data2;
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

const datainput = document.querySelector("#input-solucion");
const texto = document.querySelector('#textos');


/*
function obtenerdatos(event){

  //let texto = event.target.value;

for(let i = 0; i<)
  console.log(texto);
}*/

function recibirNombre(event) {
  event.preventDefault();
  exito.style.display = "block";
  let borrador = setTimeout(borrarmensaje , 5000);
  let creartexto = document.createElement('p');
  //debugger;
  creartexto.textContent = data1 + " : " + data2;
  texto.appendChild(creartexto);
  inputNombre.value = "";
  datainput.value = "";

}

function interceptarNombre(event) {
  //console.log(event.target.value);
  if(event.target.value.length<=4 || event.target.value.length>= 50)
  {
    errores.style.display = "block";
  }else{
    errores.style.display = "none";
  }
  data1 = event.target.value;
  console.log(data1)
  //console.log(event.target.value);*/
}

function borrarmensaje(){
  exito.style.display = "none";
}

function obtenermensaje(event){
  data2 = event.target.value;
  console.log(data2)
}



formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
datainput.addEventListener('input', obtenermensaje);