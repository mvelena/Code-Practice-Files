"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");
console.log(button);

// const convert = function (input) {
//   console.log(input);
//   let items = input.split(" ");
//   for (let item of input) {
//     if (item != " ") {
//       //item.indexOf('_')
//       items = item.split("_");
//       items[1][0].toUpperCase();
//       item = items[0] + items[1][0].toUpperCase() + items[1].slice(1);
//       console.log(item);
//     }
//   }
// };

//button.addEventListener("onclick", convert(userInput));
button.addEventListener("click", function () {
  const input = document.querySelector("textarea").value;
  document.querySelector("textarea").value = "";
  console.log("value of input", typeof input, input);
  let items = input.split("\n");
  console.log(items);
  for (let item of items) {
    if (item != " ") {
      const [first, second] = item.trim().toLowerCase().split("_");
      const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
      //output.padEnd(20, "1");
      document.querySelector("textarea").value += `${output.padEnd(20)}✔\n`;

      //   items[1][0].toUpperCase();
      //   item = items[0] + items[1][0].toUpperCase() + items[1].slice(1) + "\n";

      //   document.querySelector("textarea").value += item;
    }
  }
});
