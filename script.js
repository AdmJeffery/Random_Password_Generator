// Assignment Code
var generateBtn = document.querySelector("#generate");
 // initial variables
var charArray = "";
  const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const lowCase = "abcdefghijklmnopqrstuvwxyz".split('');
  const numbers ="0123456789".split('') ;
  const specChar = "!@#$%^&*(){}><?".split('');

  let useUpCase = false;
  let useLowCase = false;
  let useNumbers = false;
  let useSpecChar = false;

 var passLength = prompt("Pick the number of characters you would like in your password between 8 and 128.");

 if (passLength < 8 || passLength >128) {
   alert = "Please pick a number within the specified range."
   var passLength = prompt("Pick the number of characters you would like in your password between 8 and 128.");
 }


 

 function gatherInfo () {
  
  var useUpCase = confirm("Would you like to have upper case characters?");

  var useLowCase = confirm("Would you like to have lower case characters?");
 
  var useNumbers = confirm("Would you like to have numbers?");
 
  var useSpecChar = confirm("Would you like to incorporate special characters?");

 }

 function generateCharArray () {
  if (useUpCase === true){
    charArray.concat(upCase);
  }
  
  
 }
 
 
 
var i = 0;
 

 for (i=0; i<passLength; i++) {
password = password + charArray[Math.floor(Math.random() * charArray.length)]
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
