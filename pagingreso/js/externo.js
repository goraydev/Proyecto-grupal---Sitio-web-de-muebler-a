function revisar(){
    var nom=document.getElementById('nombre');
    var cor=document.getElementById('correo');
    var contr1=document.getElementById('contra1');
    var contr2=document.getElementById('contra2');
    let ver=false;
    if(nom.value.length===0){
        ver=true;
        alert('por favor llene un nombre');
        //('.errores').html('prueba');
        //prueba();
        document.getElementsByClassName('errores')[0].append('Llene un nombre');
    }
    if(cor.value.length===0){
        ver=true;
        alert('por favor llene un correo');
        document.getElementsByClassName('errores')[1].append('Llene un correo');
    }
    if(contr1.value.length===0){
        ver=true;
        alert('por favor llene una contraseña');
        document.getElementsByClassName('errores')[2].append('Llene una contraseña');
    }
    else{
        if(contr1.value.toString()===contr2.value.toString()){
            alert('La funcion esta desactivada por el momento; \nintente mas tarde');
        }
        else{
            ver=true;
            document.getElementsByClassName('errores')[2].append('Las contraseñas no coinciden');
            document.getElementsByClassName('errores')[3].append('Las contraseñas no coinciden');
        }
    }
    
    if(ver===true){
        alert('Por favor revise el o los errores');
    }
}