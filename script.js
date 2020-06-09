// Assignment Code
var generateBtn = document.querySelector("#generate");
 // initial variables
var charArray = [];
  const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const lowCase = "abcdefghijklmnopqrstuvwxyz".split('');
  const numbers ="0123456789".split('') ;
  const specChar = "!@#$%^&*(){}><?".split('');

  let useUpCase = false;
  let useLowCase = false;
  let useNumbers = false;
  let useSpecChar = false;

  var i = 0;
  var passLength


 


 

 function gatherInfo () {
  
   	passLength = prompt("Pick the number of characters you would like in your password between 8 and 128.");

 	if (passLength < 8 || passLength >128) {
   		alert = "Please pick a number within the specified range."
   	 passLength = prompt("Pick the number of characters you would like in your password between 8 and 128.");
 }
 	passLength = parseInt(passLength);
   
	
	do {
		
		alert("You must select one of the following")
		
		useUpCase = confirm("Would you like to have upper case characters?");

   		useLowCase = confirm("Would you like to have lower case characters?");
 
   		useNumbers = confirm("Would you like to have numbers?");
 
		useSpecChar = confirm("Would you like to incorporate special characters?");
	   
}while (!(useUpCase || useLowCase || useNumbers || useSpecChar));
  

  	
 }

 function generateCharArray () {
  if (useUpCase){
    charArray = charArray.concat(upCase);
  }
  
  if (useLowCase) {
    charArray = charArray.concat(lowCase);
  }

  if (useNumbers) {
    charArray = charArray.concat(numbers);
  }

  if (useSpecChar) {
    charArray = charArray.concat(specChar);
  }

 }
 

 

 
function generatePassword() {
	var password = "";  
	for (i=0; i<passLength; i++) {
		var index = Math.floor(Math.random() * charArray.length);
    	password = password + charArray[index]
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
