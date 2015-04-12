(function () {
    'use strict';

    window.agApp.controller('tipsController', Controller);


    function Controller(tipsService,$stateParams, $scope) {
        var vm = this;
        vm.tipId = $stateParams.tipId;
        vm.tip = null;

        Activate();

        function Activate() {
            vm.tip = tipsService.GetTip();
            $scope.mapMenu.selectedScreen = "Tips";
        }
    }


})();