(function () {
    'use strict';

    window.agApp.controller('exoUpgradeController', Controller);


    function Controller(exoUpradeService, $scope, $stateParams) {
        var vm = this;
        vm.exoupgrades = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Exo-Upgrades';
            vm.exoupgrades = exoUpradeService.GetExoUpgrades(vm.mapId);
        }
    }


})();