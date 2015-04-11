(function () {
    'use strict';

    window.agApp.controller('charactersController', Controller);


    function Controller(charactersService, $scope, $stateParams) {
        var vm = this;
        vm.character = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Characters';
            vm.character = charactersService.GetCharacters(vm.mapId);
        }
    }


})();