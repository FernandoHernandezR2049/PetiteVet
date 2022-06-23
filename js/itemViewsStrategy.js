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
                `<div class="card">
                    <h5 class="card-title">${item.name}</h5>
                    <img src="${item.img}" class="card-img image change">
                    <div class="card-body">
                        <p class="card-text">${item.description}</p>
                        <h6 class="mt-3 text">SKU: ${item.SKU}</h6>
                        <h6 class="mt-3 text">Precio: ${item.Precio}</h6>
                    </div>
                    <div class="card-footer text-center">
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
                `<div>
                    <h4>${item.name} </h4>
                    <p>${item.cost}</p>
                    <p>${item.detail}</p>
                    <p>${item.pieces}</p>
                </div>`
            );
        }, "");
    }
}