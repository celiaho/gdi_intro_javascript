<<<<<<< HEAD
// Lifetime supply calculator
var age = 30;
var oldAge = 100;
var perDay = 2;

var days = (oldAge - age) * 365; // 25,550
var total = (perDay * days);

alert(total + " bananas");

//if else statement
if (total >= 40,000) { 
	// total is greater than or equal to 40,000
	console.log(total);
	console.log("Wow, that's a lot! " + total + " FTW!");
} else {
	// total is less than 40,000
	console.log(total);
	console.log("That's a healthy dose of potassium. " + total + " is the recommended lifetime dose.");
}
=======
function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    } 
}
>>>>>>> 1430c837a2f3a4035af10f4dfaf9e1a28563d062
