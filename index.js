const navBtns = document.querySelectorAll(".navigation button");
const allWorld = document.querySelectorAll(".world");

// 1. Get all the buttons from your navigation
const navButtons = document.querySelectorAll(".navigation button");

// 2. Loop through each button using a standard function
navButtons.forEach(function (button) {
  // 3. Set up a "click" event for this button
  button.addEventListener("click", function () {
    // 4. Find the button that is currently active
    const currentActive = document.querySelector(".navigation button.active");

    // 5. If we found an active button, remove its 'active' class
    if (currentActive) {
      currentActive.classList.remove("active");
    }

    // 6. Add the 'active' class to the button you just clicked
    button.classList.add("active");

    const worldNumber = button.getAttribute("data-world");

    const currentActiveSection = document.querySelector(".world.active");
    if (currentActiveSection) {
      currentActiveSection.classList.remove("active");
    }
    const targetSection = document.getElementById("world" + worldNumber);

    if (targetSection) targetSection.classList.add("active");
  });
});

// simple discount calculator
const priceInput = document.getElementById("original-price");
const discountInput = document.getElementById("discount-percentage");
const discountBtn = document.getElementById("discount-calculate");
const discountResult = document.getElementById("discount-result");

function checkDiscountInputs() {
  const priceValue = priceInput.value;
  const discountValue = discountInput.value;

  // Checks if both inputs have numbers typed in them
  if (priceValue !== "" && discountValue !== "") {
    discountBtn.disabled = false;
  } else {
    discountBtn.disabled = true;
  }
}
priceInput.addEventListener("input", checkDiscountInputs);
discountInput.addEventListener("input", checkDiscountInputs);

discountBtn.addEventListener("click", function () {
  const priceValue = priceInput.value;
  const discountValue = discountInput.value;

  const discountAmount = (priceValue * discountValue) / 100;
  const finalPrice = priceValue - discountAmount;

  discountResult.textContent = finalPrice;
  discountResult.className = "result success";
});

// Basic Calculator
const basicCalInput1 = document.getElementById("basic-cal-input1");
const basicCalInput2 = document.getElementById("basic-cal-input2");
const basicCalBtns = document.querySelectorAll(".basicCal-btn");
const basicCalResult = document.getElementById("basic-cal-result");

// Enable/Disable buttons
function checkBasicCalInputs() {
  const val1 = basicCalInput1.value;
  const val2 = basicCalInput2.value;

  basicCalBtns.forEach(function (button) {
    button.disabled = val1 === "" || val2 === "";
  });
}

basicCalInput1.addEventListener("input", checkBasicCalInputs);
basicCalInput2.addEventListener("input", checkBasicCalInputs);

// Operation logic
basicCalBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    const num1 = parseFloat(basicCalInput1.value);
    const num2 = parseFloat(basicCalInput2.value);
    const operation = button.getAttribute("data-cal-op");

    let total;

    if (operation === "add") {
      total = num1 + num2;
    } else if (operation === "subtract") {
      total = num1 - num2;
    } else if (operation === "multiply") {
      total = num1 * num2;
    } else if (operation === "divide") {
      if (num2 === 0) {
        basicCalResult.textContent = "Cannot divide by zero";
        return;
      }
      total = num1 / num2;
    }

    basicCalResult.textContent = "Result: " + total;
    basicCalResult.className = "result info";
  });
});

// Factorial Calculator
const factorialInput = document.getElementById("factorial-cal-input");
const factorialBtn = document.getElementById("factorial-cal-calculate");
const factorialResult = document.getElementById("factorial-cal-result");

function checkFactorialInput() {
  const factorialVal = factorialInput.value;

  if (factorialVal !== "") {
    factorialBtn.disabled = false;
  } else {
    factorialBtn.disabled = true;
  }
}
factorialInput.addEventListener("input", checkFactorialInput);
factorialBtn.addEventListener("click", function () {
  const factorialNum = parseInt(factorialInput.value);

  if (isNaN(factorialNum) || factorialNum < 0) {
    factorialResult.textContent = "Enter a postive number.";
    return;
    factorialResult.className = "result error";
  }
  if (factorialNum > 20) {
    factorialResult.textContext = "Number too large (max 20).";
    return;

    factorialResult.className = "result error";
  }
  let result = 1;

  for (let i = 1; i <= factorialNum; i++) {
    result *= i;
  }

  factorialResult.textContent = factorialNum + "! = " + result;
  factorialResult.className = "result info";
});

