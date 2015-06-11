/* jQuery document.ready function. 
This will run after all the HTML has been rendered in the browser */
$(document).ready(function(){
    getMeetups();
});


/* getMeetups function is called inside the jQuery document.ready function */
function getMeetups(){
	var api_key = "723570561e6a7b7453c2874655e5b78";
	var url = "https://api.meetup.com/2/";
	var method = "open_events"
	$.ajax({
		url: url + method,
		data: {
		  key: api_key,
		  lat: 42.342249,
		  lon: -71.07177200000001,
		  topic: 'JavaScript'
		},
		crossDomain: true,
		dataType: 'json',
		type: "GET",
		success: function (data) {
		    parseMeetups(data.results)
		},
		error: function(data) {
			console.log("Error", data);
		}				
	});
}

/* parseMeetups function is called inside the getMeetups function during the AJAX 'success' event */
function parseMeetups(results){

  // console.log(results);  // Uncomment this line to see all of the objects returned by the Meetup.com API in your console.

	// loop through 'results' object that is returned to us from the Meetup.com API
	for(var i = 0; i < results.length; i ++){

        var data = results[i];

		// Create new table row to hold each event returned from AJAX call
		var eventItem = $('<tr></tr>'); 

		// Create items to go into the table row
		var eventNum = $('<td>' + i + '</td>'); // Create a table item with the value of 'i' so we can keep track of how many events are returned.
		var eventName = $('<td><a href="'+data.event_url+'">'+data.name+'</a></td>'); // Create a table item with the event name, will be appended to table row
		var eventDescription = $('<td>'+data.description+'</td>'); // Create a table item with the event description, will be appended to the table row
		var groupName = $('<td>'+data.group.name+'</td>');

		if(data.fee == undefined){
			var fee = $('<td>$0</td>');
		} else {
			var fee = $('<td>$'+data.fee+'</td>');
		}
		// Append table items (<td>'s) to table row
		eventItem.append(eventNum, groupName, eventName, eventDescription, fee);

		// Append completed <tr> to our table which has the ID of "meetup-events". 
		// Let's paste it inside the <tbody> container however since that's where Boostrap needs all table rows in order to display them properly.
		$('#meetup-events tbody').append(eventItem);
	} 
}








