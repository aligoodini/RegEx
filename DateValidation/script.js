const btn = document.querySelector("button");
const dateInput = document.querySelector('input[type="date"]');

console.log(btn, dateInput);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(dateInput.value);

  let birthRegEx =
    /(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|((?<=0?[1-6])3[01]|(?<!0?[1-6])30))/g;

  let dateValid = birthRegEx.test(dateInput.value);

  console.log(dateValid);
});
