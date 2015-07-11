(function () {
    'use strict';

    window.agApp.service('thatAchievementService', Service);

    function Service() {
        var service = {
            GetThatAchievement: GetThatAchievement
        };

        return service;

        function GetThatAchievement(AchievementId) {
            if (AchievementId == 1) {
                return {}

            }
        }
    }

})();