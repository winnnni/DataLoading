/**
 * @author
 */

console.log("javascript file loaded.");

//this is my custom data loaded function!
function dataLoaded(){
	
	console.log("i got to document ready!");
	
	//use jQuery to create a new div element
	var myDiv = $("<div>");
	//use jQuery to add some text to it
	//he jQuery, take that div i just created called 
	//"myDiv", and add some html (in that case, just a string).
	$(myDiv).html("This is my new div.");
	
	//i want it to show up on my page.
	//hey jQuery grab the div with the id "contentContainer" 
	//and put my new div inside it
	//in css and jQuery, #sign means looking for the element with this "id" attribute
	//look for the element(s) with the class attribute
	$("#contentContainer").append(myDiv);
}

//document ready happens when the enrire webpage 
//has loaded 
//when that has happened, i want to initiate the "dataloaded"
//function/activity that i defined above
$( document ).ready(dataLoaded);
//dollar sign means this function is from jquery


console.log("this statement is after document ready!")
