import { ProductViewStrategy, InfoContext } from "./itemViewsStrategy.js";


const items = [{
    'name': 'Cama',
    'img': './../assets/cataloguePics/3.cama.jpg',
    'description': 'Cama tamaño grande fabricada en tela polar con almohadón que se puede sacar para lavar. Medidas de la cama: 110 cm (largo) x 75 cm (ancho) x 25 cm (altura). Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$250'
}, {
    'name': 'Correa',
    'img': './../assets/cataloguePics/4.correa_perro.jpg',
    'description': 'Material de la correa: Acero. Peso máximo soportado: 5 kg. Largo: 1.2m',
    'SKU': '',
    'Precio': '$59'
}, {
    'name': 'Collar para perro',
    'img': './../assets/cataloguePics/5.collar_perro.jpg',
    'description': 'Medidas 3/8 X 8-1/2 (raza pequeña). \n Color rosa. \n Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$79'
}]


let data = new InfoContext(new ProductViewStrategy(), items, document.getElementById("newProducts"));

data.show();

//NavBar Dinámico
import { header } from "./header.js";
petiteHeader.innerHTML = header;

//Footer Dinámico
import { footer } from "./footer.js";
petiteFooter.innerHTML = footer;