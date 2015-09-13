(function () {
    'use strict';

    window.agApp.controller('charactersController', Controller);


    function Controller($scope, $stateParams) {
        var vm = this;
        vm.character = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Characters';
            vm.character = GetCharacters(vm.mapId);
        }
    }

    function GetCharacters(mapId) {
        if (mapId == 2) {
            return [
                {
                    CharacterId: 1,
                    displayName: "Oz",
                }, {
                    CharacterId: 2,
                    displayName: "Lilith",
                }, {
                    CharacterId: 3,
                    displayName: "Kahn",
                }, {
                    CharacterId: 4,
                    displayName: "Decker",
                }, {
                    CharacterId: 5,
                    displayName: "An-G",
                },
            ]
        }
        if (mapId == 3) {
            return [
                {
                    CharacterId: 1,
                    displayName: "Oz",
                }, {
                    CharacterId: 2,
                    displayName: "Lilith",
                }, {
                    CharacterId: 3,
                    displayName: "Kahn",
                }, {
                    CharacterId: 4,
                    displayName: "Decker",
                }, {
                    CharacterId: 6,
                    displayName: "Survivors",
                }, {
                    CharacterId: 7,
                    displayName: "Eagle One",
                }, {
                    CharacterId: 8,
                    displayName: "Sentinel Leader",
                },
            ]
        }
        if (mapId == 4) {
            return [
                {
                    CharacterId: 1,
                    displayName: "Oz",
                }, {
                    CharacterId: 2,
                    displayName: "Lilith",
                }, {
                    CharacterId: 3,
                    displayName: "Kahn",
                }, {
                    CharacterId: 4,
                    displayName: "Decker",
                }, {
                    CharacterId: 9,
                    displayName: "Lennox",
                }
            ]
        }
        if (mapId == 5) {
            return [
                {
                    CharacterId: 10,
                    displayName: "Oz",
                }, {
                    CharacterId: 2,
                    displayName: "Lilith",
                }, {
                    CharacterId: 3,
                    displayName: "Kahn",
                }, {
                    CharacterId: 4,
                    displayName: "Decker",
                }, {
                    CharacterId: 9,
                    displayName: "Lennox",
                }, {
                    CharacterId: 5,
                    displayName: "An-G",
                }
            ]
        }
    }
})();