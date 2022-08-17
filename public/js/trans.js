var url_trans =new URL("https://ntwmlqxvze.execute-api.us-west-2.amazonaws.com/dev") 
var transed = "";

function chinese(){
    var chinese = new XMLHttpRequest();
    console.log(messageText)
    chinese.open('GET',url_trans,true);
    chinese.setRequestHeader("Content-Type","application/json");
    chinese.onload=function(){
        transed = JSON.parse(chinese.responseText);
        console.log(transed);
        document.getElementById("message").textContent = newText;
    }

    chinese.send()
}