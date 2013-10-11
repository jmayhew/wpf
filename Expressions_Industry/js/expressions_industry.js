/**
 * Created by jessemayhew on 10/9/13.
 */
    //Professional Soccer Team stats
//create an array to store values then formulate the percent of time attacking and the amount of goals scored
 //
//futbolArray=[0,1,2,3,4];
///futbolArray[offTarget] = prompt("How many off target shots did your team have today?(Keeper did not touch nor hit post)";
//futbolArray[onTarget] = prompt("How many shots on target were there?(Keeper touched or hit post)");
//futbolArray[possessionTime] =prompt("How many minutes did your team have possession?");
//futbolArray[goals]=prompt("How many goals did your team score?")
//futbolArray[result]=prompt("Your team spent "+parseInt(result)+"% of the possession time attacking the goal.")
//futbolArray[goals]=("Your team had a total of "+goals);

    // number of shots on target and off target
    //possession time 
    //calculate % of possession time attacking the goal
    //

//create an array store 5 pieces of information
//shotsOnTarget, ShotsOffTarget, possessionTime, shotTotal, percentOfGoal
var shotsOffTarget =0;
var shotsOnTarget=1;// , possessionTime, shotTotal, percentOfGoal
var possessionTime=2;
var shotTotal=3;
 var percentAttacking=4;
var goals = 5;


futbolArray = [0,1,2,3,4,5];
futbolArray[shotsOffTarget]=prompt("How many off target shots did your team have today?(Keeper did not touch nor hit post)");
futbolArray[shotsOnTarget]=prompt("How many shots on target were there?(Keeper touched or hit post)");
futbolArray[possessionTime]=prompt("How many minutes did your team have possession?");
futbolArray[shotTotal]=Number(futbolArray[shotsOffTarget])+Number(futbolArray[shotsOnTarget]);
futbolArray[goals]=prompt("How many goals did your team have?");
futbolArray[4]=prompt("Your team spent "+parseInt(percentAttacking)+"% of the possession time attacking the goal.");
//var shotsOffTarget = prompt("How many off target shots did your team have today?(Keeper did not touch nor hit post)")
//var shotsOnTarget = prompt("How many shots on target were there?(Keeper touched or hit post)")
//var possessionTime =prompt("How many minutes did your team have possession?")=

 futbolArray[3] = Number(futbolArray[0])+ Number(futbolArray[1]);
console.log("Your team shot "+futbolArray[3]+" times");
console.log(futbolArray[3]);
console.log(futbolArray[1]);
 percentAttacking = (1-Number(futbolArray[3])/100) * Number(futbolArray[2]);
console.log("Your team spent "+parseInt(percentAttacking)+"% of the possession time attacking the goal.");


    console.log("Your team scored "+goals+" goals.");



/*var result = prompt("Your team spent "+parseInt(result)+"% of the possession time attacking the goal.")
console.log("Your team spent "+parseInt(result)+"% of the possession time attacking the goal.");
console.log(shotsOffTarget);
console.log(shotsOnTarget);
console.log(possessionTime);
console.log(shotTotal);
console.log(result);

console.log("Your team scored "+goals+" goals during "+parseInt(result)+"% of attacking.");
 var finalGoals = prompt("Your team scored "+goals+" goals during "+parseInt(result)+"% of attacking.");
var goals = [];
goals [0] = prompt("At what minute did your team score the first goal?");
goals [1] = prompt("At what minute did your team score the second goal?");
goals [2] = prompt("At what minute did your team score the third goal?");
goals [3] = prompt("At what minute did your team score the fourth goal?");
goals [4] = prompt("At what minute did your team score the fifth goal?");
goals [5] = prompt("At what minute did your team score the sixth goal?");
goals [6] = prompt("At what minute did your team score the seventh goal?");
goals [7] = prompt("At what minute did your team score the seventh goal?");

goals = 1;
var totalGoals= Number(goals[0])+Number(goals)[1]+Number(goals)[2]+Number(goals)[3]+Number(goals)[4]+Number(goals)[5]+Number(goals)[6];
console.log("Your team scored "+totalGoals+" goals during "+result+"% of attacking.");
var goals = prompt("Your team scored "+totalGoals+" goals during "+result+"% of attacking.");*/
