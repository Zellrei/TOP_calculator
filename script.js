function calcAdd (a,b) {
  return a + b;
}

function calcSubstract (a,b) {
  return a - b;
}

function calcMultiply (a,b) {
  return a * b;
}

function calcDivide (a,b) {
  return a / b;
}

function operate (operator, num1, num2) {
  switch (operator) {
    case "add": return calcAdd(num1, num2);
    case "substract": return calcSubstract(num1, num2);
    case "multiply": return calcMultiply(num1, num2);
    case "divide": return calcDivide(num1, num2);
  }
}