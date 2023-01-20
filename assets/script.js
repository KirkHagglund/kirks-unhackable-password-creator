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
  }; 
  //Need a way to loop back to first prompt if invalid input received
  var upperYes = confirm("Would you like to use uppercase letters?");
  if (upperYes == true) {
    generatorArray = generatorArray.concat(upperCaseSet);
  };
  var lowerYes = confirm("Would you like to use lower case letters?");
  if (lowerYes == true) {
    generatorArray = generatorArray.concat(lowerCaseSet);
  };
  var numberYes = confirm("Would you like to use numbers?");
  if (numberYes == true) {
    generatorArray = generatorArray.concat(numberSet);
  };
  var specialYes = confirm("Would you like to use special characters?");
  if (specialYes == true) {
    generatorArray = generatorArray.concat(specialCharSet);
  };

  //Need to add a clause that ensures at least on of these variables is true
  if (upperYes == false && lowerYes == false && numberYes == false && specialYes == false) {
    alert("You must pick at least one character type");
  };
  //If condition is met, time to generate a password
};

//I need to make sure the passLength question loops for invalid input

function generatePassword() {
  //I need to use the passLength, the generatorArray, and math.floor and math.random to pull 8 - 128 characters into a variable.
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

