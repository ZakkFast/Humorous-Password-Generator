// Assignment Code
var generateBtn = document.querySelector("#generate")
.addEventListener('click', writePassword);

//Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","@","<","#","<","$","%","^","&","*","(",")","[","]","{","}","`",];

//Var Declaration
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;

//Prompt to confirm password length
function generatePassword(){
  var confirmLength = (prompt('Need a good Password huh? Lets do it! Enter how many characters you would like to use.'));

  //Loop is answer doesnt meet length requirements
  while(confirmLength <=7 || confirmLength >=129) {
    alert('Well.. I that didnt work..')
    var confirmLength = prompt('Lets try that again.. This time pick a 8-128. You can do it!')
  }
  //Confirms the length
  alert(`Your password will have ${confirmLength} characters, which oddly enough is my favorite number!`)

  //confirms parameters of the generated password
  var confirmLowerCase = (confirm("You're really good at clicking things! Last question. Lower case letters. Yay or nay?"))
  var confirmUpperCase = (confirm('Good work so far! Now are you wanting to use upper case letters? If so, you know the drill!'))
  var confirmNumericCharacter = (confirm('Sounds good, do you want to use numbers? If so, click "OK", if not go ahead and click "Cancel".'))
  var confirmSpecialCharacter = (confirm('Nice work! Now click "OK" if you want to use special characters, if not click "Cancel"'))

  //If no parameters are selected loops back to beginning
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("C'mon.. you've got to give me something to work with. Let's try that again. This time pick at least one option.")
    var confirmLowerCase = (confirm("You're really good at clicking things! Last question. Lower case letters. Yay or nay?"))
    var confirmUpperCase = (confirm('Good work so far! Now are you wanting to use upper case letters? If so, you know the drill!'))
    var confirmNumericCharacter = (confirm('Sounds good, do you want to use numbers? If so, click "OK", if not go ahead and click "Cancel".'))
    var confirmSpecialCharacter = (confirm('Nice work! Now click "OK" if you want to use special characters, if not click "Cancel"'))
  
  }

  //Generate password
  var passwordCharacters = []

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }
 
  var randomPassword = ''

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}