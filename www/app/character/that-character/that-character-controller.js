(function () {
    'use strict';

    window.agApp.controller('thatCharacterController', Controller);


    function Controller( $stateParams,$scope) {
        var vm = this;
        vm.CharacterId = $stateParams.CharacterId;

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Characters';
        }
    }


})();