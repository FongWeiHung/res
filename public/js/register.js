function registerUser(){

    var registerMe = new XMLHttpRequest();

    registerMe.open("POST","http://127.0.0.1:8080/user",true);
    registerMe.setRequestHeader("Content-Type","application/json");
    registerMe.onload=function(){

        console.log("working");
        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }

    var userName = document.getElementById("user_Name").value;
    var firstName = document.getElementById("first_Name").value;
    var lastName = document.getElementById("last_Name").value;
    var userEmail = document.getElementById("user_Email").value;
    var userPassword = document.getElementById("user_Password").value;
    var gender = document.getElementById("gender").value;
    var number = document.getElementById("number").value;
    var payload={username:userName,first_Name:firstName,last_Name:lastName,user_Email:userEmail,
                user_Password:userPassword,gender:gender,number:number};
    registerMe.send(JSON.stringify(payload));
    //require 
    //username, first_Name, last_Name, user_Email, user_Password, gender, number
}