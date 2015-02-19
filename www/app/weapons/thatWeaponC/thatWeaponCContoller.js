(function () {
    'use strict';

    window.agApp.controller('thatWeaponCController', Controller);


    function Controller(thatWeaponCService, $stateParams) {
        var vm = this;
        vm.WeaponId= $stateParams.WeaponId;
        vm.weapon = [];
        
        Activate();

        function Activate() {
            vm.weapon = thatWeaponCService.GetThatWeaponL(vm.WeaponId);
        }
    }


})();