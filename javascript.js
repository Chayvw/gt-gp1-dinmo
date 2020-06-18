/**
 * Project one programming script
 */
$(document).ready(function(){
 console.log("testing");

 // global variables
 // function definitions

 // movie api
 var queryURL = ''; //api goes here
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
  console.log(response);
})
     
// food api
var queryURL = ''; //api goes here
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
  console.log(response);
})

 // function callers
 // event listeners
  // this for loop can be used with a click event so when someone submits their choices they get a randomized result based off of their preferences
var movies = 0 ; //variable that targets the AJAX request  with a list of movies inside of an object array
for(i=0;i<movies.length;i++)
var random = Math.floor(Math.random().length)

})