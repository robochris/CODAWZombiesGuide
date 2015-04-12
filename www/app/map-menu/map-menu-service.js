(function () {
    'use strict';

    window.agApp.service('MapMenuService', Service);



    function Service() {
        var service = {
            GetMenuItems: GetMenuItems,

        };

        return service;

        function GetMenuItems(mapId) {
            if (mapId == 3) {
                return [
                    {
                        menuId: 1,
                        displayName: "Map",
                        route: "map",
                    }, {
                        menuId: 2,
                        displayName: "Zombies",
                        route: "zombies",
                    }, {
                        menuId: 3,
                        displayName: "Weapons",
                        route: "weapons",
                    }, {
                        menuId: 4,
                        displayName: "Exo-Upgrades",
                        route: "exoupgrades",
                    }, {
                        menuId: 5,
                        displayName: "Features",
                        route: "features",
                    }, {
                        menuId: 6,
                        displayName: "Characters",
                        route: "characters",
                    }, {
                        menuId: 7,
                        displayName: "Power-Ups",
                        route: "drops",
                    }, {
                        menuId: 8,
                        displayName: "Toccata and Fugue in D Minor",
                        route: "songs({SongId: 2})",
                    }, {
                        menuId: 9,
                        displayName: "MEAT IS MURDER",
                        route: "eastereggs({EasterEggId: 2})",
                    }, {
                        menuId: 10,
                        displayName: "Achievements",
                        route: "achievements",
                    },
                    {
                        menuId: 11,
                        displayName: "Story",
                        route: "storys({StoryId: 3})",
                    }, {
                        menuId: 12,
                        displayName: "Strategy",
                        route: "strategy({StrategyId: 2})",
                    }, {
                        menuId: 13,
                        displayName: "Tips",
                        route: "tip({tipId: 2})",
                    }
                ]
            } else if (mapId == 2) {
                return [

                    {
                        menuId: 1,
                        displayName: "Map",
                        route: "map",
                    }, {
                        menuId: 2,
                        displayName: "Zombies",
                        route: "zombies",
                    }, {
                        menuId: 3,
                        displayName: "Weapons",
                        route: "weapons",
                    }, {
                        menuId: 4,
                        displayName: "Exo-Upgrades",
                        route: "exoupgrades",
                    }, {
                        menuId: 5,
                        displayName: "Features",
                        route: "features",
                    }, {
                        menuId: 6,
                        displayName: "Characters",
                        route: "characters",
                    }, {
                        menuId: 7,
                        displayName: "Power-Ups",
                        route: "drops",
                    }, {
                        menuId: 8,
                        displayName: "Ride of the Valkyries",
                        route: "songs({SongId: 1})",
                    }, {
                        menuId: 9,
                        displayName: "Game Over, Man",
                        route: "eastereggs({EasterEggId: 1})",
                    }, {
                        menuId: 10,
                        displayName: "Achievements",
                        route: "achievements",
                    },
                    {
                        menuId: 11,
                        displayName: "Story",
                        route: "storys({StoryId: 1})",
                    }, {
                        menuId: 12,
                        displayName: "Strategy",
                        route: "strategy({StrategyId: 1})",
                    }, {
                        menuId: 13,
                        displayName: "Tips",
                        route: "tip({tipId: 1})",
                    },
            ]
            } else if (mapId == 1) {
                return [
                    {
                        menuId: 5,
                        displayName: "Map",
                        route: "map",
                        },
                    {
                        menuId: 3,
                        displayName: "Zombies",
                        route: "zombies",
                        },
                    {
                        menuId: 2,
                        displayName: "Weapons",
                        route: "weapons",
                        },
                    {
                        menuId: 1,
                        displayName: "Achievements",
                        route: "achievements",
                        },
                    {
                        menuId: 4,
                        displayName: "Story",
                        route: "storys({StoryId: 2})",
                        },


                ]

            }
        }

    }

})();