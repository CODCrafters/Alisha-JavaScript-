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


//add Listener Method:

document.getElementById("list").onclick = abc;

function onclick() {
    document.getElementsById("list").style.backgroundColor = "black";
}
//Event Listeners:

document.getElementById("list").addEventListener("click" , functionname);  //don't use on

//another method
document.getElementById("list").addEventListener("click" , function(){
        this.style.backgroundColor = "black";
});

//use capture---> agr true hai tu bd wala function pehly chalay ga or agr false hai tu sequence sy hi chalay ga

//also use removeEventListener


//classlist methods:

document.getElementById("list").addEventListener("click" , function() {
         this.classList.add("xyz");
});

document.getElementById("list").addEventListener("click" , function() {
    this.classList.remove("xyz");
});

document.getElementById("list").classList.length;

document.getElementById("list").classList.toggle("xyz");
//get elements by class name and id:

document.getElementById("list").classList.index(0); //zero index class return kr dein ga

document.getElementById("list").classList.contains("xyz");  //return true if exist otherwise false


//DOM Traversal Methods:

// parentNode
// ParentElement
// Children
// ChildNodes
// firstChild
// firstElementChild
// lastChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// previousSibling

//childern ky through parent ko target krna
document.getElementById("list").parentElement   //return parentelementof list
document.getElementById("list").parentElement.style.backgroundColor = "black"; //apply css on parent element

//parentNode---->kuch nah kuch return karein gay lekin parentElement agr parent exist ni krta tu null return karein ga


//parent ky through children ko target krna
document.getElementById("list").children;
//return all child of list
document.getElementById("list").children[0];
//return first child of list

document.getElementById("list").childNodes;
//all node in list  //return with text , space , comment sb aa jata hai

document.getElementById("list").firstElementChild;
//first child of list

document.getElementById("list").lastElementChild;
//last child of list

document.getElementById("list").firstChild;
//first node of list  //return with text , space , comment sb aa jata hai

document.getElementById("list").lastChild;
//last node of list    //return with text , space , comment sb aa jata hai

document.getElementById("list").nextElementSibling;
//next sibling of list

document.getElementById("list").previousElementSibling;
//previos sibling of list

document.getElementById("list").previousSibling;
////return with text , space , comment sb aa jata hai

document.getElementById("list").nextSibling;
//return with text , space , comment sb aa jata hai


//javascript sy koi tag , comment, text element create krna hai tu 

var newelement = document.createElement("h2");
///create new html element and return it to variable

var newtext = document.createTextNode("Hello my name is alisha");
/////create new textnode and return it to variable

var element = document.createComment("hello my name is alisha");
//////create new commet nd return it to variable


//append: only append

newelement.appendChild(newtext);
///child append

document.getElementById("test").appendChild(newelement);
///parent append
  
var target = document.getElementById("test");
target.insertBefore(newelement,childNodes[0]);
///insert before first child


//append + create

var newelement = document.createElement("h2");

var newText = document.createTextNode("This is just text");

newelement.appendChild(newtext);

var target = document.getElementById("test");
target.insertAdjacentElement("afterbegin" , newelement);


//insertAdjancentHTML

var target = document.getElementById("test");

var newElement = "<h2>this a Heading</h2>";

target.insertAdjacentHTML("afterbegin" , newelement);




//insertAdjacentText
var target = document.getElementById("test");

var newtext = "this a Heading";

target.insertAdjacentText("afterbegin" , newtext);


//replaceChild:

var newElement = document.createElement("li");

var newtext = document.createTextNode("Wow next Text");

newElement.append(newtext);

var target = document.getElementById("list");
var oldchild= target.children[1]; //get all children of the list element

target.replaceChild(newElement ,oldchild );

//remove Child

var target = document.getElementById("list");
var oldchild= target.children[0]; //get all children of the list element

target.removeChild(oldchild);


//cloneNode:

var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);

document.getElementById("list2").appendChild(copyElement); 


//contains method:


var parentElement = document.getElementById("test");
var target = document.getElementById("abc");

var find = parentElement.contains(target);

//hasAttribute

var target = document.getElementById("test");

var find = target.hasAttribute("class");
//class name ka attribute exist karay ga tu true return karein ga warna false


//hasChildNode

var target = document.getElementById("test");

var find = target.hasChildNodes();

//agr child exist karay ga then return true warna false


//isEqualNode()

// same Node Type
// same nodeName
// same NodeValue
// same childNodes
//same attributes
//same attribute values

var target1 = document.getElementById("list1").firstElementChild;
var target2 = document.getElementById("list3").firstElementChild;//both are li tag

var equal = target1.isEqualNode(target2);





 







































 



































