(function () {
    'use strict';

    window.agApp.controller('charactersController', Controller);


    function Controller(charactersService, $scope) {
        var vm = this;
        vm.character = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Characters';
            vm.character = charactersService.GetCharacters();
        }
    }


})();