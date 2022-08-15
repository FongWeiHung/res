
function loginUser(){

    var loginMe = new XMLHttpRequest();

    loginMe.open("POST","http://127.0.0.1:8080/login",true);
    loginMe.setRequestHeader("Content-Type","application/json");
    loginMe.onload=function(){

        $('#loginModal').modal('hide');
        var token = JSON.parse(loginMe.responseText);
        console.log(token.result);
        if(token.result != "invalid"){
            confirm("Welcome"+ " "+username+"!");
            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            document.getElementById("editMenu").style.display = "block";
            document.getElementById("logoutMenu").style.display="block";
            sessionStorage.setItem("token",token.result);
            

        }else{
            $('#failModal').modal('show');
        }
    }

    var username = document.getElementById("username").value;
    var user_Password = document.getElementById("user_Password").value;
    //var payload = {userController.js's username:Var's username}
    var payload={username:username,user_Password:user_Password};
    loginMe.send(JSON.stringify(payload));
}
