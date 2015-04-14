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