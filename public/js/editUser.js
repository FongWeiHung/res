function editMe(){
    var editUser = new XMLHttpRequest();
    var edit_user_url = user_url + "/" + user._id;
    var editUser = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    editUser.open("PUT", edit_user_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    editUser.setRequestHeader("Content-Type", "application/json");
    editUser.onload=function(){

        console.log("working");
        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }

    var userName = document.getElementById("user_Name").value;
    var userEmail = document.getElementById("user_Email").value;
    var userPassword = document.getElementById("user_Password").value;
    var number = document.getElementById("number").value;
    var payload={username:userName,user_Email:userEmail,
                user_Password:userPassword,number:number};
    editUser.send(JSON.stringify(payload));
    


    
}
