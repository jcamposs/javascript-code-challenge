'use strict';

import { Product } from './product.js';

export class Checkout {
  constructor(pricingRules) {
    this.products     = [];
    this.pricingRules = pricingRules;
    this.totalCart  = 0;
  }

  scan(code) {
    this.products.push(new Product(code));
    return this;
  }

  _applyRules() {
    for(let code in this.pricingRules) {
      this.pricingRules[code](this.products.filter((p) => p.code === code));
    }
  };

  total() {
    this._applyRules();
    this.totalCart = this.products.reduce (
      (prev, curr) => { return { price: prev.price + curr.price }; }
    );
    return this.totalCart.price;
  };

  printTicket() {
    console.log(`
    Items: ${this.products.map((item) => item.code)}
    Total: ${this.totalCart.price.toString()}€
    `);
  };
}
