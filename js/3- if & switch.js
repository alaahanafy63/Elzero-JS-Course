/*
 Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger than
  - >= Larger than or Equal

  - < Smaller than 
  - =< Smaller than or Equal
*/

/*console.log(10 == "10"); // compare value only
console.log(-100 == "-100"); // compare value only
console.log(10 != "10"); // compare value only

console.log(10 === "10"); // compare value + type
console.log(10 !== "10"); // compare value + type
console.log(10 !== 10); // compare value + type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log("Osama" === "Ahmed"); // false
console.log(typeof "Osama" === typeof "Ahmed"); // true - both are string data type
*/
//----------------------------------------------------------------------------------------

/*
 Logical Operators
  - ! Not
  - && And
  - || or
*/

/*console.log(true); //true
console.log(!true); //false

console.log(10 == "10"); //true
console.log(!(10 == "10")); //false

console.log(10 == "10" && 10 > 8 && 10 >= 10); // true (all must be true)
console.log(10 == "10" && 10 > 8 && 10 >= 50); // false (not all are true)

console.log(10 == "10" || 10 > 80 || 10 >= 50); // true (one true is enough)
*/
//----------------------------------------------------------------------------------------

/* Controle Flow */
/*
 if conditions
   - if
   - else if  (بتحقق شرط تاني اذا الاول لم يتحقق - أو)
   - else     (بتتحقق اذا لم يتحقق اي شرط من الشروط السابقة)

  if (condition) {
    // Block of code
  }
*/

/*let price = 100;
let discount = true;
let discountAmount = 30;

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
}

console.log(price); // 70
*/

/*let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40; // price = price - discountAmount
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price); // 90
*/
//----------------------------------------------------------------------------------------

/*
 Nested If
*/

/*if example*/
/*let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt" && student === true) {
  price -= discountAmount + 30;
} else if (country === "Egypt" && student === false) {
  price -= discountAmount + 10;
} else {
  price -= 10;
}

console.log(price); // 40
*/

/*nested if example*/
/*let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price); // 40
*/
//----------------------------------------------------------------------------------------

/* 
 Conditional (Ternary) Operator
*/

/*let theName = "Ahmed";
let theGender = "Male";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// syntax (if condition):  Condition ? If True : If False
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs"; // to store condition result in a variable then use it again
document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// syntax (nested if): first condition : second condition : third condition : else
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");
*/
//----------------------------------------------------------------------------------------

/*
  Logical Or ||
   - Null + Undefined + Any falsy value (return alternative value I write after ||)
  Nullish Coalescing operator ??
   - Null + Undefined (same as || except for falsy value return the value as it is)
*/

/*let price = 10;
console.log(`The Price Is ${price}`);*/ // The Price Is 10
/*let price;
console.log(`The Price Is ${price}`);*/ // The Price Is undefined
/*let price = null;
console.log(`The Price Is ${price}`);*/ // The Price Is null
/*let price = 0;
console.log(`The Price Is ${price}`);*/ // The Price Is 0

/*Logical Or || */
/*let price = 10;
console.log(`The Price Is ${price || 200}`);*/ // The Price Is 10
/*let price;
console.log(`The Price Is ${price || 200}`);*/ // The Price Is 200
/*let price = null;
console.log(`The Price Is ${price || 200}`);*/ // The Price Is 200
/*let price = 0;
console.log(`The Price Is ${price || 200}`);*/ // The Price Is 200
/*let price = false;
console.log(`The Price Is ${price || 200}`);*/ // The Price Is 200
/*let price = "";
console.log(`The Price Is ${price || 200}`);*/ // The Price Is 200

/*Nullish Coalescing operator ?? */
/*let price = null;
console.log(`The Price Is ${price || 200}`); // The Price Is 200
console.log(`The Price Is ${price ?? 200}`); // The Price Is 200*/
/*let price;
console.log(`The Price Is ${price || 200}`); // The Price Is 200
console.log(`The Price Is ${price ?? 200}`); // The Price Is 200*/
/*let price = 0;
console.log(`The Price Is ${price || 200}`); // The Price Is 200
console.log(`The Price Is ${price ?? 200}`); // The Price Is 0*/

/* To know if the value is true or false*/
/*console.log(Boolean(100)); // true
console.log(Boolean(-100)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
*/

//----------------------------------------------------------------------------------------

/*if challenge*/

/*let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write with Ternary if syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");
*/

/*let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}
//console.log(Boolean("st.length * 2).tostring()")); // true

// W position may change
//- indexOf(value [mand], start [opt] 0) // Returns the position of the first occurrence of a substring. and if couldn't find it then return (-1)
if (st.slice(st.indexOf("W"), st.indexOf("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}
// console.log(Boolean(st.slice(7, 8).toLowerCase())); // true

if (st !== "string") {
  console.log("Good");
}
// console.log(Boolean(st)); // true

if (typeof st.length === "number") {
  console.log("Good");
}
// console.log(Boolean(typeof st.length)); // true

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
//console.log(Boolean(st.slice(0, 6).repeat(2))); // true
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  Switch statement    // Match the variable with all cases until finding it & compare with identical operator (means the same type + value)

  switch(expression) {
    case 1:
      //code block
      break;   To stop checking cases
    case 2:
      //code block
      break;
    Default:
      //code block
  }
  - Default Ordering // after checking all cases and not find the value then apply default value
  - Multiple Match
  - ===
*/

/*let day = 2;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
}
*/

//----------------------------------------------------------------------------------------

/* Switch Challenge*/ //if convert to switch
/*let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/
/*switch (job) {
  case 0:
    salary = 8000;
    console.log("`${job}`");
    break;
  case 1:
  case 2:
    salary = 6000;
    console.log("`${job}`");
    break;
  case 4:
  case 5:
    salary = 7000;
    console.log("`${job}`");
    break;
  default:
    salary = 4000;
    console.log(`${job}`);
}
*/

/* if Challenge*/ //switch convert to if
/*let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
} else if (holidays === 3) {
  money = 2000;
} else if (holidays === 4) {
  money = 1000;
} else if (holidays === 5) {
  money = 0;
} else {
  money = 0;
}
console.log(holidays);
*/
/*switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
