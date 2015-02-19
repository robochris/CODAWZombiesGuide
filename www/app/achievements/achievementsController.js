(function () {
    'use strict';

    window.agApp.controller('achievementsController', Controller);


    function Controller(achievementsService, $stateParams, $scope) {
        var vm = this;
        vm.achievements = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Achievements/Trophys';
            vm.achievements = achievementsService.GetAchievements(vm.mapId);
        }
    }


})();