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
        `<div>
                <h2>${item.name} </h2>
                <p>${item.cost}</p>
                <p>${item.detail}</p>
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
