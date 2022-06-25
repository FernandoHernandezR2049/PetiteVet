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
        `<div class="row mb-5">
                <div class="col-lg-6">
                    <img src="${item.img}" class="card-img image change">
                </div>    
                <div class="col-lg-6">
                    <h5>${item.name}</h5>
                        <p class="newP">${item.description}</p>
                        <h6>SKU: ${item.SKU}</h6>
                        <h6>Precio: ${item.Precio}</h6>
                        <button type="button" class="btn btn-primary move" >Agregar</button>
                </div>
                   
                </div>
                `
      );
    }, "");
  }
}

export class ProductViewStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((prevItem, item) => {
      return (
        prevItem +
        `<div class="card ">
                    <img src="${item.img}" class="card-img">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-link btn-sm float-left">Comprar</button>
                        <button class="btn btn-link btn-sm float-right">Añadir a carrito</button>
                    </div>
                </div>`
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
    console.log(precioTotal);
    element.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
                      <span>Total (MXN)</span>
                      <strong>$${precioTotal}</strong>
                    </li>
    `;
  }
}
