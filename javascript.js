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

      var randomIndex = Math.floor(Math.random() * 10);
      var randomIndex2 = Math.floor(Math.random() * 10);
      var randomIndex3 = Math.floor(Math.random() * 10);

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
    var movie = $("#movie-input").val();
    var genre = $("#genre option:selected").val();
    var company = $("#company option:selected").val();
   
    var movieSearch = "https://api.themoviedb.org/3/search/movie?api_key=aced25e61f7d1bd5c92fcbfed28dc07c&language=en-US&page=1&include_adult=false&query=" + movie;
    $.ajax({
      url: movieSearch,
      method: "GET",
    }).then(function (response) {
      console.log("movieSearch", response.results[0].id)
      var movieID = response.results[0].id;
      // This URL needs to be tested and we need to find the movie ids.
      var movieQueryUrl =
        "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/similar?api_key=aced25e61f7d1bd5c92fcbfed28dc07c&language=en-US" +
        "&with_genres=" +
        genre +
        "&with_companies=" +
        company +
        "&with_keywords=" +
        movie;

      $.ajax({
        url: movieQueryUrl,
        method: "GET",
      }).then(function (response2) {
        var movieIndex = Math.floor(Math.random() * 20);
        var movieIndex2 = Math.floor(Math.random() * 20);
        var movieIndex3 = Math.floor(Math.random() * 20);
        console.log(response2);
        console.log(movieIndex);
        console.log(movieIndex2);
        console.log(movieIndex3);

        //Add text, image and url to Results for movie1 use movieIndex
        $("#movie-title").text(response2.results[movieIndex].title);
        var movieImgURL = "https://image.tmdb.org/t/p/original" + response2.results[movieIndex].poster_path;
        console.log(response2.results[movieIndex].poster_path)
        $("#movie-icon").attr("src", movieImgURL);
        $("#movie-year").text("Year: " + response2.results[movieIndex].release_date);
        console.log(response2.results[movieIndex].release_date);
        $("#movie-overview").text("Summary: " + response2.results[movieIndex].overview);

        //Add text, image and url to Results for recipe2 use movieIndex2
        $("#movie-title2").text(response2.results[movieIndex2].title);
        var movieImgURL2 = "https://image.tmdb.org/t/p/original" + response2.results[movieIndex2].poster_path;
        $("#movie-icon2").attr("src", movieImgURL2);
        $("#movie-year2").text("Year: " + response2.results[movieIndex2].release_date);
        $("#movie-overview-2").text("Summary: " + response2.results[movieIndex2].overview);

        //Add text, image and url to Results for recipe3, use movieIndex3
        $("#movie-title3").text(response2.results[movieIndex3].title);
        var movieImgURL3 = "https://image.tmdb.org/t/p/original" + response2.results[movieIndex3].poster_path;
        $("#movie-icon3").attr("src", movieImgURL3);
        $("#movie-year3").text("Year: " + response2.results[movieIndex3].release_date);
        $("#movie-overview-3").text("Summary: " + response2.results[movieIndex3].overview);
      });
    });
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
