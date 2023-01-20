// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '?', ':'];
generatorArray = [];

function userSelect() {
  var passLength = prompt("Select a number between 8 and 128");
  if (isNaN(passLength)) {
    alert("Select a valid number");
  } else if (passLength < 8) {
    alert("Entry too small");
  } else if (passLength > 128) {
    alert("Entry too large");
  }

  
}


generateBtn.addEventListener("click", userSelect);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

