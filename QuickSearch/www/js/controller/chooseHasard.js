function arrayUnset(array, value){
              array.splice(array.indexOf(value), 1);
}

function makechoice(liste_pays){
             // clearTimeout(timer);
              //on effectue un choi aleatoire
          var choice = Math.floor(Math.random() * liste_pays.length); 
          //on recupere le pays qui a été choisit
          var pays = liste_pays[choice];
         // setTimeout(function(){makechoice();},1000)

          //on l'élimine dans la liste                   
            arrayUnset(liste_pays ,'pays');
                     // delete array[choice];
                     //return pays;
          return pays;
          
}

/*
<script language="javascript" type="text/javascript">
var compte = 60;
function decompte()
{
        if(compte <= 1) {
        pluriel = "";
        } else {
        pluriel = "s";
        }
 
    document.getElementById("compt").innerHTML = compte + " seconde" + pluriel;
 
        if(compte == 0 || compte < 0) {
        compte = 0;
 
        clearInterval(timer);
        }
 
    compte--;
}
var timer = setInterval('decompte()',1000);
</script>
*/