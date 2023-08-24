import "reflect-metadata";
import "es6-shim";

import { Product } from "./product.model";

// const products = [
//   { title: "A carpet", price: 31.99 },
//   { title: "A car", price: 50000.99 },
//   { title: "notebook", price: 233.99 },
// ];

const newProd = new Product("", -5.55523);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A book", 20.99);
