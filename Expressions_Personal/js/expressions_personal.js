/**
 * Created by Jesse Mayhew on 10/9/13. Web Programming Fundamentals
 */
var rent = prompt("To find total utilities enter your rent first.");
var gasBill = prompt("Now enter your gas bill.");
var electricBill = prompt("Enter your electric bill amount.");
var cableBill = prompt("Finally, enter your most recent cable bill.")

var totalBills = Number(rent) + Number(gasBill) + Number(electricBill)+Number(cableBill);
prompt("Your bill total is"+totalBills);
console.log("Your bill total is"+totalBills);



