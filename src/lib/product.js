'use strict';

export class Product {
  constructor(code) {
    this.code = code;

    switch(this.code) {
      case 'VOUCHER':
        this.name  = 'Cabify Voucher';
        this.price = 5.00;
        break;
      case 'TSHIRT':
        this.name  = 'Cabify T-Shirt';
        this.price = 20.00;
        break;
      case 'MUG':
        this.name  = 'Cabify Coffee Mug';
        this.price = 7.50;
        break;
      default:
        this.code = undefined;
    }
  }
}
