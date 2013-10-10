/**
 * Created by Jesse Mayhew on 10/9/13. Web Programming Fundamentals
 */
var carPayment = prompt("How much do you spend on your car payment per month?");
var carInsurance= prompt("How much do you spend on your car insurance per month");
var carGas = prompt("How much do you spend on gas per month?");

var total = carPayment + carInsurance + carGas;
var result = prompt("You spend a total of "+total);
console.log("You spend a total of "+total);