(function () {
    'use strict';

    window.agApp.controller('achievementsController', Controller);


    function Controller(achievementsService,$stateParams) {
        var vm = this;
        vm.achievements = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.achievements = achievementsService.GetAchievements(vm.mapId);
        }
    }


})();