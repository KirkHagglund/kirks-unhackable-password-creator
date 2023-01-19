// Assignment Code //Done
let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ":", ";", "?"];
let charLength = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword); 

/*What do I want to happen here? 
First interaction is the click generate password button
button click needs to generate prompts for user input
input needs to cover length, between 8 and 128 characters
also needs to cover character types 
input answers must be validated,
after final prompt, password needs to generate and displayed in an alert 
or written on the page.*/
