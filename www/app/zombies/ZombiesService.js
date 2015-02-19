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
                {
                    ZombieId: 3,
                    displayName: "Security Dogs",
                },
                {
                    ZombieId: 4,
                    displayName: "Chargers",
                },
                {
                    ZombieId: 5,
                    displayName: "EMZs",
                },
                {
                    ZombieId: 6,
                    displayName: "Exploders",
                },
                
            ]
        }
    }

})();