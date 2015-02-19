(function () {
    'use strict';

    window.agApp.controller('thatAchievementController', Controller);


    function Controller(thatAchievementService,$stateParams) {
        var vm = this;
        vm.AchievementId= $stateParams.AchievementId;
        vm.achievement = [];
        
        Activate();

        function Activate() {
            vm.achievement = thatAchievementService.GetThatAchievement(vm.AchievementId);
        }
    }


})();