/**
 * Created by Alex on 16.03.2016.
 */
(function(){
    'use strict';

    var DemoCtrlInjector = ["$scope", "$http"];

    var DemoCtrlFunction = function ($scope, $http) {

        $scope.demoModel = {
            title: 'Pokedex'
        }

        $scope.flags = {
            initialDataLoaded: false,
            loading: false
        }

        //params
        var pokemonsInRow = 3;
        var rowsLoadedByInitialRequest = 4;

        function parseInitialResponseToFillPokedex(pokemons) {
            $scope.pokemonRowList = new Array();
            var pokemonRow = null;
            for (var i= 0, j=pokemons.length; i<j; i++) {
                if (i % pokemonsInRow == 0) {
                    pokemonRow = {
                        pokemonList: new Array()
                    }
                }
                var pokemon = pokemons[i];
                pokemonRow.pokemonList.push(pokemon);
                if (i % pokemonsInRow == pokemonsInRow-1) {
                    $scope.pokemonRowList.push(pokemonRow);
                }
            }
        }

        function requestInitialData() {
            $scope.flags.loading = true;
            $http.get("http://pokeapi.co/api/v1/pokemon/", {
                params: {
                    limit: pokemonsInRow * rowsLoadedByInitialRequest,
                    offset: 0
                }
            }).then(function(response){
                //console.log(response.data);
                $scope.flags.initialDataLoaded = true;
                parseInitialResponseToFillPokedex(response.data.objects);
            }, function(error){

            }).finally(function(){
                $scope.flags.loading = false;
            })
        }

        //Init
        requestInitialData();

    };

    registerController("DemoCtrl", DemoCtrlInjector, DemoCtrlFunction);

})();
