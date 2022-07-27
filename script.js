let strCurrent =  '';

function operate (operator, num1, num2) {
  switch (operator) {
    case "add": return calcAdd(num1, num2);
    case "substract": return calcSubstract(num1, num2);
    case "multiply": return calcMultiply(num1, num2);
    case "divide": return calcDivide(num1, num2);
  }

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
}

const key1 = document.getElementById("key-1");
const key2 = document.getElementById("key-2");
const key3 = document.getElementById("key-3");
const key4 = document.getElementById("key-4");
const key5 = document.getElementById("key-5");
const key6 = document.getElementById("key-6");
const key7 = document.getElementById("key-7");
const key8 = document.getElementById("key-8");
const key9 = document.getElementById("key-9");
const key0 = document.getElementById("key-0");
const keyFloating = document.getElementById("floating");
const keyEquals = document.getElementById("equals");
const keyAdd = document.getElementById("key-add");
const keySubstract = document.getElementById("key-substract");
const keyMultiply = document.getElementById("key-multiply");
const keyDivide = document.getElementById("key-divide");
const keyUndo = document.getElementById("undo");
const keyClear = document.getElementById("clear");

const display = document.getElementById("results-display");
display.textContent = strCurrent;


key1.addEventListener("click", function() {modifyStrCurrent('1');}, false);
key2.addEventListener("click", function() {modifyStrCurrent('2');}, false);
key3.addEventListener("click", function() {modifyStrCurrent('3');}, false);
key4.addEventListener("click", function() {modifyStrCurrent('4');}, false);
key5.addEventListener("click", function() {modifyStrCurrent('5');}, false);
key6.addEventListener("click", function() {modifyStrCurrent('6');}, false);
key7.addEventListener("click", function() {modifyStrCurrent('7');}, false);
key8.addEventListener("click", function() {modifyStrCurrent('8');}, false);
key9.addEventListener("click", function() {modifyStrCurrent('9');}, false);
key0.addEventListener("click", function() {modifyStrCurrent('0');}, false);


keyUndo.addEventListener("click", function() {undoStrCurrent();}, false);
keyClear.addEventListener("click", function() {clearStrCurrent();}, false);

// keyFloating.addEventListener("click", modifyStrCurrent('1'));
// keyEquals.addEventListener("click", modifyStrCurrent('1'));
// keyAdd.addEventListener("click", modifyStrCurrent('1'));
// keySubstract.addEventListener("click", modifyStrCurrent('1'));
// keyMultiply.addEventListener("click", modifyStrCurrent('1'));

//keyboard version :
document.addEventListener('keydown', (event) => {
  console.log(event.key);
  switch (event.key) {
    case "1": modifyStrCurrent('1'); break;
    case "2": modifyStrCurrent('2'); break;
    case "3": modifyStrCurrent('3'); break;
    case "4": modifyStrCurrent('4'); break;
    case "5": modifyStrCurrent('5'); break;
    case "6": modifyStrCurrent('6'); break;
    case "7": modifyStrCurrent('7'); break;
    case "8": modifyStrCurrent('8'); break;
    case "9": modifyStrCurrent('9'); break;
    case "0": modifyStrCurrent('0'); break;
    case "Backspace": undoStrCurrent(); break;
    case "Delete":
    case "Escape": clearStrCurrent(); break;
    //case "Enter" : TODO break;
    //case float et operators
  }
});





function modifyStrCurrent(keyPressed) {
  strCurrent += keyPressed;
  display.textContent = strCurrent;
}

function clearStrCurrent() {
  strCurrent = '';
  display.textContent = strCurrent;
}

function undoStrCurrent() {
  strCurrent = strCurrent.slice(0, -1);
  display.textContent = strCurrent;
}