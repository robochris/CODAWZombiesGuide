(function () {
    'use strict';

    window.agApp.controller('thatzombieController', Controller);


    function Controller(thatzombieService, $stateParams, $scope) {
        var vm = this;
        vm.ZombieId = $stateParams.ZombieId;
        vm.Zombie = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Zombies';
            vm.Zombie = thatzombieService.GetThatZombie(vm.ZombieId);
        }
    }


})();