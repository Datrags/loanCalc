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
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");

  amount.value = 100000;
  years.value = 12;
  rate.value = 0.06;

  let monthlyPayment = calculateMonthlyPayment({
    amount: amount.value,
     years: years.value, 
     rate: rate.value
  });
  //updateMonthly(monthlyPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = values.rate / 12;
  const n = values.years * 12;

  let output = ((P * i)/(1 - Math.pow((1 + i), -n))).toFixed(2)

  return String(output);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const output = document.getElementById("monthly-payment");
  output.innerHTML = monthly;
}
