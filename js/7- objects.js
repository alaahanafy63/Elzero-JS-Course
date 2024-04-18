/* 
  Object
  - Intro and what is Object
	- Testing window object
	- Accessing Object
*/

// let user = {
//   // Proberties
//   theName: "Osama",
//   theAge: 38,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
//-------------------------------------------------------------------------------------------------------

/* 
  Object
  - Dig Deeper
	- Dot Notation vs Bracket Notation
  - Dynamic Property Name // should be accessed by bracket notation only
*/

// let user = {
//   theName: "Osama",
//   "country of": "Egypt",
// };

// console.log(user.theName);
// console.log(user["theName"]);
// console.log(user["country of"]);

////

// let myVar = "country";

// let user = {
//   theName: "Osama",
//   country: "Egypt",
// };

// console.log(user.theName);
// console.log(user.country); // user.country // Egypt
// console.log(user.myVar); // user.country // undefined
// console.log(user[myVar]); // user.country // Egypt
//-------------------------------------------------------------------------------------------------------

/* 
  Object
  - Nested Object And Trainings
*/

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free For Work`;
//     }
//   },
// };

// console.log(user.name); // Osama
// console.log(user.age); // 38
// console.log(user.skills.join(" | ")); // HTML | CSS | JS
// console.log(user.skills[2]); // Access with Index // JS
// console.log(user.addresses); // {ksa: 'Riyadh', egypt: {…}}
// // egypt : {one: 'Cairo', two: 'Giza'}
// // ksa : "Riyadh"
// console.log(user.addresses.egypt); // {one: 'Cairo', two: 'Giza'}
// console.log(user.addresses.egypt.one); // Cairo
// console.log(user["addresses"].egypt.one); // Cairo
// console.log(user["addresses"]["egypt"]); // {one: 'Cairo', two: 'Giza'}
// console.log(user["addresses"]["egypt"]["one"]); // Cairo

// console.log(user.checkAv()); // Not Free For Work
//-------------------------------------------------------------------------------------------------------

/* 
  Object
  - Create with New Keyword new object()
*/

//// Usual way
// let user = {
//   age: 20,
// };

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

//// new object() keyword
// let user = new Object({
//   age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());
//-------------------------------------------------------------------------------------------------------

/*
  Function this Keyword
  - this Introduction
  - this inside object method
   - when a function is called as a method of an object,
   - its this is set to the object the method is called on.
  - Global Object
  - Test variables with window and this
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/
// console.log(this);
// console.log(this === window); // true

// myVar = 100;

// console.log(window.myVar); // 100
// console.log(this.myVar); // 100

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();
// console.log(sayHello() === window); // true

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     return this.age * 365;
//   },
// };

// console.log(user.age); // 38
// console.log(user.ageInDays()); // 13870
//-------------------------------------------------------------------------------------------------------

/* 
  Object
  - Create object with create method // Creates an object that has the specified prototype or that has null prototype.
*/

// let user = {
//   age: 40,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user); // {age: 40, doubleAge: ƒ}
// console.log(user.age); // 40
// console.log(user.doubleAge()); // 80

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj); // {a: 100}

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age); // 40
// console.log(copyObj.doubleAge()); // 80
//-------------------------------------------------------------------------------------------------------

/* 
  Object
  - Create object with assign method // The target object to copy to.
& Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
*/

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;

// console.log(finalObject);

// let newObj = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObj);
//-------------------------------------------------------------------------------------------------------

/*
Objects And Methods Assignments
*/

//// Assighnment 1

// Create Your Object Here
// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function () {
//     return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
//   },
// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt
//-------------------------------------------------------------------------------------------------------

//// Assighnment 2 // قم بإنشاء Object جديد بأربع طرق مختلفة

// Method One
// Create Your Object Here
// let objMethodOne = {
//   property: "Method One",
// };
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = new Object({
//   property: "Method Two",
// });
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = Object.create({
//   property: "Method Three",
// });
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({ property: "Method Four" });
// console.log(objMethodFour.property); // "Method Four"
//-------------------------------------------------------------------------------------------------------

//// Assighnment 3

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject = Object.assign({ a }, threeNums, twoNums);

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */
//-------------------------------------------------------------------------------------------------------

//// Assighnment 4

// The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(
//     `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
//   );
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
//     console.log("- Game Has Releases");
//     console.log(
//       `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
//     );
//     console.log(
//       `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
//     );
//     console.log(`${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// // Ouput

// ("The Game Name Is Trinity Universe");
// ("The Publisher Is NIS America");
// ("The Price Is 40");
// ("####################");
// ("The Game Name Is Titan Quest");
// ("The Publisher Is THQ");
// ("The Price Is 50");
// ("- Game Has Releases");
// ("First => Immortal Throne");
// ("Second => Ragnarök");
// ("Third => Atlantis");
// ("####################");
// ("The Game Name Is YS");
// ("The Publisher Is Falcom");
// ("The Price Is 40");
// ("- Game Has Releases");
// ("First => Oath in Felghana");
// ("Second => Ark Of Napishtim");
// ("Third => origin");
// ("####################");

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
