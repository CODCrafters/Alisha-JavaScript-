//DOM stands for Document Object Module:

// Set
// Get
// Add HTML Element
// Delete HTML Element

//How to target DOM object

var element;

element = document.head;
 // <head> tag

element = document.body;
//<body></body> tag

element = document.links;
//All links on the page

element = document.title;
//Title of current web page

element = document.images;
// All images in a webpage

element = document.doctype;
//The doctype is an html tag that defines what type of markup language your website uses, and how it should be displayed by browsers.

element = document.URL;
//return URL

element = document.baseURI;
//returns base URI (protocol, domain and port)

element = document.getElementById("links");

element = document.getElementsByClassName("xyz");

element = document.getElementsByTagName("xyz");

//Agr ak class bht dafa aa ri hai

element = document.getElementsByClassName("xyz")[0];   //[0][1][2][3]

element = document.getElementById("list").innerText;
//text inside an id without html

element = document.getElementById("list").innerHTML;
///html code inside an ID with text

element = document.getElementById("list").getAttribute;
///get attribute value from an id

//style = "color:red" --->  //color:red

element = document.getElementById("list").getAttributeNode;
//style = "color:red" ---> return this

element = document.getElementById("list").attributes;
//attribute return kr dein ga jitny be list mei hoo gay

document.getElementById("header").setAttribute("style" , "border:10px dotted yellow");
element = document.getElementById("header").getAttribute("class");

document.getElementById("header").removeAttribute("style");

document.querySelector("list");
///select first element

document.querySelectorAll("list");
////select all elements
 

//DOM CSS styling methods

document.querySelector("list").style.backgroundColor = "tan";
element = document.querySelector("list").style;
///border of the selected element

document.querySelector("list").className = "xyz";
element = document.querySelector("list").className; //string return krta hai

document.querySelector("list").classList = "xyz";
element = document.querySelector("list").classList; //array return krta hai

document.querySelector("list").classList.remove("abc");



















