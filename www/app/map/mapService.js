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
                    imageUrl:"http://img2.wikia.nocookie.net/__cb20150130183644/callofduty/images/d/d5/Riot_Map_Layout_AW.png"
                }
                
                
            ]
        }
    }

})();