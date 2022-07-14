import {
    passwordValidation,
    passwordMatches,
    validarMail,
    validarNombre,
    validarTel,
} from "./inputValidations.js";

//Footer Dinámico
import { footer } from "./footer.js";
petiteFooter.innerHTML = footer;

let register = document.getElementById("btnRegistrar");
let login = document.getElementById("btnLogin");
let users = [];


let urlVerify = 'http://localhost:8081/api/login/?email=';
let urlConmplement = '&password='; 

login.addEventListener("click", (event) => {
    event.preventDefault();
    let mail = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;


    urlVerify += mail;
    urlConmplement += password;
    let completeUrl = urlVerify + urlConmplement;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": mail
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(completeUrl, requestOptions)
        .then(response => { return response.text()})
        .then(result => {if(result == "true"){
            localStorage.setItem("token", "token");
            document.location.href = '/index.html'; 
        }else{
                    emailLogin.style.border = "red thin solid";
                    passwordLogin.style.border = "red thin solid";
                    emailLogin.value = "";
                    passwordLogin.value = "";
                
                document.getElementById(
                    "alertLoginFail"
                ).innerHTML = `Credenciales inválidas!`;
                document.getElementById("alertLoginFail").style.display = "block";
            
                setTimeout(function() {
                    document.getElementById("alertLoginFail").style.display = "none";
                }, 7500);
                setTimeout(function() {
                    document.getElementById("emailLogin").style.border = "";
                    document.getElementById("passwordLogin").style.border = "";
                    password.style.border = "";
                    passwordConfirm.style.border = "";
                }, 1000);
                //FIN ALERTA CREDENCIALES INVÁLIDAS
        }})
        .catch(error => console.log('error', error));


});//FIN EVENT LISTENER LOGIN

register.addEventListener("click", (event) => {
    event.preventDefault();
    if (!validarNombre(Name) ||
        !validarTel(Tel) ||
        !validarMail(email) ||
        !passwordMatches(password, passwordConfirm) ||
        !passwordValidation(password)
    ) {
        let lista = "";
        if (!validarNombre(Name)) {
            Name.style.border = "red thin solid";
            lista += "<li>Se debe escribir tu nombre y al menos un apellido</li>";
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
            "alertRegisterFail"
        ).innerHTML = `Los campos deben ser llenados correctamente.
          <ul>${lista} </ul>
          `;
        document.getElementById("alertRegisterFail").style.display = "block";

        setTimeout(function() {
            document.getElementById("alertRegisterFail").style.display = "none";
        }, 7500);
        setTimeout(function() {
            document.getElementById("email").style.border = "";
            document.getElementById("Tel").style.border = "";
            document.getElementById("Name").style.border = "";
            password.style.border = "";
            passwordConfirm.style.border = "";
        }, 1000);

    } //if principal validación 

    //localStorage PARA REGISTRO DE USUARIOS
    else {
        {
            //let elemento = `{"Name":"${Name.value}","email":"${email.value}", "Tel":"${Tel.value}", "password":"${password.value}"}`;
            //                String                 string                      number                string
            // 
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "name": Name.value,
            "email": email.value,
            "tel": Tel.value,
            "password":password.value,
            "idrole": 1
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:8081/api/users/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
                    };


        {
            Name.style.border = "green thin solid";
            Tel.style.border = "green thin solid";
            email.style.border = "green thin solid";
            password.style.border = "green thin solid";
            passwordConfirm.style.border = "green thin solid";
            Name.value = "";
            Tel.value = "";
            email.value = "";
            password.value = "";
            passwordConfirm.value = "";


            document.getElementById(
                "alertRegisterSuccess"
            ).innerHTML = `Registro exitoso!
        `;
            document.getElementById("alertRegisterSuccess").style.display = "block";

            setTimeout(function() {
                document.getElementById("alertRegisterSuccess").style.display = "none";
            }, 7500);
            setTimeout(function() {
                document.getElementById("email").style.border = "";
                document.getElementById("Tel").style.border = "";
                document.getElementById("Name").style.border = "";
                password.style.border = "";
                passwordConfirm.style.border = "";
            }, 1000);
            return;
        } //AQUI TERMINA LA VALIDACION CORRECTA DE REGISTRO DE USUARIOS MUCHO OJO CHIKES

    } //elseRegister



}); // FIN Event Listener PARA REGISTRO DE USUARIOS CHAVOS