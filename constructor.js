function Circle(radius) {
    this.radius = radius;
    this.calculate = function() {
        console.log(radius * radius)

    };
}

const circle = new Circle(67);
circle.calculate();

//built-in constructors:

//new String();   //string literal
//new Boolean(); //true false
//new Number();  //1 , 2 , 3 , 4

//functions are objects