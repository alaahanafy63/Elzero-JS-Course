/*
  Function
    - What is function?
    - User defined VS Built in
    - Syntax + Basic usage  // function and call it
    - Example from real life
    - Parameter + Argument
    - Practical Example
*/

//console.log(typeof console.log); // function

/*function sayHello() {
  console.log(`Hello Osama`);
}

sayHello(); // Hello Osama
*/

/*function sayHello(userName) {
  console.log(`Hello ${userName}`);
}

sayHello("Osama"); // Hello Osama
*/

/*function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama"); // Hi Osama
sayHello("Sayed"); // Hi Sayed
sayHello("Ali"); // Hi Ali
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function Advanced Example
*/

/*function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38); // Hello Osama Your Age is 38
sayHello("Sayed", 40); // Hello Sayed Your Age is 40
sayHello("Ali", 18); // App is Not Suitable For You

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function
   - Return // must be without a new line and no code after return keyword
   - Automatic Semicolon Insertion [No Line Terminator Allowed]
   - Interrupting
*/

/*function sayHello(username) {
  return `Hello ${username}`;
}

let result = sayHello("Osama");

console.log(result); // Hello Osama
*/

/*function calc(num1, num2) {
  return num1 + num2;
}

let result = calc(10, 20);

console.log(result + 100); // 130
*/

/*function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`; // stop excution of the code inside loop
    }
    console.log(i);
  }
}

generate(10, 20);
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function
   - Default function parameters
   - Function parameter default [Undefined]
   - old strategies [condition + logical Or]
   - ES6 Method (for defautlt value of parameter)
*/

/*function sayHello(userName = "Unknown", age = "Unknown") {
  //   if (age === undefined) {
  //     age = "Unknown";
  //   }
  //   age = age || "Unknown";
  return `Hello ${userName} Your Age is ${age}`;
}

console.log(sayHello("Osama")); // Hello Osama Your Age is Unknown
console.log(sayHello()); // Hello Unknown Your Age is Unknown
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function
   - Rest parameters // to recieve unknown number of parameters in the function in one array (array of arguments) (syntax/...+argument)
   - Only one allowed
   - Must be last element
*/

