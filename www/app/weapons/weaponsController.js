(function () {
    'use strict';

    window.agApp.controller('weaponsController', Controller);


    function Controller(weaponsService) {
        var vm = this;
        vm.weapons = [];

        Activate();

        function Activate() {
            vm.weapons = weaponsService.GetWeapons();
        }
    }


})();