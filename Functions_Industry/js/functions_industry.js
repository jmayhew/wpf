/**
 * Created by jessemayhew on 10/22/13.
 */


//Bank tellers use this counting method, it is proven to be easier.

var oneDollars =1;//index for one dollar bills
var fiveDollars = 2;// index for five dollar bills
var tenDollars = 3;// index for ten dollar bills
var twentyDollars =4;// index for twenty dollar bills

dollarArray=[];// array
dollarArray[oneDollars]=prompt("To find out your dollar total,\r how many ones do you have?");// prompting for an amount of dollars
dollarArray[fiveDollars]=prompt("How many fives do you have?");// prompt for fives in hand
dollarArray[tenDollars]=prompt("How many tens do you have?");// prompt for tens in hand
dollarArray[twentyDollars]=prompt("How many twenties do you have?");// prompt for twenties in hand
var totalDollars = Number(dollarArray[tenDollars])*10 + Number(dollarArray[fiveDollars])*5 + Number(dollarArray[twentyDollars])*20 + Number(dollarArray[oneDollars])*1;//expression with two arithmetic operators
prompt("You have a total of $"+totalDollars+" in bills.");//prompt giving the total bills in hand
console.log("You have a total of $"+Number(dollarArray[tenDollars])*10+" in tens");//logs the total dollar amount in tens
console.log("You have a total of $"+Number(dollarArray[fiveDollars])*5+" in fives");//logs the total dollar amount in fives
console.log("You have a total of $"+Number(dollarArray[twentyDollars])*20+" in twenties");//logs the total dollar amount in twenties
console.log("You have a total of $"+Number(dollarArray[oneDollars])*1+" in ones");//logs the total dollar amount in ones
