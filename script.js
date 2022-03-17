// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

//Generation code
function generatePassword() {
  var text;
  var wordLength = prompt("Enter the character length of your password (8-128): ");
 
  //if user enters a value of 7 or less, then end the process.
  if (wordLength < 8) {
      text = "Please enter a number equal to 8 or greater.";
      window.alert(text);
      return password = "Click Generate Password Again";
  }
  //if user enter a value of 129 or more, then end the process.
  else if (wordLength > 128) {
      text = "Please enter a number equal to 128 or less.";
      window.alert(text);
      return password = "Click Generate Password Again";
  }
  //if user enters a value within range, record the input into wordLength then prompt user for what they want, storing each choice in variables
  else if (wordLength >= 8 && wordLength <= 128) {
      var includeLowercase = confirm("Do you want your password to include lower case characters? \nClick OK for YES. \nClick CANCEL for NO.");
      var includeUppercase = confirm("Do you want your password to include upper case characters? \nClick OK for YES. \nClick CANCEL for NO.");
      var includeNumbers = confirm("Do you want your password to include numerical characters? \nClick OK for YES. \nClick CANCEL for NO.");
      var includeSpecial = confirm("Do you want your password to include special characters? \nClick OK for YES. \nClick CANCEL for NO.");
      
      //variables needed for generating the password
      var passwordCharacters = "";
      var charLowercase = "abcdefghijklmnopqrstuvwxyz";
      var charUppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charNumbers = "0123456789";
      var charSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      var newPassword = "";

      //if the user said NO to all character types, end the process.
      if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
        text = "Please select at least one character type.";
        window.alert(text);
        return password = "Click Generate Password Again";
      }
      //if the user said YES to any of these character types, add them to the string 'passwordCharacters'
      if (includeLowercase === true) {
        passwordCharacters += charLowercase;
      }
      if (includeUppercase === true) {
        passwordCharacters += charUppercase;
      }
      if (includeNumbers === true) {
        passwordCharacters += charNumbers;
      }
      if (includeSpecial === true) {
        passwordCharacters += charSpecial;
      }

      //using the Math function, we can randomly pick characters in the passwordCharacters string to the specified wordLength the user asked for earlier.
      for (var i = 0; i < wordLength; i++) {
        newPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }

      text = "Click OK to see your new password."
      window.alert(text);
      //return the new value of password out of the generatePassword() function so it is usable in the writePassword() function
      return password = newPassword;
  }

  else { 
      text = "Please enter a number.";
      window.alert(text);
      return password = "Click Generate Password Again";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
