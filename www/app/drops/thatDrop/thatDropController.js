(function () {
    'use strict';

    window.agApp.controller('thatDropController', Controller);


    function Controller(thatDropService, $stateParams) {
        var vm = this;
        vm.DropId = $stateParams.DropId;
        vm.drop = [];

        Activate();

        function Activate() {
            vm.drop = thatDropService.GetThatDrop(vm.DropId);
        }
    }


})();