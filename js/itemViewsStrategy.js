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