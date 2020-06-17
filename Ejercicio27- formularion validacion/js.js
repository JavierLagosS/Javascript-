function procesarFormulario() {
    var nom = document.getElementById("nombre");
    var ape = document.getElementById("apellido");
    var telefono = document.getElementById("telefono");
    var direccion = document.getElementById("direccion");
    var ciudad = document.getElementById("ciudad");

    // div que contiene label y input
    var datosFono = document.getElementById("datosFono");

    if ((direccion.value).length >= 100) {
        direccion.after("la direccion tiene que ser mas corta")
    }
    if ((ciudad.value).length >= 30) {
        ciudad.after(" la ciudad tiene que ser mas corta en letras")
    }

    //validar nombre y apellidos
    var letters = /^[A-Za-z]+$/;
    nom.value.match(letters)
    if (nom.value.match(letters)) {

    } else {
        nom.after(" nombre incorrecto");
    }
    ape.value.match(letters)
    if (ape.value.match(letters)) {

    } else {
        ape.after(" apellido incorrecto");
    }

}
// Generamos las validaciones en vivo-

                        //validamos el nombre
var nombre = document.getElementById("nombre");
nombre.addEventListener("keyup", function(){
var letters = /^[A-Za-z]+$/;
Queseanletras=nombre.value.match(letters);
if(Queseanletras){
    if ((nombre.value).length >= 5 && (nombre.value).length <= 30) {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
    }else {
        // se agrega mensaje al div
        mensajeError.textContent = "verificar número";
        datosFono.appendChild(mensajeError);
        nombre.classList.remove('is-valid');
        nombre.classList.add('is-invalid');
        // telefono.after(" ingrese numero valido");
    }
}else{
    nombre.classList.remove('is-valid');
    nombre.classList.add('is-invalid');
}
});

                        //validamos el apellido
 var apellido = document.getElementById("apellido");
 apellido.addEventListener("keyup", function(){
 var letters = /^[A-Za-z]+$/;
 Queseanletras=apellido.value.match(letters);
 if(Queseanletras){
     if ((apellido.value).length <= 50) {
         apellido.classList.remove('is-invalid');
         apellido.classList.add('is-valid');
     }else {
         apellido.classList.remove('is-valid');
         apellido.classList.add('is-invalid');
         // telefono.after(" ingrese numero valido");
     }
 }else{
     apellido.classList.remove('is-valid');
     apellido.classList.add('is-invalid');
 }
 });




                                // validamos el telefono
// se genera div para mensaje error
var telefono = document.getElementById("telefono");


telefono.addEventListener("keyup", function () {
 var numeros = /^([0-9])+$/;
var queSeanNumeros=telefono.value.match(numeros);
    if(queSeanNumeros){
        if ((telefono.value).length >= 6 && (telefono.value).length <= 11) {
                telefono.classList.remove('is-invalid');
                telefono.classList.add('is-valid');
        }else{
        // se agrega mensaje al div
        mensajeError.textContent = "verificar número";
        datosFono.appendChild(mensajeError);
        telefono.classList.remove('is-valid');
        telefono.classList.add('is-invalid');
        // telefono.after(" ingrese numero valido");
    }}else{
        telefono.classList.remove('is-valid');
        telefono.classList.add('is-invalid');
    }
});






var fecha= document.getElementById("fecha");

fecha.addEventListener("keydown", function(){
    console.log(fecha.value)
    var RegExPattern = /^\d{2,4}\/\d{1,2}\/\d{1,2}$/;
    console.log(RegExPattern)
    if ((fecha.value.match(RegExPattern)) && (fecha!='')) {
         console.log("yes") 
        
    } else {
        console.log("no")
    }
});
var mensajeError = document.createElement("div");
// se agrega clase
mensajeError.setAttribute("class", "invalid-feedback");
// se agrega id
mensajeError.setAttribute("id", "mensajeErrorId");

/*
function validarFormatoFecha(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((campo.match(RegExPattern)) && (campo!='')) {
          return true;
    } else {
          return false;
    }
}*/