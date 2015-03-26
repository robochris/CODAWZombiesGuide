(function () {
    'use strict';
    window.agApp.controller('thatAchievementController', Controller);
    function Controller(thatAchievementService, $stateParams, $scope) {
        var vm = this;
        vm.AchievementId = $stateParams.AchievementId;
        vm.achievement = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Achievements/Trophys';
            vm.achievement = thatAchievementService.GetThatAchievement(vm.AchievementId);
        }
    }
})();