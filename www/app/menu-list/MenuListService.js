(function () {
    'use strict';

    window.agApp.service('MenuListService', Service);

    function Service() {
        var service = {
            GetMenus: GetMenus
        };

        return service;

        function GetMenus() {
            return [
                {
                    menuId: 1,
                    displayName: "Map",
                },
                {
                    menuId: 2,
                    displayName: "Zombies",
                },
                {
                    menuId: 3,
                    displayName: "Weapons",
                },
                {
                    menuId: 4,
                    displayName: "Exo-Upgrades",
                },
                {
                    menuId: 5,
                    displayName: "Features",
                },
                {
                    menuId: 6,
                    displayName: "Characters",
                },
                {
                    menuId: 7,
                    displayName: "Drops",
                },
                {
                    menuId: 8,
                    displayName: "Song",
                },
                {
                    menuId: 9,
                    displayName: "Game Over, Man",
                },
                {
                    menuId: 10,
                    displayName: "Achievements/Trophys",
                },
                

            ]
        }
    }

})();