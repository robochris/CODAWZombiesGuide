(function () {
    'use strict';

    window.agApp.controller('featureController', Controller);


    function Controller(featureService, $stateParams, $scope) {
        var vm = this;
        vm.TrapId = $stateParams.TrapId;
        vm.trap = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.trap = featureService.GetWeapon(vm.TrapId);
            $scope.mapMenu.selectedScreen = 'Feature';
        }
    }

})();