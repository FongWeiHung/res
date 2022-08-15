$(document).ready(function(){
    
    //if token present, var token will have data
    var token = sessionStorage.getItem("token");
    if (token != null) { //if token has data, hides register and login, shows logout on navbar
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#editMenu').show();
        $('#logoutMenu').show();
        
        
    }



})