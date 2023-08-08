

function grading() {

var grade = document.getElementById('grade').value;

if (grade >= 4) {
    document.write("You got A grade")
}

else if (grade >= 3.5 ) {
    document.write("You got B+ grade")
}

else if(grade >= 3.3) {
    document.write("You got B grade ")
}

else if(grade >= 2.8) {
    document.write("You got C grade")
}

else {
    document.write("You failed!")
}

}



