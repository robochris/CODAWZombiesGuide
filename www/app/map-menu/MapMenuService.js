(function () {
    'use strict';

    window.agApp.service('MapMenuService', Service);

    

    function Service() {
        var service = {
            GetMenuItems: GetMenuItems,

        };

        return service;

        function GetMenuItems(mapId) {
            if (mapId == 2) {
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
                        displayName: "Song(s)",
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
                        route: "storys",
                    }
            ]
                } else if (mapId == 1) {
                    return [
                        {
                            menuId: 1,
                            displayName: "Achievements",
                            route: "achievements",
                        },
                        {
                            menuId: 2,
                            displayName: "Weapons",
                            route: "weapons",
                        },
                        {
                            menuId: 3,
                            displayName: "Zombies",
                            route: "zombies",
                        },
                        {
                            menuId: 4,
                            displayName: "Story",
                            route: "storys",
                        },
                        {
                            menuId: 5,
                            displayName: "Map",
                            route: "map",
                        },

                ]

                }
        }

    }

})();