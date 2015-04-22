(function () {
    'use strict';

    window.agApp.controller('charactersController', Controller);


    function Controller(charactersService, $scope, $stateParams) {
        var vm = this;
        vm.character = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.character = charactersService.GetCharacters(vm.mapId);
            $scope.mapMenu.selectedScreen = 'Characters';
        }
    }


})();