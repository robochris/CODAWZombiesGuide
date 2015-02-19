(function () {
    'use strict';

    window.agApp.controller('thatzombieController', Controller);


    function Controller(thatzombieService, $stateParams) {
        var vm = this;
        vm.ZombieId= $stateParams.ZombieId;
        vm.Zombie = [];
        
        Activate();

        function Activate() {
            vm.Zombie = thatzombieService.GetThatZombie(vm.ZombieId);
        }
    }


})();