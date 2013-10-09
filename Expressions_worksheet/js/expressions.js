//Jes Mayhew  October 6 2013  Assignment Expressions
/*var sparkyAge = 7;//variable for Sparky's age

var humanYears = 1;//variable for how many human years Sparky has been alive

var actualAge = (humanYears*sparkyAge)//Sparky's actual age

console.log("Sparky is "+ humanYears+" human years old which is "+ sparkyAge+" in dog years.");*/
/*var slices = 500;//how many slices
var people = 6;
var pizzas = 10;
var leftover = 60;
var result = (slices/people-leftover);
//console.log("Each person ate "+ result+" slices of pizza at the party.")
console.log("Sparky got "+parseInt(result)+" pieces of pizza")*/

var receiptTotals = [900, 478, 50.78, 470.78, 464.34];
var result = receiptTotals[0]+receiptTotals[1]+receiptTotals[2]+receiptTotals[3]+receiptTotals[4];
var averageResult = (result/5);
console.log("You have spent a total of $"+result+" on groceries over five weeks. That is an average of $"+averageResult+" per week.")