"use strict"

function preload(){
    // JSON dans variable
    var json = $.getJSON("http://localhost:3000/user", function(json) {
        console.log(json);
        
})}
preload()