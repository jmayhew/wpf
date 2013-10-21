/**
 * Created by jessemayhew on 10/20/13.
 */
/*Each of the following requirements must exist in at least one of the 3 subprojects:
 A ternary
 An else if
 An anonymous function
 A normal "named" function
 An expression with two arithmetic operators
 A function with three parameters.
 At least one logical operator
1. Conditional (ternary) operator
2. If statement, condition, and True
block
3. Else If statement, condition, and
block
4. Else block
5. Conditional operator other than equals */

var sound = prompt("How many decibels can your voice make?");
var decibelsTobreakGlass = 100;
var jetEngine = 140;
var shotgun = 165;

if(sound <= decibelsTobreakGlass){
    console.log("You can not break the flawed glass!");
}else if(sound >= decibelsTobreakGlass){
    console.log("You can break the flawed glass!");
}else if(sound >= decibelsTobreakGlass  && sound <= jetEngine){
    console.log("You have a jet engine!");
}else if(sound > jetEngine && sound >= shotgun);
    console.log("You have a shotgun");
}