// BMI calculator
const weight = document.getElementById("bmi-input1");
const height = document.getElementById("bmi-input2");
const bmiBtn = document.getElementById("bmi-calculate");
const bmiResult = document.getElementById("bmi-result");

function checkBmiInputs() {
  const bmiWeight = weight.value;
  const bmiHeight = height.value;

  if (bmiWeight !== "" && bmiHeight !== "") {
    bmiBtn.disabled = false;
  } else {
    bmiBtn.disabled = true;
  }
}
weight.addEventListener("input", checkBmiInputs);
height.addEventListener("input", checkBmiInputs);

bmiBtn.addEventListener("click", function () {
  const weightBmi = parseFloat(weight.value);
  const heightBmi = parseFloat(height.value);

  if (isNaN(weightBmi) || isNaN(heightBmi) || heightBmi <= 0) {
    bmiResult.textContent = "Enter valid values.";
    bmiResult.className = "result error";
    return;
  }

  const heightBmiM = heightBmi / 100;
  const bmi = weightBmi / (heightBmiM * heightBmiM);

  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  bmiResult.textContent = `BMI:  ${bmi.toFixed(2)} (${category})`;
  bmiResult.className = "result info";
});

// Interest calcukator
const price = document.getElementById("interest-input1");
const rateInterest = document.getElementById("interest-input2");
const years = document.getElementById("interest-input3");
const interestBtn = document.getElementById("interest-calculate");
const interestResult = document.getElementById("interest-result");

function checkInterestInputs() {
  const interestPrice = price.value;
  const interestRate = rateInterest.value;
  const interestYears = years.value;

  if (interestPrice !== "" && interestRate !== "" && interestYears !== "") {
    interestBtn.disabled = false;
  } else {
    interestBtn.disabled = true;
  }
}
price.addEventListener("input", checkInterestInputs);
rateInterest.addEventListener("input", checkInterestInputs);
years.addEventListener("input", checkInterestInputs);

interestBtn.addEventListener("click", function () {
  const interestPrice = parseFloat(price.value);
  const interestRate = parseFloat(rateInterest.value);
  const interestYears = parseFloat(years.value);

  if (isNaN(interestPrice) || isNaN(interestRate) || isNaN(interestYears)) {
    interestResult.textContent = "Enter valid numbers.";
    interestResult.className = "result error";
    return;
  }
  const interest = (interestPrice * interestRate * interestYears) / 100;
  const total = interestPrice + interest;

  interestResult.textContent = `Total: ${total.toFixed(2)} (Interest: ${interest.toFixed(2)})`;
  interestResult.className = "result info";
});

// Leap year
const leapInput = document.getElementById("leap-year-input1");
const leapBtn = document.getElementById("leap-year-calculate");
const leapResult = document.getElementById("leap-year-result");

function checkLeapInput() {
  const leapValue = leapInput.value;

  if (leapValue !== "") {
    leapBtn.disabled = false;
  } else {
    leapBtn.disabled = true;
  }
}
leapInput.addEventListener("input", checkLeapInput);
leapBtn.addEventListener("click", function () {
  const leapNum = parseInt(leapInput.value);

  if (leapNum % 400 === 0) {
    leapResult.textContent = `${leapNum} is a leap year`;
    leapResult.className = "result info";
  } else if (leapNum % 100 === 0) {
    leapResult.textContent = `${leapNum} is not a leap year`;
    leapResult.className = "result error";
  } else if (leapNum % 4 === 0) {
    leapResult.textContent = `${leapNum} is a leap year`;
    leapResult.className = "result info";
  } else {
    leapResult.textContent = `${leapNum} is not a leap year`;
    leapResult.className = "result error";
  }
});

// Voting Age Checker
const votingInput = document.getElementById("age-input1");
const votingBtn = document.getElementById("age-calculate");
const votingResult = document.getElementById("age-result");

function checkVotingInput() {
  const votingValue = votingInput.value;

  if (votingValue !== "") {
    votingBtn.disabled = false;
  } else {
    votingBtn.disabled = true;
  }
}
votingInput.addEventListener("input", checkVotingInput);
votingBtn.addEventListener("click", function () {
  const votingAge = parseInt(votingInput.value);

  if (votingAge < 18) {
    votingResult.textContent = "You are not eligible to vote.";
    votingResult.className = "result error";
  } else {
    votingResult.textContent = "You are eligible to vote.";
    votingResult.className = "result info";
  }
});

// Array Arena

