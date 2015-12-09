

$( document ).ready(function() {
  $( "#submit" ).click(function() {
 var client_id = "QYVXHYUDBXARMP34TI2CRLCNUEVE4P5ZHK15EKWNRXXQURZN";
 var client_secret = "SNFV1DKFYEOES4XGGM2NW3SJ0M10KGSJFWWWAKTYPBFKQHS0";
  $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=nyc"+
        "&query=pizza",
        function(data) {
            console.log(data["response"] ["venues"] ["0"] ["name"])// Callback code goes here. This gets executed after receiving data from the Foursquare API.
        });
});
});
