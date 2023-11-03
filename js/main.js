/*    Haga que todos los campos de entrada sean obligatorios para completar antes de poder enviar el formulario.
    Cambie el tipo de los campos "Dirección de correo electrónico"
    y "Número de teléfono" para que el navegador aplique alguna validación más específica y adecuada a los datos que se solicitan.
    Asigne al campo "Nombre de usuario" una longitud requerida de entre 5 y 20 caracteres,
    al campo "Número de teléfono" una longitud máxima de 15 caracteres y al campo "Comentario" una longitud máxima de 200 caracteres.*/

// const formulario = document.getElementById("formulario");
// const nombre = document.getElementById("uname");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const comment = document.getElementById("comment");
//
//
// const nombreError = document.querySelector("#errorNombre span");
// const emailError = document.querySelector("#errorEmail span");
// const phoneError = document.querySelector("#errorPhone span");
// const commentError = document.querySelector("#errorComment span");
//
//
// function validaNombre() {
//   if (!nombre.validity.valid){
//     nombre.setCustomValidity("El nombre es obligatorio (5 letras)");
//     return false;
//   } else {
//     return true;
//   }
// }
//
// function extraeDominio() { //Se usa en paso 3 y paso 5.
//   let correo = email.value;
//   return correo.substring(correo.indexOf('@'));
// }
// extraeDominio();
//
//
// function validaEmail() {
//   let test = true;
//   if (email.validity.valueMissing) {
//     email.setCustomValidity("El correo es obligatorio")
//     test = false;
//   } else if (extraeDominio() != "@gmail.com"){
//     email.setCustomValidity("No es gmail");
//     test = false;
//   } else {
//     email.setCustomValidity(""); //hay que resetear el mensaje siempre
//     test = false;
//   }
//   return test;
// }

/*HAY QUE PONER formulario.setAttribute('novalidate', true);*/
//
//
// function validaPhone(){
//   let test = true;
//   if (phone.validity.valueMissing){
//     email.setCustomValidity("El teléfono es obligatorio")
//     test = false;
//   } else {
//     test = true;
//   }
//   return test;
// }
//
// function validaComment(){
//   let test = true;
//   if (comment.validity.valueMissing){
//     comment.setCustomValidity("El comentario es obligatorio")
//     test = false;
//   } else {
//     test = true;
//   }
//   return test;
// }
// // function validaFormulario(event) {
// //   let test = true; //guardamos si es valido o no y comprobamos. Si no cumple, se pone a falso
// //   // !nombre.validity.valid : comprueba requisitos html, se puede usar y obviar validaNombre
// //   // si solo es requerido para que no este vacio, validity valid es mas rapido
// //   // no hay que hacer funcion aparte
// //   if (!validaNombre()){
// //     nombreError.innerText = "El nombre no puede estar vacío";
// //     nombreError.className = "error active";
// //     test = false;
// //   } else {
// //     nombreError.className = "error";
// //     nombreError.innerText = "";
// //   }
// //
// //   if (!validaEmail()){
// //     emailError.innerText = email.validationMessage;
// //     emailError.className = "error active";
// //     test = false;
// //   } else {
// //     emailError.className = "error";
// //     emailError.innerText = ""; //limpiar error, quitar active
// //   }
// //
// //   if (!validaPhone()){
// //     phoneError.innerText = phone.validationMessage;
// //     phoneError.className = "error active";
// //     test = false;
// //   } else {
// //     phoneError.className = "error";
// //     phoneError.innerText = "";
// //   }
// //
// //   if(!validaComment()){
// //     commentError.innerText = comment.validationMessage;
// //     commentError.className = "error active";
// //     test = false;
// //   } else {
// //     commentError.className = "error";
// //     commentError.innerText = "";
// //   }
// //
// //   //DECIDIR SI SE ENVIA EL FORMULARIO
// //   if (!test){
// //     event.preventDefault(); //previene el funcionamiento por defecto del formulario
// //   }
// //
// //   return test;
// //
// // }
//
// nombre.addEventListener('blur', validaNombre);
// email.addEventListener('blur', validaEmail);
// phone.addEventListener('blur', validaPhone);
// comment.addEventListener('blur', validaComment)
// // formulario.addEventListener('submit', validaFormulario);


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const unameInput = document.getElementById("uname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const commentInput = document.getElementById("comment");
  const submitButton = document.getElementById("submitButton");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    if (unameInput.value.length < 5 || unameInput.value.length > 20) {
      document.getElementById("errorNombre").innerHTML = "El nombre de usuario debe tener entre 5 y 20 caracteres.";
      isValid = false;
    } else {
      document.getElementById("errorNombre").innerHTML = "";
    }

    if (!emailInput.checkValidity()) {
      document.getElementById("errorEmail").innerHTML = "Por favor, ingrese un correo electrónico válido.";
      isValid = false;
    } else {
      document.getElementById("errorEmail").innerHTML = "";
    }

    if (phoneInput.value.length > 15) {
      document.getElementById("errorPhone").innerHTML = "El número de teléfono no puede tener más de 15 dígitos.";
      isValid = false;
    } else {
      document.getElementById("errorPhone").innerHTML = "";
    }

    if (commentInput.value.length > 200 || commentInput.value.length < 1) {
      document.getElementById("errorComment").innerHTML = "El comentario debe tener entre 1 y 200 caracteres.";
      isValid = false;
    } else {
      document.getElementById("errorComment").innerHTML = "";
    }

    if (!isValid) {
      event.preventDefault(); // Prevent the form from being submitted
    }
  });
});
// blur: pierde el foco
// input : mientras escrib