/*function calc(...numbers) {
  //   console.log(Array.isArray(numbers)); // true
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // results + results + numbers[i]
  }
  return `Final Result is ${result}`;
}
console.log(calc(10, 20, 10, 30, 50, 30)); // Final Result is 150
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

/*function showInfo(us = "Un", ag = "Un", rt = "0", show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "Yes", "HTML", "CSS");
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function Random Argument Challenge
  ==================================
  Create function showDetails
  Function Accept 3 parameters [a, b, c]
  Data Types for Info is 
   - String => Name
   - Number => Age
   - Boolean => Status
   Argument is random
   Data is not sorted output depend on data types
   - use Ternary conditional operator
*/

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*function showDetails(...data) {
  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 0; i < data.length; i++) {
    typeof data[i] === "string" ? (a = data[i]) : a;
    typeof data[i] === "number" ? (b = data[i]) : b;
    typeof data[i] === "boolean" ? (c = data[i]) : c;
  }
  c ? (c = "Available") : (c = "Not Available");
  console.log(`Hello ${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
}
*/

/*function showDetails(...data) {
  let name = 0;
  let age = 0;
  let status = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
      name = data[i];
    } else name = name;
    if (typeof data[i] === "number") {
      age = data[i];
    } else age = age;
    if (typeof data[i] === "boolean") {
      if (data[i] === true) {
        status = "Available";
      } else status = "Not Available";
    } else status = status;
  }
  console.log(`Hello ${name}, Your Age Is ${age} ,You Are ${status} For Hire`);
}

showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);
*/

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Function And Parameters Assignments */
/* Assignement 1 */

// function sayHello(theName, theGender) {
//   if (theGender === "Male") {
//     console.log(`Hello Mr ${theName}`);
//   } else if (theGender === "Female") {
//     console.log(`Hello Miss ${theName}`);
//   } else {
//     console.log(`Hello ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"
// // -------------------------------------------------------------------------------------------------------------

/* Assignement 2 */
// function calculate(firstNum, secondNum, operation) {
//   let result = firstNum + secondNum;
//   if (operation === "add") {
//     result = firstNum + secondNum;
//     console.log(result);
//   } else if (operation === "subtract") {
//     result = firstNum - secondNum;
//     console.log(result);
//   } else if (operation === "multiply") {
//     result = firstNum * secondNum;
//     console.log(result);
//   } else if (secondNum === undefined) {
//     console.log(`Second Number Not Found`);
//   } else {
//     console.log(result);
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600
// -------------------------------------------------------------------------------------------------------------

/* Assignement 3 */
// function ageInTime(theAge) {
//   let months = theAge * 12;
//   let weeks = months * 4;
//   let days = weeks * 7;
//   let minutes = days * 24;
//   let seconds = minutes * 60;
//   if (theAge > 10 && theAge < 100) {
//     console.log(`${months} Months`);
//     console.log(`${weeks} Weeks`);
//     console.log(`${days} Days`);
//     console.log(`${minutes} Minutes`);
//     console.log(`${seconds} Seconds`);
//   } else {
//     console.log(`Age Out Of Range`);
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months
// -------------------------------------------------------------------------------------------------------------

/* Assignement 5 */
// function createSelectBox(startYear, endYear) {
//   document.write(`<div>`);
//   document.write(`<select>`);

//   for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option value= ${i}>`);
//     document.write(i);
//     document.write(`</option>`);
//   }

//   document.write(`</select>`);
//   document.write(`</div>`);
// }
// createSelectBox(2000, 2021);
// -------------------------------------------------------------------------------------------------------------

/* Assignement 6 */
// function multiply(...numbers) {
//   let result = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === "string") {
//       continue;
//     } else {
//       result *= Math.trunc(numbers[i]);
//     }
//   }
//   console.log(result);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
// -------------------------------------------------------------------------------------------------------------

/*
  Anonymous Function
  - Anonymous function
  - Calling named function VS Anonymous function
  - Argument to other function
  - Task without name
  - SetTimeout
*/

/*let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20));
*/

/*function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;
*/

/*setTimeout(function () {
  console.log("Good");
}, 2000);
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

/*function sayMessage(fName, lName) {
  let message = "Hello";
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }

  concatMsg();

  return message;
}

console.log(sayMessage("Osama", "Mohamed"));
*/

// Example 2

/*function sayMessage(fName, lName) {
  let message = "Hello";
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));
*/

// Example 3

/*function sayMessage(fName, lName) {
  let message = "Hello";
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function
  - Arrow function
   - Regular VS Arrow [parm + No Parm]
   - Multiple Lines // accepts only one statement
*/

/* Regular function
// let print = function () {
//   return 10;
// };
*/

/* Arrow function no parameter
let print = () => 10;
console.log(print());

 /* Arrow function // shortcut
let prints = (_) => 10;
console.log(prints());
*/

/* Arrow function with one parameter
// let print = function (num) {
//   return num;
// };
//--------------------------------------
// let print = (num) => num;

console.log(print(100));
*/

/* Arrow function with two parameter
// let print = function (num1, num2) {
//   return num1 + num2;
// };
//--------------------------------------
let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Scope
  - Globbal and Local
*/

/*var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Scope
  - Block scope [IF, Switch, For]
*/

/*var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);
*/

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// -------------------------------------------------------------------------------------------------------------

/*
  Scope
  - Lexical Scope

    Search
  - Excution Context
  - Lexical Environment
*/

/*function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Ghild ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();
*/

// -------------------------------------------------------------------------------------------------------------

/*
  Function Arrow Challenges
*/

// [1] One statement in function
// [2] Convert to Arrow function
// [3] Print the output [ Arguments May Changy]

// let names = function (...fNames) {
//   // parameters ?
//   names = fNames;
//   return `String [${fNames[0]}], [${fNames[1]}], [${fNames[2]}], [${fNames[3]}] => Done !`;
// };

// let names = (...fNames) =>
//   `String [${fNames[0]}], [${fNames[1]}], [${fNames[2]}], [${fNames[3]}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ==================================== */

// [1] Replace ??? in return statement to get the output
// [2] Create the same function with regular syntax
// [3] Use array inside the arguments to get the output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[+false];

// console.log(calc(10, myNumbers[0], myNumbers[1])); //80

// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...nums) {
//   console.log(nums);
//   return one + two + nums[+false];
// };

// console.log(calc(10, myNumbers[0], myNumbers[1])); //80

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Function And Scopes Assignments */
/* Assignement 1 */
// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     // Write Your Code Here
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//     return `Hello ${zName.slice(0, 6)} ${zName.charAt(6).toUpperCase()}`;
//   }
//   namePattern(zName);
//   function ageWithMessage(zAge) {
//     // Write Your Code Here
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//     return `Your Age Is ${parseInt(zAge)}`;
//   }
//   ageWithMessage(zAge);
//   function countryTwoLetters(zCountry) {
//     // Write Your Code Here
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//     return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
//   }
//   countryTwoLetters(zCountry);
//   function fullDetails() {
//     // Write Your Code Here
//     return `Hello ${zName.slice(0, 6)}${zName
//       .charAt(6)
//       .toUpperCase()}., Your Age Is ${parseInt(zAge)}, You Live In ${zCountry
//       .slice(0, 2)
//       .toUpperCase()}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// -------------------------------------------------------------------------------------------------------------

/* Assignement 2 */
// function itsMe() {
//   return `Iam A Normal Function`;
// }

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// let urlCreate = (protocol, web, tld) => {
//   return `${protocol}://www.${web}.${tld}`;
// };

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// -------------------------------------------------------------------------------------------------------------

/* Assignement 4 */
// function specialMix(...data) {
//   let result = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (isNaN(parseInt(data[i])) === false) {
//       result += parseInt(data[i]);
//     }
//   }
//   if (result === 0) {
//     return `All Is String`;
//   }
//   return result;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
