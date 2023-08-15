//<input type = "text" id="fname" onfocus = "focus_func()"></input> ---->in html

function focus_func() {
    document.getElementById("fname").style.backgroundColor="#0f0"; 
//change color of textbox when focused
}

//jis py focus ho aus ka clr change hoo jai

//<input type = "text" id="fname" onfocus = "focus_func(this)"></input> ---->in html

function focus_func(element) {
    element.style.backgroundColor="#0f0"; 
     //change color of textbox when focused
}


//pehlay focus hoo then blur hoo jai

//<input type = "text" id="fname" onfocus = "focus_func(this)" onblur ="blur_func(this)" oninput = "input(this)"></input> ---->in html

function focus_func(element) {
    element.style.backgroundColor="#0f0"; 
     //change color of textbox when focused
}

function blur_func(element) {
    element.style.backgroundColor=""; 
     //change color of textbox when focused
}

function input(element) {

    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

{/* <div id = "test" style = "border:1px">

</div> */}


//<input type = "text" id="fname" onfocus = "focus_func(this)" onblur ="blur_func(this)" onchange = "change(this)"></input> ---->in html

function input(element) {

    var x = element.value;
    document.getElementById("test").innerHTML = x;
}


//<input type = "text" id="fname" onfocus = "focus_func(this)" onblur ="blur_func(this)" onchange = "change(this)" onselect = "select()"></input> ---->in html

function select() {

    console.log("You selected this ....");

}


<form action = "" onsubmit = "submit()">

</form>

function submit() {

    alert("you submitted this form");

}



function submit() {

    var x = document.getElementById("fname").value;

    alert("you submitted" + x);
}

//<input type = "text" id="fname" onfocus = "focus_func(this)" onblur ="blur_func(this)" onchange = "change(this)" onselect = "select()" onvalid = "alert(Please fill out this field"></input> ---->in html











   








