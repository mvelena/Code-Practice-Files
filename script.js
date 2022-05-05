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
