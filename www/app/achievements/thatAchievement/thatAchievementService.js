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
                return [
                    {
                        Id: 1,
                        displayName: "Do this",
                }
            ]
            } else if (AchievementId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "do that",
                }
            ]
            } else if (AchievementId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "Hello",
                }
            ]
            } else if (AchievementId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "World",
                }
            ]

            } else if (AchievementId == 5) {
                return [
                    {
                        Id: 1,
                        displayName: "OMG",
                }
            ]
            } else if (AchievementId == 6) {
                return [
                    {
                        Id: 1,
                        displayName: "6",
                }
            ]
            } else if (AchievementId == 7) {
                return [
                    {
                        Id: 1,
                        displayName: "7",
                }
            ]
            } else if (AchievementId == 8) {
                return [
                    {
                        Id: 1,
                        displayName: "8",
                }
            ]
            } else if (AchievementId == 9) {
                return [
                    {
                        Id: 1,
                        displayName: "9",
                }
            ]
            } else if (AchievementId == 10) {
                return [
                    {
                        Id: 1,
                        displayName: "10",
                }
            ]
            } else if (AchievementId == 11) {
                return [
                    {
                        Id: 1,
                        displayName: "11",
                }
            ]
            } else if (AchievementId == 12) {
                return [
                    {
                        Id: 1,
                        displayName: "12",
                }
            ]
            }


        }
    }

})();