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

var width = 5;//two variables for width same name

function calcArea(){
    var width = 20;//prefers to calculate inside the function
    var height = 30;
    var area = width * height;
    console.log(area);
}
calcArea();
console.log(width);//prefers to to calculate what is outside the function (5)