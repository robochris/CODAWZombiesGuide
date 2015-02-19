(function () {
    'use strict';

    window.agApp.controller('exoUpgradeController', Controller);


    function Controller(exoUpradeService) {
        var vm = this;
        vm.exoupgrades = [];

        Activate();

        function Activate() {
            vm.exoupgrades = exoUpradeService.GetExoUpgrades();
        }
    }


})();