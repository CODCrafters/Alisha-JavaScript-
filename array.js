// arr = [1 , 2 , 3 , 4 , 5]

// document.write("<ul>")
// for(var i = 0; i<arr.length; i++) {
//     document.write("<li>" + arr[i] + "</li>" + "<br>");
// }

// document.write("</ul>")


// var arr = new Array();

// arr[0] = "Hello";
// arr[1] = 8;
// arr[2] = "Hi";
// arr[3] = "Yellow";

// for(var i = 0; i<arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }


//Multi-dimension array:

// arr = [
//    ["Alisha", 17 , 9876 , 9865],
//    ["Rahul",   18,  9875, 9876 ],
//    ["Sachin ", 19  , 876 , 9765],

// ];

//    for (var i = 0; i<arr.length ; i++) {
//     for(var j = 0; j<arr[i].length ; j++){
//         document.write(arr[i][j] + "   ")
//     }
//     document.write(" <br> ");
//    };

//Multi-dimension array in tabular form:

// arr = [
//     ["Alisha", 17 , 9876 , 9865],
//     ["Rahul",   18,  9875, 9876 ],
//     ["Sachin ", 19  , 876 , 9765],
 
//  ];
//     document.write("<table border = 1px>");
//     for (var i = 0; i<arr.length ; i++) {
//         document.write("<tr>");

//      for(var j = 0; j<arr[i].length ; j++){
         
//          document.write("<td>" + arr[i][j] + ' ' + "</td>")
//      }
//      document.write(" <br> ");
//      document.write("</tr>");
     
//     };
//     document.write("</table>");


//Modification:
// arr= ['A',2,'B','C'];
// arr[1] = 5;

//Delete:
// arr= ['A',2,'B','C'];
// delete arr['3'];

//Array Methods:

// a = ["Kinza" , "Lisa" , "Aimen" , "Zarnab"];

// a.sort();
// a.reverse();
//a.pop();   //last value ko delete karein ga
//a.push("Alisha");   //last mei value add karein ga
//a.shift();  //first value remove karein ga
//a.unshift(); //first mei value add krni ho

// var a = ["Kinza" , "Lisa" , "Aimen" , "Zarnab"];
// var b = a.concat("Alina");
// document.write(b)

//var c = a.concat(b , n , m );
//var c = a.join(" / $ |") // is ky andar kuch be dy sakhty hai

//var b = a.slice(2,6);

//splice(index , howmay , "new value" , delete);  //existing array mei he change krta hai middle mei koi value add krny ky liya

//a.splice(2, 0 , "Rehman" , "Raheem");

//Check array or not:
// var b = Array.isArray(a);

// if (Array.isArray(a)) {
//     document.write("Yes, it is a String")
// }


//var b = a.indexOf("Rehman" , 1);  //(1)----> starting index hai kaha sy shoru krna hai
//var b = a.lastindexOf("Rehman" , 2)  // 2 bar Rehman hai tu last one wala dy ga

//var b = a.includes("Rehman");  //case sensitive


// var a = [12 , 13 , 17 , 18 , 19];

// var b = a.some(Testage); //sb ko check ni karein ga

// function Testage(age) {
//     return age>=13;
// }

// var a = [9 , 13 , 17 , 18 , 19];

// var b = a.every(Testage); //sb ko check  karein ga

// function Testage(age) {
//     return age>=13;
// }

// var a = [9 , 13 , 17 , 18 , 19];

// var b = a.find(findage); 

// function findage(age) {
//     return age>13;  ---> only return 1st true value baki ko pass kr dein ga
// }

// var a = [9 , 13 , 17 , 18 , 19];

// var b = a.findIndex(findage); 

// function findage(age) {
//     return age>13;  ---> only return 1st true value baki ko pass kr dein ga
// }

// var a = [9 , 13 , 17 , 18 , 19];

// var b = a.filter(findage); 

// function findage(age) {
//     return age>13;  --->new array return karein ga
// }

var a = [9 , 13 , 17 , 18 , 19];
a.toString();
//array to string convert karne ke liye use karkega

// var a = [9 , 13 , 17 , 18 , 19];

// a.forEach(function(value , index) {

//     document.write(index , value);

// });

// var a = [9 , 13 , 17 , 18 , 19];

// a.forEach(loop);

// function loop(value , index) {
//     document.write(value , index)
// }





























