(function () {
    'use strict';

    window.agApp.controller('weaponsController', Controller);


    function Controller(weaponsService,$stateParams,$scope) {
        var vm = this;
        vm.weapons = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Weapons';
            vm.weapons = weaponsService.GetWeapons(vm.mapId);
        }
    }


})();