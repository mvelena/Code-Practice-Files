"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");
console.log(button);
button.addEventListener("click", function () {
  const input = document.querySelector("textarea").value;
  document.querySelector("textarea").value = "";
  console.log("value of input", typeof input, input);
  let items = input.split("\n");
  console.log(items);
  for (let [i, item] of items.entries()) {
    if (item != " ") {
      const [first, second] = item.trim().toLowerCase().split("_");
      const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
      console.log(output);
      const check = "✔";
      document.querySelector("textarea").value += `${output.padEnd(
        20
      )}${check.repeat(i + 1)}\n`;
    }
  }
});
