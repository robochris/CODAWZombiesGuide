(function () {
    'use strict';

    window.agApp.controller('weaponController', Controller);


    function Controller(weaponService, $stateParams, $scope) {
        var vm = this;
        vm.weapontId = $stateParams.weapontId;
        vm.weapont = [];

        Activate();

        function Activate() {
            vm.weapont = weaponService.GetWeapon(vm.weapontId);
            $scope.mapMenu.selectedScreen = 'Weapons';
        }
    }

})();