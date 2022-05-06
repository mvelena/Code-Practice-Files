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
