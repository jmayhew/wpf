
//Jesse Mayhew October 14 2013 Web Programming Fundamentals

//create a conditional for gravity you are having at the point where you are (or where you would be)




var gravity=prompt("What is the gravity in meters per second where you are so we can find out what planet you landed on?");//prompts the end user to enter a number for gravity in meters per second to find out where he could be

if(gravity <= 3.724){//if gravity is less than or equal to 3.724
     console.log("You are close to Mars");//console log guesses he may be close to Mars
 }else if(gravity >= 3.725 && gravity<=8.82){
    console.log("You are close to being on Venus");
}else if(gravity>=8.83 && gravity<= 8.918){
    console.log("You may be on Saturn");
}else if(gravity>=8.918 && gravity<= 9.8){
    console.log("You are probably on Earth");
}else if(gravity>=9.9 && gravity <= 11.1172){
    console.log("You are probably near Neptune");

}else{
    console.log("You have entered a black hole and found another universe");
}


