$(document).ready(function () {

    $('.carousel').carousel({
        interval: 2000
      })
      

  window.sr = ScrollReveal();

  sr.reveal('#about', {
      duration: 2000,
      origin: 'top',
      distance: '300px'
  });
  sr.reveal('#top-left', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
  });
  sr.reveal('#top-right', {
      duration: 2000,
      origin: 'right',
      distance: '300px'
  });
  sr.reveal('#bottom-left', {
      duration: 2000,
      origin: 'left',
      distance: '300px'
  });
  sr.reveal('#bottom-right', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
  });

//   sr.reveal('#formularioContenedor', {
//     duration: 2000,
//     origin: 'top',
//     distance: '300px'
// });

// sr.reveal('#informacionContacto', {
//     duration: 2000,
//     origin: 'right',
//     distance: '300px'
//     });

    
});


$('.alert').hide()


$('#btn').click(function(){
    $('.alert').show()
})

//validar nombre 
var nombre = document.getElementById("nombre");
nombre.addEventListener("keyup", function(){
var letters = /^[A-Za-z]+$/;
Queseanletras=nombre.value.match(letters);
if(Queseanletras){
    if ((nombre.value).length >= 5 && (nombre.value).length <= 30) {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
        btn.removeAttribute("disabled",true);
        
    }else {
        nombre.classList.remove('is-valid');
        nombre.classList.add('is-invalid');
        btn.setAttribute("disabled",true);
        // telefono.after(" ingrese numero valido");
    }
}else{
    nombre.classList.remove('is-valid');
    nombre.classList.add('is-invalid');
    btn.setAttribute("disabled",true);
}
});
//validar email
var email = document.getElementById("email");
email.addEventListener("keyup", function(){
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (!regex.test(email.value)) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        btn.setAttribute("disabled",true);
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        btn.removeAttribute("disabled",true);
    }

});
var btn= document.getElementById("btn")

//validar textarea
var contacto = document.getElementById("contacto");
contacto.addEventListener("keyup", function(){
    if(contacto.value==""){
        contacto.classList.remove('is-valid');
        contacto.classList.add('is-invalid');
        btn.setAttribute("disabled",true);
      
    } else {
        contacto.classList.remove('is-invalid');
        contacto.classList.add('is-valid');
        btn.removeAttribute("disabled")
    }
});
// Validar boton!
var btn =document.getElementById("btn");
btn.addEventListener("click", function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tus Datos fueron Enviados',
        showConfirmButton: false,
        timer: 1500
      })
})
