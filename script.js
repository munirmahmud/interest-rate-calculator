let calculateBtn = document.getElementById("calculate");
let result = document.getElementById("result");

let calculate = () => {
  let principal = Number(document.getElementById("principal").value);
  let rate = Number(document.getElementById("rate").value);
  let years = Number(document.getElementById("years").value);

  let simpleInterest = (principal * rate * years) / 100;

  let amount = principal + simpleInterest;

  document.getElementById("principalAmount").innerHTML = principal.toFixed(2);
  document.getElementById("totalInterest").innerHTML =
    simpleInterest.toFixed(2);
  document.getElementById("totalAmount").innerHTML = amount.toFixed(2);
};

calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);
