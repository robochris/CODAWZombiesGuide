(function () {
    'use strict';

    window.agApp.controller('ZombiesController', Controller);


    function Controller(ZombiesService) {
        var vm = this;
        vm.zombies = [];

        Activate();

        function Activate() {
            vm.zombies = ZombiesService.GetZombies();
        }
    }


})();