/**
 * Created by jessemayhew on 10/9/13.
 */
    //Professional Soccer Team stats
//create an array to store values then formulate the percent of time attacking and the amount of goals scored
 //
futbolArray=[0,1,2,3,4];
futbolArray[offTarget] = prompt("How many off target shots did your team have today?(Keeper did not touch nor hit post)";
futbolArray[onTarget] = prompt("How many shots on target were there?(Keeper touched or hit post)");
futbolArray[possessionTime] =prompt("How many minutes did your team have possession?");
futbolArray[goals]=prompt("How many goals did your team score?")
futbolArray[result]=prompt("Your team spent "+parseInt(result)+"% of the possession time attacking the goal.")
futbolArray[goals]=("Your team had a total of "+goals);


var shotsTotal = Number(offTarget)+Number(onTarget);

var result= (1-Number(shotsTotal)/100) * Number(possessionTime)  ;

prompt("Your team spent "+parseInt(result)+"% of the possession time attacking the goal.")
console.log("Your team spent "+parseInt(result)+"% of the possession time attacking the goal.");


console.log("Your team scored "+goals+" goals during "+parseInt(result)+"% of attacking.");
 var finalGoals = prompt("Your team scored "+goals+" goals during "+parseInt(result)+"% of attacking.");