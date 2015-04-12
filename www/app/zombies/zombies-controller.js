(function () {
    'use strict';

    window.agApp.controller('ZombiesController', Controller);


    function Controller(ZombiesService, $stateParams, $scope) {
        var vm = this;
        vm.zombies = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Zombies';
            vm.zombies = ZombiesService.GetZombies(vm.mapId);
        }
    }


})();