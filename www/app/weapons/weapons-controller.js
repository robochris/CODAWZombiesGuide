(function () {
    'use strict';

    window.agApp.controller('weaponsController', Controller);


    function Controller(weaponsService, $stateParams, $scope, thatWeaponService) {
        var vm = this;
        vm.weapon = [];
        vm.weapons = [];
        vm.Id = $stateParams.Id;
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Weapons';
            
            // get categories
            vm.weapon = weaponsService.GetWeapons(vm.mapId);
            
            if (vm.mapId == 1) {
                // get riot weapons
                vm.weapons = thatWeaponService.GetThatWeaponL(12);
            }
        }
    }


})();