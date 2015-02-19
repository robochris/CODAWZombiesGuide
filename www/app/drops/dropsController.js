(function () {
    'use strict';

    window.agApp.controller('dropsController', Controller);


    function Controller(dropsService) {
        var vm = this;
        vm.drops = [];

        Activate();

        function Activate() {
            vm.drops = dropsService.GetDrops();
        }
    }


})();