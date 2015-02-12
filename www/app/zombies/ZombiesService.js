(function () {
    'use strict';

    window.agApp.service('ZombiesService', Service);

    function Service() {
        var service = {
            GetZombies: GetZombies
        };

        return service;

        function GetZombies() {
            return [
                {
                    ZombieId: 1,
                    displayName: "Regular Zombies",
                },
                {
                    ZombieId: 2,
                    displayName: "Hosts",
                },
                
            ]
        }
    }

})();