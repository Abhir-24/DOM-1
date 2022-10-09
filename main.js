var x = document.querySelectorAll("");

document.getElementById("demo").innerHTML = "Hello Dolly.";

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const move = () => {
  const currency_one = currencyEl_one.value;
  const currency_two =curTwoo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      //  console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    });
}

move();


const formContent = () => {
  const currency_one = currencyEl_one.value;
  const currency_two =curTwoo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      //  console.log(data);
      const formRate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    });
}
