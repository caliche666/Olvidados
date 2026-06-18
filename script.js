function calcularVida() {

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value;
    let alcohol = document.getElementById("alcohol").value;
    let alimentacion = document.getElementById("alimentacion").value;
    let ejercicio = document.getElementById("ejercicio").value;
    let sueño = document.getElementById("sueño").value;
    let fumar = document.getElementById("fumar").value;
    let condicion = document.getElementById("condicion").value;
    let estres = document.getElementById("estres").value;
    let cansancio = document.getElementById("cansancio").value;
    let dolor = document.getElementById("dolor").value;
    let triste = document.getElementById("triste").value;
    let escuchado = document.getElementById("escuchado").value;
    let problema = document.getElementById("problema").value;
    let acompañado = document.getElementById("acompañado").value;
    let personas = document.getElementById("personas").value;
    let personas2 = document.getElementById("personas2").value;
    let solo = document.getElementById("solo").value;
    let confiar = document.getElementById("confiar").value;
    let desaparecer = document.getElementById("desaparecer").value;
    let ayuda = document.getElementById("ayuda").value;
    let carga = document.getElementById("carga").value;
    let economia = document.getElementById("economia").value;
    let descansar = document.getElementById("descansar").value;
    
   


    let expectativa;
    
    
    // genero
    if (genero === "hombre") {
        expectativa = 78;
    }if (genero === "mujer") {
        expectativa = 80;
        } else {
        expectativa =79;
    }


    // Alcohol
    if (alcohol === "1") {
        expectativa -= 1;
    }
    if (alcohol === "2") {
        expectativa -= 3;
    }
    if (alcohol === "3") {
        expectativa -= 1;
    }

    // Alimentacion
    if (alimentacion === "1") {
        expectativa -= 2;
    }
    if (alimentacion === "2") {
        expectativa -= 5;
    }
    if (alimentacion === "3") {
        expectativa -= 8;
    }

    // Ejercicio
    if (ejercicio === "1") {
        expectativa -= 1;
    }
    if (ejercicio === "2") {
        expectativa -= 3;
    }
    if (ejercicio === "3") {
        expectativa -= 5;
    }

    // Sueño
    if (sueño === "1") {
        expectativa -= 1;
    }
    if (sueño === "2") {
        expectativa -= 3;
    }
    if (sueño === "3") {
        expectativa -= 4;
    }

    // Fumar
    if (fumar === "1") {
        expectativa -= 2;
    }
    if (fumar === "2") {
        expectativa -= 5;
    }
    if (fumar === "3") {
        expectativa -= 8;
    }

    // Condición
    if (condicion === "1") {
        expectativa -= 2;
    }
    if (condicion === "2") {
        expectativa -= 4;
    }
    if (condicion === "3") {
        expectativa -= 6;
    }

    // Estrés
    if (estres === "1") {
        expectativa -= 1;
    }
    if (estres === "2") {
        expectativa -= 3;
    }
    if (estres === "3") {
        expectativa -= 5;
    }

    // Cansancio
    if (cansancio === "1") {
        expectativa -= 1;
    }
    if (cansancio === "2") {
        expectativa -= 3;
    }
    if (cansancio === "3") {
        expectativa -= 5;
    }

    // Dolor
    if (dolor === "1") {
        expectativa -= 1;
    }
    if (dolor === "2") {
        expectativa -= 3;
    }
    if (dolor === "3") {
        expectativa -= 5;
    }

    // Triste
    if ( triste === "1") {
        expectativa -= 1;
    }
    if (triste === "2") {
        expectativa -= 3;
    }
    if (triste === "3") {
        expectativa -= 5;
    }

    // Escuchado
    if (escuchado === "1") {
        expectativa -= 1;
    }
    if (escuchado === "2") {
        expectativa -= 3;
    }
    if (escuchado === "3") {
        expectativa -= 5;
    }

    // Problema
    if (problema === "1") {
        expectativa -= 1;
    }
    if (problema === "2") {
        expectativa -= 3;
    }
    if (problema === "3") {
        expectativa -= 5;
    }

    // Acompañado
    if (acompañado === "1") {
        expectativa -= 1;
    }
    if (acompañado === "2") {
        expectativa -= 3;
    }
    if (acompañado === "3") {
        expectativa -= 5;
    }

    // Personas
    if (personas === "1") {
        expectativa -= 1;
    }
    if (personas === "2") {
        expectativa -= 3;
    }
    if (personas === "3") {
        expectativa -= 5;
    }

    // Personas2
    if (personas2 === "1") {
        expectativa -= 1;
    }
    if (personas2 === "2") {
        expectativa -= 3;
    }
    if (personas2 === "3") {
        expectativa -= 5;
    }

    // Solo
    if (solo === "1") {
        expectativa -= 1;
    }
    if (solo === "2") {
        expectativa -= 3;
    }
    if (solo === "3") {
        expectativa -= 5;
    }

    // Confiar
    if (confiar === "1") {
        expectativa -= 1;
    }
    if (confiar === "2") {
        expectativa -= 2;
    }
    if (confiar === "3") {
        expectativa -= 5;
    }

    // Desaparecer
    if (desaparecer === "1") {
        expectativa -= 1;
    }
    if (desaparecer === "2") {
        expectativa -= 3;
    }
    if (desaparecer === "3") {
        expectativa -= 5;
    }

    // Ayuda
    if (ayuda === "1") {
        expectativa -= 1;
    }
    if (ayuda === "2") {
        expectativa -= 3;
    }
    if (ayuda === "3") {
        expectativa -= 5;
    }

    // Carga
    if (carga === "1") {
        expectativa -= 1;
    }
    if (carga === "2") {
        expectativa -= 3;
    }
    if (carga === "3") {
        expectativa -= 5;
    }

    // Economia
    if (economia === "1") {
        expectativa -= 1;
    }
    if (economia === "2") {
        expectativa -= 3;
    }
    if (economia === "3") {
        expectativa -= 5;
    }

    // Descansar
    if (descansar === "1") {
        expectativa -= 1;
    }
    if (descansar === "2") {
        expectativa -= 3;
    }
    if (descansar === "3") {
        expectativa -= 5;
    }

     

    let añosRestantes = expectativa - edad;

    if (añosRestantes < 0) {
        añosRestantes = 0;
    }

    document.getElementById("resultado").innerHTML =
    "Hola, " + nombre + 
    " Tu expectativa estimada es de " + expectativa + " años " +
    "Te quedarían aproximadamente " + añosRestantes + " años.";

    

}

