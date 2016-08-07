(function () {
    'use strict';

    window.agApp.controller('ZombiesController', Controller);


    function Controller($stateParams, $scope) {
        var vm = this;
        vm.zombies = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Zombies';
            vm.zombies = GetZombies(vm.mapId);
        }
    }

    function GetZombies(mapId) {
        if (mapId == 5) {
            return [
                {
                    ZombieId: 1,
                    displayName: "Regular Zombies",
                }, {
                    ZombieId: 2,
                    displayName: "Hosts",
                }, {
                    ZombieId: 3,
                    displayName: "Security Dogs",
                }, {
                    ZombieId: 5,
                    displayName: "EMZs",
                }, {
                    ZombieId: 6,
                    displayName: "Exploders",
                }, {
                    ZombieId: 7,
                    displayName: "Spikers",
                }, {
                    ZombieId: 10,
                    displayName: "Blinkers",
                }, {
                    ZombieId:12,
                    displayName: "Fused Zombies",
                },{
                    ZombieId: 13,
                    displayName: "Meatbags",
                }
                ]
        } else if (mapId == 4) {
            return [
                {
                    ZombieId: 1,
                    displayName: "Regular Zombies",
                }, {
                    ZombieId: 2,
                    displayName: "Hosts",
                }, {
                    ZombieId: 3,
                    displayName: "Security Dogs",
                }, {
                    ZombieId: 5,
                    displayName: "EMZs",
                }, {
                    ZombieId: 6,
                    displayName: "Exploders",
                }, {
                    ZombieId: 7,
                    displayName: "Spikers",
                }, {
                    ZombieId: 10,
                    displayName: "Blinkers",
                }, {
                    ZombieId: 11,
                    displayName: "Atlas strike team",
                }, {
                    ZombieId: 13,
                    displayName: "Meatbags",
                }
                ]
        }
        if (mapId == 3) {
            return [
                {
                    ZombieId: 1,
                    displayName: "Regular Zombies",
                }, {
                    ZombieId: 2,
                    displayName: "Hosts",
                }, {
                    ZombieId: 3,
                    displayName: "Security Dogs",
                }, {
                    ZombieId: 5,
                    displayName: "EMZs",
                }, {
                    ZombieId: 6,
                    displayName: "Exploders",
                }, {
                    ZombieId: 7,
                    displayName: "Spikers",
                }, {
                    ZombieId: 8,
                    displayName: "Acid Drippers",
                }, {
                    ZombieId: 9,
                    displayName: "Goliath Zombie",
                }, {
                    ZombieId: 13,
                    displayName: "Meatbags",
                }
                ]
        } else if (mapId == 2) {
            return [
                {
                    ZombieId: 1,
                    displayName: "Regular Zombies",
                }, {
                    ZombieId: 2,
                    displayName: "Hosts",
                }, {
                    ZombieId: 3,
                    displayName: "Security Dogs",
                }, {
                    ZombieId: 4,
                    displayName: "Chargers",
                }, {
                    ZombieId: 5,
                    displayName: "EMZs",
                }, {
                    ZombieId: 6,
                    displayName: "Exploders",
                },
            ]
        } else if (mapId == 1) {
            return [
                {
                    ZombieId: 1,
                    displayName: "Regular Zombies",
                },
            ]
        }
    }
})();