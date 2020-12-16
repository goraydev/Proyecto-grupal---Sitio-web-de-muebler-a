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
            alert('Registro exitoso');
            
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

function CompCaracNombre(e){
    var formulario = document.getElementById('formulario');
    var caracter = formulario.nombre.value;

    let numero ='1' ;
    var anterior="";
    for (const key in caracter) {
        console.log(caracter[key]);
        if (caracter[key] == '0' || caracter[key] == '1' || caracter[key] == '2' || caracter[key] == '3' || caracter[key] == '4' || caracter[key] == '0' || caracter[key] == '1' || caracter[key] == '2' || caracter[key] == '3' || caracter[key] == '4') {
            numero='0';
        }
	if(numero === '0'){
		alert('Por favor no ingrese números en este campo');
	} else {
		anterior+=caracter[key];
	}
    }

    formulario.nombre.value=anterior;
    e.preventDefault();
}

function volver(){
    history.go(-1);
}

function mincarpassword(){
	 var formulario = document.getElementById('formulario');
    var caracter = formulario.contra1.value;
console.log(caracter.length);
	if(caracter.length<10){
		errores2.style.display= 'block';
		errores2.innerHTML='Las contraseñas deben de tener como minimo 10 caracteres';	
	} else {
		errores2.style.display= 'none';
	}

}
formulario.addEventListener('submit', ValidandoDatos);
formulario.addEventListener('submit', CompCaracNombre);
formulario.addEventListener('submit', volver);