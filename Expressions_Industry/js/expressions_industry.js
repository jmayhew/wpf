/**
 * Created by jessemayhew on 10/9/13.
 */
    //Professional Soccer Team stats

var shotsOffTarget = prompt("How many off target shots did your team have today?(Keeper did not touch nor hit post)")
var shotsOnTarget = prompt("How many shots on target were there?(Keeper touched or hit post)")
var possessionTime =prompt("How many minutes did your team have possession?")

var shotsTotal = shotsOffTarget+shotsOnTarget;
var result= (1-shotsTotal/100) * possessionTime  ;

prompt("Your team spent "+result+"% of the time attacking the goal.")
console.log("Your team spent "+result+"% of the time attacking the goal.");

var Goals=[1, 1 ,1];
var totalGoals=Goals[0] + Goals[1]+Goals[2];
console.log("Your team scored "+totalGoals+" goals.");
var goals = prompt("Your team scored "+totalGoals+" goals.");