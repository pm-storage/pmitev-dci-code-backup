//Change the font of the body element.

let body = document.body;

body.style.fontFamily = "mono";
body.style.lineHeight = "1.5";
body.style.letterSpacing = ".1rem";

//Center the text of h1 on the page.

let heading = document.querySelector("h1");
heading.style.textAlign = "center";

//The menu headings have a class named category. 
//Select the elements by class name. Then, change 
//the color and font-style of each element.

let menuHeadings = document.querySelectorAll(".category");

menuHeadings.forEach((item) => {
  item.style.color = "red";
  item.style.fontFamily = "serif";
  item.style.fontStyle = "italic";
  item.style.fontSize = "3rem";
  item.style.borderBottom = "2px solid black";
  item.style.display = "block";
  item.style.marginBottom = "1em"
});
/*
Create a function named "colorGenerator" that returns a 
different color. The returned random color should also 
include set transparency. Select the unordered lists with 
the class of food-category. Give each list a different 
background color using the function that you created.
*/

function colorGenerator() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.2 + ')';
}

let unorderedLists = document.querySelectorAll(".food-category");
console.log(unorderedLists);


unorderedLists.forEach((item) => {
  item.style.backgroundColor = colorGenerator();
  item.style.padding = "0 2em 2em";
  item.style.width = "80%";
  item.style.margin = "1em 0";
});


/*
Align the food-category lists in a row on 
desktop. Make sure that the
page is responsive and also works on mobile.
*/

let main = document.querySelector(".main");
let screenWidth = window.matchMedia("(max-width: 615px)");
main.style.display = "flex";
main.style.width = "100%";

let foodItems = document.querySelectorAll(".food-item");
foodItems.forEach((item) => {
  item.style.marginBottom = "0.8em";
  item.style.fontWeight = "900";
  item.style.fontSize = "1.2em";
});

function responsivePage(screenWidth) {
  if (screenWidth.matches) {
    main.style.flexDirection = "column";
    main.style.padding = "1em";
    main.style.alignItems = "center";
    footer.style.flexDirection = "column";
  } else {
    main.style.flexDirection = "row";
    main.style.justifyContent = "space-around";
    for (let i = 0; i < unorderedLists.length; i++) {
      unorderedLists[i].style.margin = "1em";
    }
  }
}
responsivePage(screenWidth);
screenWidth.addListener(responsivePage);
/*
Select the warning at the end of 
the page by its id warning. Select 
the id without using a querySelector. 
Change the size and font of the warning.
*/

let warning = document.getElementById("warning");
warning.style.fontSize = "2.5rem";
warning.style.textAlign = "center";
warning.style.fontFamily = "serif";

/* 
Select all even allergy-info items. 
Give the even items a different background color.
Make the allergy-warning appear as a column in 
the center of the page.
*/


let evenAllergyInfo = document.querySelectorAll('.allergy-info');


evenAllergyInfo.forEach((item) => {
  item.style.textAlign = "left";
  item.style.listStyle = "none";
  item.style.display = "flex";
  item.style.justifyContent = "flex-start";
  item.style.width = "30%";
  item.style.margin = "0 auto";
});

for (let i = 0; i < evenAllergyInfo.length; i++) {
  evenAllergyInfo[++i].style.backgroundColor = "lightblue";

}

/*
The descriptions in the footer should also be styled, 
e.g. a rounded border with a background color. 
They should appear 
in a column for mobile and in a row for desktop.
*/
let footer = document.querySelector('.footer');
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.marginTop = "3em";
footer.style.alignItems = "center";


let footerDesc = document.querySelectorAll(".food-desc");


footerDesc.forEach((item) => {
  item.style.fontSize = "1.5rem";
  item.style.border = "5px solid orange";
  item.style.padding = "2em";
  item.style.borderRadius = "50%";
  item.style.width = "7rem";
  item.style.margin = "1em 1.5em";
  item.style.textAlign = "center";
  item.style.display = "flex";
  item.style.justifyContent = "center";
});

// .classList.add
document.querySelector("h1").classList.add("newClass", "secondClass"); // Add classes to the h1

// .classList.remove
document.querySelector("h1").classList.remove("newClass", "secondClass"); // remove classes from the h1

//.innerText
document.querySelector("h1").innerText = "Put a Different Text for showcase"; // change the text of the h1 element

document.querySelector("h1").innerText = ""; // hide text / hide nodes
// error messaging - feedback to the user in case in errors
document.querySelector("h1").innerText = "You forgot to put in your birthday";

document.querySelector("ul").innerHTML += '<li> new list </li>' // add <li> to the <ul>
document.querySelector("h1").innerHTML = '<i>' + document.querySelector("h1").innerHTML + '</i>'

console.log(document.querySelector("h1").innerHTML) // <i>You forgot to put in your birthday</i>

// .write();
// bad code
// adds 
// document.write(); Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write

// document.write(); // deleting the whole dom = will not be executed by good browser

// document.write('<script>alert("hello world");</script>');
// XSS cross site scripting attack
// take care very properly !! if you include any third party code

// .createElement
let a = document.createElement('a');
a.innerText = " hello world";
a.setAttribute('href', 'http://www.google.com')
// create a fully link
console.log(a);
// .appendChild
document.querySelector('.title').appendChild(a);
// add newly created element to the title



// foodCategories.forEach(({
//   style: categoryBox 
// }) => {
//     categoryBox.width = "100%"
// });