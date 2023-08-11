var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var Criteria = {
  Length: 0,
  LowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  UpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  Number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  Character: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "_", "`", "{", "}", "|", "\'", "~"]
}

function generatePassword() {
  var text = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;
  passwordLength = 0;
  Criteria.Length = 0;
  text = "";
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {
          showPrompts();
          while (Criteria.Length < passwordLength) {
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              if (lowerCase === true && Criteria.Length < passwordLength) {
                var lc = Criteria.LowerCase[Math.floor(Math.random() * 26)]
                text = text + lc;
                Criteria.Length++;
              }
              if (specialChar === true && Criteria.Length < passwordLength) {
                var sc = Criteria.Character[Math.floor(Math.random() * 30)]
                text = text + sc;
                Criteria.Length++;
              }
              if (upperCase === true && Criteria.Length < passwordLength) {
                var uc = Criteria.UpperCase[Math.floor(Math.random() * 26)]
                text = text + uc;
                Criteria.Length++;
              }
              if (numbers === true && Criteria.Length < passwordLength) {
                var num = Criteria.Number[Math.floor(Math.random() * 10)]
                text = text + num;
                Criteria.Length++;
              }
            }
          }
        }
      }
    }
    return text;
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}