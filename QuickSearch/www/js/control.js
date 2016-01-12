/*
function envoiForm(event) {
  if (this.elements.capitale.value == "") {
    alert("L'adresse est vide.");
      //document.formCapitale.capitale.value = "hihiii";
       // this.elements.capitale.value ="hih"
    event.preventDefault();
  }
}
function goo(){
var formulaire = document.getElementById("formCapitale");
formulaire.addEventListener("submit", envoiForm, false);
}
goo();




function valide(){
  // si la valeur du champ prenom est non vide
  if(this.elements.capitale.value == "") {
    // les données sont ok, on peut envoyer le formulaire    
   //return true;
  //}
  //else {
    // sinon on affiche un message
    alert('Vous devez saisir une capitale');
   // document.querySelectorAll('.tooltip').style.display = 'none';
   // document.formCapitale.capitale.value = "Vous devez saisir une capitale";
    // et on indique de ne pas envoyer le formulaire
    return false;
  }
}

//goo();
//valider();
*/
function viderCountry(){
   //document.getElementById("choix").innerHTML = '';
    var myspan = document.getElementById('result');
    myspan.innerHTML ='';
    //var span_textnode = myspan.firstChild;
   // var span_text = span_textnode.data;
    //varspan_text = 'hoho';
}
function viderResultat(){
   var myspan = document.getElementById('result');
    myspan.innerHTML = "  ";
    myspan= document.createElement("img"); here <img src='img/ok.jpg' />
    //myspan.src = "img/ok.jpg";
    //img = document.createElement("IMG");
    //img.src = "image.png";
}

function valider(){
   //on efface le champs de saisie capitale
       document.formSaisie.capitale.value = '';
    // les données sont ok, on peut envoyer le formulaire  
     //document.formSaisie.choix.style.display= 'none';  
    document.getElementById("choix").innerHTML = 'choisir un autre pays';
   
   /*if(span_text != '') {
    //on efface le resultat retourné
       //document.getElementById("result").innerHTML = 'choisir un autre pays';
  // si la valeur du champ prenom est non vide
  span_text = '';
   
    // document.getElementById("result").innerHTML = 'hhh';
    return true;
  }
  else {
    // sinon on affiche un message
    alert('Saisissez le prénom');
      //document.formSaisie.capitale.value = '';
    // et on iefface egalement le country
     //document.country.value = '';
    return false;
  } */
}

  