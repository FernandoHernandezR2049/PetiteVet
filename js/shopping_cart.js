import { header } from "./header.js";
import { InfoContext, ShoppingCartStrategy } from "./itemViewsStrategy.js";
petiteHeader.innerHTML = header;

const shoppingCartData = [
  { image: "3.cama.jpg", name: "Cama", pieces: "3", cost: 230 },
  { image: "6.pechera_perro.jpg", name: "Pechera", pieces: "1", cost: 320 },
  {
    image: "2.plato_de_comida.jpg",
    name: "Plato de comida",
    pieces: "2",
    cost: 130,
  },
];

let cartElements = new InfoContext(
  new ShoppingCartStrategy(),
  shoppingCartData,
  shoppingCartList
);
cartElements.show();
