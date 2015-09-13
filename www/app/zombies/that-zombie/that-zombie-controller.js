(function () {
    'use strict';

    window.agApp.controller('thatzombieController', Controller);


    function Controller( $stateParams, $scope) {
        var vm = this;
        vm.ZombieId = $stateParams.ZombieId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Zombies';
        }
    }
})();