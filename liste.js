var article = ['fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2','fournisseur1', 'fournisseur2'];

article.forEach(element => {
    var content = document.getElementById("content-article");

    content.innerHTML+= "<article><h2>"+element+"</h2><p></p></article>"
});

