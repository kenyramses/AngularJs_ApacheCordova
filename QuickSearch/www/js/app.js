//ici on commence par gerer ce k dois faire le device kan tt est pret
document.addEventListener('deviceready',function() {
	// code a mettre plutard
}, false);

//on cree notre application angular
var app = angular.module('app', []);

//je cree le routing pour l'appli
app.config(function($routeProvider){
    $routeProvider
        .when('/home', {templateUrl: 'template/home.html'})
        .when('/about', {templateUrl: 'template/about.html'})
        .otherwise({redirectTo: '/home'})
});

