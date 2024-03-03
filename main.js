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
//----------------------------------------------------------------------------------------

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
//----------------------------------------------------------------------------------------

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
