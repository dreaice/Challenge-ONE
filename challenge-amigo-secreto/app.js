// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variable que almacenara los nombres
let amigosAgregados = [];
console.log(amigosAgregados);

function agregarAmigo(){
    //Obtener el nombre ingresado por el usuario
    const capturaDelNombre = document.getElementById("amigo");
    //Valida que el campo no este vacio al aniadirlo
    const validacionCaptura = capturaDelNombre.value.trim();
    if(validacionCaptura === ""){
        alert("Por favor, inserte un nombre");
        //Actualizar el array si el valor es valido
    } else {
        amigosAgregados.push(validacionCaptura); 
    }
    //Limpiar el campo de entrada
    capturaDelNombre.value = "";
    console.log(amigosAgregados);
}

function enlistarAmigos(){
    //Seleccionar lista donde se mostraran los amigos
    const mostrarLista = document.getElementById("listaAmigos");
    //Limpiar lista
    
}

let u = 1;



function limpiarCampo (){
    document.getElementById('amigo').value = '';
}
