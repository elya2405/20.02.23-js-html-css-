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
console.log(example4);

let example5 = document.querySelector("p:nth-child(4)");
example5.textContent = "i'm good "; // заменить текст
console.log(example5);
