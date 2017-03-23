'use strict';

import { Checkout } from '../src/lib/checkout.js';
import { bulk, twoForOne } from '../src/lib/discounts.js';
import { expect } from 'chai';

describe('Testing Checkout interface', () => {
  let co;

  const pricingRules = {
    'VOUCHER': twoForOne,
    'TSHIRT': bulk
  };

  beforeEach(() => {
    co = new Checkout(pricingRules);
  });

  describe('Check checkout process', () => {
    it('When a user scanned VOUCHER, TSHIRT, MUG the total amount to be paid should be 32.50€', () => {
      co.scan('VOUCHER').scan('TSHIRT').scan('MUG');
      let price = co.total();
      expect(price).equal(32.50);
    });

    it('When a user scanned VOUCHER, TSHIRT, VOUCHER the total amount to be paid should be 25.00€', () => {
      co.scan('VOUCHER').scan('TSHIRT').scan('VOUCHER');
      let price = co.total();
      expect(price).equal(25.00);
    });

    it('When a user scanned TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT the total amount to be paid should be 81.00€', () => {
      co.scan('TSHIRT').scan('TSHIRT').scan('TSHIRT').scan('VOUCHER').scan('TSHIRT');
      let price = co.total();
      expect(price).equal(81.00);
    });

    it('When a user scanned VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT the total amount to be paid should be 74.50€', () => {
      co.scan('VOUCHER').scan('TSHIRT').scan('VOUCHER').scan('VOUCHER').scan('MUG').scan('TSHIRT').scan('TSHIRT');
      let price = co.total();
      expect(price).equal(74.50);
    });
  });
});
