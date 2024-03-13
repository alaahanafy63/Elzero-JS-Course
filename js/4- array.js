/*
 Arrays
  - create arrays [two methods] new Array() + []
  - Access arrays elements
  - Nasted arrays
  - change arrays elements
  - check for array: Array.isArray(arr); // to check if the element is array or not
*/

/*let myFriends = ["Ahmed", "Mohamed", "sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`); // Hello Ahmed
console.log(`Hello ${myFriends[2]}`); // Hello sayed
console.log(`${myFriends[1][2]}`); // h
console.log(`Hello ${myFriends[3][1]}`); // Hello Ali
console.log(`${myFriends[3][1][2]}`); // i

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = "Sameh";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends)); // true
*/

//----------------------------------------------------------------------------------------

/*
 Arrays Methods
  - length
*/

// Index start from 0 [0, 1, 2, 3, 4]

/*let myFriends = ["Ahmed", "Mohamed", "Sayed", " Alaa", "Osama"];
console.log(myFriends.length);*/ // 4

/*myFriends[3] = "Gamal";
console.log(myFriends);*/ // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']

/*myFriends[6] = "Gamal";
console.log(myFriends); // (7) ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Gamal']
console.log(myFriends.length);*/ // 7

/*myFriends[4] = "Gamal";
console.log(myFriends);*/ // (5) ['Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Gamal']

/*myFriends[myFriends.length] = "Gamal"; // to add element at the end of the array
console.log(myFriends);*/ // (6) ['Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Osama', 'Gamal']

/*myFriends[myFriends.length - 1] = "Gamal"; // to update last value of the array
console.log(myFriends);*/ // (5) ['Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Gamal']

/*myFriends.length = 3; // to make the array include 3 values only
console.log(myFriends);*/ // (3) ['Ahmed', 'Mohamed', 'Sayed']

//----------------------------------------------------------------------------------------

/*
  Arrays Methods [Adding and Removing]
   - unshift("", "") Add element to the first //Elements to insert at the start of the array
   - push("", "") Add element to the end //Appends new elements to the end of an array
   - shift() Remove first element from array // Removes the first element from an array and returns it
   - pop() Remove last element from array // Removes the last element from an array and returns it.
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", " Alaa"];
// console.log(myFriends); // (4) ['Ahmed', 'Mohamed', 'Sayed', ' Alaa']

// myFriends.unshift("Osama", "Nabil");
// console.log(myFriends); // (6) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', ' Alaa']

// myFriends.push("Samah", "Eman");
// console.log(myFriends); // (8) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Samah', 'Eman']

// /*myFriends.shift();
// console.log(myFriends); // (7) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Samah', 'Eman']*/

// let first = myFriends.shift();
// console.log(myFriends); // (8) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Samah', 'Eman']
// console.log(`First Name is ${first}`); // First Name is Osama

// let last = myFriends.pop();
// console.log(myFriends); // (6) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Samah']
// console.log(`Last Name is ${last}`); // Last Name is Eman

//----------------------------------------------------------------------------------------

/*
  Arrays Methods [Search]
   - indexof(search element, from index [opt])
   - lastIndexOf(search element, from index [opt]) // same as indexof but from reverse //Returns the index of the last occurrence of a specified value in an array or -1 if it is not present.
   - includes(valuToFind, from index [opt]) [Es7]
*/

/*let myFriends = ["Ahmed", "Mohamed", "Sayed", " Alaa", "Ahmed"];
console.log(myFriends); // (5) ['Ahmed', 'Mohamed', 'Sayed', ' Alaa', 'Ahmed']
console.log(myFriends.indexOf("Ahmed")); // 0 // return the index of first value of "Ahmed"
console.log(myFriends.indexOf("Ahmed", 2)); // 4 // strart search from index 2 & return the index of second value of "Ahmed"
console.log(myFriends.lastIndexOf("Ahmed")); // 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0

console.log(myFriends.includes("Ahmed")); // true
console.log(myFriends.includes("Ahmed", 2)); // true

if (myFriends.indexOf("Ahmed") === -1) {
  console.log("Not Found");
}
if (myFriends.indexOf("Osama") === -1) {
  console.log("Not Found"); // Not Found
}

console.log(myFriends.indexOf("Osama")); // -1 (value not presented)
console.log(myFriends.lastIndexOf("Osama")); // -1 (value not presented)
*/

//----------------------------------------------------------------------------------------

/*
/*
  Arrays Methods [Sort]
   - sort(Function [opt]) (أبجديا)
   - reverse
*/

/*let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort()); // (10) [-10, -20, 10, '10', 100, 20, '90', 9000, 'Mohamed', 'Sayed']
console.log(myFriends.reverse()); // (10) ['Sayed', 'Mohamed', 9000, '90', 20, 100, '10', 10, -20, -10]
console.log(myFriends.sort().reverse()); // (10) ['Sayed', 'Mohamed', 9000, '90', 20, 100, '10', 10, -20, -10]
*/

//----------------------------------------------------------------------------------------

/*
  Arrays Methods [Slicing]
   - slice(start [opt], end [opt], Not Including End) // Returns a copy of a section of an array
    --- slice() => All Array
    --- If start is Undefined => 0
    --- Negative count from end // reverse
    --- If end is Undefined || > Indexes => Slice to the end Array.length
    --- (Slice Returns New Array)

   - splice(start [Mand], Deleted [opt] [0 No Remove], the items to add [opt]) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    - If Negative => Start from the end
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
// console.log(myFriends.slice()); // (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
// console.log(myFriends.slice(1)); // (5) ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
// console.log(myFriends.slice(1, 3)); // (2) ['Sayed', 'Ali']
// console.log(myFriends.slice(-3)); // (3) ['Osama', 'Gamal', 'Ameer']
// console.log(myFriends.slice(1, -2)); // (3) ['Sayed', 'Ali', 'Osama']
// console.log(myFriends.slice(-4, -2)); // (2) ['Ali', 'Osama']
// console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

// /*myFriends.splice(0, 0, "Sameer", "Samara");
// console.log(myFriends); // (8) ['Sameer', 'Samara', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']*/

// myFriends.splice(1, 2, "Sameer", "Samara");
// console.log(myFriends); // (6) ['Ahmed', 'Sameer', 'Samara', 'Osama', 'Gamal', 'Ameer']

//----------------------------------------------------------------------------------------

/*
Arrays Methods [Joining]
   - concat(array, array) => Return A New Array
   - join(seperator) // return string
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// /*let allFriends = myFriends.concat(myNewFriends);

// console.log(allFriends); // (8) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh']
// */

// /*let allFriends = myFriends.concat(myNewFriends, schoolFriends);

// console.log(allFriends); // (10) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady']
// */

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [
//   "1, 2",
// ]);

// console.log(allFriends); // (12) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady', 'Gameel', '1, 2']

// console.log(allFriends.join()); // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1, 2

// console.log(allFriends.join("")); // AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel1, 2

// console.log(allFriends.join("|")); // Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1, 2

// console.log(allFriends.join("|").toUpperCase()); // AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEEL|1, 2

//----------------------------------------------------------------------------------------

/*
  Arrays Challenges
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write code here

/*console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]*/

// console.log(my.slice("????")); // ["Elham", "Mazero"]
/*console.log(my.slice(my.indexOf("Mazero"), counter).reverse());*/

// console.log(); // "Elzero"
/*console.log(
  my[--counter][zero] +
    my[counter][--counter] +
    my.slice(counter, ++counter).toString().slice(counter)
); */ //Elzero

/*console.log(my[1][4] + my[1][5].toUpperCase());*/ // "rO"

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
