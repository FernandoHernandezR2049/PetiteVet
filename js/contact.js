import { validarNombre, validarTel, validarMail } from "./inputValidations.js";
/* Variables del formulario */
let txtNombre = document.getElementById("Name");
// console.log(txtNombre);
let txtMail = document.getElementById("email");
let txtTel = document.getElementById("Tel");
let agregar = document.getElementById("btnAgregar");

/**Expresiones regulares para la validación de nombre  */

/* AQUI VAN TODAS LAS FUNCIONES AMIKOS*/

/**Función campos vacíos */
function isEmpty() {
  if (txtMail.value.length == 0) {
    return true;
  }
} //funcion isEmpty

/* EVENT LISTENER */
agregar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    !validarNombre(txtNombre) ||
    !validarTel(txtTel) ||
    !validarMail(txtMail)
  ) {
    let lista = "";
    if (!validarNombre(txtNombre)) {
      txtNombre.style.border = "red thin solid";
      lista += "<li>Se debe escribir un nombre válido</li>";
      txtNombre.value = "";
      txtNombre.focus();
    } //if validarNombre

    if (!validarMail(txtMail)) {
      txtMail.style.border = "red thin solid";
      lista += "<li>Se debe escribir un correo electrónico válido</li>";
    } //ifvalidarMail

    if (!validarTel(txtTel)) {
      txtTel.style.border = "red thin solid";
      lista += "<li>Se debe escribir un teléfono válido</li>";
    } //ifvalidarTel

    document.getElementById(
      "alertValidacionesTexto"
    ).innerHTML = `Los campos deben ser llenados correctamente.
        <ul>${lista} </ul>
        `;
    document.getElementById("alertValidaciones").style.display = "block";

    setTimeout(function () {
      document.getElementById("alertValidaciones").style.display = "none";
    }, 7500);
    setTimeout(function () {
      document.getElementById("Name").style.border = "";
    }, 500);
    setTimeout(function () {
      document.getElementById("Tel").style.border = "";
    }, 500);
    setTimeout(function () {
      document.getElementById("email").style.border = "";
    }, 500);
    return;

    //functionTimeOut
  } //if principal
  sendEmail(txtNombre, txtMail, txtTel, message1);
}); // Event Listener fin chavos

/**Función enviar email */
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eduardodecelaya005@gmail.com",
    Password: "462DB4363D3F11B5ECBCF476049A655B71C8",
    To: "ffarias934@gmail.com",
    From: "eduardodecelaya005@gmail.com",
    Subject: "Correo nuevo",
    Body: `Name: ${txtNombre.value} <br/> Email: ${txtMail.value}<br/>Telephone: ${txtTel.value}<br/> Message: ${message1.value}`,
  }).then((message) => alert(message));
}
