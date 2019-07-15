/*
Enoncé 1 :
	- Le pseudo doit faire minimum 6 caractères
	- Les deux e-mails doivent être identiques
	- Les 2 mots de passe doivent être identiques

Mises en forme :
	- Si la contrainte n'est pas vérifiée, bordure rouge
	- Si la contrainte est vérifiée, bordure verte

Vérifications :
	- La vérification s'effectue lorsqu'on quitte le champ

Pour les plus rapides :
	- Le bouton doit être masqué au chargement et apparaître uniquement si TOUS les champs sont bons
	- Ajouter des messages en rouge quand les contraintes ne sont pas vérifiées ("Votre pseudo doit faire minimum 6 caractères" par exemple) rouge ou vert avec Bootstrap
*/

var pseudoBon, passBon, emailBon;

window.onload = function(){
	var pseudo = document.getElementById("pseudo");
	var email2 = document.getElementById("email2");
	var pass2 = document.getElementById("pass2");
	var bouton = document.getElementById ("valid");

	bouton.style.display = "none";

	pseudo.addEventListener("blur", checkPseudo);
	email2.addEventListener("blur", verifEmail);  
	pass2.addEventListener("blur", verifPass);  
}

function checkPseudo(){
    var saisie = this.value;
	if(saisie.length < 6){
		alert("vous devez avoir au moins 6 caractères"); //quand l'objet n'a pas la propriété
		this.style.border = "1px solid #f00";
		pseudoBon = false;
	}else{
		this.style.border = "1px solid #0f0";
		pseudoBon = true;
	}
	afficheBouton();
}

function verifEmail(){
	var email = document.getElementById("email");
	if(email.value === this.value){
		this.style.border = "1px solid #0f0";
		email.style.border = "1px solid #0f0";
		emailBon = true;
	}else{
		this.style.border = "1px solid #f00";
		email.style.border = "1px solid #f00";
		emailBon = false;
	}
	afficheBouton();
}

function verifPass(){
	//this = champ mot de passe 2 
	//this reprend la déclaration pour la fonction dans window donc pas besoin de déclaré une seconde fois le champ
	//pass.value = champ mot de passe 1
	//pass.value = se que l'on a tapé dans mot de passe 
	//Value = se que l'utilisateur a tapé
	// "" = VARIABLE 
	var pass = document.getElementById("pass");
	if(pass.value === this.value){
		this.style.border = "1px solid #0f0";
		pass.style.border = "1px solid #0f0";
		passBon = true;
	}else{
		this.style.border = "1px solid #f00";
		pass.style.border = "1px solid #f00";
		passBon = false;
	}
	afficheBouton();

}

function afficheBouton(){
	var bouton = document.getElementById ("valid");
	if(pseudoBon && emailBon && passBon){
		// !pseudoBon && !emailBon && !passBon = pour dire faux, tout est faux 
		//&& = et
		bouton.style.display = "initial";
	}else{
		bouton.style.display = "none";
	}
	
}





