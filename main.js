const displayNum = document.querySelector(".number-dis");
const btns = document.querySelectorAll("button");
let result = "";

const handleButtonClick = (buttonVal) => {
  if (buttonVal === "=") {
    calculateResult();
  } else if (buttonVal === "AC") {
    clearAll();
  } else if (buttonVal === "DEL") {
    deleteLastChar();
  } else {
    addToResult(buttonVal);
  }

  updateDisplay();
};

const calculateResult = () => {
  if (result !== "") {
    result = eval(result.replace("%", "/100"));
  }
};

const clearAll = () => {
  result = "";
};

const deleteLastChar = () => {
  result = result.slice(0, -1);
};

const addToResult = (buttonVal) => {
  if (result === "" && isNaN(buttonVal)) return;
  result += buttonVal;
};

const updateDisplay = () => {
  displayNum.value = result;
};

btns.forEach((button) => {
  button.addEventListener("click", (e) => handleButtonClick(e.target.dataset.value));
});
