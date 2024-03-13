/*
 Loop
  For
   for ([1 intializing البداية] [2 condition الشرط] [3 update]) {
  // Block of cpde
 }
*/

/*for (i = 0; i < 10; i++) {
  console.log(i);
}
*/
//----------------------------------------------------------------------------------------

/*
  Loop
   - Loop on Sequences
*/

/*let myFriends = ["Osama", "Ahmed", "Sayed", "Ali"];

// console.log(myFriends[0]); // Osama
// console.log(myFriends[1]); // Ahmed
// console.log(myFriends[2]); // Sayed
// console.log(myFriends[3]); // Ali
// console.log(myFriends[4]); // Amira

for (let i = 0; i < 5; i++) {
  // console.log(i); // 0 1 2 3 4
  // console.log(myFriends[0]); // *5 Osama
  console.log(myFriends[i]); // Osama Ahmed Sayed Ali Undefined
}

for (let i = 0; i < 4; i++) {
  console.log(myFriends[i]); // Osama Ahmed Sayed Ali
}

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]); // Osama Ahmed Sayed Ali // myFriends.length = the number of array elements
}
*/

/*let myFriends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali"];

let onlyNames = [];

if (typeof myFriends[0] === "string") {
  onlyNames.push(myFriends[0]);
}
if (typeof myFriends[1] === "string") {
  onlyNames.push(myFriends[1]);
}
if (typeof myFriends[2] === "string") {
  onlyNames.push(myFriends[2]);
}
if (typeof myFriends[3] === "string") {
  onlyNames.push(myFriends[3]);
}

console.log(onlyNames); // (2) ['Osama', 'Ahmed']
*/

/*let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames); // (4) ['Osama', 'Ahmed', 'Sayed', 'Ali']
*/

//----------------------------------------------------------------------------------------

/*
  Loop
   - Nested Loops
*/

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`); // Keyboard Mouse Pen Pad Monitor
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
*/
/*
###############
# Keyboard
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
###############
# Mouse
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
###############
# Pen
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
############### 
# Pad
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
############### 
# Monitor
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
*/

//----------------------------------------------------------------------------------------

/*
  Loop Control
   - Break // stops the loop (note: print results before or after break)
   - Continue // (note: print results before or after continue)
   - Label // identifer for the loop // manage main loop from sub loop
*/

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

for (let i = 0; i < products.length; i++) {
  if (products[i] === "Pen") {
    break;
  }
  console.log(products[i]); // Keyboard Mouse
}

for (let i = 0; i < products.length; i++) {
  console.log(products[i]); // Keyboard Mouse Pen
  if (products[i] === "Pen") {
    break;
  }
}
*/

// let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];

// let colors = ["Red", "Green", "Black"];

// /*for (let i = 0; i < products.length; i++) {
//   console.log(products[i]); // Keyboard Mouse 10 20 Pen Pad 30 40 Monitor
//   if (typeof products[i] === "Number") {
//     continue;
//   }
// }
// */
// /*for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]); // Keyboard Mouse Pen Pad Monitor
// }
// */

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
*/

//----------------------------------------------------------------------------------------

/*
  Loop For Advanced Example // should print at first then increment
*/

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let colors = ["Red", "Green", "Black"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}
*/

//----------------------------------------------------------------------------------------

/*
Products Practice
*/

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
*/

//----------------------------------------------------------------------------------------

/*
  Loop
   - While // while condition is true the loop will continue until break when the condition become false
*/

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}
*/
// Keyboard Mouse Pen Pad Monitor iPhone

//----------------------------------------------------------------------------------------

/*
  Loop
   - Do / While // Do first then check the while condition // it (Do) the first phase of loop regardless of the condition is true or false
*/

/*let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);
*/

//----------------------------------------------------------------------------------------

/*
  Loop Challenge
*/

/*let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<div>We Have X Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    myAdmins.length = myAdmins.indexOf("Stop");
    document.write(`<div>We Have ${myAdmins.length} Admins</div><hr>`);
    for (let i = 0; i < myAdmins.length; i++) {
      document.write(`<div>`);
      document.write(`<p>The Admin For Team ${[i + 1]} Is ${myAdmins[i]}</p>`);
      document.write(`<h3>Team Members:</h3>`);

      let counter = 0;
      for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
          document.write(`<p>${++counter} - ${myEmployees[j]}</p>`);
        }
      }
      document.write(`<hr>`);
      document.write(`</div>`);
    }
  }
}
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
