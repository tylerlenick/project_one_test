
//Function for API request
function restaurantGenerator() {

    var location = ""; //Take from input
    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=orlando&entity_type=city&radius=1500&apikey=619be33d8bed29a54c63e43156c43a6f"

    
    console.log("working function call");
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            'Access-Control-Request-Method': "GET",
            'Access-Control-Request-Origin': 'https://tylerlenick.github.io'
        },
      }).then(function(response) {

        console.log(response);

      });
}

var config = {
    apiKey: "AIzaSyCIahuUvE2G9jVP5xRCXDA6gmyMVEHp7xo",
    authDomain: "food-finder-app-ee43f.firebaseapp.com",
    databaseURL: "https://food-finder-app-ee43f.firebaseio.com",
    projectId: "food-finder-app-ee43f",
    storageBucket: "food-finder-app-ee43f.appspot.com",
    messagingSenderId: "796735217041"
  };
  firebase.initializeApp(config);

database = firebase.database();

// --------------create variables----------------//
var x = document.getElementById("location");
// user input variables
// firebase database user object
// dynamic content variables
// API queryURL's
// search parameters variable
// API Key variable

// ---------firebase on value listener--------------//

// ----------button click listeners---------------//
$("#test-btn").on("click", function(){
    restaurantGenerator();
    console.log("working click");
});

// ----------AJAX Method Yelp---------------//


// ----------AJAX Method Google Maps-----------//


// ------------Functions-----------------//

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}


































































