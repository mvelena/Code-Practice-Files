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
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
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

//Logical Assignmebt Operator
console.log("-------Logical Assignmebt Operator------------");
const rest1 = {
  name: "Buca",
  guestsNum: 20,
};
const rest2 = {
  name: "Best in Town",
  owner: "Kate Smith",
};

// rest1.guestsNum = rest1.guestsNum || 10;
// rest2.guestsNum = rest2.guestsNum || 10;

rest1.guestsNum ??= 10;
rest2.guestsNum ??= 10;
console.log(rest1.guestsNum);
console.log(rest2.guestsNum);

//rest1.owner = rest1.owner && '<Anonymous>';
rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";
console.log(rest1);
console.log(rest2);

//Looping over Array
const menu = [...restaurant.mainMenu];
menu.push("Sweets");
console.log(menu, restaurant.mainMenu);
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}:${item[1]}`);
// };

for (const [num, item] of menu.entries()) {
  console.log(`${num + 1}:${item}`);
}
//Enhanced Object Literals
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${3 + 3}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const openHours = {
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
};

console.log(openHours);

const restaurantNew = {
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
  //openingHours,
  openHours,
  // orderPasta: function ([ing1, ing2, ing3]) {
  //   console.log(`This is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  orderPasta([ing1, ing2, ing3]) {
    console.log(`This is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },
};
restaurantNew.orderPasta(["cheese", "ham", "onion"]);
console.log(restaurantNew.openingHours);

//Optional Chaining
const daysArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of daysArr) {
  console.log(
    `Restaurant opens ${restaurantNew.openHours[day]?.open ?? "closed"}`
  );
}
// const users = [{name:'Elena', email : 'Smith'}];
// console.log(users[0]?.name ?? 'Array is empty');
const users = [];
console.log(users[0]?.name ?? "Array is empty");

//Looping Objects
//Property Name
const daysOpen = Object.keys(openHours);
let message = `We are open on ${daysOpen.length} days: `;
for (const day of daysOpen) {
  message += `${day} `;
}
console.log(message);

//Property Values
const time = Object.values(openHours);
console.log(time);

//Entire Object
const entry = Object.entries(openHours);
console.log(entry);

for (const [key, { open, close }] of entry) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Set
console.log(new Set("Elena"));
const mySet = new Set(["a", "b", "a", "c"]);
console.log(mySet);

const iceCream = [
  "Vanila",
  "Chocolate",
  "Strawberry",
  "Eskimo",
  "Chocolate Chip",
  "Butter Pecan",
  "Eskimo",
  "Chocolate",
];
const orderIcecream = {};
console.log(new Set(iceCream).size);
for (const item of iceCream) {
  orderIcecream[item] ? (orderIcecream[item] += 1) : (orderIcecream[item] = 1);
}
console.log(orderIcecream);
const orders = new Set(iceCream);
console.log(orders.size);
orders.add("Nuts");
orders.delete("Vanila");
console.log(orders.has("Vanila"));
console.log(orders);
orders.clear();
console.log(orders);

//Map
const rest = new Map();
rest
  .set(1, "test")
  .set(true, "We are open")
  .set(false, "we are close")
  .set("open", 11)
  .set("close", 22);
console.log(rest);
rest.get(true);
console.log(rest.has(1));
//rest.clear();
console.log(rest.size);
rest.delete(1);
console.log(rest);
let restTime = 21;
console.log(
  rest.get(restTime > rest.get("open") && restTime < rest.get("close"))
);
restTime = 10;
console.log(
  rest.get(restTime > rest.get("open") && restTime < rest.get("close"))
);
const arr = [1, 2, 3, 4, 5];
rest.set(arr, "numbers");
console.log(rest.get(arr));
const questions = new Map([
  ["question", "What is the most popular programming language?"],
  [1, "Python"],
  [2, "JavaScript"],
  [3, "C++"],
  ["answer", 1],
  [true, "You are correct"],
  [false, "Try again"],
]);
console.log(questions);

//Convert object to Map
// const hrMap = new Map(Object.entries(openHours));
// console.log(hrMap);
console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(questions.get(questions.get("answer") === answer));
console.log(...questions);
console.log(questions.entries());
console.log(questions.keys());
console.log(questions.values());
