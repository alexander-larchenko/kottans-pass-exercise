/**
 * Created by Alex on 16.03.2016.
 */
'use strict';
var AngularHelpers = {
    Injectors: {},
    Constructors: {},
    MainAppName: 'PokemonApp'
};

function registerModuleConfig (injector, configFunction) {
    configFunction.$inject = injector;
    angular.module(AngularHelpers.MainAppName).config(configFunction);
};

function registerModuleRun (injector, runFunction) {
    runFunction.$inject = injector;
    angular.module(AngularHelpers.MainAppName).run(runFunction);
}

function registerController (controllerName, injector, controllerFunction){
    controllerFunction.$inject = injector;
    angular.module(AngularHelpers.MainAppName).controller(controllerName, controllerFunction);
}