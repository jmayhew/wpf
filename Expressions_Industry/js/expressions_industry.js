/**
 * Created by jessemayhew on 10/9/13.
 */
    //Professional Soccer Team stats

var shotsOffTarget = prompt("How many off target shots did your team have today?(Keeper did not touch nor hit post)")
var shotsOnTarget = prompt("How many shots on target were there?(Keeper touched or hit post)")
var possessionTime =prompt("How many minutes did your team have possession?")


var shotsTotal = Number(shotsOffTarget)+Number(shotsOnTarget);
var result= (1-Number(shotsTotal)/100) * Number(possessionTime)  ;

prompt("Your team spent "+result+"% of the possession time attacking the goal.")
console.log("Your team spent "+result+"% of the possession time attacking the goal.");

var goals = [0,1,2,3,4,5,6];
 goals [0] = prompt("At what minute did your team score the first goal?");
goals [1] = prompt("At what minute did your team score the second goal?");
goals [2] = prompt("At what minute did your team score the third goal?");
goals [3] = prompt("At what minute did your team score the fourth goal?");
goals [4] = prompt("At what minute did your team score the fifth goal?");
goals [5] = prompt("At what minute did your team score the sixth goal?");
goals [6] = prompt("At what minute did your team score the seventh goal?");

 goals = 1;
var totalGoals= Number(goals)[0]+Number(goals)[1]+Number(goals)[2]+Number(goals)[3]+Number(goals)[4]+Number(goals)[5]+Number(goals)[6];
console.log("Your team scored "+totalGoals+" goals during "+result+"% of attacking.");
var goals = prompt("Your team scored "+totalGoals+" goals during "+result+"% of attacking.");