/**
 * Created by jessemayhew on 10/13/13.
 */
/*var contestantsWeight = 4;


if(contestantsWeight >= 250){
    console.log("You can join the heavyweight division");
}else{
    console.log("You need to gain some weight first");
}*/

measurement =prompt("Do you need to find F or C?(Please enter an F or a C");
temp = prompt("What is the degree you need converted?(Please state number only at this point)");
if(measurement === "C"){
    result=(temp*9/5+32);
    console.log("Your conversion is "+result+"F");
}else{
    result=(measurement === "F" && (temp-32)*5/9);
    console.log("Your conversion is "+result+"C");
}