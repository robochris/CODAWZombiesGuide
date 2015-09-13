(function () {
    'use strict';
    window.agApp.controller('achievementsController', Controller);

    function Controller($stateParams, $scope) {
        var vm = this;
        vm.achievements = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Achievements/Trophys';
            vm.achievements = GetAchievements(vm.mapId);
        }
    }

    function GetAchievements(mapId) {
        if (mapId == 5) {
            return [
                {
                    AchievementId: 33,
                    displayName: "Smooth Operator",
                }, {
                    AchievementId: 34,
                    displayName: "How The Mightly Have Fallen",
                }, {
                    AchievementId: 35,
                    displayName: "Reunion",
                }, {
                    AchievementId: 36,
                    displayName: "Big Game",
                }, {
                    AchievementId: 37,
                    displayName: "Coast 2 Coast",
                }, {
                    AchievementId: 38,
                    displayName: "Size DOES Matter",
                }, {
                    AchievementId: 39,
                    displayName: "K.O.",
                }, {
                    AchievementId: 40,
                    displayName: "Nah, I'm good",
                }, {
                    AchievementId: 41,
                    displayName: "Trick Shot",
                }, {
                    AchievementId: 42,
                    displayName: "Double Tap",
                },
          ]
        } else if (mapId == 4) {
            return [
                {
                    AchievementId: 23,
                    displayName: "Ensign",
                }, {
                    AchievementId: 24,
                    displayName: "Admiral",
                }, {
                    AchievementId: 25,
                    displayName: "Slot Jockey",
                }, {
                    AchievementId: 26,
                    displayName: "Right of First Defusal",
                }, {
                    AchievementId: 27,
                    displayName: "Take Off, Hoser!",
                }, {
                    AchievementId: 28,
                    displayName: "Telefragathon",
                }, {
                    AchievementId: 29,
                    displayName: "How Low Can You Go?",
                }, {
                    AchievementId: 30,
                    displayName: "Hugs!",
                }, {
                    AchievementId: 31,
                    displayName: "Mad Hops",
                }, {
                    AchievementId: 32,
                    displayName: "Flotsam & Jetsam",
                }
                ]
        } else if (mapId == 3) {
            return [
                {
                    AchievementId: 13,
                    displayName: "Alright, Alright",
                }, {
                    AchievementId: 14,
                    displayName: "Climbing the Corporate Ladder",
                }, {
                    AchievementId: 15,
                    displayName: "One Man's Poison...",
                }, {
                    AchievementId: 16,
                    displayName: "Indirect Fire",
                }, {
                    AchievementId: 17,
                    displayName: "Burgertown Escort Service",
                }, {
                    AchievementId: 18,
                    displayName: "Abandon All Hope",
                }, {
                    AchievementId: 19,
                    displayName: "Blood-Spattered Savior",
                }, {
                    AchievementId: 20,
                    displayName: "Love Tap",
                }, {
                    AchievementId: 21,
                    displayName: "Popcorn",
                }, {
                    AchievementId: 22,
                    displayName: "MEAT IS MURDER",
                },
                ]
        } else if (mapId == 2) {
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
})();