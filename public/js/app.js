var res_url = "/res";
var res_array = []; // This creates an empty res array
var resCount = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "being displayed";//x res Now Showing
var currentIndex=0;


var review_url = "/review";//gets /review in postman works
var review_array =[];//create empty array for the reviews from postman, working


var florkneutral = 'images/florkneutral.png';
var florkgood = 'images/florkgood.png';
var rating = 0;

var user_url = "/user";
var url_trans =new URL("https://ntwmlqxvze.execute-api.us-west-2.amazonaws.com/dev") 
var transed = "";