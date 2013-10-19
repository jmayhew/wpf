/**
 * Created by jessemayhew on 10/19/13.
 */
//Functions Worksheet
//var radius = 6;
//var pi =3.14;
//Circumference of a Circle



// circumferenceCircle( 6, 3.14);//arguments
//var radius = 6;
//var pi = 3.14;

 /*   function circumferenceCircle(radius * 2 *pi) = function(radius, pi){//arguments are passed or thrown in parenthesis
        var circumference = radius*2*pi;//formula for circumference of a circle with only radius
        return circumference;

    }
         var result = circumferenceCircle(6, 3.14);
            console.log("The circumference of the circle is "+result);// return the circumference*/

//Stung!



//victimWeight = prompt("How much will the victim of bee sting kills weigh?")

var stings = calcStings(190, 8.6666666667 );//Parameters

function calcStings(victimWeight, beeStings){//defining the function
        var totalStings = victimWeight * beeStings;//code the function runs
        return totalStings;//spitting out the info
}

console.log("It takes "+stings+" bee stings to kill this animal.");//concatenation with stings