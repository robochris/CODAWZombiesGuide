(function () {
    'use strict';

    window.agApp.service('MapMenuService', Service);

    function Service() {
        var service = {
            GetMenuItems: GetMenuItems,
            
        };

        return service;

        function GetMenuItems() {
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
                        route: "exoUpgrades",
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
                        displayName: "Drops",
                        route: "drops",
                    }, {
                        menuId: 8,
                        displayName: "Song(s)",
                        route: "song",
                    }, {
                        menuId: 9,
                        displayName: "Game Over, Man",
                        route: "GameOverMan",
                    }, {
                        menuId: 10,
                        displayName: "Achievements/Trophys",
                        route: "AchiecementsTrophys",
                    }

            ]

        }
    }



})();