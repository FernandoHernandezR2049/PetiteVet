
import {
  passwordValidation,
  passwordMatches,
  validarMail,
  validarNombre,
  validarTel,
} from "./inputValidations.js";
let register = document.getElementById("btnRegistrar");
register.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    !validarNombre(Name) ||
    !validarTel(Tel) ||
    !validarMail(email) ||
    !passwordMatches(password, passwordConfirm) ||
    !passwordValidation(password)
  ) {
    let lista = "";
    if (!validarNombre(Name)) {
      Name.style.border = "red thin solid";
      lista += "<li>Se debe escribir un nombre válido</li>";
      Name.value = "";
      Name.focus();
    } //if validarNombre

    if (!validarMail(email)) {
      email.style.border = "red thin solid";
      lista += "<li>Se debe escribir un correo electrónico válido</li>";
    } //ifvalidarMail

    if (!validarTel(Tel)) {
      Tel.style.border = "red thin solid";
      lista += "<li>Se debe escribir un teléfono válido</li>";
    } //ifvalidarTel
    if (!passwordMatches(password, passwordConfirm)) {
      password.style.border = "red thin solid";
      passwordConfirm.style.border = "red thin solid";
      lista += "<li>Las contraseñas no coinciden</li>";
    }
    if (!passwordValidation(password)) {
      password.style.border = "red thin solid";
      lista += "<li>La contraseña no cumple con los requisitos mínimos</li>";
    }
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
      document.getElementById("email").style.border = "";
      document.getElementById("Tel").style.border = "";
      document.getElementById("Name").style.border = "";
      password.style.border = "";
      passwordConfirm.style.border = "";
    }, 1000);
    return;

    //functionTimeOut
  } //if principal
}); // Event Listener fin chavos

//NavBar Dinámico
import { header } from "./header.js";
petiteHeader.innerHTML = header;

//Footer Dinámico
import { footer } from "./footer.js";
petiteFooter.innerHTML = footer;
