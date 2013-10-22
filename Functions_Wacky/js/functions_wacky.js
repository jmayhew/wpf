/**
 * Created by jessemayhew on 10/20/13.
 */



var sound = prompt("How many decibels can your voice make?");//prompting the user for a decibel amount
var decibelsTobreakGlass = 100;// variable for amount of decibels it takes to break flawed glass
var jetEngine = 140;// variable for amount of decibels a jet engine has
var shotgun = 165;//variable for amount of decibels a shotgun has
var loudestSound = 195;// variable for amount of decibels the loudest sound is

if(sound < decibelsTobreakGlass){//if statement with relational operator- if sound is less than dBs it takes to break glass
    console.log("You can not break the flawed glass!");// logs the string
}else if(sound >= decibelsTobreakGlass && sound < jetEngine){// else if statement with relational and logical operator 'And'
    console.log("You can break the flawed glass!");// logs the string
}else if(sound >= jetEngine && sound < shotgun){// else if statement with relational and logical operator
    console.log("You have a jet engine!");// logs the string
}else if(sound >= shotgun && sound < loudestSound){//else if statement with relational and logical operator
    console.log("You have a shotgun!");// logs the string
}else{//else block
    console.log("You have the loudest sound ever!");// logs the string
}// ends the if statement
