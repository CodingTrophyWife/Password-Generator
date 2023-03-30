// Assignment Code
var generateBtn = document.querySelector("#generate");

// will have to make arrays of lower and upper letters, numbers and symbols


// make generatePassword function
// prompt for password lemgth is number
// if statement is number is above 8 and below 128
// confirm for lowercase, uppercase,numeric and special characters
// store there responce in a variable
// if statement for each confirm and if it is a yes or true i would push or add random charactors to a big array of all charactors selected so far.
// for loop while i is less than there answer for num length prompt
// in this for loop we would randonmly pull characters from the big array
// pull random characters from the array using math.random
// have a var declared above the for loop 
// that var += therandomchar
// return the password var


// dont touch html or css 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialChars = ['!','@','#','$','%','^','&','*'];
  var allowedCharacters = [];

  
  // Prompt until user enters a valid value between 8 and 128 without allowing characters
  var passwordLength;
  var numRegex = /^[0-9]+$/;
  do {
    passwordLength = prompt("How many characters do you want loser?");

    if (!passwordLength.match(numRegex) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid input Dummy, input must be a number between 8 and 128");
    }
  } while (!passwordLength.match(numRegex) || passwordLength < 8 || passwordLength > 128)

  // Check if user wants uppercase characters and if so add them to allowedCharacters array
  var useUpperCase = confirm("Allow uppercase characters?");
  if (useUpperCase) {
    for (var i = 0; i < uppercaseChars.length; i++) {
      allowedCharacters.push(uppercaseChars[i]);
    }
  }

  // Check if user wants lowercase characters and if so add them to allowedCharacters array
  var useLowerCase = confirm("Allow lowercase characters?");
  if (useLowerCase) {
    for (var i = 0; i < lowercaseChars.length; i++) {
      allowedCharacters.push(lowercaseChars[i]);
    }
  }

  // Check if user wants numbers and if so add to allowedCharacters array
  var useNumbers = confirm("Allow numbers?");
  if (useNumbers) {
    for (var i = 0; i < numbers.length; i++) {
      allowedCharacters.push(numbers[i]);
    }
  }

  // Check if user wants special characters and if so add to allowedCharacters array
  var useSpecialCharacters = confirm("Allow special characters");
  if (useSpecialCharacters) {
    for (var i = 0; i < specialChars.length; i++) {
      allowedCharacters.push(specialChars[i]);
    }
  }
  
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    randomChar = Math.floor(Math.random() * allowedCharacters.length) + 1;
    password += allowedCharacters[randomChar];
  }

  return password;
 }
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
