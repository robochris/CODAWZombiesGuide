(function () {
    'use strict';

    window.agApp.service('MapService', Service);

    function Service() {
        var service = {
            GetMap: GetMap
        };

        return service;

        function GetMap(mapId) {
<<<<<<< HEAD
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
=======
            if (mapId == 2) {
                return {
                        mapimgId: 1,
                        imageUrl: 'img/mapOutbreak.png'
                };
            } else if (mapId == 1) {
                return {
                        mapimgId: 2,
                        imageUrl: "http://img2.wikia.nocookie.net/__cb20150131092412/callofduty/images/thumb/d/d5/Riot_Map_Layout_AW.png/283px-Riot_Map_Layout_AW.png"
                    };
>>>>>>> origin/master
            }
        }
    }

})();