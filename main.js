/*output to screen
   window.alert()
   document.write()
   console.log()

Syntax
*/

// window.alert("Hello");

// document.write("<h1>Hello <span>Page</span></h1>");

// console.log("Hello Page");
// -------------------------------------------------------------

/*console methods
   log
   error
   table

   web API(Application Programming Interface for the web)

styling console
   directive %c 
*/

// console.log("LOg");
// console.error("Error"); //error in which line
// console.table(["Alaa", "Ahmed", "Mohamed"]);

// console.log(
//   "%cHello %cAlaa",
//   "color: red; font-size: 40px",
//   "color: blue; font-size: 40px"
// );
//-------------------------------------------------------

/*Data Types
   String
   Number
   Array => Object
   Object
   Boolean
   Undefined
   Null
*/

// console.log("Alaa Mohamed");
// console.log(typeof "Alaa Mohamed");
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10, 15, 17]);
// console.log(typeof ["os", "al", "mn"]);
// console.log(typeof { name: "Alaa", age: 31, country: "EG" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
//-------------------------------------------------------

/*Variables Intro
   syntax ( Keyword | variable name | Assignment operator | variable value )
*/

//variable must be declaired first then use it
/*var user = "Alaa";

console.log(user);
*/
//-------------------------------------------------------

/*Identifiers
   Name conventions and rules
can't use special characters, and the name is case sensitive and camelCase
   Reserved words (var, if, function...etc)
*/

// var user = "Alaa";
// var $_user_1_$ = "Ahmed";
// var userName = "Ali";

// console.log(user);
// console.log($_user_1_$);
// console.log(userName);
//-------------------------------------------------------

/*
  var
   Redeclare (Yes)
   Access before declare (Undefined)
   Variable scope drama [added to widow object] (not recommended)
   Block or function scope

  let
   Redeclare (No => Error)
   Access before declare (Error)
   Variable scope drama ()
   Block or function scope

  const
   Redeclare (No => Error)
   Access before declare (Error)
   Variable scope drama ()
   Block or function scope
*/

// var a = 1;
// var a = 2;
// console.log(a);
//-------------------------------------------------------

/*
  String syntax + character escape sequences
  \(back slash) Escape + line continue
  \n new line 
*/

// console.log("Alaa Mohamed");
// console.log("Alaa 'Mohamed'");
// console.log('Alaa "Mohamed"');
// console.log("Alaa \\ 'Mohamed'");
// console.log("Alaa\n'Mohamed'");
//-------------------------------------------------------

/*
  Concatenation (with plus sign +)
*/

/*let a = "We love";
let b = "JavaScript";

console.log(a + " " + b);
*/
//-------------------------------------------------------

/*
  Template Literals (Template Strings)
*/

/*let a = "We love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + " " + b + ' "" ' + c + " " + d);
console.log(a + " " + b + "\n" + c + " " + d);
//ES6
console.log(`${a} "" \\${b} ${c} ${d}`);
console.log(`${a} ${b}
${c} ${d}`);
*/

//ES6
/*let title = "Alaa";
let desc = "Web Program";

let markUp = `
    <div class = "card">
        <div class = "child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;

document.write(markUp);
*/
//-------------------------------------------------------

/* Challenge */
/*var theTitle = "Elzero",
  description = "Elzero Web School",
  date = "25/10";

let card = `
<div>
<h3>Hello ${theTitle}</h3>
<p>${description}</p>
<span>${date}</span>
</div>
`;

document.write(`${card.repeat(4)}`);
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
  Arithmetic Operators
   + Addition
   - Substraction
   * Multiplication
   / Division
   ** Exponentiation (ES7)
   % Modules (Division Remainder باقي القسمة)
   ++ Increment [ Post (print then increase) / Pre (increase then print)]
   ++ Decrement [ Post / Pre ]
*/

/*console.log(10 + 20); //Number
console.log(10 + "Alaa"); //String + is for concatenate

console.log(10 - 20); //Number
console.log(10 - "Alaa"); //NaN (Not a Number)
console.log(typeof NaN); //Number

console.log(10 * 20); //Number

console.log(20 / 5); //Number
console.log(20 / 3); //Number

console.log(2 ** 4); //Number
console.log(2 * 2 * 2 * 2); //Number

console.log(10 % 2); //Number (Remainder operator)
console.log(11 % 2); //Number  //Remove 1 (باقي القسمة)
*/
//----------------------------------------------------------------------------------------

