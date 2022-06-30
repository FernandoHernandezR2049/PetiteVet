import { ProductViewStrategy, InfoContext, CommentViewStrategy } from "./itemViewsStrategy.js";


const items = [{
    'name': 'Carnaza',
    'img': './../assets/cataloguePics/9.carnasas.jpg',
    'description': 'Set de 3 carnazas. Dimensiones del producto: 4 x 13 x 16 cm; 80g',
    'SKU': '',
    'Precio': '$29'
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


const itemsComments = [{
    'usuario': 'Nora Alicia',
    'valoracion': 'Muy bien, excelente trato y muy buena la Doctora.',
    'imgComentario': '/assets/indexPics/dogLogo.png'
}, {
    'usuario': 'Jimena Núñez Álvarez',
    'valoracion': 'Atendió muy bien a mis perros.',
    'imgComentario': '/assets/indexPics/dogLogo.png'
}, {
    'usuario': 'Alejandro Farías',
    'valoracion': 'Excelente veterinaria, llevé a mis gatitos y quedé feliz por el trato tan profesional, lo recomiendo mucho.',
    'imgComentario': '/assets/indexPics/dogLogo.png'
}]


let data = new InfoContext(new ProductViewStrategy(), items, document.getElementById("newProducts"));

let data2 = new InfoContext(new CommentViewStrategy(), itemsComments, document.getElementById("comments"));

data.show();

data2.show();

//NavBar Dinámico
import { header } from "./header.js";
petiteHeader.innerHTML = header;

//Footer Dinámico
import { footer } from "./footer.js";
petiteFooter.innerHTML = footer;