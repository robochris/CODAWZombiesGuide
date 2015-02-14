(function () {
    'use strict';

    window.agApp.controller('charactersController', Controller);


    function Controller(charactersService) {
        var vm = this;
        vm.character = [];

        Activate();

        function Activate() {
            vm.character = charactersService.GetCharacters();
        }
    }


})();