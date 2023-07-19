const number = document.querySelector("#number");
const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let sum = 0;
  for (let i = 1; i < number.value; i++) {
    sum += i;
  }
  console.log(sum);
});
