"use strict"

function preload(){
    // JSON dans variable
    var json = $.getJSON("http://localhost:3000/fournisseur", function(json) {
        console.log(json);
        var iter = 0;
        // Pour chaque élément du JSON
        json.forEach(element => {
            // Création du texte
            var texte1 = document.createTextNode(json[iter].nom);
            var texte2 = document.createTextNode(json[iter].description);
            var texte3 = document.createTextNode(json[iter].adresse);
            var texte4 = document.createTextNode(json[iter].telephone);
            var texte5 = document.createTextNode("Modifier");
            var texte6 = document.createTextNode("Supprimer");

            // Création de la structure
            var balise0 = document.createElement("tr");
            balise0.className = "table-warning";
            var balise1 = document.createElement("th");
            balise1.scope = "row";
            var balise2 = document.createElement("td");
            var balise3 = document.createElement("td");
            var balise4 = document.createElement("td");
            var balise5 = document.createElement("td");
            var balise6 = document.createElement("td");
            var balise7 = document.createElement("button");
            balise7.type = "button";
            balise7.className = "btn btn-warning";
            balise7.value = json[iter]._id
            balise7.addEventListener("click", () => { fctModifier(balise7.value); });
            var balise8 = document.createElement("button");
            balise8.type = "button";
            balise8.className = "btn btn-warning";

            // Création balise de texte et ces balises apprennent les variables texte
            balise2.appendChild(texte1);
            balise3.appendChild(texte2);
            balise4.appendChild(texte3);
            balise5.appendChild(texte4);
            balise7.appendChild(texte5);
            balise8.appendChild(texte6);

            // Structures apprend d'autre structure
            balise0.appendChild(balise1);
            balise0.appendChild(balise2);
            balise0.appendChild(balise3);
            balise0.appendChild(balise4);
            balise0.appendChild(balise5);
            balise0.appendChild(balise6);
            balise6.appendChild(balise7);
            balise6.appendChild(balise8);

            // div1 de mon html apprend les balises
            var allez = document.getElementById("tbody1");
            allez.appendChild(balise0);
            iter++;
        });
})}
preload()


function fctModifier(json) {
    document.location = "./modifierfournisseur.html?"+json
}

function clicked2() {
    document.location = "./addfournisseur.html"
}

