const number1 = document.querySelector("#number1");
const button1 = document.querySelector("#button1");

button1.addEventListener("click", function (e) {
  e.preventDefault();
  let sum = 0;
  for (let i = 1; i < number1.value; i++) {
    sum += i;
  }
  console.log(sum);
});
const number2 = document.querySelector("#number2");
const button2 = document.querySelector("#button2");

button2.addEventListener("click", function (e) {
  e.preventDefault();
  let times = 1;
  for (let i = 1; i < number2.value; i++) {
    times *= i;
  }
  console.log(times);
});
