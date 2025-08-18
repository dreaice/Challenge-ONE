// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variable que almacenara los nombres
let amigosAgregados = [];

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
        //Ejecutar la función actualizar la lista
        enlistarAmigos();
        //Limpiar el campo de entrada
        capturaDelNombre.value = ""; 
        
    }

}

function enlistarAmigos(){
    //Seleccionar lista donde se mostraran los amigos
    const mostrarLista = document.getElementById("listaAmigos");
    //Limpiar lista para que no haya duplicados
    mostrarLista.innerHTML = "";
    //Iteración sobre el array 
    for (let i = 0; i < amigosAgregados.length; i++){
       //Crear nuevo elemento para cada nombre
        const actualizarLista = document.createElement("li");
        //Asignar el texto del eelemento li
        actualizarLista.textContent = amigosAgregados[i];
        //Agregar el li a la lista ul
        mostrarLista.appendChild(actualizarLista);
    }
    
}

function sortearAmigo(){
    //Comprobar que el array no este vacio
    if (amigosAgregados.length === 0){
        console.log('No hay nombres agregados para sortear');
        return;
    }
    //Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()* amigosAgregados.length);
    //Obtener el nombre sorteado
    const amigoSorteado = amigosAgregados[indiceAleatorio];
    //Mostrar el resultado
    const mostrarSorteo = document.getElementById("resultado");
    mostrarSorteo.innerHTML = `¡El amigo sorteado es ${amigoSorteado}!`

}

// Escucha el evento keypress en el input
document.getElementById("amigo").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
