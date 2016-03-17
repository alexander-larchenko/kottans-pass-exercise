/**
 * Created by Alex on 17.03.2016.
 */

(function(){
    'use strict';

    angular.module(AngularHelpers.MainAppName).filter('pokemonTypeFilter', function () {
        return function (items, type) {

            if (type===null) return items;

            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];

                for (var j=0; j < item.types.length; j++) {
                    var itemType = item.types[j];
                    if (itemType.name.toLowerCase() === type.name.toLowerCase()) {
                        filtered.push(item);
                        break;
                    }
                }
            }
            return filtered;
        };
    });

})();
