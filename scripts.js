/**
 * @author
 */

console.log("javascript file loaded.");

//we have to introduce loadedJSON before executing it
//description of what to do is outside 
//recall in class the envolope A is the loadedJSON
//the inside poem does not have a name, we have to name it, here we call the data set as FREDData
function loadedJSON(FREDData){
	//console.log the count 
	
	//I expect this console.log statement will output the number 409
	//because in my json file, the count is 409
	console.log(FREDData.count);
	
}

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
	
	//I expect to see a new div containg the text "This is my new div."
	//appear inside the div with the id "contentContainer"
	$("#contentContainer").append(myDiv);
	
	//use the jQeury get function to load my json file
	//takes 3 parameter 
	//first is the name of the file
	//second is the function to call once the file is loaded 
	//third is a string of the file type to expect
	$.get("UEMP270V_data.json",loadedJSON,"json");
}

//document ready happens when the enrire webpage 
//has loaded 
//when that has happened, i want to initiate the "dataloaded"
//function/activity that i defined above
$( document ).ready(dataLoaded);
//dollar sign means this function is from jquery


console.log("this statement is after document ready!")
