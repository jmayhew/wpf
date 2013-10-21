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

var sound = prompt("How many decibels can your voice make?");//prompting the user for a decibel amount
var decibelsTobreakGlass = 100;// variable for amount of decibels it takes to break flawed glass
var jetEngine = 140;// variable for amount of decibels a jet engine has
var shotgun = 165;//variable for amount of decibels a shotgun has
var loudestSound = 195;// variable for amount of decibels the loudest sound is

if(sound < decibelsTobreakGlass){//if statement - if sound is less than dBs it takes to break glass
    console.log("You can not break the flawed glass!");// logs the string
}else if(sound >= decibelsTobreakGlass && sound < jetEngine){
    console.log("You can break the flawed glass!");
}else if(sound >= jetEngine && sound < shotgun){
    console.log("You have a jet engine!");
}else if(sound >= shotgun && sound < loudestSound){
    console.log("You have a shotgun!");
}else if(sound >= loudestSound){
    console.log("You have the loudest sound ever!");
}
