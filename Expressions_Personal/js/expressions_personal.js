/**
 * Created by Jesse Mayhew on 10/9/13. Web Programming Fundamentals
 */
//Personal utilities bill calculator
var rent=1;//puts rent in index item one
var gasBill =2;//puts gas bill in index item two
var electricBill =3;//puts electric bill in item number three
var cableBill = 4;// puts cable bill in item no. four

billArray=[];//starts an array to collect bill totals
billArray[rent]=prompt("To find total utilities enter your rent first.");//prompts user to enter rent
billArray[gasBill]=prompt("Now enter your gas bill.");//prompts user to enter gas bill amount
billArray[electricBill]=prompt("Enter your electric bill amount.");//prompts user to enter electric bill total
billArray[cableBill]=prompt("Finally, enter your most recent cable bill.");//
var totalBills = Number(billArray[rent]) + Number(billArray[gasBill]) + Number(billArray[electricBill])+Number(billArray[cableBill]);//adds up all amounts
prompt("Your bill total is "+totalBills);//gives the input to prompt
console.log("Your bill total is "+totalBills);//gives the input to console
console.log("Your electric bill is "+electricBill);//gives the input to console
console.log("Your rent bill is "+rent);//gives the input to console
console.log("Your cable bill is "+cableBill);//gives the input to console


