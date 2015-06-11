<<<<<<< HEAD
// Lifetime supply calculator
function calculate() {

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

} // ends function lifetimeSupply


// Favorite Things
// Create a new function called favoriteThings() in the javascript file
function favoriteThings() {

	// In the function, create an array 
	var favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
  	
	// and loop through the results
	for (var i = 0; i < favoriteThings.length; i++) {
		// console.log(things[i]);  // checking that the loop works
	}

	// Post the results in an alert "My favorite things are XX, YY, ZZ"
	alert("My favorite things are " + favoriteThings);
	

	// Bonus -- add an "and" in the sentence before the last item
	var statement = "My favorite things are ";
	alert(statement);

	for (var i = 0; i < favoriteThings.length; i++) {

        //if-else statement
        if (i == favoriteThings.length-1) {
    		alert("and " + favoriteThings[i] + ".");
    	} else {
    		alert(favoriteThings[i] + ", ");
    	}
  	} 

/* Also works: // BUT HOW DOES "+=" WORK, EXACTLY?
	function faveThings() {
		var faveThings = ["A", "B", "C", "D"];
		var statement = "My favorite things are ";
		for (var i = 0; i < faveThings.length; i++) {
		    if (i == faveThings.length-1) {
				statement += ("and " + faveThings[i] + ".");
			  } else {
				statement += (faveThings[i] + ", ");
		}
	}
	alert(statement);
	}
*/

} // ends favoriteThings function

=======
$(document).ready(function(){
    $('.box').bind({
        click: function() {
          $(this).css('background-color', 'green')
          $(this).html('Clicked!')
        },
        mouseenter: function() {
          $(this).css('background-color', 'purple')
          $(this).html('Hi!')
        },
        mouseleave: function(){
          $(this).css('background-color', 'orange')
          $(this).html('Bye!')
        }
    });
    $('#calculate').click(calculate);
    $('#favorites').click(favoriteThings);
    $('#friends').click(myFriends);
})

function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    var resultDiv = $('#lifetime-supply')
    if(total > 40000){
        resultDiv.html("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        resultDiv.html("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    } 
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var resultDiv = $('#favorite-things');
    
    var resultParagraph = $('<p></p>');
    var result = 'My favorite things are: ';
    
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    resultParagraph.append(result);
    resultDiv.append(resultParagraph);
}
function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var resultDiv = $('<div></div>')
    
    var introParagraph = $('<p>My friends are:</p>');
    resultDiv.append(introParagraph)
    
    for(var i = 0; i < friends.length; i++){
        var resultParagraph = $('<p>' + describeFriend(friends[i]) + '</p>');
        resultDiv.append(resultParagraph);
    }
    $('body').append(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}
>>>>>>> 1430c837a2f3a4035af10f4dfaf9e1a28563d062
