import { header } from "./header.js";
petiteHeader.innerHTML = header;

// ESTO SIRVE PA OCULTAR EL BOTON SI ESTÁS LOGGEADO O NO BAI
const token = localStorage.getItem("token"); 
//console.log(token);
const btnAccess = document.getElementById('btnAccess');
const btnLogout = document.getElementById('btnLogout');   
    if(token != null){
  btnAccess.style.display = "none";
    }else{
  btnLogout.style.display = "none";
} 

btnLogout.addEventListener("click", (event) => {
    window.localStorage.removeItem('token'); 
    document.href ="/pages/index.html"
})