(function () {
    'use strict';

    window.agApp.service('achievementsService', Service);

    function Service() {
        var service = {
            GetAchievements: GetAchievements
        };

        return service;

        function GetAchievements() {
            return [
                {
                    AchievementId: 1,
                    displayName: "cool thing",
                },
                {
                    AchievementId: 2,
                    displayName: "something",
                },

            ]
        }
    }

})();
