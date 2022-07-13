

// Assignment Code
var generateBtn = document.querySelector("#generate");
var Requirments = {
  Length: 0,
  LowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  UpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  Number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  Special: ["!","@","#","$","%","^","&","*","(",")","_"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {

  var result = "";
  var lengthPassword = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var symbols;
  //Initialize
  lengthPassword = 0;
  Requirments.Length = 0;
  result = "";

  while (lengthPassword < 8 || lengthPassword > 128) {
    lengthPassword = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");
    
    if (lengthPassword === null) {
      return "Select Button";
    }
    else {
      if (!isFinite(lengthPassword)) {
        alert("You did not enter a number");
        return "Select Button";
      }
      else {
        if (lengthPassword < 8 || lengthPassword > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Select Button";
        }
        else {
          showPrompts();
          while (Requirments.Length < lengthPassword) {

            if (lowerCase === false && upperCase === false && numbers === false && symbols === false) {
              alert("You must select one of the following")
              showPrompts();
            }
            else {

              if (lowerCase === true && Requirments.Length < lengthPassword) {
                var lower = Requirments.LowerCase[Math.floor(Math.random() * 26)]
                result = result + lower;
                Requirments.Length++;
              }

              if (upperCase === true && Requirments.Length < lengthPassword) {
                var upper = Requirments.UpperCase[Math.floor(Math.random() * 26)]
                result = result + upper;
                Requirments.Length++;
              }

              if (numbers === true && Requirments.Length < lengthPassword) {
                var num = Requirments.Number[Math.floor(Math.random() * 10)]
                result = result + num;
                Requirments.Length++;
              }

              if (symbols === true && Requirments.Length < lengthPassword) {
                var sym = Requirments.Special[Math.floor(Math.random() * 11)]
                result = result + sym;
                Requirments.Length++;
              }

            }
          }
        }
      }
    }
    // final password
    return result;

    function showPrompts() {
      lowerCase = confirm("Would you like lower-case letters?");
      upperCase = confirm("Would you like upper-case letters?");
      numbers = confirm("Would you like numbers?");
      symbols = confirm("Would you like any symbols?");
    }
  }
}