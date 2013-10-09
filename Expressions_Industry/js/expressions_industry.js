/**
 * Created by jessemayhew on 10/9/13.
 */
    //Professional Soccer Team stats
var shots = prompt("How many shots did your team have today?")
var shotsOnTarget = prompt("How many shots on target were there?(Keeper touched or near post)")
var possessionTime =prompt("How many minutes did your team have possession?")


var averageTimeShooting=  (shots + shotsOnTarget)/possessionTime;
prompt("Your team spent "+averageTimeShooting+" minutes attacking the goal.")
console.log("Your team spent "+averageTimeShooting+" minutes attacking the goal.");
