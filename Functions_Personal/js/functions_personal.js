/**
 * Created by jessemayhew on 10/22/13.
 */

// around how many days away from my birthday?

var date =prompt("What date is it today?(Use a two digit number)");
var myBday = (11*29+28);//365-33=332
var month = prompt("What month is it?(Use a two digit number)");

var total = calcDays(date, myBday, month);
function calcDays(date, myBday, month){
    var days = month*date;
    if(days>332){
        var days-date
    }
}

var total = calcArea(30, 20);//total equals the function call

function calcArea(w, h){
    var area = w * h;
    return area;    //function spitting the info out
}

console.log(total);//to access value */



