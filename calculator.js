window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 50000,
    years: 10,
    rate: 10,
  };
  let amountField = document.getElementById("loan-amount");
  amountField.value = values.amount;
  let yearField = document.getElementById("loan-years");
  yearField.value = values.years;
  let rateField = document.getElementById("loan-rate");
  rateField.value = values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIvalues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIvalues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

const interest = (values.rate / 100) / 12;
  const n = values.years * 12;
  return (
    (interest * values.amount) /
    (1 - Math.pow((1 + interest), -n))
  ).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayout = document.getElementById("monthly-payment");
  monthlyPayout.innerText = `You get ${monthly} dollar per month` ;
}
