let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');
let mensajeFortaleza = document.getElementById('mensaje-fortaleza');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789@#$%&*!';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; // Detenemos la ejecución si no cumple con la condición
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }
    
    contrasena.value = password;

    // Llamamos a la función para evaluar la fortaleza de la contraseña
    evaluarFortaleza(password);
}

// Función para limpiar los campos
function limpiar() {
    cantidad.value = '';  // Limpiar el campo de cantidad
    contrasena.value = ''; // Limpiar el campo de contraseña
    mensajeFortaleza.innerText = ''; // Limpiar el mensaje de fortaleza
}

// Función para evaluar la fortaleza de la contraseña
function evaluarFortaleza(password) {
    const regexFuerte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!]).{8,}$/;

    if (regexFuerte.test(password)) {
        mensajeFortaleza.innerText = 'Contraseña fuerte';
        mensajeFortaleza.style.color = 'green'; // Mostrar en verde
    } else {
        mensajeFortaleza.innerText = 'Contraseña débil';
        mensajeFortaleza.style.color = 'red'; // Mostrar en rojo
    }
}

// Asociamos el evento de clic a los botones
botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);

