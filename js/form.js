let nombre = "",
    email = "",
    edad = 0,
    ocupacion = "";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });


function validarEdad(){
    let edad = document.getElementById('edad').value;
    let mensaje = document.getElementById('mensajeValidacion');
    if ( edad < 18 ){
        mensaje.innerHTML = " * <span>Debe ser mayor de 18 años para inscribirse</span> ";
    }else{
        mensaje.innerHTML = "";
    }
}

function validarNombre(){
    let longitud = document.getElementById('fullname').value.length;
    let mensaje  = document.getElementById('validacionNombre');

    
    if ( longitud === 0 ){
        mensaje.innerHTML = " * <span>Debe ingresar nombre completo</span> ";
    }else{
        mensaje.innerHTML = "";
    }
}
function opcion(value){
    
    let opcion = value;
    
    switch (opcion) {
        
        case "Trabajador":
            document.getElementById('masOpciones').innerHTML = "<div class='form-group'><label for ='relacion'>Tipo de relacion</label><select class='form-control' name= 'relacion' ><option>Monotributista</option><option>En relacion de dependencia</option><option>Trabajador informal</option></select></div>";
            break;
        case "Estudiante":
            let relacion = document.getElementById('masOpciones');
                relacion.innerHTML = '<div class="form-group"><label for="relacion">Tipo de grado</label><select class="form-control" name="relacion" ><option>Secundario</option><option>Terciario</option><option>Universitario</option></select></div>';
            break;
        default:
            break;
    }

}
function captura(){
        nombre    = document.getElementById('fullname').value;
        email     = document.getElementById('mail').value;
        edad      = document.getElementById('edad').value;
        ocupacion = document.getElementById('ocupacion').value;
        console.log(nombre,email,edad,ocupacion);
       
        
};
function validarFormulario(evento) {
    evento.preventDefault();
    let nomb = document.getElementById('fullname').value;
    let ed = document.getElementById('edad').value;

    if (nomb.length == 0 && ed < 18 ) {

        let mensaje0  = document.getElementById('validacionNombre');
        let mensaje1 = document.getElementById('mensajeValidacion');
        mensaje0.innerHTML = " * <span>Debe ingresar nombre completo</span> ";
        mensaje1.innerHTML = " * <span>Ingrese edad (18+)</span>";
        
        return;

    }else if (nomb.length == 0) {
        
        let mensaje  = document.getElementById('validacionNombre');
        mensaje.innerHTML = " * <span>Debe ingresar nombre completo</span> ";
        return;

    }else if (ed < 18) {
        
        let mensaje = document.getElementById('mensajeValidacion');
        mensaje.innerHTML = " * <span>Ingrese edad (18+)</span>";
        return;
    } else{
        setTimeout(() => {
            let mensaje  = document.getElementById('formulario');
            mensaje.innerHTML = '<div class="row col-12  bg-white  text-center"><div class=" col-sm-12"><h2 class="col-12 ">Formulario enviado</h2><div class="col-12"><i class="far fa-check-circle fa-10x text-success pb-2"></i></div><p class="col-12 ">Gracias!</p></div></div>';
        },  300);
        
        
        /*this.submit();
        mensaje.reset();*/
        
        
        

        
        

    }
    
    
    
}