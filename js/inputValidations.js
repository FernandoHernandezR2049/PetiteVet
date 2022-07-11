export function validarNombre(txtNombre) {
  //funcion validar nombre inicio
  const reNombre = /^(?=.{3,50}$)[a-zA-ZáéíóúÁÉÍÓÚ]+( [a-zA-ZáéíóúÁÉÍÓÚ]+)*$/;
  if (!reNombre.test(txtNombre.value)) {
    return false;
  } else {
    return true;
  } //if else validarNombre
} //función validarNombre FIN

export function validarMensaje(txtMensaje) {
  //funcion validar nombre inicio
  const reMensaje = /^(?=.{4,250}$)[a-zA-ZáéíóúÁÉÍÓÚ]+( [a-zA-ZáéíóúÁÉÍÓÚ]+)*$/;
  if (!reMensaje.test(txtMensaje.value)) {
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
  return password.value === confirmPassword.value ? true : false;
}

export function passwordValidation(password) {
  //TODO implement password regex
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  ///^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  return passwordRegex.test(password.value) ? true : false;
}

export function priceValidation(price) {
  if (price.value <= 0) {
    return null;
  }
  return true;
}

export function titleValidation(title) {
  //funcion title
  const reNombre = /^(?=.{4,200}$)\w/; //[a-zA-ZáéíóúÁÉÍÓÚ]+([a-zA-ZáéíóúÁÉÍÓÚ]+)*$ expresión regular chafa
  if (!reNombre.test(title.value)) {
    return false;
  } else {
    return true;
  } //if else validarTitle
} //función titleValidation

export function quantityValidation(quantity) {
  //funcion quantity
  if (quantity.value <= 0) {
    return false;
  }
  return true;
}
