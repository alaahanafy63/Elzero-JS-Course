/*
  DOM
   - What is DOM (Document Object Model)
   - DOM Selectors
    - Find element by ID
    - Find element by Tag name
    - Find element by class name
    - Find element by CSS selector
    - Find element by collection
       title
       body
       images
       forms
       links
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElement = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// // let myQueryElement = document.querySelector(".special");
// // let myQueryElement = document.querySelector("#my-div");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElement[1]);
// // myTagElement[1].innerHTML = "test";
// console.log(myClassElement[0]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

// ------------------------------------------------------------------------------------------

/*
  DOM [Get / Set elements content and attributes]
   - innerHTML
   - textContent
   - Change attributes directly
   - Change attributes with methods
    - getAttribute
    - setAttribute

  Search 
   - innerText
*/

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://facebook.com");
// myLink.setAttribute("title", "Title");

// ------------------------------------------------------------------------------------------

/*
  DOM [Check attributes]
   - Element.attributes
   - Element.hasAttribute
   - Element.hasAttributes
   - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log("Not Found");
// }

// if (myP.hasAttributes()) {
//   console.log("Has Attributes");
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log("Has Attributes");
// } else {
//   console.log("Div Has No Attributes");
// }

// ------------------------------------------------------------------------------------------

/*
  DOM [Create Elements]
   - createElement
   - createComment
   - createTextNode
   - createAttribute
   - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append comment to element
// myElement.appendChild(myComment);

// // Append Text to element
// myElement.appendChild(myText);

// // Append element to body
// document.body.appendChild(myElement);

// console.log(myElement);

// ------------------------------------------------------------------------------------------

/*
  DOM [Create Elements]
   - Practice Product with Heading and Paragraph
*/

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text
// myHeading.appendChild(myHeadingText);

// // Add Heading to Main Element
// myMainElement.appendChild(myHeading);

// // Add paragraph Text
// myParagraph.appendChild(myParagraphText);

// // Add paragraph to Main Element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);

/// Repeat Div 100 times using for loop
// for (let i = 1; i <= 100; i++) {
//   let myMainElement = document.createElement("div");
//   let myHeading = document.createElement("h2");
//   let myParagraph = document.createElement("p");

//   let myHeadingText = document.createTextNode(`Product Title ${i}`);
//   let myParagraphText = document.createTextNode(`Product Description ${i}`);

//   // Add Heading Text
//   myHeading.appendChild(myHeadingText);

//   // Add Heading to Main Element
//   myMainElement.appendChild(myHeading);

//   // Add paragraph Text
//   myParagraph.appendChild(myParagraphText);

//   // Add paragraph to Main Element
//   myMainElement.appendChild(myParagraph);

//   myMainElement.className = "product";

//   document.body.appendChild(myMainElement);
// }

// ------------------------------------------------------------------------------------------

/*
  DOM [Deal with Childrens]
   - children
   - childNodes
   - firstChild
   - lastChild
   - firstElementChild
   - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[1]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

// ------------------------------------------------------------------------------------------

/*
  DOM [Events]
   - Use Events on HTML
   - Use Events on JS
    - onclick
    - oncontextmenu
    - onmouseenter
    - onmouseleave

    - onload
    - onscroll
    - onresize

    - onfocus
    - onblur
    - onsubmit
*/

// let myBtn = document.getElementById("btn");

// myBtn.onclick = function () {
//   console.log("clicked");
// };

// myBtn.oncontextmenu = function () {
//   console.log("clicked right");
// };

// window.onscroll = function () {
//   console.log("Scroll");
// };

// ------------------------------------------------------------------------------------------

/*
  DOM [Events]
   - Validate Form Practice
   - Prevent Default
*/

// let userInput = document.querySelector("[name= 'username']");
// let ageInput = document.querySelector("[name= 'age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

// ------------------------------------------------------------------------------------------

/*
DOM Assignments part - 1
*/
//// Assignment 1
// choose HTML element in 15 different ways

// let myIdElement = document.getElementById("elzero");
// let myTagElement = document.getElementsByTagName("div")[0];
// let myClassElement = document.getElementsByClassName("element")[0];
// let myQueryElementId = document.querySelector("#elzero");
// let myQueryElementClass = document.querySelector(".element");
// let myQueryElementTag = document.querySelector("div");
// let myQueryElementSpecial = document.querySelector("[name = js]");
// let myQueryAllElements = document.querySelectorAll("div")[0];
// let myQueryAllElementsId = document.querySelectorAll("#elzero")[0];
// let myQueryAllElementsClass = document.querySelectorAll(".element")[0];
// let myQueryAllElementsTag = document.querySelectorAll("div")[0];
// let myAttrElement = document.getElementsByName("js")[0];
// let myFirstElementChild = document.body.firstElementChild;
// let myChildren = document.body.children[0];
// let myChildNodes = document.body.childNodes[19];

// console.log(myIdElement);
// console.log(myTagElement);
// console.log(myClassElement);
// console.log(myQueryElementId);
// console.log(myQueryElementClass);
// console.log(myQueryElementTag);
// console.log(myQueryElementSpecial);
// console.log(myQueryAllElements);
// console.log(myQueryAllElementsId);
// console.log(myQueryAllElementsClass);
// console.log(myQueryAllElementsTag);
// console.log(myAttrElement);
// console.log(myFirstElementChild);
// console.log(myChildren);
// console.log(myChildNodes);
// -------------------------------------------------------------------

//// Assignment 2
