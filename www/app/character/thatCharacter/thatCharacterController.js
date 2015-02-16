(function () {
    'use strict';

    window.agApp.controller('thatCharacterController', Controller);


    function Controller(thatCharacterService, charactersService, $stateParams) {
        var vm = this;
        vm.CharacterId= $stateParams.CharacterId;
        vm.character = [];
        
        Activate();

        function Activate() {
            vm.character = thatCharacterService.GetThatCharacter(vm.CharacterId);
        }
    }


})();