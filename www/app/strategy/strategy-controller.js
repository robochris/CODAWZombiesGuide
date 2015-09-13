(function () {
    'use strict';

    window.agApp.controller('strategyController', Controller);


    function Controller($stateParams, $scope) {
        var vm = this;
        vm.StrategyId = $stateParams.StrategyId;
        vm.strategy = null;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = "Strategy";
        }
    }


})();