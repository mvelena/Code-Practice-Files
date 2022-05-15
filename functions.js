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

const upperLastWord = function (str) {
  const arr = str.split(" ");
  const lastWord = arr[arr.length - 1].toUpperCase();
  console.log(lastWord);
  console.log(arr);
  arr.pop();
  arr.join(" ") + lastWord;
  // console.log(arr);
  // //const newArr = arr.splice(-1, 1, lastWord);
  // const newArr = arr.splice(1, 0, lastWord);
  // console.log(arr.splice(1, 0, lastWord));
  // //console.log(newArr);
  return arr.join(" ") + " " + lastWord;
};

transformer("JavaScript is the best!", upperLastWord);
