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

  var i = 0;
  var passLength = "";


 


 

 function gatherInfo () {
  
  var passLength = prompt("Pick the number of characters you would like in your password between 8 and 128.");

 if (passLength < 8 || passLength >128) {
   alert = "Please pick a number within the specified range."
   var passLength = prompt("Pick the number of characters you would like in your password between 8 and 128.");
 }
  var useUpCase = confirm("Would you like to have upper case characters?");

  var useLowCase = confirm("Would you like to have lower case characters?");
 
  var useNumbers = confirm("Would you like to have numbers?");
 
  var useSpecChar = confirm("Would you like to incorporate special characters?");
  
  passLength.split(',').map(Number);
 }

 function generateCharArray () {
  if (useUpCase){
    charArray.concat(upCase);
  }
  
  if (useLowCase) {
    charArray.concat(lowCase);
  }

  if (useNumbers) {
    charArray.concat(numbers);
  }

  if (useSpecChar) {
    charArray.concat(specChar);
  }

 }
 

 

 
function generatePassword() {
	var password = "";  
	for (i=0; i<passLength; i++) {
    	password = password + charArray[Math.floor(Math.random() * charArray.length)]
	  }
	  return password;
}

// Write password to the #password input
function writePassword() {
  
  gatherInfo();
  generateCharArray();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
console.log(password);
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
