/**
 * Created by jessemayhew on 10/15/13.
 */
//Ternary with amount of time working on homework

var homeworkTime = prompt("How many minutes have you been working at your studies?");//Prompting the student to enter the minutes of time he has been studying
breakTime=(homeworkTime < 60)?"Keep going" : "Take a snack break now";//Ternary if statement saying if it is true Keep Going if it is false take a snack break
    console.log(breakTime);//logs the output of the statement