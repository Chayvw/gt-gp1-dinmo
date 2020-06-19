/**
 * Project one programming script
 */

 // Global variables
 // Function definitions
$(document).ready(function(){
     
    
    // PUT This within getRecipe function    
    // food api
    var queryUrl = 'https://api.edamam.com/search?q=' + keyword + '&app_id=3e501918&app_key=c95225452f4fe51bc9df3f954ead7e29&ingredients=' + veggie + '&healthLabels=' + healthLabels; //api goes here
    var recipeParameters = []
    var keyword = recipeParameters[0]
    var veggie = recipeParameters[1]
    var healthLabels = recipeParameters[2]
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response){
      console.log(response);
    })


     // movie api
     var queryURL0 = ''; //api goes here
     $.ajax({
       url: queryURL0,
       method: "GET"
     }).then(function(response){
       console.log(response);
     })




    //Function Definitions
    //


    //EVENT LISTENERS
    //Create getStarted button event listener
    $("#get-started").on("click", function(){
        getStarted();
        console.log();
    });

})

 // function callers
 // event listeners
  // this for loop can be used with a click event so when someone submits their choices they get a randomized result based off of their preferences


// var movies = 0 ; //variable that targets the AJAX request  with a list of movies inside of an object array
// for(i=0;i<movies.length;i++)
// var random = Math.floor(Math.random().length)