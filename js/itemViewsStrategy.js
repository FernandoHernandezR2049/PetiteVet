export class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    show() {
        this.strategy.show(this.data, this.element);
    }
}

export class CatalogueStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((prevItem, item) => {
            return (
                prevItem +
                `<div class="row col-12 col-md-5 col-lg-4 col-xl-3 no-gutters rounded-costume shadow card-47">
                <div class="col-md-4 my-auto">
                  <img src="${item.img}" class="card-img ml-2 image special-img img-change">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <h6>SKU: ${item.SKU}</h6>
                    <h6>Precio: ${item.Precio}</h6>
                    <div class="card-footer bg-transparent d-flex justify-content-center">
                      <button type="button" class="btn btn-primary mx-auto" >Agregar</button>
                    </div>
                  </div>
                </div>
              </div>`
            );
        }, "");
    }
}

export class ProductViewStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((prevItem, item) => {
            return (
                prevItem +
                `<div class="row col-12 col-md-5 col-lg-4 col-xl-3 no-gutters rounded-costume shadow card-47">
                <div class="col-md-4 my-auto">
                  <img src="${item.img}" class="card-img ml-2 image special-img img-change2">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="card-footer bg-transparent d-flex justify-content-center">
                      <button type="button" class="btn btn-primary mx-auto" >Agregar</button>
                      <button type="button" class="btn btn-primary mx-auto" >Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
      
      `
            );
        }, "");
    }
}


export class CommentViewStrategy {
    show(data2, element) {
        element.innerHTML = data2.reduce((prevItem, itemsComments) => {
            return (
                prevItem +
                `<div class="row col-12 col-md-5 col-lg-4 col-xl-3 no-gutters rounded-costume shadow card-47">
              <div class="col-md-4 my-auto">
                <img src="${itemsComments.imgComentario}" class="card-img ml-2 image  img-change2">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${itemsComments.usuario}</h5>
                  <p class="card-text">${itemsComments.valoracion}</p>
                </div>
              </div>
            </div>
          `
            );
        }, "");
    }
}


export class ShoppingCartStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((prevItem, item) => {
            return (
                prevItem +
                `
               <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <img src="../assets/cataloguePics/${
                      item.image
                    }" alt="" width="40px"> 
                    <div>
                      <h6 class="my-0">${item.name}</h6>
                      <small class="text-muted">Número de piezas: ${
                        item.pieces
                      }</small>
                    </div>
                    <img src="../assets/cart2.svg"></img>
                    <div>
                      <span style="display: block;"class="text-muted my-0">$${
                        item.cost
                      }</span>
                      <span>$${item.cost * item.pieces}</span>
                    </div>
                  </li>
              `
            );
        }, "");
        const precioTotal = data.reduce((prevItem, item) => {
            return prevItem + item.cost * item.pieces;
        }, 0);
        element.innerHTML += `
  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (MXN)</span>
                    <strong>$${precioTotal}</strong>
                  </li>
  `;
    }
}