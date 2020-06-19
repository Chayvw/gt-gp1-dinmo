/**
 * Project one programming script
 */

 // Global variables
 // Function definitions
$(document).ready(function(){
     
    
    // PUT This within getRecipe function    
    // food api
    var queryUrl = 'https://api.edamam.com/search?q=' + keyword + '&app_id=3e501918&app_key=c95225452f4fe51bc9df3f954ead7e29&ingredients=' + veggie + '&healthLabels=' + healthLabels; //api goes here
    var recipeParameters;
    var keyword; 
    var veggie;
    var healthLabels; 
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response){
      
    })


    
    //Function Definitions
    //Created getStarted function
    function getStarted (){
      $("#main-page").attr("style", "display: none");
      $("#dinner-recipe").attr("style", "display:block");
      

    }



    //EVENT LISTENERS
    //Create getStarted button event listener
    $("#get-started").on("click", function(){
        getStarted();
      
       
    });

  //Create getRecipe button event listener
  $("#recipeBtn").on("click", function(){
    getRecipe();
  })

  //Create getMovie button event listener
  $("#movieBtn").on("click", function(){
    getMovie();
  })
})

 // function callers
 // event listeners
  // this for loop can be used with a click event so when someone submits their choices they get a randomized result based off of their preferences


// var movies = 0 ; //variable that targets the AJAX request  with a list of movies inside of an object array
// for(i=0;i<movies.length;i++)
// var random = Math.floor(Math.random().length)