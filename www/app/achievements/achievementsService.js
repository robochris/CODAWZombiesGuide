(function () {
    'use strict';

    window.agApp.service('achievementsService', Service);

    function Service() {
        var service = {
            GetAchievements: GetAchievements
        };

        return service;
        function GetAchievements(mapId) {
            if (mapId == 2) {
                return [
                    {
                        AchievementId: 1,
                        displayName: "I'm Alive!",
                },
                    {
                        AchievementId: 2,
                        displayName: "PC Load Letter",
                },
                    {
                        AchievementId: 3,
                        displayName: "Game Over, Man!",
                },
                    {
                        AchievementId: 4,
                        displayName: "Cheapskate",
                },
                    {
                        AchievementId: 5,
                        displayName: "Moneybags",
                },
                    {
                        AchievementId: 6,
                        displayName: "Survivor",
                },
                    {
                        AchievementId: 7,
                        displayName: "Burgle Burgle Burgle",
                },
                    {
                        AchievementId: 8,
                        displayName: "Do You Even Exo?",
                },
                    {
                        AchievementId: 9,
                        displayName: "Come On And ...",
                },
                    {
                        AchievementId: 10,
                        displayName: "20/20",
                },
            ]
            } else if (mapId == 1) {
                return [
                    {
                        AchievementId: 11,
                        displayName: "Class Warfare",
                }, {
                        AchievementId: 12,
                        displayName: "Exo Survivor",
                },
                ]
            }
        }
    }
})();