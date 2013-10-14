/**
 * Created by jessemayhew on 10/13/13.
 */
/*var contestantsWeight = 4;


if(contestantsWeight >= 250){
    console.log("You can join the heavyweight division");
}else{
    console.log("You need to gain some weight first");
}*/

/*measurement =prompt("Do you need to find F or C?(Please enter an F or a C");
temp = prompt("What is the degree you need converted?(Please state number only at this point)");
if(measurement === "C"){
    result=(temp*9/5+32);
    console.log("Your conversion is "+result+"F");
}else{
    result=(measurement === "F" && (temp-32)*5/9);
    console.log("Your conversion is "+result+"C");
}*/

var grade = prompt("What is your grade?");

    if(grade <= 69){
        console.log("You failed miserably");
    }else if(grade>=70 && grade<=80){
        console.log("You barely passed with a D");
    }else if(grade>=81 && grade <= 90){
        console.log("You are average");
    }else{
    console.log("you are a genius");
   }