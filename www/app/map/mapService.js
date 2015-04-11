(function () {
    'use strict';

    window.agApp.service('MapService', Service);

    function Service() {
        var service = {
            GetMap: GetMap
        };

        return service;

        function GetMap(mapId) {
            if(mapId==3){
                return [
                    {
                        imageUrl:"img/Infectionmap.png"
                    }
                ]
            }else if (mapId == 2) {
                return [
                    {
                        imageUrl: "img/mapOutbreak.png"
                }
            ]
            }else if (mapId == 1) {
                return [
                    {
                        imageUrl: "img/RiotMap.png"
                    }
            ]
            }
        }
    }

})();