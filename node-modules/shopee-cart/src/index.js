import * as cartService from "./services/cart.js";

import createItem from "./services/item.js";

const cart = [];
const myWhishList = [];

console.log("Hello shopee");

const item1 = await createItem("hotwheels ferrari", 20.99, 6);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.addItem(myWhishList, item2);

await cartService.calculateTotal(cart);
console.log(item2.subTotal());

await cartService.deleteItem(cart, item1.name);
await cartService.deleteItem(cart, item1.name);
await cartService.deleteItem(cart, item2.name);
await cartService.displayCart(cart);

await cartService.removeItem(cart, item1.name);
await cartService.removeItem(cart, item2.name);
await cartService.displayCart(cart);
