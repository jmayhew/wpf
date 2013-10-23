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

/*var b = 10;// sets up the index

while (b > 0 ){//checks the condition
    console.log(b + 'kegs on the wall');//concatenation
    b--;// decrements  or increments the index
}*/







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




//Normal Functions



/*function outptMsg(){
    console.log("Hello World");
}





function calcArea(){//curly braces say these are the codes my function is going ot run
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

//Not actually happening bc they need to be invoked






//Functions- Function Execution



/*function outptMsg(){
 console.log("Hello World");
 }




function calcArea(){//curly braces say these are the codes my function is going ot run
 var width = 20;
 var height = 30;
 var area = width * height;
 console.log(area);
 }

 calcArea();//invocation of function- automatically calls "area" , function call, execution of function
 calcArea();//twice if necessary- making the code REUSABLE*/




//FUNCTIONS - variable scope





/*var width = 5;//two variables for width same name

function calcArea(){
    var width = 20;//WIDTH VARIABLE HERE IS SCOPED to calcArea- prefers to calculate inside the function
    var height = 30;
    var area = width * height;
    //console.log(area);
}
calcArea();
console.log(width);//prefers to to calculate what is outside the function (5)*/



var width = 5;//two variables for width same name

function calcArea(){
    var width = 20;//WIDTH VARIABLE HERE IS SCOPED to calcArea- prefers to calculate inside the function
    var height = 30;
    var area = width * height;
    //console.log(area);
}
calcArea();//scoped to calcArea width of "20"
console.log(width);//prefers to to calculate what is outside the function (5) bc this code is outside the function








//Functions - Arguments and Parameters





/*calcArea(30, 20);//30 is the first argument 20 is the second

function calcArea(w, h){//w= 30 h = 20 goes in the parenthesis not visible
    var area = w * h;
    console.log(area);
}*/








/*function dogYears(){//use commas for more parameters to store in the definition
    var age = 4;//variable for human years
    var dogYears = age * 7;//code to run
    console.log("Sparky is "+dogYears+" years old.")//logs string with result
}

dogYears();//function call passes to the parameter
dogYears();//same result and twice*/



/*function dogYears(age){//parenthesis holds parameter ,use commas for more parameters to store in the definition
    //var age = 4;//variable for human years instead we put in the parameter
    var dogYears = age * 7;//code to run
    console.log("Sparky is "+dogYears+" years old.")//logs
}
dogYears(6);//storing it to "age" as 6 and get Sparky is 42 years old
dogYears(4);//with the upper call and this one -two values in console 42 and 28
//the age variable is being passed with 6 and 4 it's called a "pass"
//parenthesis in the call,"dogYears", holds the argument*/







/*function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is "+dogYears+" years old.")
}
var age1=9;//just like anything else in code using a value is the same thing as using
a variable that represents that value- enters "var age1" below
dogYears(age1);//switchable
dogYears(5);//results in two answers "9*7" and "5*7*/








//Returning values

/*calcArea(30,20);

function calcArea(w, h){
    var area = w * h;
    console.log(area);//no return
}
*/



/*var total = calcArea(30, 20);//total equals the function call it stores the return,
// they should be assigned to variables

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out needs a var added var total- it just goes up there different names and everything
}

console.log(total);//to access value*/






//Procedures versus Functions




//this is a Function-it has a return

/*function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//This is a Procedure- it has no return

function calcAreaP(width, height){
    var area = width * height;
    console.log(area);  //no return
}*/

//Anonymous Functions- also called closures
//are functions created and given a name as the code is run


/*var functionName = function(){//function definition
    //code the function runs
}

functionName();//Function Call*/

/*function functionName(){

}

var functionName = function(){
    //code to run
}
functionName();*/


//instead of function uses var
/*var calcArea = function(width, height){//defining the function here - must be before the invoking

    var area = width * height;//code the function runs
    return area;
}

calcArea(20, 30);// invoking, or calling

console.log(a);*/


/*var calcArea = function(width, height){//defining the function here - must be before the invoking

    var area = width * height;//code the function runs
    return area;
}

var a = calcArea(20, 30);//returning into the value a

console.log(a);*/

//named functions, no matter where they are defined before the code is run(hoisting)
//Anonymous Functions are used for brevity , scope variables are better with this