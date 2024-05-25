confirm("Bienvenido a JavaScript");

// JS Para la comprobación de datos del formulario de entrada

 // Capturar el valor del input nombre
const nombreInput = document.getElementById("name");
//nombreInput.value = "Juan José";
console.log(nombreInput.value);

// Capturar el valor del input email
const emailInput = document.getElementById("email");
//emailInput.value = "yo@ejemplo.com";
console.log(emailInput.value);

// Capturar el valor del select edad
const edadInput = document.getElementById("edad");
console.log(edadInput.options[edadInput.selectedIndex].text);

// Capturar el valor del select plataforma
const plataformaInput = document.getElementById("plataforma");
console.log(plataformaInput.options[plataformaInput.selectedIndex].text);

// Capturar el valor del input videojuego
const videojuegoInput = document.getElementById("videojuego");
//videojuegoInput.value = "Half Life";
console.log(videojuegoInput.value);

// Función evento onclick
function nombre() {
    console.log("Vamos introduce tu nombre, no tenemos todo el día.")
}

// Capturar el formulario
const formulario = document.getElementById("formulario");

// Capturar el error
const error = document.getElementById("error");

// Función comprobar formulario
function comprobarFormulario(event) {
    // Comprobar cambios
    if(nombreInput.value.match(/(?<!\S)[0-9]/))
        {
            console.log("No has escrito tu nombre");
            nombreInput.focus();
            event.preventDefault();
            error.innerText = "El nombre no puede empezar por un número"
            return false;
        }
        else if(emailInput.value == 0){
            console.log("No has escrito el email");
            emailInput.focus();
            event.preventDefault();
            error.innerText = "El email no puede estar vacío"
            return false;
        }
        else if(videojuegoInput.value == 0){
            console.log("No has escrito tu videojuego favorito");
            videojuegoInput.focus();
            event.preventDefault();
            error.innerText = "El videojuego no puede estar vacío es lo más importante"
            return false;
        }
        else if(edadInput.value == "0"){
            console.log("La edad hay que ponerla");
            edadInput.focus();
            event.preventDefault();
            error.innerText = "Pon la edad anda"
            return false;
        }
        else if(plataformaInput.value == "0"){
            console.log("No se ha seleccionado ninguna plataforma");
            plataformaInput.focus();
            event.preventDefault();
            error.innerText = "La plataforma por favor"
            return false;
        }
        return true;
}

// Inicio de carga de eventos
formulario.addEventListener('submit', comprobarFormulario);