setInterval(Anim , 10);//----> 10(speed);

function Anim() {
    a = a+10;

    var target = document.getElementById("test");
    target.style.marginLeft = a+'px';
}

//agr clearinterval krna hai tu 
var a = 0;
var id = setInterval(Anim , 10);//----> 10(speed);

function Anim() {
    a = a+10;

    if(a == 200) {
        clearInterval(id);
    }else {

    var target = document.getElementById("test");
   // target.style.marginLeft = a+'px';
  // target.style.width = a+'px';

    }
}

//setTimeout() & clearTimeout()

var id = setTimeout(Anim , 3000);

function Anim() {
    var target = document.getElementById("test");
    target.style.width = "500px"
}

function stopAnimation() {
    clearTimeout(id);
}

//<button onclick = "stopAnimation()">OnClick</button>



