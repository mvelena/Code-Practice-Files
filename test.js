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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
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
//Spread operator
const newMenu = [...restaurant.mainMenu, "Pelmeni"];
newMenu[3][0] = "lalala";
console.log(restaurant.mainMenu);
console.log(newMenu);

// const myMenu = [...newMenu, ...restaurant.mainMenu];
// console.log(myMenu);
// const ingridience = [
//   prompt("Let's order passta. Ingridience 1:"),
//   prompt("Ingridience 2:"),
//   prompt("Ingridience 2:"),
// ];
// restaurant.orderPasta(ingridience);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (num of numbers) {
    sum += num;
  }
  console.log(numbers, sum);
};
add(1, 2, 3);
add(1, 2, 3, 4, 5);
restaurant.orderPizza("mushroom", "onion", "ham");
restaurant.orderPizza("chicken");

//Short Circuiting (|| &&)
// || return first true value or last value
restaurant.guestNum = 0;
const guests1 = restaurant.guestNum ? restaurant.guestNum : 10;
console.log(guests1);

const guests2 = restaurant.guestNum || 10;
console.log(guests2);

// && return first false value or last value
console.log(3 && null);
console.log(3 && "Elena");
console.log(3 && "Elena" && null && []);
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("onion", "ham")
// };

restaurant.orderPizza && restaurant.orderPizza("onion", "ham");

const guestsCorrect = restaurant.guestNum ?? 10;
console.log(guestsCorrect);
