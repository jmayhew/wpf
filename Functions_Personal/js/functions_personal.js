/**
 * Created by jessemayhew on 10/22/13.
 */




//Two Functions to calculate area when building small metal structures in my room


/*var totalSize = calcRhombus();// return puts the area in the variable totalSize

function calcRhombus(side, altitude){//normal function
    var side = 20;// variable for side measurement
    var altitude = 29;//variable for altitude measurement
    var area = side * altitude;//expression
    return area;//returns the value area to the variable totalSize
}//ends function

console.log(totalSize+" square feet/inches is the total area of the rhombus");//log with answer and string- concatenation

 */

var calcArea = function(pi, radiusOne, radiusTwo){
    var area = pi*radiusOne*radiusTwo;
    return area;
}
var a = calcArea(3.14, 5, 5);
console.log("The area of the circle is "+a);











