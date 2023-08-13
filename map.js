//a.map() ---->existing array mei change ni krta new array create krta hai

var arr = [12 , 45 , 17 , 18 , 19 , 20];

var b = arr.map(test);
document.write(b)
function test(x) {
    return x*10;
}