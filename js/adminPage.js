import { titleValidation, priceValidation, quantityValidation } from "./inputValidations.js";

let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let urlimage = document.getElementById("urlimage");
let table = document.getElementById("productTable");
let bodyTable = table.getElementsByTagName("tbody");
let add = document.getElementById("botonAgregar")
let products = [];

add.addEventListener("click", (event) => {
    event.preventDefault();
    if (!titleValidation(title) ||
        !titleValidation(description) ||
        !priceValidation(price) ||
        !quantityValidation(quantity)
    ) {
        let lista = "";
        if (!titleValidation(title)) {
            title.style.border = "red thin solid";
            lista += "<li>Se debe escribir un nombre de producto válido</li>";
            title.value = "";
            title.focus();
        } //if validarTitle

        if (!titleValidation(description)) {
            description.style.border = "red thin solid";
            lista += "<li>Se debe escribir una descripción válida</li>";
        } //ifvalidarDescription

        if (!priceValidation(price)) {
            price.style.border = "red thin solid";
            lista += "<li>Se debe escribir un precio válido</li>";
        } //ifvalidarPrice

        if (!quantityValidation(quantity)) {
            quantity.style.border = "red thin solid";
            lista += "<li>Se debe escribir una cantidad válido</li>";
        } //ifvalidarQuantity

        document.getElementById(
            "alertValidacionesTexto"
        ).innerHTML = `Los campos deben ser llenados correctamente.
          <ul>${lista} </ul>
          `;
        document.getElementById("alertValidaciones").style.display = "block";

        setTimeout(function() {
            document.getElementById("alertValidaciones").style.display = "none";
        }, 7500);
        setTimeout(function() {
            document.getElementById("title").style.border = "";
        }, 500);
        setTimeout(function() {
            document.getElementById("description").style.border = "";
        }, 500);
        setTimeout(function() {
            document.getElementById("price").style.border = "";
        }, 500);
        setTimeout(function() {
            document.getElementById("quantity").style.border = "";
        }, 500);
        return;
    } //if de validaciones

    quantity.value = Math.round(quantity.value);
    //console.log(quantity);

    price.value = parseFloat(price.value).toFixed(2);
    //console.log(price);

    let elemento = `{"title":"${title.value}","description":"${description.value}", "price":"${price.value}", "quantity":"${quantity.value}", "urlimage":"${urlimage.value}"}`;
    //                              String                      string                      number                  number                  string

    console.log(elemento);
    products.push(JSON.parse(elemento));
    localStorage.setItem("elementosTabla", JSON.stringify(products));

    console.log(products);

    let tmp = `<tr id="tbl">
    <th scope="row">${title.value}</th>
    <td>${description.value}</td>
    <td>${price.value}</td>
    <td>${quantity.value}</td>
    <td><img class="productImage" src="./../assets/cataloguePics/${urlimage.value}"/></td>
    <td><button id="btnDelete" class="btnDel">Quitar</button></td>
    </tr>`;

    console.log(tmp);
    bodyTable[0].innerHTML += tmp;
    title.value = "";
    description.value = "";
    price.value = "";
    quantity.value = "";
    urlimage.value = "";
    title.focus();
});


window.addEventListener("load", function() {
    if (localStorage.getItem("elementosTabla") != null) {
        products = JSON.parse(localStorage.getItem("elementosTabla"));
        console.log(products);
        products.forEach(element => {
            bodyTable[0].innerHTML +=
                `<tr>
                <th scope="row">${element.title}</th>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td>${element.quantity}</td>
                <td><img class="productImage" src="./../assets/cataloguePics/${element.urlimage}"/></td>
                <td><button id="btnDelete" class="btnDel">Quitar</button></td>
                </tr>`;
        });
    }
});


//NavBar Dinámico
import { header } from "./header.js";
petiteHeader.innerHTML = header;

//Footer Dinámico
import { footer } from "./footer.js";
petiteFooter.innerHTML = footer;