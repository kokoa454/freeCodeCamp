document.body.style.zoom = "175%";

const inputNum = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

const regex = [/^1?\s?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/];

function checkEnterNum(){
  if(inputNum.value === ""){
    alert("Please provide a phone number");
  } else {
    validateNum();
  }
}

function validateNum(){
  for(let i = 0; i < regex.length; i++){
    if(regex[i].test(inputNum.value)){
      results.textContent = "Valid US number: " + inputNum.value;
    } else {
      results.textContent = "Invalid US number: " + inputNum.value;
    }
  }
}

function clearEverything(){
  inputNum.value = "";
  results.textContent = ""
}

checkButton.addEventListener("click", checkEnterNum);
clearButton.addEventListener("click", clearEverything)
