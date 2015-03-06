(function () {
    'use strict';

    window.agApp.controller('thatCharacterController', Controller);


    function Controller(thatCharacterService, $stateParams,$scope) {
        var vm = this;
        vm.CharacterId = $stateParams.CharacterId;
        vm.character = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Characters';
            vm.character = thatCharacterService.GetThatCharacter(vm.CharacterId);
        }
    }


})();