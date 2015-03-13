(function () {
    'use strict';

    window.agApp.controller('strategyController', Controller);


    function Controller(strategyService,$stateParams, $scope) {
        var vm = this;
        vm.StrategyId = $stateParams.StrategyId;
        vm.strategy = null;

        Activate();

        function Activate() {
            vm.strategy = strategyService.GetStrategy();
            $scope.mapMenu.selectedScreen = "Strategy";
        }
    }


})();