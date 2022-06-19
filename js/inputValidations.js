export function validarNombre(txtNombre) {
  //funcion validar nombre inicio
  const reNombre = /^(?=.{4,50}$)[a-zA-ZáéíóúÁÉÍÓÚ]+( [a-zA-ZáéíóúÁÉÍÓÚ]+)*$/;
  if (!reNombre.test(txtNombre.value)) {
    return false;
  } else {
    return true;
  } //if else validarNombre
} //función validarNombre FIN

export function validarTel(txtTel) {
  // Función para validar teléfono
  let reTel = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
  if (!reTel.test(txtTel.value)) {
    return false;
  } else {
    return true;
  }
} // funcion validar Telefono

export function validarMail(txtMail) {
  //Función validación Email inicio
  let reMail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (!reMail.test(txtMail.value)) {
    return false;
  } else {
    return true;
  }
} //validationEmail fin
export function passwordMatches(password, confirmPassword) {
  const passwordRegex = new RegExp(
    "^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{6,})"
  );
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    return false;
  }
}
export function passwordValidation(password) {
  //TODO implement password regex
}
