(function () {
    'use strict';

    window.agApp.controller('thatWeaponCController', Controller);


    function Controller(thatWeaponCService, $stateParams, $scope) {
        var vm = this;
        vm.WeaponId = $stateParams.WeaponId;
        vm.weapons = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {

            vm.weapons = thatWeaponCService.GetThatWeaponL(vm.WeaponId,vm.mapId);
            $scope.mapMenu.selectedScreen = 'Weapons';
        }
    }


})();