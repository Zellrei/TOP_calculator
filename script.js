let strCurrent =  '';
let topNum = '';
let chosenOperator ='';
let results = '';

function operate (operator, num1, num2) {
  switch (operator) {
    case "+": topNum = calcAdd(num1, num2); break;
    case "-": topNum = calcSubstract(num1, num2); break;
    case "x": topNum = calcMultiply(num1, num2); break;
    case "÷": topNum = calcDivide(num1, num2); break;
    case "" : topNum = strCurrent; strCurrent = ''; break;
  }

  chosenOperator = '';
  strCurrent = '';
  resultsDisplay.textContent = topNum;
  currentDisplay.textContent = strCurrent;
  operatorDisplay.textContent = chosenOperator;
  
  function calcAdd (a,b) {
    return Number(a) + Number(b);
  }
  
  function calcSubstract (a,b) {
    return Number(a) - Number(b);
  }
  
  function calcMultiply (a,b) {
    return Number(a) * Number(b);
  }
  
  function calcDivide (a,b) {
    if (b == '0') {clearCalc(); return '';} 
    return Number(a) / Number(b)
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

const resultsDisplay = document.getElementById("results-display");
const currentDisplay = document.getElementById("current-display");
const operatorDisplay = document.getElementById("operator-display");


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

keyAdd.addEventListener("click", function() {chooseOperator("+");}, false);
keySubstract.addEventListener("click", function() {chooseOperator("-");}, false);
keyMultiply.addEventListener("click", function() {chooseOperator("x");}, false);
keyDivide.addEventListener("click", function() {chooseOperator("÷");}, false);

keyEquals.addEventListener("click", function() {operate(chosenOperator, topNum, strCurrent)}, false);

keyUndo.addEventListener("click", function() {undoStrCurrent();}, false);
keyClear.addEventListener("click", function() {clearCalc();}, false);

// keyFloating.addEventListener("click", modifyStrCurrent('1'));

//keyboard version :
document.addEventListener('keydown', (event) => {
  
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
    case "Escape": clearCalc(); break;
    case "+" : chooseOperator("+"); break;
    case "-" : chooseOperator("-"); break;
    case "*" : chooseOperator("x"); break;
    case "/" : chooseOperator("÷"); break;
    case "Enter" : operate(chosenOperator, topNum, strCurrent); break;

    //case "." :
    //case "," : float;
  }
});


function modifyStrCurrent(keyPressed) {
  strCurrent += keyPressed;
  currentDisplay.textContent = strCurrent;
}

function chooseOperator(keyPressed) {
  if (strCurrent === '' && topNum === '') return;

  if (topNum !== '' && chosenOperator === '') {
    chosenOperator = keyPressed;
    operatorDisplay.textContent = chosenOperator;
  } else if (topNum !== '' && chosenOperator !== '') {
    operate(chosenOperator, topNum, strCurrent);
    chosenOperator = keyPressed;
    operatorDisplay.textContent = chosenOperator;
  } else {
    topNum = strCurrent;
    resultsDisplay.textContent = topNum;
    strCurrent = ''; 
    currentDisplay.textContent = strCurrent;
    chosenOperator = keyPressed;
    operatorDisplay.textContent = chosenOperator;
  } 
}

function clearCalc() {
  results = '';
  strCurrent = '';
  chosenOperator = '';
  topNum = '';
  resultsDisplay.textContent = '';
  currentDisplay.textContent = '';
  operatorDisplay.textContent = '';
}

function undoStrCurrent() {
  strCurrent = strCurrent.slice(0, -1);
  currentDisplay.textContent = strCurrent;
}

const debugBtn = document.getElementById('debug-btn');

function debugValues() {
  console.log(`strCurrent : ${strCurrent}`);
  console.log(`topNum : ${topNum}`);
  console.log(`chosenOperator : ${chosenOperator}`);
  console.log(`results : ${results}`);
  console.log("----------------");
} 

debugBtn.addEventListener("click", () => debugValues());