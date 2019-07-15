// !!!!!!!!!! ATTENTION POUR UN DIPO LES IMAGES DOIVENT TOUJOURS AVOIR LA MEME TAILLE !!!!!!!!!!

//Ligne du tableau
var images = [
    "assets/img/img1.jpg",
    "assets/img/image2.jpg",
    "assets/img/metsky.jpg",
];
var titres = [
    "titre de l'image 1",
    "Joli titre de l'image 2",
    "encore un titre pour l'image 3",
]
//Pour appelé un tableau on met le nom du tableau et le numéro correspondant dans des crochets 

//On pointe sur qu'elle photo apparait quand on ouvre la page donc index
var index = 0

var oreo;


// window.onload écrit en jquery
$(function(){

$("#droite").on("click", imageSuivante);
$("#gauche").on("click", imagePrecedante);
$("#colonne").on("mouseenter", stop);
$("#colonne").on("mouseleave", start);
$("#masquer").on("click", afficherMasquerTitre);
$("#ajout").hide();
//On change l'image toutes les 5secondes
oreo = setInterval(imageSuivante, 5000);

});

function imageSuivante(){
    //GESTION DE L'INDEX
    //On prend la longueur du tableau (lenght) - une image pour êtrre à la denrière images.
    if(index >= images.length -1){
        //on repart du début
        index = 0;
    }else{
        //On passe a l'image suivante
        index++;
    }
    changerImage();
}


function imagePrecedante(){
    //GESTION DE L'INDEX
    //On prend la longueur du tableau (lenght) - une image pour êtrre à la denrière images.
    if(index === 0 ){
        //on repart du début
        index = images.length -1;
    }else{
        //On passe a l'image suivante
        index--;
    }

    changerImage();
}

function stop(){
    clearInterval(oreo);
}

function start(){
    oreo = setInterval(imageSuivante, 5000);
}

function afficherMasquerTitre(){
    // var titre = $("#titre2");
    // if(titre.css("display") == "none"){
    //     titre.show();
    // }else{
    //     titre.hide();
    // }
    $("#titre2").toggle(500);
}

function afficheAjout(){
    $("#ajout").show();
    $("#ajout").on("click", grandirBox);
}

function changerImage(){
    //affiche de l'image
    $("#diapo, #titre").fadeOut("slow", function(){
        //Ici le fadeOut est terminé
        $("#diapo").attr("src",images[index]);
        $("#titre").text(titres[index]);
        $("#diapo, #titre").fadeIn("slow",);
    });
}