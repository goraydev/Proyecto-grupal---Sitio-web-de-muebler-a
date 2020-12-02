function revisar(){
    alert('comenzando la revision');
    var nom=document.getElementById('nombre').value;
    var cor=document.getElementById('correo').value;
    var contr1=document.getElementById('contra1').value;
    var contr2=document.getElementById('contra2').value;
    boolean ver=false;
    if(nom.value.length===0){
        ver=true;
        alert('por favor llene un nombre');
        document.getElementsByClassName('errores')[0].value='Llene un nombre';
    }
    if(cor.value.length===0){
        ver=true;
        alert('por favor llene un correo');
        document.getElementsByClassName('errores')[1].value='Llene un correo';
    }
    if(contr1.value.length===0){
        ver=true;
        alert('por favor llene una contraseña');
        document.getElementsByClassName('errores')[2].value='Llene una contraseña';
    }
    else{
        if(contr1.toString()===contr2.toString()){
            alert('La funcion esta desactivada por el momento; \nintente mas tarde');
        }
        else{
            ver=true;
            document.getElementsByClassName('errores')[2].value='Las contraseñas no coinciden';
            document.getElementsByClassName('errores')[3].value='Las contraseñas no coinciden';
        }
    }
    
    if(ver===true){
        alert('Por favor revise el o los errores');
    }
}