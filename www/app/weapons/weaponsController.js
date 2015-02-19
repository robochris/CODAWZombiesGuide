(function () {
    'use strict';

    window.agApp.controller('weaponsController', Controller);


    function Controller(weaponsService,$stateParams) {
        var vm = this;
        vm.weapons = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.weapons = weaponsService.GetWeapons(vm.mapId);
        }
    }


})();