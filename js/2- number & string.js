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
