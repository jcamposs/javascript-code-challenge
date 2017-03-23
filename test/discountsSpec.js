'use strict';

import { Product } from '../src/lib/product';
import { bulk, twoForOne } from '../src/lib/discounts.js';
import { expect } from 'chai';

describe("Testing discounts", function() {

  it("Check 2-for-1 discount is applied", () => {
    let products = [];

    products.push(new Product('VOUCHER'))
    twoForOne(products);

    expect(products[0].price).equal(5.00)

    products.push(new Product('VOUCHER'))
    twoForOne(products);

    expect(products[1].price).equal(0)
  });

  it("Check bulk discount is applied", () => {
    let products = [];

    products.push(new Product('TSHIRT'))
    products.push(new Product('TSHIRT'))
    bulk(products);

    products.map((item) =>
      expect(item.price).equal(20.00)
    )

    products.push(new Product('TSHIRT'))
    bulk(products);

    products.map((item) =>
      expect(item.price).equal(19.00)
    )
  });
});
