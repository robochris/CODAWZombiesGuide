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
                    displayName: "Riot(Exo-Survival)",
                    imageUrl: 'http://www.callofdutyadvancedwarfare.co.uk/wp-content/uploads/2014/08/call-of-duty-advanced-warfare-multplayer-map-riot.png'
                },
                {
                    mapId: 2,
                    displayName: "Outbreak",
                    imageUrl: 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-2014/thumb/3/3d/Exo_zombies_outbreak_map.jpg/468px-Exo_zombies_outbreak_map.jpg'
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