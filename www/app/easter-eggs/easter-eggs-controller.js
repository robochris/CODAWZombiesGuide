(function () {
    'use strict';

    window.agApp.controller('easterEggsController', Controller);


    function Controller($stateParams, $scope) {
        var vm = this;
        vm.EasterEggId = $stateParams.EasterEggId;
        vm.easteregg = null;
        vm.mapId = $stateParams.mapId;


        Activate();

        function Activate() {
            vm.easteregg = GetEasterEgg(vm.mapId);
            $scope.mapMenu.selectedScreen = vm.easteregg.displayName;
        }
    }

    function GetEasterEgg(mapId) {
        if (mapId == 5) {
            return {
                EasterEggId: 4,
                displayName: "Reunion"
            }
        } else if (mapId == 4) {
            return {
                EasterEggId: 3,
                displayName: "Flotsam & Jetsam"
            }
        } else if (mapId == 3) {
            return {
                EasterEggId: 2,
                displayName: "MEAT IS MURDER"
            }
        } else if (mapId == 2) {
            return {
                EasterEggId: 1,
                displayName: "Game Over, Man"
            }
        }
    }
})();