let puntaje = 0;

    function calcularPuntaje() {

    let vejez = parseInt(document.getElementById("vejez").value);
    let mayor = parseInt(document.getElementById("mayor").value);
    let interactuar = parseInt(document.getElementById("interactuar").value);
    let adultos = parseInt(document.getElementById("adultos").value);
    let imaginar = parseInt(document.getElementById("imaginar").value);
    let futuro = parseInt(document.getElementById("futuro").value);

    puntaje = vejez + mayor + interactuar + adultos + imaginar + futuro;

    let mensaje = "";
    let color = "";

    if (puntaje <= 9) {
        mensaje = "Tus respuestas y tu puntaje encajan con el perfil 1.";
        color = "green";
    } else if (puntaje <= 14) {
        mensaje = "Tus respuestas y tu puntaje encajan con el perfil 2.";
        color = "yellow";
    } else if (puntaje <= 19) {
        mensaje = "Tus respuestas y tu puntaje encajan con el perfil 3.";
        color = "red";
    }else{
        mensaje = "Tus respuestas y tu puntaje encajan con el perfil 4.";
        color = "black";
    }

    document.getElementById("resultado1").innerHTML =
        `Tu puntaje es ${puntaje}/24. ${mensaje}`;

    document.getElementById("resultado1").style.color = color;
}

    function calcularTodo() {

    calcularVida();
    calcularPuntaje();
    
    let clase = "";

    if (puntaje <= 9) {
        clase ="btn btn-success";
    } else if (puntaje <= 14) {
        clase ="btn btn-warning";
    } else if (puntaje <= 19) {
        clase ="btn btn-danger";
    }else{
        clase ="btn btn-dark";
    }

    document.getElementById("botonNuevo").style.display = "block";
    document.getElementById("botonNuevo").className = clase;

    const resultado = document.getElementById("resultadoOculto");

    resultado.style.display = "block";

    setTimeout(() => {
        resultado.style.opacity = "1";
       }, 10);

    }
    
function redirigir() {
    
    let puntaje1 = puntaje; // la variable donde guardaste el puntaje

    if (puntaje1 <= 9) {
        window.location.href = "perfil1.html";
    } else if (puntaje1 <= 14) {
        window.location.href = "perfil2.html";
    } else if (puntaje1 <= 19) {
        window.location.href = "perfil3.html";
    }else{
        window.location.href = "perfil4.html";
    }
}

function revelar(){
    let seccion = document.getElementById("archivoMasivo");

    if (seccion.style.display === "none" || seccion.style.display === "") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}

const btnPublicar = document.getElementById("btnPublicar");
const lista = document.getElementById("listaUltimasPalabras");

btnPublicar.addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const palabras = document.getElementById("palabras").value;

    if(nombre === "" || edad === "" || palabras === ""){
        alert("Completa todos los campos.");
        return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-palabra");

    tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p>${palabras}</p>
    `;

    lista.prepend(tarjeta);

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("palabras").value = "";
});