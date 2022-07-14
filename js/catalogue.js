import { CatalogueStrategy, InfoContext } from "./itemViewsStrategy.js";
import { footer } from "./footer.js";
import { addItems } from "./getProducts.js";
petiteFooter.innerHTML = footer;

addItems("http://localhost:8081/api/products/", CatalogueStrategy, "productos");
let url = "http://localhost:8081/api/products/";
let response = await fetch(url);

let items = await response.json();
let productosCarrito = [];
document.addEventListener("click", (e) => {
  if (e.target.dataset.index) {
    console.log(e.target.dataset.index);
    let item = items.filter((item) => item.id == e.target.dataset.index);
    console.log(item);
    let productoEnCarrito = productosCarrito.filter(
      (producto) => producto.id == item[0].id
    );
    productoEnCarrito.length > 0
      ? productosCarrito.map(
          (producto) => producto.id == item[0].id && producto.quantity++
        )
      : productosCarrito.push({ ...item[0], quantity: 1 });
    localStorage.setItem("productsCart", JSON.stringify(productosCarrito));
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("productsCart") != null) {
    productosCarrito = JSON.parse(localStorage.getItem("productsCart"));
  }
});