/*
   + Unary plus [return number if its not number]
   - Unary negation [return number if its not number + negate it]
*/

/*console.log(100);
console.log(+"100");
console.log(+"-100");
console.log(+"Alaa"); //NaN
console.log(+"15.5");
console.log(+null); //0
console.log(+false); //0
console.log(+true); //1

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Alaa"); //NaN
console.log(-"15.5");
console.log(-null); //-0
console.log(-false); //-0
console.log(-true); //-1

console.log(Number("100")); //another way to return a number - Number() constructor
*/
//----------------------------------------------------------------------------------------

/*
  Type coercion (Type casting) switch data from type to another type
    +
    -
    "" - 2
    false - true
*/

/*let a = "10";
let b = 20;
let c = true;

console.log(a + b); // return string
console.log(+a + b); //return number
console.log(a - b); //return number
console.log(+""); //return number 0
console.log("" - 2); //return number
console.log(false - true); //return number -1
console.log(true - false); //return number 1
console.log(+false - +true); //return number -1
console.log(+true - +false); //return number 1

console.log(a + b + c); // return string 1020true
console.log(+a + b + c); // return number 31
*/
//----------------------------------------------------------------------------------------

/*
Assignment operators
*/

/*let a = 10;
a = a + 20;
a = a + 70;

a += 100; // return 200 means a = a + 100

a -= 50; // returns 150 means a = a - 50

a /= 50; // returns 3 means a = a / 50

console.log(a);
*/
//----------------------------------------------------------------------------------------
/*Operators Challenge*/
/*Challenge 1*/

/*let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
*/
/*
  [++a]
  - Value: 11
  - Explain: pre increment
  [+]
  - Explain: addition operator
  [+b++]
  - value: 20
  - Explain: type coersion & post increment
  [+]
  - Explain: addition operator
  [+c++]
  - Value: 80
  - Explain: type coersion & post increment
  [-]
  - Explain: substraction operator
  [+a++]
  - Value: 11
  - Explain: type coersion & post increment
*/

/*Challenge 2*/

/*let d = "-100";
let e = "20";
let f = 30;
let g = true;

//only use variables value
//Do not use variable twice

/*console.log(-d++ * +e++ + f++ - f + g); //2000
console.log(-d++ + +e++ + f++ + e + ++g); //173
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  Number
    Bouble Precision
    syntatic sugar // write code with more organized way
    e
    **
    with decimal
    Number - BigInt
    Number Min Value
    Number Max Value
*/

/*console.log(1000000);
console.log(1_000_000);
console.log(1e6); //e means how many zeros
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 2134354543);
*/
//----------------------------------------------------------------------------------------

/*
 Number Methods
  - Two dots to call a methods
  - tostring() //return number to string
  - tofixed() // return to string & aspecific number after (.) ex. 1.55 with decimal approximation
  - parseInt() // analyze data and return string to Integer number
  - parsFloate() analyze data and return string to number with decimals
  - isInteger() [ES6] // test if number is integer or not and return true/false
  - isNaN [ES6] // test if string is NaN and return true/false
*/

/*console.log((100).toString());
// console.log(100..toString()); //floating point number

console.log((100.5555).toFixed(2));

console.log(+"100"); // return string to number
console.log(Number("100")); // return string to number
console.log(parseInt("100")); // analyze data and return string to number

console.log(+"100 alaa"); // return NaN
console.log(Number("100 alaa")); // return NaN
console.log(parseInt("100.500 alaa")); // analyze and return Integer Number

console.log(parseFloat("100.500")); //analyze data and return number with decimals
console.log(parseFloat("100.500 alaa")); //analyze data and return string to number with decimals

console.log(Number.isInteger("100")); // test if number is integer or not and return true/false
console.log(Number.isInteger("100.500"));
console.log(Number.isInteger(100));

console.log(Number.isNaN("alaa")); //test if string is NaN and return true/false
console.log(Number.isNaN(20)); // xxx return false
*/
//----------------------------------------------------------------------------------------
/* 
 Math Object
  - round() // return number with normal approximation (below 5 or 5 and above)
  - ceil() // return number with approximation to heightst value (1) regardless of decimals number
  - floor() // return number with approximation to lowest value (0) regardless of decimals number
  - min() // return lowest value
  - max() // return heighest value
  - pow() // return power of a number
  - random() // return every time a randome value
  - trunc() [ES6] // return the number with no decimals and not with approximation
*/

/*console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(2 * 2 * 2 * 2); // power
console.log(Math.pow(2, 4)); // power

console.log(Math.random());

console.log(Math.trunc(99.5));
*/

