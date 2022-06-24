import { header } from "./header.js";
petiteHeader.innerHTML = header;

import { CatalogueStrategy, InfoContext } from "./../js/itemViewsStrategy.js";


const items = [{
    'name': 'Cepillo canino',
    'img': './../assets/cataloguePics/1.cepillo_canino.png',
    'description': 'Mango ergonómico. Puntas metálicas. Desenreda y quita pelo muerto. Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$79'
}, {
    'name': 'Plato para alimento',
    'img': './../assets/cataloguePics/2.plato_de_comida.jpg',
    'description': 'Sus dimensiones de 14 x 18 x 4.5 poseen la capacidad suficiente para alimentar a tu mejor amigo y satisfacer su apetito moderado. Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$199'
}, {
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
}, {
    'name': 'Perchera para perro',
    'img': './../assets/cataloguePics/6.pechera_perro.jpg',
    'description': 'Raza pequeña. Material: Piel sintética. Medidas: pecho 49cm y cintura: 58cm. Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$100'
}, {
    'name': 'Jabón antipulgas',
    'img': './../assets/cataloguePics/7.jabon_antipulgas.jpg',
    'description': 'Jabón Antipulgas y antigarrapatas para perros y gatos. Cantidad 80g. Es un jabón parasiticida de uso externo para perros y gatos, indicado para la erradicación de pulgas, garrapatas, piojos y ácaros.',
    'SKU': '',
    'Precio': '$100'
}, {
    'name': 'Shampoo antipulgas',
    'img': './../assets/cataloguePics/8.shampoo_antipulgas.jpg',
    'description': 'Shampoo Antipulgas y antigarrapatas para perros y gatos. Cantidad 215ml. Es un jabón parasiticida de uso externo para perros y gatos, indicado para la erradicación de pulgas, garrapatas, piojos y ácaros.',
    'SKU': '',
    'Precio': '$130'
}, {
    'name': 'Carnaza',
    'img': './../assets/cataloguePics/9.carnasas.jpg',
    'description': 'Set de 3 carnazas. Dimensiones del producto: 4 x 13 x 16 cm; 80g',
    'SKU': '',
    'Precio': '$29'
}, {
    'name': 'Plato para alimento',
    'img': './../assets/cataloguePics/10.plato_de_comida_plastico.jpg',
    'description': 'Plato para mascotas, cachorros, perros, gatos o gatitos. Perfecto para comida seca, comida húmeda, golosinas o agua. Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$59'
},{
    'name': 'Carnaza',
    'img': './../assets/cataloguePics/9.carnasas.jpg',
    'description': 'Set de 3 carnazas. Dimensiones del producto: 4 x 13 x 16 cm; 80g',
    'SKU': '',
    'Precio': '$29'
}, {
    'name': 'Plato para alimento',
    'img': './../assets/cataloguePics/10.plato_de_comida_plastico.jpg',
    'description': 'Plato para mascotas, cachorros, perros, gatos o gatitos. Perfecto para comida seca, comida húmeda, golosinas o agua. Los colores de la imagen pueden variar.',
    'SKU': '',
    'Precio': '$59'
    //Se agregaron 2 productos nuevos
}]

items.sort(function (a, b) {
    if (a.description.length > b.description.length) {
      return 1;
    }
    if (a.description.length < b.description.length) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });


let data = new InfoContext(new CatalogueStrategy(), items, document.getElementById("productos"));

data.show();


////////////////////////////////////////FOOTER//////////////////////////////////////////////////////////////////////

import { footer } from "./footer.js";
petiteFooter.innerHTML = footer;