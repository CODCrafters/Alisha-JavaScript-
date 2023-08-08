function week(){

    var day = parseInt(document.getElementById("day").value);

    switch (day) {
        case 1:
            
            alert("Today is Monday");
            
        break;

        case 2:
            
            alert("Today is Tuesday");
            
        break;

        case 3:
            
            alert("Today is Wednesday");
            
        break;

        case 4:
            
            alert("Today is Thursday");
            
        break;

        case 5:
            
            alert("Today is Friday");
            
        break;

        case 6:
            
            alert("Today is Saturday");
            
        break;

        case 7:
            
            alert("Today is Sunday");
            
        break;

        default:
             alert("Invalid day number");
    }




}

function feedback() {
    var a = confirm("Do you like our website?");

    if(a) {
        alert("Thanks for your feedback");
    }else{
        alert("Sorry, we'll improve our website")
    }
}
