(function () {
    'use strict';

    window.agApp.controller('exoUpgradeController', Controller);


    function Controller(exoUpradeService, $scope) {
        var vm = this;
        vm.exoupgrades = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Exo-Upgrades';
            vm.exoupgrades = exoUpradeService.GetExoUpgrades();
        }
    }


})();