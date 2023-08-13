//length

var arr = [12 , 13 , 14 , 16 , 17 , 18];
document.write(arr.length);

var string = "Hello My name is Alisha";
string.toLowerCase();
//to lower case

var string = "Hello My name is Alisha";
string.toUpperCase();
// to upper case

string.includes("Hello");
// true or false

string.startsWith("Hello");
// true or false

string.endsWith("Alisha");
//true or false

string.search("Alisha");
// returns the index of first occurence of a character in a string, -1 if not found

string.match(/is/g);
//returns an array with all matches

string.indexOf("is");
// returns position of char in str, -1 if not found

string.lastIndexOf("Alisha");
// last occurrence from right side

string.replace("Alisha" , "Amna");
// replace one word by another

string.trim();
//removes white spaces at start and end

string.charAt(3);
//get single letter

string.charCodeAt(2);
// get ascii code for that particular character

var a = String.fromCharCode(97);
// 'a'

var a = "Hello World";
var b = "Javascript";

var c = a.concat(b);
document.write(c);
// Hello World Javascript

var c = a.split(" ");
document.write(c);
// [ 'Hello', 'World']

var c = a.split("World");
// split on every instance of world

var d = a.repeat(4 + "<br>");
document.write(d);
// repeat 4 times

var a = a.slice(2,10);
// slice starts form second to ninth element (not included)

var a = a.substring(3);
// same as above but without starting point

var a = a.substring(3 , 5);
//3 starting point and 5 elements ly kr aoo

var a = 50;
a.toString();
// convert number into string














