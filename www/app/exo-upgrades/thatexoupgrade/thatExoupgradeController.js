(function () {
    'use strict';

    window.agApp.controller('thatExoupgradeController', Controller);


    function Controller(thatExoupgradeService, $stateParams, $scope) {
        var vm = this;
        vm.ExoupgradeId = $stateParams.ExoupgradeId;
        vm.exoupgrade = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Exo-Upgrades';
            vm.exoupgrade = thatExoupgradeService.GetThatExo(vm.ExoupgradeId);
        }
    }


})();