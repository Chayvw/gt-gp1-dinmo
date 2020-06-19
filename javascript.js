/**
 * Project one programming script
 */
 // Global variables
 // Function definitions
$(document).ready(function(){ 
  
  
    // food api
    //below are the variables that are put into the queryURl.
    var keyword;
    var veggie;
    var healthLabels;
    //below is queryURL so which is concaonated with variables so that when the user selects their choices on the web page they are plugged into the queryurl when the request is processed.
    var queryUrl = 'https://api.edamam.com/search?q=' + keyword + '&app_id=3e501918&app_key=c95225452f4fe51bc9df3f954ead7e29&ingredients=' + veggie + '&healthLabels=' + healthLabels;
    function foodQuery(){
          $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response){
      console.log(response);
    })
    }

// when the function is called it stores the answers to the questions with drop down menu's into an array
//this function goes into the event listener
function foodQuestions(){
  keyword = $("#").val();
  veggie = $("#").val();
  healthLabels = $("#").val();
  foodQuery();
}

//movie api
//below is queryURL0 so which is concaonated with variables so that when the user selects their choices on the web page they are plugged into queryurl0 when the request is processed.
var queryUrl0 = '';
$.ajax({
  url: queryUrl0,
  method: "GET"
}).then(function(response){

})

 // function callers
 foodQuestions();
 // event listeners
 $("#get-started").on("click", function(){
  getStarted();
});

})





  // this for loop can be used with a click event so when someone submits their choices they get a randomized result based off of their preferences
// var movies = 0 ; //variable that targets the AJAX request  with a list of movies inside of an object array
// for(i=0;i<movies.length;i++)
// var random = Math.floor(Math.random().length)