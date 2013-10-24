/**
 * Created by jessemayhew on 10/22/13.
 */




//Two Functions to calculate area when building small metal structures in my room


/*

var totalSize = calcRhombus();// return puts the area in the variable totalSize

function calcRhombus(side, altitude){//normal function with parameters
    var side = 20;// variable for side measurement
    var altitude = 29;//variable for altitude measurement
    var area = side * altitude;//expression
    return area;//returns the value area to the variable totalSize
}//ends function

console.log(totalSize+" square feet/inches is the total area of the rhombus");//log with answer and string- concatenation

 */

var calcArea = function(pi, radiusOne, radiusTwo){//defining the anonymous function with three parameters
    var area = pi*radiusOne*radiusTwo;//expression for area of a circle
    return area;// returns the value area to variable a
}
var a = calcArea(3.14, 5, 5); // receives the return value and holds the arguments for the anonymous function
console.log("The area of the circle is "+a);// logs the string with answer












