function clicked() {
    var id = window.location.search.substr(1);
    console.log(JSON.parse(id))

    $.get("http://localhost:3000/fournisseur/" + id, function (json) {
        console.log(json);

        json.nom = $("#Nom").val() == "" ? json.nom : $("#Nom").val()
        json.description = $("#Description").val() == "" ? json.description : $("#Description").val()
        json.adresse = $("#Adresse").val() == "" ? json.adresse : $("#Adresse").val()
        json.telephone = $("#Tel").val() == "" ? json.telephone : $("#Tel").val()
        json.mail = $("#Mail").val() == "" ? json.mail : $("#Mail").val()

        console.log(json)

        $.ajax({
            url: 'http://localhost:3000/fournisseur/' + id,
            type: 'PUT',
            data: json,
            success: () => {console.log("test")}
        });

    });
}