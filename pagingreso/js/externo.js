var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    contra1 = formulario.contra1,
    contra2 = formulario.contra2;
var errores = document.getElementById('errores');
var errores1 = document.getElementById('errores1');
var errores2 = document.getElementById('errores2');
var errores3 = document.getElementById('errores3');


function ValidarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        errores.innerHTML = 'Complete este campo'
        e.preventDefault();
    }
}

function ValidarCorreo(e) {
    if (correo.value == '' || correo == null) {
        errores1.innerHTML = 'Complete este campo'
        e.preventDefault();
    }
}

function ValidarPasswords(e) {
    if (contra1.value == "" || contra1.value == null) {
        errores2.innerHTML = 'Obligatorio llenar este campo'
        e.preventDefault();
    } else if (contra2.value == "" || contra2.value == null) {
        errores3.innerHTML = 'Obligatorio llenar este campo'
        e.preventDefault();
    } else {
        if (contra1.value != contra2.value) {
            errores3.innerHTML = 'Contraseñas diferentes, Intente de nuevo'
            contra1.value = '';
            contra2.value = '';
            e.preventDefault();

        } else {
            alert('Excelente');
        }
    }
}

function ValidandoDatos(e) {
    errores.innerHTML = '';
    errores1.innerHTML = '';
    errores2.innerHTML = '';
    errores3.innerHTML = '';
    ValidarNombre(e);
    ValidarCorreo(e);
    ValidarPasswords(e);
}


formulario.addEventListener('submit', ValidandoDatos);