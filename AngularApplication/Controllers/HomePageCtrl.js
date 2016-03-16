/**
 * Created by Alex on 16.03.2016.
 */
(function(){
    'use strict';

    var HomePageCtrlInjector = ["$scope"];

    var HomePageCtrlFunction = function ($scope) {

        $scope.model = {
            pageTitle: "Pokemon App",
            pageHeader: "Pokemon App (kottans-pass-exercise)"
        }

    };

    registerController("HomePageCtrl", HomePageCtrlInjector, HomePageCtrlFunction);

})();