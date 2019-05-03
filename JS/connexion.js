"use strict"

function clicked(){
    // JSON dans variable
    var json = $.getJSON("http://localhost:3000/user", function(json) {
        console.log(json);
        var connected = 0;
        json.forEach(element => {
            if (element.nom == $("#account").val() && element.password == $("#password").val()){
                connected = 1
            }
        });
        console.log(connected)
        document.cookie = "connected="+connected
        if (connected == 1){
            document.location = "./allfournisseur.html"
        }else{
            alert("Mauvais mot de passe ou Login")
        }
})}
