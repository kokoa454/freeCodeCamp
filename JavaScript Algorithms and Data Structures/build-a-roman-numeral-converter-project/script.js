const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output")

const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

function noInputErr(){
  output.style.backgroundColor = "#FF9999";
  output.style.color = "#F30100";
  output.style.fontSize = "30px";
  output.style.border = "5px solid #F30100";
  output.textContent = "Please enter a valid number."
  output.hidden = false;
}

function noExistErr(){
  output.style.backgroundColor = "#FF9999";
  output.style.color = "#F30100";
  output.style.fontSize = "30px";
  output.style.border = "5px solid #F30100";
  output.textContent = 'The concept of "0" does not exist in Roman numerals.';
  output.hidden = false;
}

function tooSmallErr(){
  output.style.backgroundColor = "#FF9999";
  output.style.color = "#F30100";
  output.style.fontSize = "30px";
  output.style.border = "5px solid #F30100";
  output.textContent = "Please enter a number greater than or equal to 1.";
  output.hidden = false;
}

function tooLargeErr(){
  output.style.backgroundColor = "#FF9999";
  output.style.color = "#F30100";
  output.style.fontSize = "30px";
  output.style.border = "5px solid #F30100";
  output.textContent = "Please enter a number less than or equal to 3999.";
  output.hidden = false;
}

function convertDecimalToRoman(){
  let num = parseInt(input.value);

  if(input.value.trim() === ""){
    noInputErr();
    return;
  } else if(num === 0){
    noExistErr();
    return;
  } else if(num <= -1){
    tooSmallErr();
    return;
  } else if(num >= 4000){
    tooLargeErr();
    return;
  }

  let result = "";

  for(let i = 0; i < decimal.length; i++){

    while(num >= decimal[i]){
      result += romanNumeral[i];
      num -= decimal[i];
    }

  }
  output.style.backgroundColor = "#3b3b4f";
  output.style.color = "#FFFFFF";
  output.style.fontSize = "45px";
  output.style.border = "5px solid #f5f5f5";
  output.textContent = result;
  output.hidden = false;
}

convertBtn.addEventListener("click", convertDecimalToRoman);
