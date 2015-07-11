(function () {
    'use strict';

    window.agApp.controller('dropsController', Controller);


    function Controller(dropsService, $scope, $stateParams) {
        var vm = this;
        vm.drops = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Power-Ups';
            vm.drops = dropsService.GetDrops(vm.mapId);
        }
    }


})();