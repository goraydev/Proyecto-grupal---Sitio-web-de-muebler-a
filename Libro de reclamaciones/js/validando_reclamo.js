var form_reclamo = document.getElementById('registrar-form'),
    nombres = form_reclamo.nombres,
    apellidos = form_reclamo.ape,
    dni = form_reclamo.nrodocumento,
    email = form_reclamo.email,
    tel_cel = form_reclamo.tel,
    asunto = form_reclamo.asunto;
var errores = document.getElementById('errores');


function ValidarNombres(e) {
    if (nombres.value == '' || nombres.value == null) {
        errores.innerHTML += '<li>Campo Nombres vacío</li>';
        e.preventDefault();
    }
}

function ValidarApellidos(e){
    if (apellidos.value == '' || apellidos.value == null) {
        errores.innerHTML += '<li>Campo Apellidos vacío</li>';
        e.preventDefault();
    }
}

function ValidarDNI(e){
    if (dni.value == '' || dni.value == null) {
        errores.innerHTML += '<li>Campo DNI vacío</li>';
        e.preventDefault();
    }
}

function ValidarEmail(e){
    if (email.value == '' || email.value == null) {
        errores.innerHTML += '<li>Campo Email vacío</li>';
        e.preventDefault();
    }
}

function ValidarTel_Cel(e){
    if (tel_cel.value == '' || tel_cel.value == null) {
        errores.innerHTML += '<li>Campo  Teléfono vacío</li>';
        e.preventDefault();
    }

}
function ValidarAsunto(e){
    if (asunto.value == '' || asunto.value == null) {
        errores.innerHTML += '<li>Escriba un asunto</li>';
        e.preventDefault();
    }
}



function ValidandoDatos(e) {
    errores.innerHTML = '';
    ValidarNombres(e);
    ValidarApellidos(e);
    ValidarDNI(e);
    ValidarEmail(e);
    ValidarTel_Cel(e);
    ValidarAsunto(e);
}

form_reclamo.addEventListener('submit', ValidandoDatos);