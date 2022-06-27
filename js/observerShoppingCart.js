import { InfoContext, ShoppingCartStrategy } from "/js/itemViewsStrategy.js";
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify(data) {
    this.observers.forEach((e) => {
      e.refresh(data);
    });
  }
}

export class ShoppingCartItems extends Subject {
  constructor() {
    super();
    this.data = [];
  }
  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

export class ShoppingCartListObserver {
  constructor(element, data) {
    this.element = element;
    this.cartElements = new InfoContext(
      new ShoppingCartStrategy(),
      data,
      element
    );
  }
  refresh(data) {
    this.cartElements.show();
  }
}
export class ShoppingCartItemCountObserver {
  constructor(element) {
    this.element = element;
  }
  refresh(data) {
    this.element.innerHTML = data.length;
  }
}