//----------------------------------------------------------------------------------------
/*Number Challenge*/

/*let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find smallest number in all variables and return integer
console.log(Math.trunc(Math.min(a, b, c, d)));

// use variable a + d one time to get the needed output
console.log(Math.pow(a, Math.trunc(d))); //10000

// Get integer "2" from d bariable with 4 methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Number.parseInt(d));
console.log(d.toFixed(0));

// Use variable b + d to get this values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => string
console.log(); // 67=> number
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
 String Methods -1
  - Access with index // the number of position of an element in a sequence (sequenced data) and starts from (0)
  - Access with chartAt() // character at position - you give position it Returns the character at the specified index.
  - Length // Returns the length of a String object. without counting for indexing (stating from (1))
  - trim() // remove spaces
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

/*let theName = "  Ahmed  ";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[1]);
console.log(theName[5]); // returns undefined

console.log(theName.charAt(1));
console.log(theName.charAt(5)); // returns empty

console.log(theName.length); // returns 9
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName[4].trim().toUpperCase());
console.log(theName.trim().charAt(2).toUpperCase());
* /

//----------------------------------------------------------------------------------------------------

/*
 String Methods -2
  - indexOf(value [mand], start [opt] 0) // Returns the position of the first occurrence of a substring. and if couldn't find it then return (-1)
  - lastIndexOf(value [mand], start [opt] length) // Returns the last occurrence of a substring in the string.
  - slice(start [mand], end [opt] Not Including End index) // Returns a section of a string.
  - repeat(Times) [ES6]
  - split(sperator [opt], limit [opt]) // Split a string into substrings using the specified separator and return them as an (array).
*/

/*let a = "Elzero Web School";
console.log(a.indexOf("Web")); // returns 7
console.log(a.indexOf("Web", 8)); // returns -1
console.log(a.indexOf("o")); // returns 5

console.log(a.lastIndexOf("Web")); // returns 7
console.log(a.lastIndexOf("Web", 1)); // returns -1
console.log(a.lastIndexOf("o")); // returns 15

console.log(a.slice(0)); // returns Elzero Web School
console.log(a.slice(2)); // returns zero Web School
console.log(a.slice(2, 6)); // returns zero
console.log(a.slice(-5, -3)); // returns ch - negative value means in reverse

console.log(a.repeat(2)); // returns Elzero Web School Elzero Web School

console.log(a.split()); // return as array of one element
console.log(a.split("")); // return as array of all elements separated even spaces
console.log(a.split(" ")); // return as array of all elements which is separated with space
console.log(a.split(" ", 2)); // return with limit of 2 splits
console.log(a.split("", 6)); // return with limit of 5 splits
*/

//----------------------------------------------------------------------------------------------------
/*
 String Methods -3
  - substring(start [mand], end [opt] Not Including End index)
   - start > end will swap
   - start < 0 it start from 0 // any negative value will make it start from zero
   - use Length to get character
  - substr(start [mand], number of characters to extract)
   - start >= Length = "" // if the number of characters to extract is >= length will return an empty string
   - negative start from end // count in reverse
  - includes(value [mand], start [opt] default 0) [ES6] // return true/false
  - startWith(value [mand], start [opt] default 0) [ES6] // return true/false
  - endWith(value [mand], length [opt] default full length) [ES6] // return true/false
*/

/*let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2));
console.log(a.substring(2, 6));
console.log(a.substring(6, 2)); // same as the previous result
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 1)); // returns l
console.log(a.substring(a.length - 5, a.length - 3)); // returns ch

console.log(a.substr(0, 6));
console.log(a.substr(17)); // return empty string
console.log(a.substr(-3)); // count in reverse
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("l"));
console.log(a.endsWith("z", 6));
*/
//----------------------------------------------------------------------------------------
/* String Challenge
   All solutions must be in one chain
   You can use concatenate
*/

/*let a = "Elzero Web School";
// Include this methods in your solution [slice, charAt]
console.log(a.charAt(2) + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return array
console.log(a.split(" ", 1)); // [Elzero]

// Use only "substr" method + template literals in your solution
console.log(a.substr(0, 6) + " " + a.substr(11, 6)); // Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`); // Elzero School [ES6]

// Solution must be dynamic and string may change
console.log(
  a.charAt(0).toLowerCase() +
    a.toUpperCase().substring(1, 16) +
    a.charAt(16).toLowerCase()
); // eLZERO WEB SCHOOl
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
