(function () {
    'use strict';

    window.agApp.controller('thatDropController', Controller);


    function Controller( $stateParams, $scope) {
        var vm = this;
        vm.DropId = $stateParams.DropId;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Power-Up';
        }
    }


})();