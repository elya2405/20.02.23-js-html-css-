let example1 = document.querySelector("article");
console.log(example1);

let example2 = document.querySelector("P");
example2.textContent = "hello world";
example2.style.color = "tomato"; // изменили цвет текста
console.log(example2);

let example3 = document.querySelector(".example-3");
example3.textContent = example3.textContent + "bye"; //добавить текст
example3.style.fontSize = "20px"; // изменили размер текста
console.log(example3);

let example4 = document.querySelector("#example-4");
example4.textContent += "don't care"; // короткая версия добавить текст
example4.style.backgroundColor = "grey"; // фон
console.log(example4);

let example5 = document.querySelector("p:nth-child(4)");
example5.textContent = "i'm good "; // заменить текст
console.log(example5);

let example6 = document.querySelectorAll("article p");
for (let i = 0; i < example6.length; i++) {
  let paragraph = example6[i];
  paragraph.textContent += "💖";
}
//example6.style.margin = "40px";

//как создавать элементы в js
let example7 = document.createElement("p");
example7.textContent = "lorem ipsum";
document.body.append(example7); // append добавить элемент в конце, prepend добавляет в начало, добавляется только один элемент

example1.append(example7);

let example8 = document.createElement("ul");
example8.className = "example-8"; // связываем с css
document.body.prepend(example8);
for (let i = 1; i <= 10; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = "example" + i;
  listItem.style.color = "red";
  example8.append(listItem);
}
example8.style.listStyleType = "none";

let fruits = ["apple", "pear", "orange", "banana"];
let example9 = document.createElement("ul");
document.body.prepend(example9);
for (let i = 0; i < fruits.length; i++) {
  let listItem2 = document.createElement("li");
  listItem2.textContent = fruits[i];
  example9.append(listItem2);
}
