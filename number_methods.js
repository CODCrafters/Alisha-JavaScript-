var a = "88";
var num = Number(a);
//Convert into number

var a = "76 89";
var num = Number(a);
//NaN

var a = 10.098;
var num = parseInt(a);
//Rounds down to the nearest integer value (whole numbers)

var a = "10";
var num = parseFloat(a);
document.write(num);
//float return

var a = -9.8765;

var a = "Hello"; //infinite
var num = Number.isFinite(a);
//true if it's finite, false otherwise

var a = 16;
var num = Number.isInteger(a);
//true or false depending on whether its an intger

var a = 8.89765;
var num = a.toFixed(3);
console.log("Return 3 digits after decimal: ", +num);

var a = 8.89765;
var num = a.toPrecision(3);
console.log("The rounded off number is:",+num );
















