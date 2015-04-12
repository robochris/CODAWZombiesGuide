(function () {
    'use strict';

    window.agApp.controller('dropsController', Controller);


    function Controller(dropsService, $scope) {
        var vm = this;
        vm.drops = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Power-Ups';
            vm.drops = dropsService.GetDrops();
        }
    }


})();