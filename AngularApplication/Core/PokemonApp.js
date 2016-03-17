/**
 * Created by Alex on 16.03.2016.
 */
(function(){
    'use strict';

    //Create App

    angular.module(AngularHelpers.MainAppName, ["ngRoute"]);

    //Config App

    var pokemonAppConfigInjector = ["$routeProvider"];

    var pokemonAppConfigFunction = function ($routeProvider) {

        $routeProvider.when('/Demo', {
            templateUrl: 'Demo.html',
            controller: 'DemoCtrl'
        }).otherwise({
            templateUrl: 'ProjectDescription.html'
        });

    }

    registerModuleConfig(pokemonAppConfigInjector, pokemonAppConfigFunction);

})();