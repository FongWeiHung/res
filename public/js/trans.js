
modaltext=""
function chinese(){
    var chinesemsg = new XMLHttpRequest();
    console.log(modaltext)
    chinesemsg.open('GET',url_trans,true);
    chinesemsg.setRequestHeader("Content-Type","application/json");
    chinesemsg.onload=function(){
        transed = JSON.parse(chinesemsg.responseText);
        console.log(transed);
        document.getElementById("message").textContent = transed;
    }

    chinesemsg.send()
}