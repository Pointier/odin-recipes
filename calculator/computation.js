function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  console.log("multiply");
  return a * b;
}

function divide(a, b) {
  console.log("divide");
  if (b === 0) {
    return "can't divide by zero you noob";
  }
  return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(firstNumber, secondNumber, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = substract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
    default:
      break;
  }
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  return result;
}

let currentValue;

function displayValue(value) {
  const outputDisplay = document.getElementById("result");
  if (currentValue) {
    currentValue += value;
  } else {
    currentValue = value;
  }
  console.log(currentValue);
  outputDisplay.textContent = currentValue;
}

function assignFunction(button) {
  const outputDisplay = document.getElementById("result");
  if (button.classList.contains("operand")) {
    if (!currentValue) {
      displayValue(button.value);
    } else if (button.value == "." && currentValue.includes(".")) {
    } else {
      displayValue(button.value);
    }
  }
  if (button.classList.contains("clear")) {
    currentValue = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    outputDisplay.textContent = "";
  }
  if (button.classList.contains("operator")) {
    if (operator === "") {
      firstNumber = parseFloat(currentValue);
      currentValue = "";
      operator = button.value;
    } else {
      secondNumber = parseFloat(currentValue);
      currentValue = "";
      const result = operate(firstNumber, secondNumber, operator);
      operator = button.value;
      outputDisplay.textContent = result;
      if (button.value != "=") {
        firstNumber = result;
        secondNumber = 0;
      } else {
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
      }
    }
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    assignFunction(button);
  });
});
