(function () {
    'use strict';

    window.agApp.controller('dropsController', Controller);


    function Controller( $scope, $stateParams) {
        var vm = this;
        vm.drops = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Power-Ups';
            vm.drops = GetDrops(vm.mapId);
        }
    }

    function GetDrops(mapId) {
            if (mapId == 2 || mapId == 3) {
                return [
                    {
                        DropId: 1,
                        displayName: "Resupply",
                },
                    {
                        DropId: 2,
                        displayName: "DNA Bomb",
                },
                    {
                        DropId: 3,
                        displayName: "Hyper-Damage",
                },
                    {
                        DropId: 4,
                        displayName: "Multiplier",
                },
                    {
                        DropId: 5,
                        displayName: "Security",
                },
                    {
                        DropId: 6,
                        displayName: "Full Reload",
                },
                    {
                        DropId: 7,
                        displayName: "Power Surge",
                }
                ]
            } else if (mapId == 4 || mapId == 5) {
                return [
                    {
                        DropId: 1,
                        displayName: "Resupply",
                    },{
                        DropId: 2,
                        displayName: "DNA Bomb",
                    },{
                        DropId: 3,
                        displayName: "Hyper-Damage",
                    },{
                        DropId: 4,
                        displayName: "Multiplier",
                    },{
                        DropId: 5,
                        displayName: "Security",
                    },{
                        DropId: 6,
                        displayName: "Full Reload",
                    },{
                        DropId: 7,
                        displayName: "Power Surge",
                    },{
                        DropId: 8,
                        displayName: "Explosive Touch",
                    },{
                        DropId: 9,
                        displayName: "Open Fire",
                    },
                ]
            }
        }
})();