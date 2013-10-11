/**
 * Created by jessemayhew on 10/11/13.
 */
var dimes =1;
var nickels = 2;
var quarters = 3;
var pennies =4;

coinArray=[];
coinArray[dimes]=prompt("To find out your coin total,\r how many dimes do you have?");
coinArray[nickels]=prompt("How many nickels do you have?");
coinArray[quarters]=prompt("How many quarters do you have?");
coinArray[pennies]=prompt("How many pennies do you have?");
var totalCoins = Number(coinArray[dimes])*.10 + Number(coinArray[nickels])*.05 + Number(coinArray[quarters])*.25 + Number(coinArray[pennies])*.01;
prompt("You have a total of $"+totalCoins+" in coins.");
console.log("You have a total of $"+Number(coinArray[dimes])*.10+" in dimes");
console.log("You have a total of $"+Number(coinArray[nickels])*.05+" in nickels");
console.log("You have a total of $"+Number(coinArray[quarters]) *.25+" in quarters");
console.log("You have a total of $"+Number(coinArray[pennies])*.01+" in pennies");