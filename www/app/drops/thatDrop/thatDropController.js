(function () {
    'use strict';

    window.agApp.controller('thatDropController', Controller);


    function Controller(thatDropService, $stateParams) {
        var vm = this;
        vm.DropId = $stateParams.DropId;
        vm.drop = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Power-Up';
            vm.drop = thatDropService.GetThatDrop(vm.DropId);
        }
    }


})();