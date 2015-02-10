(function () {
    'use strict';

    window.agApp.service('MapService', Service);

    function Service() {
        var service = {
            GetMap: GetMap
        };

        return service;

        function GetMap() {
            return [
                {
                    mapId: 1,
                    displayName: "Map",
                },
                {
                    mapId: 2,
                    displayName: "turkey",
                },
                
            ]
        }
    }

})();