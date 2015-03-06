(function () {
    'use strict';

    window.agApp.controller('weaponsController', Controller);


    function Controller(weaponsService, $stateParams, $scope) {
        var vm = this;
        vm.weapon = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Weapons';
            vm.weapon = weaponsService.GetWeapons(vm.mapId);
        }
    }


})();