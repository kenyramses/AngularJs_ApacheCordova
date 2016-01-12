<!--<form onsubmit="return valider()" method="post"
name="formSaisie">
  <p>
    <label for="prenom">Saisissez votre prénom :</label>
    <input type="text" name="prenom" id="prenom" />

    <input type="submit" value="Ok" />
  </p>
</form> -->

<section ng-controller="principalControler">

    <section class="panel panel-padding">

      <p> Welcom to my new app</p>

       <!-- je cree mon formulaire   -->
       <form ng-submit="choose()" onsubmit="return viderResultat()" method="post" name="form">

         <span id="result">{{resultat}} </span> </br></br> 
     
        <p><button type="submit" > <img src="img/country.jpg"></button>&nbsp;&nbsp; </p>

         </form> 

         <form ng-submit="verify()" onsubmit="return valider()" method="post" name="formSaisie">
       
        <p >       
             <span id="choix">{{choix}}</span> </br></br>
             Capitale:&nbsp;&nbsp; <input type ="text" name="capitale" id="capitale" class="text" placeholder="Answer" ng-model="reponse"required="required"> 
                               
           </p> 

            <p  align="center">       
                          
                           <button type="submit" ng-submit="viderCountry()"><img type="submit" src="img/country.jpg"></button>
                           
                           
            </p>
      
       </form> 

          <p>
              
               

                  {{message}} </br>
                  <img src="img/score.png" width="10%" height="10%"> {{score}}  
                 
                </p>

    </section>

</section>