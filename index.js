console.log(validatePassword("Helloworld", "hello")); // returns false
console.log(validatePassword("hello", "hello")); // returns false
console.log(validatePassword("hello1234", "hello1234")); // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234")); // returns false

function validatePassword(pass, x) {
  var Upper = false;
  var lower = false;
  var num = false;

  if (pass == x && pass.length >= 8) {
    for (var i = 0; i < pass.length; i++) {
      let char = pass[i];
      if (char >= "A" && char <= "Z") {
        Upper = true;
      }
      if (char >= "a" && char <= "z") {
        lower = true;
      }
      if (char >= "0" && char <= "9") {
        num = true;
      }
    }

    if (Upper && lower && num) {
      return true;
    }

    return false;
  } else {
    return false;
  }
}

console.log(reversePass("Helloworld")); // returns false
console.log(reversePass("hello")); // returns false
console.log(reversePass("hello1234")); // returns false
console.log(reversePass("Hello1234")); // returns true
console.log(reversePass("HELLO1234"));

function reversePass(pass) {
  let reversed = "";
  let char;
  for (var i = pass.length; i >= 0; i--) {
    char = pass.charAt(i);
    reversed += char;
  }
  return reversed;
}
let passArr;
passArr = storePass("John", "Pass1234", "Pass1234");
console.log("name: " + passArr[0] + " newPassword: " + passArr[1]);

passArr = storePass("John", "Pass123", "Pass12345");
console.log("name: " + passArr[0] + " newPassword: " + passArr[1]);

function storePass(name, pass1, pass2) {
  let passArr;
  if (validatePassword(pass1, pass2)) {
    passArr = [name, reversePass(pass1)];
  } else {
    passArr = [name, pass1];
  }

  return passArr;
}
