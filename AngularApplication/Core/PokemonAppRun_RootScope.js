/**
 * Created by Alex on 16.03.2016.
 */
(function(){
    'use strict';

    //Config App Run function.

    var pokemonAppRunInjector = ["$rootScope"];

    var pokemonAppRunFunction = function ($rootScope) {

        //RootScope is managed here.

    }

    registerModuleRun(pokemonAppRunInjector, pokemonAppRunFunction);

    //Bootstrap App onDocumentReady

    angular.element(document).ready(function() {
        angular.bootstrap(document, [AngularHelpers.MainAppName]);
    })

})();
