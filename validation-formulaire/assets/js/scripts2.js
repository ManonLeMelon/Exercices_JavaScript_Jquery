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
		this.className = "is-invalid form-control";
		pseudoBon = false;
	}else{
		this.className = "is-valid form-control";
		pseudoBon = true;
	}
	afficheBouton();
}

function verifEmail(){
	var email = document.getElementById("email");
	if(email.value === this.value){
        this.className = "is-valid form-control";
        email.className = "is-valid form-control";
		emailBon = true;
	}else{
        this.className = "is-invalid form-control";
        email.className = "is-invalid form-control";
		emailBon = false;
	}
	afficheBouton();
}

function verifPass(){
	var pass = document.getElementById("pass");
	if(pass.value === this.value){
        this.classList.add("is-valid");
        pass.classList.add("is-valid");
        this.classList.remove("is-invalid");
        pass.classList.remove("is-invalid");
		passBon = true;
	}else{
		this.classList.add("is-invalid");
        pass.classList.add("is-invalid");
        this.classList.remove("is-valid");
        pass.classList.remove("is-valid");
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





