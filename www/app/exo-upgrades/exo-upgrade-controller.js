(function () {
    'use strict';

    window.agApp.controller('exoUpgradeController', Controller);


    function Controller($scope, $stateParams) {
        var vm = this;
        vm.exoupgrades = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Exo-Upgrades';
            vm.exoupgrades = GetExoUpgrades(vm.mapId);
        }
    }

    function GetExoUpgrades(mapId) {
            if (mapId == 2 || mapId == 3) {
                return [
                    {
                        ExoupgradeId: 1,
                        displayName: "Exo-Soldier",
                },
                    {
                        ExoupgradeId: 2,
                        displayName: "Exo-Health",
                },
                    {
                        ExoupgradeId: 3,
                        displayName: "Exo-Reload",
                },
                    {
                        ExoupgradeId: 4,
                        displayName: "Exo-Slam",
                },
                    {
                        ExoupgradeId: 5,
                        displayName: "Exo-Medic",
                },
            ]
            }
            if (mapId == 4 || mapId == 5) {
                return [
                    {
                        ExoupgradeId: 1,
                        displayName: "Exo-Soldier",
                },
                    {
                        ExoupgradeId: 2,
                        displayName: "Exo-Health",
                },
                    {
                        ExoupgradeId: 3,
                        displayName: "Exo-Reload",
                },
                    {
                        ExoupgradeId: 4,
                        displayName: "Exo-Slam",
                },
                    {
                        ExoupgradeId: 5,
                        displayName: "Exo-Medic",
                },
                    {
                        ExoupgradeId: 6,
                        displayName: "Exo-Stockpile",
                },
            ]
            }
        }
})();