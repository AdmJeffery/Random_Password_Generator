// Assignment Code
var generateBtn = document.querySelector("#generate");
 
var developPassword = "";
var finalPassword = "";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers ="0123456789" ;
  var specChar = "!@#$%^&*(){}><?";

 var passLength = prompt = "Pick the number of characters you would like in your password between 8 and 128.";

 if (passLength < 8 || [passLength >128]) {
   alert = "Please pick a number within the specified range."
   var passLength = prompt = "Pick the number of characters you would like in your password between 8 and 128.";
 }
 var yesUpCase = confirm ="Would you like to have upper case characters?";
 
 
 if (yesUpCase === true){

 }
 

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
