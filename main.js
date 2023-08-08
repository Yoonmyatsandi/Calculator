const displayNum = document.querySelector(".number-dis");
const btns = document.querySelectorAll("button");
const opera = ["%","*","/","-","+","="];
let result = "";

const calc = (buttonVal) => {
  if(buttonVal === "=" && result !== ""){
    result = eval(result.replace("%", "/100"));
  }else if(buttonVal === "AC"){
    result = "";
  }else if(buttonVal === "DEL"){
    result = result.toString().slice(0,-1);
  }else{
    if(result === "" && opera.includes(buttonVal))return;
    result += buttonVal;
  }

  displayNum.value=result;
}

btns.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.dataset.value));
  });