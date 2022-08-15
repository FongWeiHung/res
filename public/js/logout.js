function logoutMe(){

    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#editMenu').hide();
    //removes token data, calls jquery 
    sessionStorage.removeItem("token")
    
    console.log("logged outed");
}
