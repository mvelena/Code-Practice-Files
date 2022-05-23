"use strict";
const bookings = [];
const createBooking = function (
  flightNum,
  passengerNum = 1,
  price = passengerNum * 100
) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};
createBooking("FA3");
createBooking("FA3", 5);
createBooking("FA3", undefined, 30);
createBooking("FA3");

const checkPrint = function (table = "Your", amount, tips = 0.2 * amount) {
  console.log(
    `${table} table: amount $${amount}, tips:$${tips}. Total amount is $${
      amount + tips
    }`
  );
};
checkPrint(undefined, 100);
checkPrint(1, 100, 50);
checkPrint(undefined, 100);
checkPrint(3, 100, 0);

//How Passing Arguments Works:Value vs.References
const flight = "A3";
let bag = 1;
const elena = {
  name: "Elena",
  passport: 123245,
};
const checkIn = function (flightNum, passenger) {
  bag += 1;
  flightNum = "L4";
  passenger.name = "Ms." + passenger.name;
  console.log(passenger);
};
checkIn(flight, elena);
console.log(flight);
console.log(bag);

//Return Function Name
console.log(`Function name is ${checkIn.name}.`);

//Function accepting Callback Function
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
//transformer("JavaScript is the best!", upperFirstWord);

// const upperLastWord = function (str) {
//   const arr = str.split(" ");
//   const lastWord = arr[arr.length - 1].toUpperCase();
//   console.log(lastWord);
//   console.log(arr);
//   arr.pop();
//   arr.join(" ") + lastWord;
//   return arr.join(" ") + " " + lastWord;
// };

const upperLastWord = function (str) {
  const arr = str.split(" ");
  const lastWord = arr.pop().toUpperCase();
  arr.push(lastWord);
  return arr.join(" ");
  // return arr.join(" ") + " " + lastWord;
};
transformer("JavaScript is the best!", upperLastWord);

//Function that returns function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Elena");
greet("Hellow")("Elena");

const greetNew = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetNew("Hola")("Maria");

// The call and apply methods
const delta = {
  airline: "Delta",
  code: "DL",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};
delta.book(123, "Elena");

const eagle = {
  airline: "Eagle",
  code: "EG",
  bookings: [],
};
//Does not work
//eagle.book(987, "Maria");

const book = delta.book;

//Call method of function
book.call(eagle, 333, "Olya");
console.log(eagle);

//Apply method of function
const flightDate = [44, "Ivan"];
book.apply(eagle, flightDate);
console.log(eagle);

//Bind method of function
const bookEG = book.bind(eagle);
bookEG(99, "Irina");
console.log(eagle);

const bookEG27 = book.bind(eagle, 27);
bookEG27("Valya");
console.log(eagle);

//Object and eventListener
eagle.planes = 300;
eagle.buyPlane = function () {
  console.log(`Number of planes before click ${this.planes}`);
  this.planes++;
  console.log(`Number of planes after click ${this.planes}`);
  console.log(this);
};
document
  .querySelector("button")
  .addEventListener("click", eagle.buyPlane.bind(eagle));

//Create new function with particular argument
const addTax = (rate, value) => value + rate * value;
const addVAT = addTax.bind(null, 0.23);
//addVAT(100);
console.log("Call function", addVAT(100));
//Create the same function using using return function
const addTax2 = function (rate) {
  return function (value) {
    console.log(rate * value + value);
  };
};
const addVAT2 = addTax2(0.23);
console.log(addVAT2(1000));
