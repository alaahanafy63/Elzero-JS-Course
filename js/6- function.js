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

function showDetails(a = "Un", b = "0", c = "Yes") {
  let data = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      typeof a === "string" &&
      typeof b === "number" &&
      typeof c === "boolean"
    ) {
      console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
    } else {
      console.log(`Unknown`);
    }
  }
}
showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);
/*function calc(...numbers) {
  //   console.log(Array.isArray(numbers)); // true
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // results + results + numbers[i]
  }
  return `Final Result is ${result}`;
}
console.log(calc(10, 20, 10, 30, 50, 30)); // Final Result is 150


showInfo("Osama", 38, 20, "Yes", "HTML", "CSS");
*/
