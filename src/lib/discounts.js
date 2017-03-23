'use strict';

export function bulk(products) {
  if(products.length >= 3) {
    products.map((item) => item.price = 19.00);
  };
};

export function twoForOne(products) {
  products.find((item, index) => {
    if(index % 2 > 0) {
      item.price = 0;
    }
  });
};
