/**
 * Created by Alex on 16.03.2016.
 */
(function(){
    'use strict';

    var DemoCtrlInjector = ["$scope", "$http", "$timeout"];

    var DemoCtrlFunction = function ($scope, $http, $timeout) {

        $scope.demoModel = {
            title: 'Pokedex'
        }

        $scope.flags = {
            initialDataLoaded: false,
            loading: false,
            typesLoading: false
        }

        $scope.pokemonList = new Array();
        $scope.selectedPokemon = null;
        $scope.typesList = null;
        $scope.selectedFilterType = null;

        //params
        var pokemonsLoadedByInitialRequest = 12;
        var pokemonsByMoreRequest = 6;

        function renderImprovements(){
            $timeout(sectionHeight,25);
        }

        function requestInitialData() {
            $scope.flags.loading = true;
            $http.get("http://pokeapi.co/api/v1/pokemon/", {
                params: {
                    limit: pokemonsLoadedByInitialRequest,
                    offset: 0
                }
            }).then(function(response){
                $scope.flags.initialDataLoaded = true;
                $scope.pokemonList = response.data.objects;
                renderImprovements()
            }).finally(function(){
                $scope.flags.loading = false;
            })
        }

        $scope.loadMorePokemons = function() {
            $scope.flags.loading = true;
            $http.get("http://pokeapi.co/api/v1/pokemon/", {
                params: {
                    limit: pokemonsByMoreRequest,
                    offset: $scope.pokemonList.length
                }
            }).then(function(response){
                $scope.pokemonList = $.merge($scope.pokemonList, response.data.objects);
                renderImprovements()
            }).finally(function(){
                $scope.flags.loading = false;
            })
        }

        $scope.selectPokemon = function (pokemon){
            if (!pokemon.pokemonTypesLabel && pokemon.types.length>0){
                var pokemonTypesLabel = '';
                $.each(pokemon.types, function(index, type){
                    pokemonTypesLabel+=type.name;
                    if (index < pokemon.types.length-1) pokemonTypesLabel+=", ";
                })
                pokemon.pokemonTypesLabel = pokemonTypesLabel;
            }
            $scope.selectedPokemon=pokemon;
        }

        function getTypes() {
            $scope.flags.typesLoading = true;
            $http.get("http://pokeapi.co/api/v1/type/", {
                params: {
                    limit: 50
                }
            }).then(function(response){
                $scope.typesList = new Array();
                $.each(response.data.objects, function(index, type){
                    $scope.typesList.push({name: type.name})
                });
                renderImprovements();
            }).finally(function(){
                $scope.flags.typesLoading = false;
            });
        }

        //Init
        requestInitialData();
        getTypes();

    };

    registerController("DemoCtrl", DemoCtrlInjector, DemoCtrlFunction);

})();
