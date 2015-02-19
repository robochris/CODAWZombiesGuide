(function () {
    'use strict';

    window.agApp.controller('easterEggsController', Controller);


    function Controller(easterEggsService, $scope) {
        var vm = this;
        vm.eastereggs = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Game Over, Man';
            vm.eastereggs = easterEggsService.GetEasterEgg();
        }
    }


})();