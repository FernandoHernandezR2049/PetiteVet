//NavBar Dinámico
import { header } from "/js/header.js";
import {
  ShoppingCartItemCountObserver,
  ShoppingCartItems,
  ShoppingCartListObserver,
} from "/js/observerShoppingCart.js";
petiteHeader.innerHTML = header;

let shoppingCartData = [{}];
const cartItems = new ShoppingCartItems();
const shoppingCartListObserver = new ShoppingCartListObserver(
  shoppingCartList,
  cartItems.data
);
const shoppingCartItemCountObserver = new ShoppingCartItemCountObserver(
  itemCount
);
cartItems.subscribe(shoppingCartItemCountObserver);
cartItems.subscribe(shoppingCartListObserver);
// cartItems.add({
//   image: "3.cama.jpg",
//   name: "Cama",
//   pieces: "3",
//   cost: 230,
// });
// cartItems.add({
//   image: "6.pechera_perro.jpg",
//   name: "Pechera",
//   pieces: "1",
//   cost: 320,
// });
// cartItems.add({
//   image: "2.plato_de_comida.jpg",
//   name: "Plato de comida",
//   pieces: "2",
//   cost: 130,
// });
// cartItems.add({
//   image: "2.plato_de_comida.jpg",
//   name: "Plato de comida",
//   pieces: "2",
//   cost: 130,
// });
// cartItems.add({
//   image: "2.plato_de_comida.jpg",
//   name: "Plato de comida",
//   pieces: "2",
//   cost: 130,
// });
window.addEventListener("load", () => {
  if (localStorage.getItem("productsCart") != null) {
    shoppingCartData = JSON.parse(localStorage.getItem("productsCart"));
    console.log(shoppingCartData[0]);
    shoppingCartData.map(item => cartItems.add({
      image: item.img,
      name: item.name,
      pieces: 1,
      cost: item.Precio,
    }))
  }
}) 