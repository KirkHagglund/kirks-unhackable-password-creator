// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '?', ':'];
generatorArray = [];

//Creating initial function to run on the click event
function userSelect() {
  var passLength = prompt("Select a number between 8 and 128");
  if (isNaN(passLength)) {
    alert("Select a valid number");
  } else if (passLength < 8) {
    alert("Entry too small");
  } else if (passLength > 128) {
    alert("Entry too large");
  } else { //Wrapping the rest of this code in else function ensures that it only runs if given a valid input value
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
}; //At this point we have a valid value for passLength and have selected our characters to use 

  //Need to add a clause that ensures at least on of these variables is true
  if (upperYes == false && lowerYes == false && numberYes == false && specialYes == false) {
    alert("You must pick at least one character type");
  };
  //If condition is met, time to generate a password
};

function generatePassword() {
  //I need to use the passLength, the generatorArray, and math.floor and math.random to pull 8 - 128 characters into a variable.
  //Need to create an array whose length is determined by passLength, and who's strings are constructed by math.floor and math.random 
  //using generatorArray characters
  /*let createdPassword = {
    length: passLength,*/ //Can I use an object creation here?

    /*character = Math.floor(Math.random * generatorArray.length);
console.log(character);*/
  };


generateBtn.addEventListener("click", userSelect);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

