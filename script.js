"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const input = document.querySelector("textarea").value;
  document.querySelector("textarea").value = "";
  let items = input.split("\n");
  for (const [i, item] of items.entries()) {
    if (item != " ") {
      const [first, second] = item.trim().toLowerCase().split("_");
      const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
      const check = "✔";
      document.querySelector("textarea").value += `${output.padEnd(
        20
      )}${check.repeat(i + 1)}\n`;
    }
  }
});

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightArr = flights.split("+");
console.log(flightArr);
const getCode = (str) => str.slice(0, 3).toUpperCase(0);
for (let [i, item] of flightArr.entries()) {
  item = item.replace(/_/g, " ");
  // const parts = item.split(";");
  // // console.log(parts);
  // const emoji = "❤";
  // console.log(
  //   `${i % 2 === 0 ? emoji : ""} ${parts[0]} from ${parts[1]
  //     .slice(0, 3)
  //     .toUpperCase()} to ${parts[2]
  //     .slice(0, 3)
  //     .toUpperCase()} (${parts[3].slice(0, 2)}h${parts[3].slice(3, 5)})`
  // );
  //Using Destructuring
  const [type, from, to, time] = item.split(";");
  const emoji = "❤";
  console.log(
    `${type.startsWith(" Delayed") ? emoji : ""} ${type} from ${getCode(
      from
    )} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(46)
  );
}
