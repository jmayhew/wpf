/**
 * Created by jessemayhew on 10/15/13.
 */
//Ternary with amount of time working on homework

var homeworkTime = prompt("How many minutes have you been working at your studies?");
breakTime=(homeworkTime < 60)?"Keep going" : "Take a snack break now";
    console.log(breakTime);