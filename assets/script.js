// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*What do I want to happen here? 
First interaction is the click generate password button
button click needs to generate prompts for user input
input needs to cover length, between 8 and 128 characters
also needs to cover character types 
input answers must be validated,
after final prompt, password needs to generate and displayed in an alert 
or written on the page.*/