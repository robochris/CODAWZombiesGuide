(function () {
    'use strict';

    window.agApp.controller('thatExoupgradeController', Controller);


    function Controller(thatExoupgradeService, $stateParams) {
        var vm = this;
        vm.ExoupgradeId= $stateParams.ExoupgradeId;
        vm.exoupgrade = [];
        
        Activate();

        function Activate() {
            vm.exoupgrade = thatExoupgradeService.GetThatExo(vm.ExoupgradeId);
        }
    }


})();