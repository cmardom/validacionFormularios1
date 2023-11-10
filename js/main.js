

document.addEventListener("DOMContentLoaded", function () {

  // const test = document.getElementById('test');
  //
  // function b(){
  //   console.log('bbbb');
  //   return 'bb';
  // }
  //
  // function a(argu){
  //   console.log('running a():');
  //   console.log('argu value:', argu);
  //   if(typeof argu === 'function') {
  //     const returnValue = argu();
  //     console.log(returnValue);
  //   }
  //   console.log('---------------------------------');
  // }
  //
  // a(b); // devuelve el contenido de la funcion antes de ejecutarse
  // a(b()); // ejecuta b antes de llamar a a()


  const formulario   = document.getElementById("formulario");
  const nombre       = document.getElementById("uname");
  const email        = document.getElementById("email");
  const phone        = document.getElementById("phone");
  const comment      = document.getElementById("comment");

  const nombreError  = document.querySelector("#errorNombre span");
  const emailError   = document.querySelector("#errorEmail span");
  const phoneError   = document.querySelector("#errorPhone span");
  const commentError = document.querySelector("#errorComment span");


  formulario.setAttribute('novalidate', true); //novalidate envia siempre

  formulario.addEventListener("submit", function (event) {
    let isValid = true;


    if(!processValidity(nombre, nombreError, validaNombre())){ isValid = false };
    if(!processValidity(email, emailError, validaEmail())){ isValid = false };
    if(!processValidity(phone, phoneError, validaPhone())){ isValid = false };
    if(!processValidity(comment, commentError, validaComment())){ isValid = false };

    if (!isValid) {
      event.preventDefault(); // si esta mal, no se envia
    }
  });

  function processValidity(element, errorElement, validationCallbackResult){
    if(validationCallbackResult){
      errorElement.classList.remove('active');
    } else {
      errorElement.classList.add('active');
    }

    errorElement.innerText = element.validationMessage;

    return validationCallbackResult;
  }

  function validaNombre() {
    nombre.setCustomValidity('');
    if (!nombre.validity.valid){
      nombre.setCustomValidity("El nombre tiene que tener una letra, un punto y tres letras o números");
      return false;
    }
    return true;
  }
  function extraeDominio() {
    let correo = email.value;
    return correo.substring(correo.indexOf('@'));
  }
  extraeDominio();
  function validaEmail() {
    email.setCustomValidity('');
    if (email.validity.valueMissing) {
      email.setCustomValidity("El correo es obligatorio")
      return false;
    } else if (extraeDominio() !== "@vegasoft.com"){
      email.setCustomValidity("No es vegasoft.com");
      return false;
    }
    return true;
  }

  function validaPhone(){
    phone.setCustomValidity('');
    let phoneValue = phone.value;
    const phonePattern = /^(\d{10}|\d{3}[ -.]?\d{3}[ -.]?\d{4})?$/;
    // if (phone.validity.valueMissing){ // para chequear que está vacío: no hace falta, no es required
    //   phone.setCustomValidity("El teléfono es obligatorio")
    //   // return false;
    //   return true;
    // }

    if (!phonePattern.test(phoneValue)) {
      phone.setCustomValidity("El teléfono no cumple con el formato correcto: sin separaciones, o separados 3-3-4");
      return false;
    }
    return true;
  }
  function validaComment() {
    comment.setCustomValidity('');
    if (comment.validity.valueMissing) {
      comment.setCustomValidity("El comentario es obligatorio")
      return false;
    }
    return true;
  }
});
// blur: pierde el foco
// input : mientras escribe
