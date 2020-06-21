$(document).ready(function () {
  //**FUNCTION DEFINITIONS */

  function getRecipe() {
    // Hide dinner recipe container and show movie recommendations container
    $("#dinner-recipe").attr("style", "display: none");
    $("#movie-recs").attr("style", "display:block");
    // Variables needed to create edamom URL
    var keywordArray = [];
    var protein = $("#protein").val();
    keywordArray.push(protein);
    var veggie = $("#veggie").val();
    keywordArray.push(veggie);
    var healthLabels = $("#diet").val();

    //Create queryUrl based on user's healthLabels choice
    if ($("#diet").val() === "none") {
      var queryUrl =
        "https://api.edamam.com/search?q=" +
        keywordArray +
        "&app_id=3e501918&app_key=c95225452f4fe51bc9df3f954ead7e29";
    } else {
      var queryUrl =
        "https://api.edamam.com/search?q=" +
        keywordArray +
        "&app_id=3e501918&app_key=c95225452f4fe51bc9df3f954ead7e29" +
        "&health=" +
        healthLabels;
    }
    //Make ajax call to get response data
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      //Create randomIndex to in order to choose recipe at random from response
      //  for (i = 0; i < 1; i++) {
      console.log(response);
      var randomIndex = Math.floor(Math.random() * 10);
      var randomIndex2 = Math.floor(Math.random() * 10);
      var randomIndex3 = Math.floor(Math.random() * 10);
      // }
      //Add text, image and url to Results for recipe1
      $("#recipe-title").text(response.hits[randomIndex].recipe.label);
      var imgURL = response.hits[randomIndex].recipe.image;
      $("#recipe-icon").attr("src", imgURL);
      $("#recipe-source").text(
        "Source: " + response.hits[randomIndex].recipe.source
      );
      var recipeURL = response.hits[randomIndex].recipe.url;
      $("#recipe-url").attr("href", recipeURL);
      $("#recipe-url-text").text("Click Here for Recipe");

      //Add text, image and url to Results for recipe2
      $("#recipe-title2").text(response.hits[randomIndex2].recipe.label);
      var imgURL = response.hits[randomIndex2].recipe.image;
      $("#recipe-icon2").attr("src", imgURL);
      $("#recipe-source2").text(
        "Source: " + response.hits[randomIndex2].recipe.source
      );
      var recipeURL = response.hits[randomIndex2].recipe.url;
      $("#recipe-url2").attr("href", recipeURL);
      $("#recipe-url-text-2").text("Click Here for Recipe");

      //Add text, image and url to Results for recipe3
      $("#recipe-title3").text(response.hits[randomIndex3].recipe.label);
      var imgURL = response.hits[randomIndex3].recipe.image;
      $("#recipe-icon3").attr("src", imgURL);
      $("#recipe-source3").text(
        "Source: " + response.hits[randomIndex3].recipe.source
      );
      var recipeURL = response.hits[randomIndex3].recipe.url;
      $("#recipe-url3").attr("href", recipeURL);
      $("#recipe-url-text-3").text("Click Here for Recipe");
    });
  }

  function getMovie() {
    $("#movie-recs").attr("style", "display: none");
    $("#results-view").attr("style", "display:block");
    var movie = $("#movie-input").val().split(" ");
    var genre = $("#genre option:selected").val();
    var company = $("#company option:selected").val();
    // need an id for var company below
    // var company = $().val();
    var movie;
    var genre;
    console.log(genre);

    // This URL needs to be tested and we need to find the movie ids.
    var movieQueryUrl =
      "https://api.themoviedb.org/3/movie/" +
      movie +
      "/similar?api_key=aced25e61f7d1bd5c92fcbfed28dc07c&language=en-US" +
      "&with_genres" +
      genre;
    +(
      // "&with_companies=" +
      // company; +
      // "with_keywords" +
      // movie;

      $.ajax({
        url: movieQueryUrl,
        method: "GET",
      }).then(function (response) {
        console.log("this function works!");
        console.log(response);
      })
    );
  }

  //Created getStarted function
  function getStarted() {
    $("#main-page").attr("style", "display: none");
    $("#dinner-recipe").attr("style", "display:block");
  }

  //**EVENT LISTENERS */

  //Create getStarted button event listener
  $("#get-started").on("click", function () {
    getStarted();
  });

  //Create getRecipe button event listener
  $("#recipeBtn").on("click", function () {
    getRecipe();
  });

  //Create getMovie button event listener
  $("#movieBtn").on("click", function () {
    getMovie();
  });

  //Create startOver button event listener
  $("#resetBtn").on("click", function () {
    window.location.reload();
  });
});
