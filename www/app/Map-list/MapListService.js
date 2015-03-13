(function () {
    'use strict';

    window.agApp.service('MapListService', Service);

    function Service() {
        var service = {
            GetMaps: GetMaps,
            GetMap: GetMap
        };

        return service;

        function GetMaps() {
            return [
                {
                    mapId: 1,
                    displayName: "Riot (Exo-Survival)",
                    imageUrl: 'img/HomeRiot.png'
                },
                {
                    mapId: 2,
                    displayName: "Outbreak",
                    imageUrl: 'img/HomeOutbreak.jpg'
                }

            ]
        }
        
        function GetMap(mapId) {
            var allMaps = GetMaps();
            for(var i = 0; i < allMaps.length; i++) {
                if (allMaps[i].mapId == mapId) {
                    return allMaps[i];
                }
            }
        }
    }

})();