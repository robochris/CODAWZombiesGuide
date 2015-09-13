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
                    imageUrl: 'img/RiotHome.png'
                },
                {
                    mapId: 2,
                    displayName: "Outbreak",
                    imageUrl: 'img/Outbreakmap.jpg'
                },
                {
                    mapId: 3,
                    displayName: "Infection",
                    imageUrl: 'img/InfectionHomeMap.JPG'
                },{
                    mapId: 4,
                    displayName: "Carrier",
                    imageUrl: 'img/CarrierHome.png'
                },{
                    mapId: 5,
                    displayName: "Descent",
                    imageUrl: 'img/DescentHome.png'
                },

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