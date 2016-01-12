function principalControler($scope){
     $scope.city = "";
      $scope.reponse = "";
      var liste_pays= {France:'Paris', Italie:'Rome', Espagne:'Madrid', Allemagne:'Munich'};
      //var alphabet= {'A', 'B','C','D'};
      //var alphabet= {1:'AFRIQUE(53)', 2:'Europe(100)',3:'Asie(40)',4:'Amerique(200)',5:'Oceanie(20)'};
      var alphabet= {1:'France', 2:'Italie', 3:'Espagne', 4:'Allemagne'};
       var  $key; 
         var nb=0;
         var counteur =0;
         var choice;
         var taille_alpha = alphabet.length;

         $scope.choose = function(){ 
            //onteste à chaque fois l compteur
            if(counteur < 4){
                counteur = counteur + 1;
                choice =  alphabet[counteur]; 
                 
                //on renvoie le choix
                $scope.choix =choice; 
            }
            else if ($scope.rep !=4 | $scope.rep==0) {
                //on verifie si il a fait des choix
                    $scope.message ='vous avez fait le tour!!!';

                }else if ($scope.rep ==4) {

                  //counteur = counteur + 1;
                  //$scope.message ='vous avez fait le tour';
                  $scope.resultat='Youpii You\'re The Best :) :)';
                   $scope.score=$scope.rep;
                  }
                

              
         }

            function  resultat(){
                //on renvoie le resultat 
                var resultat = 'oups';
                 return resultat;
                //$scope.resultat = resultat;
                
            }

        $scope.verify =  function(){ 
            $key = liste_pays[choice];

            //$scope.country = $key;
             var reponse = $scope.reponse;
             if ($key != reponse) {
               $scope.resultat = resultat();
               $scope.rep=nb;
              }
              else{
               // $scope.country = $key;
                //$scope.rep=$scope.reponse;
              
                   nb++;
                //$scope.rep='Youpii Youpii Youpii :) :)'
                 $scope.rep=nb;
                 $scope.resultat='OK :) :)';
                 /* while($key == reponse) {
        
                   nb= nb +1;
                //$scope.rep='Youpii Youpii Youpii :) :)'
                 $scope.rep=nb;
              }*/



              }

             
        }    

}