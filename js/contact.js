/* Variables del formulario */
let txtNombre = document.getElementById("Name");
// console.log(txtNombre);
let txtMail = document.getElementById("email");
let txtTel = document.getElementById("Tel");
let agregar = document.getElementById("btnAgregar");

/**Expresiones regulares para la validación de nombre  */
let reNombre = /^[a-zA-ZáéíóúÁÉÍÓÚ]+( [a-zA-ZáéíóúÁÉÍÓÚ]+)*$/;
let reTel = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
let reMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


/* AQUI VAN TODAS LAS FUNCIONES AMIKOS*/
function validarNombre() { //funcion validar nombre inicio
    if (!reNombre.test(txtNombre.value)) {
        // console.log(reNombre.test(txtNombre.value));
        // console.log(txtNombre.value);
        return false;
    } else {
        // console.log(txtNombre);
        // console.log(reNombre.test(txtNombre.value));
        return true;
    } //if else validarNombre
} //función validarNombre FIN

function validarTel() { // Función para validar teléfono
    if (!reTel.test(txtTel.value)) {
        return false
    } else {
        return true
    };
} // funcion validar Telefono

function validarMail() { //Función validación Email inicio
    if (!reMail.test(txtMail.value)) {;
        return false;
    } else {
        return true;
    }
}; //validationEmail fin

/**Función campos vacíos */
function isEmpty() {
    if (txtMail.value.length == 0) {
        return true;
    }
} //funcion isEmpty



/* EVENT LISTENER */
agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if ((!validarNombre()) || (!validarTel()) || (!validarMail())) {
        let lista = "";
        if (!validarNombre()) {
            txtNombre.style.border = "red thin solid";
            lista += "<li>Se debe escribir un nombre válido</li>";
            txtNombre.value = "";
            txtNombre.focus();
        } //if validarNombre


        if (!validarMail()) {
            txtMail.style.border = "red thin solid";
            lista += "<li>Se debe escribir un correo electrónico válido</li>";
        } //ifvalidarMail

        if (!validarTel()) {
            txtTel.style.border = "red thin solid";
            lista += "<li>Se debe escribir un teléfono válido</li>";
        } //ifvalidarTel

        document.getElementById("alertValidacionesTexto").innerHTML =
            `Los campos deben ser llenados correctamente.
        <ul>${lista} </ul>
        `;
        document.getElementById("alertValidaciones").style.display = "block"

        setTimeout(function() {
                document.getElementById("alertValidaciones").style.display = "none";
            },
            7500
        );
        setTimeout(function() {
                document.getElementById("Name").style.border = "";
            },
            500
        );
        setTimeout(function() {
                document.getElementById("Tel").style.border = "";
            },
            500
        );
        setTimeout(function() {
                document.getElementById("email").style.border = "";
            },
            500
        );
        return

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
        To: 'ffarias934@gmail.com',
        From: "eduardodecelaya005@gmail.com",
        Subject: "Correo nuevo",
        Body: `Name: ${txtNombre.value} <br/> Email: ${txtMail.value}<br/>Telephone: ${txtTel.value}<br/> Message: ${message1.value}`
    }).then(
        message => alert(message)
    );
}