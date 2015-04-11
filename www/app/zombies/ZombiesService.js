(function () {
    'use strict';

    window.agApp.service('ZombiesService', Service);

    function Service() {
        var service = {
            GetZombies: GetZombies
        };

        return service;

        function GetZombies(mapId) {
            if (mapId == 3) {
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
                        ZombieId: 5,
                        displayName: "EMZs",
                },
                    {
                        ZombieId: 6,
                        displayName: "Exploders",
                },{
                        ZombieId: 7,
                        displayName: "Spikers",
                },{
                        ZombieId: 8,
                        displayName: "Acid Drippers",
                },{
                        ZombieId: 9,
                        displayName: "Goliath Zombie",
                }
                    
                ]
            }
            if (mapId == 2) {
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
            if (mapId == 1) {
                return [
                    {
                        ZombieId: 1,
                        displayName: "Regular Zombies",
                },
            ]
            }
        }
    }

})();