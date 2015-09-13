(function () {
    'use strict';

    window.agApp.controller('thatExoupgradeController', Controller);


    function Controller($stateParams, $scope) {
        var vm = this;
        vm.ExoupgradeId = $stateParams.ExoupgradeId;
        vm.mapId = $stateParams.mapId
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Exo-Upgrades';
            
        }
    }

    
})();