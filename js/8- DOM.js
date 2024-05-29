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

/*
  DOM [Events Simulation]
   - click
   - focus
   - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };

// one.onblur = function () {
//   document.links[0].click();
// };

// -------------------------------------------------------------------

/*
  DOM [Class List object]
   - classList
    - length
    - contains
    - item(index)
    - add
    - remove
    - toggle
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// // element.onclick = function () {
// //   element.classList.add("add-one", "add-two");
// // };

// // element.onclick = function () {
// //   element.classList.remove("one", "two");
// // };

// element.onclick = function () {
//   element.classList.toggle("show");
// };

// -------------------------------------------------------------------

/*
  DOM [CSS]
   - style
   - cssText
   - removeProperty(propertyName) [Inline, Stylesheet]
   - setProperty(propertyName, value, priority)
*/

// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty(
//   "background-color",
//   "red",
//   "important"
// );

// -------------------------------------------------------------------

/*
  DOM [Deal with Elements]
   - before [Element || String]
   - after [Element || String]
   - append [Element || String]
   - prepend [Element || String]
   - remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.before("Hello From JS");
// element.after("Hello From JS");
// element.after(createdP);
// element.append("Hello From JS");
// element.prepend("Hello From JS");
// element.append(createdP);
// element.prepend(createdP);
// element.remove();

// -------------------------------------------------------------------

/*
  DOM [Traversing]
   - nextSibling
   - previousSibling
   - nextElementSibling
   - previousElementSibling
   - parentElement
*/

// let span = document.querySelector(".two");

// console.log(span.nextSibling);
// console.log(span.nextElementSibling);
// console.log(span.previousSibling);
// console.log(span.previousElementSibling.remove());

// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.style.opacity = 0;
// };

// -------------------------------------------------------------------

/*
  DOM [Cloning]
   - cloneNodes(Deep)
*/

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;

// myDiv.appendChild(myP);

// -------------------------------------------------------------------

/*
  DOM [Add Event Listener]
   - addEventListener
   - Use without On
   - Attach Multiple Events
   - Error Test

  Search
   - Capture & Building JavaScript
   - remove EventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }

// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Ahmed";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// // let cloned = document.querySelector(".clone");    // Error

// // cloned.onclick = function () {
// //   console.log("Iam Cloned");
// // };

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });

// -------------------------------------------------------------------

/* 
  DOM Challenge
*/
// Body
// document.body.style.cssText =
//   "font-family: Tahoma; margin: 0px; background-color: rgb(236, 236, 236);";

// // Header
// let myHeader = document.createElement("header");

// document.body.appendChild(myHeader);
// myHeader.className = "website-head";
// myHeader.style.cssText =
//   "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";

// //// Logo
// let myLogo = document.createElement("div");
// let myLogoText = document.createTextNode("Elzero");

// myHeader.appendChild(myLogo);
// myLogo.className = "logo";
// myLogo.title = "Website Logo";
// myLogo.style.cssText =
//   "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
// myLogo.appendChild(myLogoText);

// //// Menu
// let myMenu = document.createElement("ul");

// myHeader.appendChild(myMenu);
// myMenu.className = "menu";
// myMenu.style.cssText =
//   "padding: 0px; margin: 0px; display: flex; gap: 16px; list-style: none;";

// ////// Menu Items
// let myMenuItems1 = document.createTextNode("Home");
// let myMenuItems2 = document.createTextNode("About");
// let myMenuItems3 = document.createTextNode("Service");
// let myMenuItems4 = document.createTextNode("Contact");

// for (let i = 0; i <= 3; i++) {
//   let myMenuItems = document.createElement("li");
//   myMenu.appendChild(myMenuItems);
// }
// myMenu.firstChild.appendChild(myMenuItems1);
// myMenu.children[1].appendChild(myMenuItems2);
// myMenu.children[2].appendChild(myMenuItems3);
// myMenu.lastChild.appendChild(myMenuItems4);

// // Products Div
// let productsDiv = document.createElement("div");

// document.body.appendChild(productsDiv);
// productsDiv.className = "content";
// productsDiv.style.cssText =
//   "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";

// //// Products
// for (let e = 1; e <= 15; e++) {
//   let product = document.createElement("div");
//   let productContent = document.createElement("span");
//   let productNumber = document.createTextNode(`${e}`);

//   product.className = "product";
//   product.style.cssText =
//     "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";

//   productContent.style.cssText =
//     "font-size: 40px; color: black; margin-bottom: 10px; margin-top: 10px; display: block;";

//   productsDiv.appendChild(product);
//   product.appendChild(productContent);
//   productContent.appendChild(productNumber);
//   productContent.after("Product");
// }

// // Footer
// let myFooter = document.createElement("footer");
// let myFooterContent = document.createTextNode("Copyright 2024");

// myFooter.className = "footer";
// myFooter.style.cssText =
//   "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";

// document.body.appendChild(myFooter);
// myFooter.appendChild(myFooterContent);

// -------------------------------------------------------------------
