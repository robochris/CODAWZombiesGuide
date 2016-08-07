(function () {
    'use strict';

    window.agApp.controller('thatWeaponController', Controller);


    function Controller(thatWeaponService, $stateParams, $scope) {
        var vm = this;
        vm.WeaponId = $stateParams.WeaponId;
        vm.weapons = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {

            vm.weapons = thatWeaponService.GetThatWeaponL(vm.WeaponId,vm.mapId);
            $scope.mapMenu.selectedScreen = 'Weapons';
        }
    }


})();