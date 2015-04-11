(function () {
    'use strict';

    window.agApp.controller('easterEggsController', Controller);


    function Controller(easterEggsService,$stateParams, $scope) {
        var vm = this;
        vm.EasterEggId = $stateParams.EasterEggId;
        vm.easteregg = null;
        vm.mapId = $stateParams.mapId;


        Activate();

        function Activate() {
            vm.easteregg = easterEggsService.GetEasterEgg(vm.mapId);
            $scope.mapMenu.selectedScreen = vm.easteregg.displayName;
        }
    }


})();