'use strict';

import { Product } from '../src/lib/product';
import { expect } from 'chai';

describe("Testing Product object", () => {
  let product1 = new Product('VOUCHER');
  let product2 = new Product('TSHIRT');
  let product3 = new Product('MUG');
  let product4 = new Product('SHOES');

  it("Check Product content type", () => {
    expect(product1).not.to.be.a('null');
    expect(product1).to.be.an('object');
    expect(product1.code).to.be.an('string');
    expect(product1.name).to.be.an('string');
    expect(product1.price).to.be.a('number');
  });

  it("Check Voucher content value", () => {
    expect(product1.code).equal('VOUCHER');
    expect(product1.name).equal('Cabify Voucher');
    expect(product1.price).equal(5.00);
  });

  it("Check T-Shirt content value", () => {
    expect(product2.code).equal('TSHIRT');
    expect(product2.name).equal('Cabify T-Shirt');
    expect(product2.price).equal(20.00);
  });

  it("Check Mug content value", () => {
    expect(product3.code).equal('MUG');
    expect(product3.name).equal('Cabify Coffee Mug');
    expect(product3.price).equal(7.50);
  });

  it("Check Product not fount content value", () => {
    expect(product4.code).to.be.undefined;
    expect(product4.name).to.be.undefined;
    expect(product4.price).to.be.undefined;
  });
});
