"use strict";

const count = function (x, y) {
  return x + y;
};
console.log(`return as var ${count}`);
console.log(count(1, 2));
const number = count(1, 2);
console.log(number);
const jogn = {
  firstName: "Elena",
  greet: () => console.log(this),
};
jogn.greet();

// const arr = [1,2,[3,4]];
// const [a, ,[b,c] = arr;
// console.log(a,b,c);

// const arr = [1, 2];
// const [a, b] = arr;
// console.log(a, b);

const arr = [1, 2, [3, 4]];
const [a, , [b, c]] = arr;
console.log(a, b, c);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto", [1, 2, 3]],
  orderDilivery: function ({ starterI = 0, mainI, location, time = "20:00" }) {
    console.log(
      `Order received. Your order is ${this.mainMenu[mainI]} and ${this.starterMenu[starterI]} will be delived to ${location} at ${time}. `
    );
  },
  orderPasta: function ([ing1, ing2, ing3]) {
    console.log(`This is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },
};
restaurant.orderDilivery({
  time: "22:30",
  location: "Nashville, TN",
  mainI: 1,
  starterI: 0,
});

restaurant.orderDilivery({
  mainI: 2,
  location: "Brentwood, TN",
});
const newMenu = [...restaurant.mainMenu, "Pelmeni"];
newMenu[3][0] = "lalala";
console.log(restaurant.mainMenu);
console.log(newMenu);

const myMenu = [...newMenu, ...restaurant.mainMenu];
console.log(myMenu);
const ingridience = [
  prompt("Let's order passta. Ingridience 1:"),
  prompt("Ingridience 2:"),
  prompt("Ingridience 2:"),
];
restaurant.orderPasta(ingridience);
