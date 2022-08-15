//This function is to call the res api and get all the res
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getResData() {
    var request = new XMLHttpRequest();
    request.open('GET', res_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the movies records into our movie array        
        res_array = JSON.parse(request.responseText);
        //Fetch the comments as well        
        fetchReviews();
        console.log(res_array) // output to console     
        //call the function so as to display all movies tiles for "Now Showing"     
        displayRes(category);   //ADD THUMBNAIL to table 
    };

    //This command starts the calling of the movies web api    
    request.send();
}
function displayRes(category) {
    var table = document.getElementById("resTable");
    var resCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRes = res_array.length;
    for (var count = 0; count < totalRes; count++) {
        
        var thumbnail = res_array[count].restaurant_Thumb;
        var title = res_array[count].restaurant_Name;
	    var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                    <div class="card-body"><i class="far fa-comment fa-lg" style="float:right;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showResReview(this)"></i>\
                    <h5 style="padding-left:10px;cursor:pointer" data-toggle="modal" data-target="#resModal" class="card-title" item="' + count + '" onClick="showResDetails(this)">' + title + '</h5></div>\
                    </div>'
            table.insertAdjacentHTML('beforeend', cell);
            resCount++;
    }
    //message=resCount+" Restaurants "+ category;
    message="ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤDig in! ";
    document.getElementById("summary").textContent=message;
    document.getElementById("parent").textContent="";

}   
//This function is to display the home page
//function homePage() {
    //category = "Now Showing";
    //displayMovies(category);
    //document.getElementById("nowMenu").classList.add("active");
    //document.getElementById("comingMenu").classList.remove("active");
    //document.getElementById("aboutMenu").classList.remove("active");
//}

//This function is to display the contact page
//function Contact() {
    //category = "Coming Soon";
    //displayRes(category);
    //document.getElementById("nowMenu").classList.remove("active");
    //document.getElementById("comingMenu").classList.add("active");
    //document.getElementById("aboutMenu").classList.remove("active");
//}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showResDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    //(res_Id,restaurant_Name,restaurant_Info, restaurant_Address,
     //restaurant_Category,restaurant_Time,review_Id, restaurant_Location, restaurant_Thumb )
    document.getElementById("resName").textContent = res_array[item].restaurant_Name;
    document.getElementById("details").textContent = res_array[item].restaurant_Info;
    //document.getElementById("restaurantAddress").src = res_array[item].restaurant_Address;
    document.getElementById("category").textContent = res_array[item].restaurant_Category;
    document.getElementById("openHours").textContent = res_array[item].restaurant_Time;
    //document.getElementById("review_Id").textContent = res_array[item].review_Id;
    //document.getElementById("restaurantLocation").textContent = res_array[item].restaurant_Location;
    document.getElementById("restaurantThumb").src = res_array[item].restaurant_Thumb;
    document.getElementById("restaurant_Site").textContent = res_array[item].restaurant_Site;
    document.getElementById("halal").textContent = res_array[item].restaurant_Halal;
    document.getElementById("alcohol").textContent = res_array[item].restaurant_Alcohol;
    
  
    //document.getElementById("trailer1").src = movie_array[item].video1;
    //document.getElementById("trailer2").src = movie_array[item].video2;
}

//This function opens a new window/tab and loads the
//particular movie in the cinema website
function goSite() {
    window.open(res_array[currentIndex].restaurant_Site, "_blank");
    console.log(restaurant_Site);

}
function goEmb() {
    window.open(res_array[currentIndex].restaurant_Emb, "_blank")
 

}






