//console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')

        



const comentarios = document.querySelector("#fav")
/*for(let i = 0; i< comentarios.length; i++){
    //comentarios[1]
    comentarios[2].style.background = "red";
} */
comentarios.style.background = "red";

/*
const comentarios = document.querySelectorAll("te")
for(let i = 0; i< comentarios.length; i++){
    //comentarios[1]
    if(limite[i]<50){

    }
} */

let linea = document.querySelectorAll("hr");
for(let i = 0; i< linea.length; i++){
    //comentarios[1]
    linea[i].style.borderColor = "green";
} 


/*
const limite = document.querySelectorAll(".comment--text");
for(let i = 0; i<limite.length;i++)
{
*/



/*
const comentarios = document.querySelectorAll(".comment")
for(let i = 0; i< comentarios.length; i++){
    //comentarios[1]
    comentarios[i].style.background = "red";
} 
*/


//<-----------------------ejercicio 3------------------- arreglar-->

const coments = document.querySelectorAll(".comment")
const maximoc = document.querySelectorAll(".comment--text")


for(let i = 0;i<maximoc.length;i++){
    if(maximoc[i].textContent.length>=50){
        maximoc[i].style.display = "none";
    }
} 

//<-----------------------------ejercicio 4--- ayudado por jorgen--------------->>
let mayor;
let maximo = 0;
for(let i = 0;i<maximoc.length;i++){
    
    
    if(maximoc[i].textContent.length>maximo){
        maximo = maximoc[i].textContent.length;
        mayor = maximoc[i];
        console.dir(mayor);
    }
   
}
mayor.style.display = "none";