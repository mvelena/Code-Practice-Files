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
