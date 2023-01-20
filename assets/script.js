// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '?', ':'];
generatorArray = [];
var passLength;
var randomPassword = "";
// Next code block is used to guarantee that if a character type is chosen, one of those is always included in the generated password
var guaranteedCount = 0;
function getRandomChar(array) {
 let index = 0;
    let randomChar = "";
      index = Math.floor(Math.random() * array.length);
      randomChar = array[index];
    return randomChar;
}
//Creating initial function to run on the click event
function userSelect() {
  passLength = prompt("Select a number between 8 and 128");
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
    randomPassword += getRandomChar(upperCaseSet);
    guaranteedCount += 1;
  };
  var lowerYes = confirm("Would you like to use lower case letters?");
  if (lowerYes == true) {
    generatorArray = generatorArray.concat(lowerCaseSet);
    randomPassword += getRandomChar(lowerCaseSet);
    guaranteedCount += 1;
  };
  var numberYes = confirm("Would you like to use numbers?");
  if (numberYes == true) {
    generatorArray = generatorArray.concat(numberSet);
    randomPassword += getRandomChar(numberSet);
    guaranteedCount += 1;
  };
  var specialYes = confirm("Would you like to use special characters?");
  if (specialYes == true) {
    generatorArray = generatorArray.concat(specialCharSet);
    randomPassword += getRandomChar(specialCharSet);
    guaranteedCount += 1;
  };
}; //At this point we have a valid value for passLength and have selected our characters to use 

  //Need to add a clause that ensures at least on of these variables is true
  if (upperYes == false && lowerYes == false && numberYes == false && specialYes == false) {
    alert("You must pick at least one character type");
  };
  //If condition is met, time to generate a password
  writePassword();
};

function generatePassword() {
  //I need to use the passLength, the generatorArray, and math.floor and math.random to pull 8 - 128 characters into a variable.
  //Need to create an index whose length is determined by passLength, and who's strings are constructed by math.floor and math.random 
  //using generatorArray characters
    let index = 0;
    let randomChar = "";
    for (let i = guaranteedCount; i < passLength; i++) {
      index = Math.floor(Math.random() * generatorArray.length);
      console.log("index= ", index);
      randomChar = generatorArray[index];
      console.log("randomChar= ", randomChar);
      randomPassword = randomPassword + randomChar;  //Can be written shorthand as randomPassword += randomChar
      console.log("randomPassword= ", randomPassword);
    }
    return randomPassword;   

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

