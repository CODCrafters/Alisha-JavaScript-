function marks(eng , urdu , maths) {
    return eng+urdu+maths;
}

function percentage(tt){
    return tt/300 * 100
}

var a = marks(67 , 45 , 90);
var b = percentage(a);
document.write(b);