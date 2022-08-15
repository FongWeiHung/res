function fetchReviews(){
    var request = new XMLHttpRequest();

    request.open('GET',review_url,true);

    request.onload=function(){
    review_array = JSON.parse(request.responseText);
    console.log(review_array);//working

    };
    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showResReview(element) {
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    //leave this as comment 
    document.getElementById("comment").textContent = "Reviews "; //+ res_array[item].title;
    document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        //if (review in array matches restraunt's array, review will show1.)
        if (review_array[i].res_Name=== res_array[item].restaurant_Name) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedresId = res_array[item].res_id;
            star = "";
            //html calls review, username, dateposted
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review + "</p>               \
                                    <small>by " + review_array[i].username + " @ " + review_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/florkgood.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}


function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
        rating = 0;
        document.getElementById("userComments").value = "";
        document.getElementById("nickname").value = "";
}

// Submit or send the new comment to the server to be added.
function addReview() {

    var review = new Object(); //resRevId, resName, review, rating, username,
    review.resRevId = res_array[currentIndex].res_Id;
    review.resName = res_array[currentIndex].restaurant_Name;
    review.username = document.getElementById("nickname").value;
    review.review = document.getElementById("userComments").value;
    review.rating = rating;
    review.datePosted = null; 
    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postReview.open("POST", review_url, true); //Use the HTTP POST method to send data to server

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
        	console.log("new review sent");
	fetchReviews(); // fetch all comments again so that the web page can have updated comments.     
    };
// Convert the data in Comment object to JSON format before sending to the server.
    postReview.send(JSON.stringify(review)); 
}



function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var florks = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let flork of florks){
        flork.setAttribute("src", florkneutral);
    }
    changeFlorkImage(num, classTarget);
}

function changeFlorkImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", florkgood);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", florkgood);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", florkgood);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", florkgood);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", florkgood);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", florkgood);
            rating = 5;
            break;
    }
}
function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editnickname").value = review_array[item].username;
    document.getElementById("edituserComments").value = review_array[item].review;
    console.log(review_array[item].rating);
    displayColorFlork('editflork', review_array[item].rating);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorFlork(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
    p.setAttribute("src", florkneutral);
    }
    changeFlorkImage(num, classTarget);
}
//This function sends the Comment data to the server for updating
function updateReview() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
    var edit_review_url = review_url + "/" + review_array[currentIndex].rev_Id;
    var UpdateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    UpdateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    UpdateReview.setRequestHeader("Content-Type", "application/json");
    review_array[currentIndex].username = document.getElementById("editnickname").value;
    review_array[currentIndex].review = document.getElementById("edituserComments").value;
    review_array[currentIndex].rating = rating;
    UpdateReview.onload = function() {
    fetchReviews();
    };
    UpdateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}
    
    

    
//This function deletes the selected comment in a specific movie
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        //review_url = /review     +   "/"    +     review's position in array
        var delete_review_url = review_url + "/" + review_array[item].rev_Id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
        };
        eraseReview.send();
    }
}
