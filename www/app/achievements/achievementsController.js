(function () {
    'use strict';

    window.agApp.controller('achievementsController', Controller);


    function Controller(achievementsService) {
        var vm = this;
        vm.achievements = [];

        Activate();

        function Activate() {
            vm.achievements = achievementsService.GetAchievements();
        }
    }


})();
