function displayResSearch(category) {
    var table = document.getElementById("resTable");
    var resCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRes = res_array.length;
    var input = document.getElementById("searchpls").value.toLowerCase();
    for (var count = 0; count < totalRes; count++) {
        if (res_array[count].restaurant_Name.toLowerCase().includes(input)){
            var thumbnail = res_array[count].restaurant_Thumb;
            var title = res_array[count].restaurant_Name;
	    var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                    <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showResReview(this)"></i>\
                    <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#resModal" class="card-title" item="' + count + '" onClick="showResDetails(this)">' + title + '</h5></div>\
                    </div>'
            table.insertAdjacentHTML('beforeend', cell);
            resCount++;
        }
    }
    message=resCount+" Restaurant";
    document.getElementById("summary").textContent=message;
    document.getElementById("parent").textContent="";

}   

