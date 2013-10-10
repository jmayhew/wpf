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

