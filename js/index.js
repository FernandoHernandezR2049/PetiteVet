import { ProductViewStrategy, InfoContext, CommentViewStrategy } from "./itemViewsStrategy.js";
import { header } from "./header.js";
import { footer } from "./footer.js";
import{addItems} from "./getProducts.js";
petiteHeader.innerHTML = header;
petiteFooter.innerHTML = footer;


addItems( 'http://localhost:8081/api/products/home',ProductViewStrategy, "newProducts");

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

let data2 = new InfoContext(new CommentViewStrategy(), itemsComments, document.getElementById("comments"));

data2.show();

