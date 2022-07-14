//NavBar Dinámico

import {
  ShoppingCartItemCountObserver,
  ShoppingCartItems,
  ShoppingCartListObserver,
} from "/js/observerShoppingCart.js";


let shoppingCartData = [{}];
let cartItems = new ShoppingCartItems();
const shoppingCartListObserver = new ShoppingCartListObserver(
  shoppingCartList,
  cartItems.data
);
const shoppingCartItemCountObserver = new ShoppingCartItemCountObserver(
  itemCount
);
cartItems.subscribe(shoppingCartItemCountObserver);
cartItems.subscribe(shoppingCartListObserver);
window.addEventListener("load", () => {
  if (localStorage.getItem("productsCart") != null) {
    shoppingCartData = JSON.parse(localStorage.getItem("productsCart"));
    shoppingCartData.map((item) =>
      cartItems.add({
        image: item.img,
        name: item.name,
        pieces: item.quantity,
        cost: item.precio,
        id: item.id,
      })
    );
  }
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.index) {
    console.log(e.target.dataset.index);
    let shoppingCartData = JSON.parse(localStorage.getItem("productsCart"));
    // let prueba = shoppingCartData.filter((item) => item.id != e.target.dataset.index);
    // console.log(prueba);
    // console.log(shoppingCartData);
    cartItems.remove(e.target.dataset.index);
    // prueba.map((item) =>
    //   cartItems.add({
    //     image: item.img,
    //     name: item.name,
    //     pieces: item.quantity,
    //     cost: item.Precio,
    //     id: item.id,
    //   })
    // );

    //   let productoEnCarrito = productosCarrito.filter(
    //     (producto) => producto.id == item[0].id
    //   );
    //   productoEnCarrito.length > 0
    //     ? productosCarrito.map(
    //       (producto) => producto.id == item[0].id && producto.quantity++
    //     )
    //     : productosCarrito.push({ ...item[0], quantity: 1 });
    //   localStorage.setItem("productsCart", JSON.stringify(productosCarrito));
  }
});
