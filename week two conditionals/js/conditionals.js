/**
 * Created by jessemayhew on 10/12/13.
 */
//conditionals

//if the kid is over 48 inches in height
/*var kidHeight = 50;
var minHeight = 48;
var sneakerLift = 2;
//if the child is old enough print to the console "you can ride"
if(kidHeight+sneakerLift > minHeight ){
    //code performed if condition is true
  console.log("You can ride the Coaster");

}*/
//console.log("this comes after when false");
/*var kidHeight = 47;
var minHeight = 48;
//if the child is old enough print to the console
//if the child is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the Coaster");
}else{
//substituting if(kidHeight <= minHeight){
    console.log("Sorry kid you got some growing to do");
}*/

/*
//conditional logic else if
var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45;//the height of the kid w/parent
//if the child is old enough print to the console
//if the child is over 48 inches in height
//plain if statements are for the computer to choose between doing a block of code or to skip it
//"if and else" is to choose b/t two blocks of code
//"else and  if"  allows computer to choose between three or more blocks of code conditions
//"else if" always requires condition
//"else" never requires a condition
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the Coaster");
}else if(kidHeight > wParentHeight){
//code performed only if first if condition is false
//you can ride with a parent present
    //never have a conditional attached to else
    console.log("Sorry kid you got some growing to do");
}else{
//printout sorry you have growing ot do
    console.log("Sorry kid you got some growing to do");
}*/


//Conditional Logic Logic Operators

//And

/*var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;
//if the price of the phone is less than our budget
if(iPhonePrice < budget && payCheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
//if(){
    //console.log("we can buy the phone");
//}else{
   // console.log("no phone 4 u");
//}*/

/*var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;
//if the price of the phone is less than our budget
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
//if(){
//console.log("we can buy the phone");
//}else{
// console.log("no phone 4 u");
//}*/

//Conditional Logic - Ternary Operators

/*if(condition){
    do if true;
}else{
    do if false;
}
//Shortening as ternary operation

//(condition) ? do if true : do if false;
//var gpa = 48;
//if gpa is over the min 2.0 score, the student can graduate

/*if( gpa > 2.0){
    console.log("You can graduate");
}else{
    console.log("GPA is too low");
}*/

//(gpa > 2.0) ? console.log("You can graduate") : console.log("GPA is too low");

var age = 11;
var book;

//if the child is under 10 , they get green eggs and ham, otherwise they get hg wells the time machine
//if(age < 10){
   // book = "green eggs";
//}else{
    //book = "time machine"
//}
//console.log(book);

//above problem as ternary
book = (age <10)? "green eggs":"time machine";
console.log(book);
