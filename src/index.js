'use strict';

import { Checkout } from '../src/lib/checkout.js';
import { bulk, twoForOne } from '../src/lib/discounts.js';

let pricingRules = {
  'VOUCHER': twoForOne,
  'TSHIRT': bulk
};

let co1 = new Checkout(pricingRules);
co1.scan('VOUCHER').scan('TSHIRT').scan('MUG');
let price1 = co1.total();
co1.printTicket();

let co2 = new Checkout(pricingRules);
co2.scan('VOUCHER').scan('TSHIRT').scan('VOUCHER');
let price2 = co2.total();
co2.printTicket();

let co3 = new Checkout(pricingRules);
co3.scan('TSHIRT').scan('TSHIRT').scan('TSHIRT').scan('VOUCHER').scan('TSHIRT');
let price3 = co3.total();
co3.printTicket();

let co4 = new Checkout(pricingRules);
co4.scan('VOUCHER').scan('TSHIRT').scan('VOUCHER').scan('VOUCHER').scan('MUG').scan('TSHIRT').scan('TSHIRT');
let price4 = co4.total();
co4.printTicket();
