/**
 * Created by jessemayhew on 10/17/13.
 */
//Loops

//normal if statement

/*var b = 10;

if (b > 0 ){
    console.log(b);
}*/

//while loop

/*var b = 10;

while (b > 0 ){
    console.log(b);
//decrement it
     b--;//could also use ++ (increment
}*/

//adding concatenation

var b = 10;// sets up the index

while (b > 0 ){//checks the condition
    console.log(b + 'kegs on the wall');//concatenation
    b--;// decrements  or increments the index
}

//DO While loop (not as common as loop

/*var c = 10;

do{// run this code
    console.log(c + 'Barrels of apples');
    c--;
}
while(c > 0);// while our condition is true*/

//For Loop - shorthand version of loops , culmination of all the loops put together

/*for (var i = 10; i > 0; i--){// sets up condition in on line decrements and variable and condition
    console.log(i + 'barrels of oranges')//if true lists each one in index
}*/

/*function outptMsg(){
    console.log("Hello World");
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();//invocation of function , function call, execution of function
calcArea();//twice if necessary*/

// variable scope

/*var width = 5;//two variables for width same name

function calcArea(){
    var width = 20;//prefers to calculate inside the function
    var height = 30;
    var area = width * height;
    console.log(area);
}
calcArea();
console.log(width);//prefers to to calculate what is outside the function (5)*/

//Arguments and Parameters

/*calcArea(30, 20);//30 is the first argument 20 is the second
                //calling the


function calcArea(w, h){//w= 30 h = 20 goes in the parenthesis not visible
    var area = w * h;
    console.log(area);
}*/

/*function dogYears(age){//use commas for more parameters to store in the definition
    var dogYears = age * 7;
    console.log("Sparky is "+dogYears+" years old.")
}


dogYears();//function call passes to the parameter
dogYears();//same result
dogYears(6);//store as 6 get Sparky is 42 years old
dogYears(4);//with the upper call and this one -two values in console 42 and 28
            //the age variable is being passed with 6 and 4 it's called a pass
            //parenthesis in the call holds the argument*/

/*function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is "+dogYears+" years old.")
}
var age1=9;//switchable
dogYears(age1);//switchable*/

//Returning values

/*var total = calcArea(30, 20);//total equals the function call

function calcArea(w, h){
    var area = w * h;
    return area;    //function spitting the info out
}

console.log(total);//to access value */