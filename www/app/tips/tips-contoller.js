(function () {
    'use strict';

    window.agApp.controller('tipsController', Controller);


    function Controller($stateParams, $scope) {
        var vm = this;
        vm.tipId = $stateParams.tipId;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = "Tips";
        }
    }


})();