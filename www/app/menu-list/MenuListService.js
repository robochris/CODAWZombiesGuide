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
                    route:"map",
                },
                {
                    menuId: 2,
                    displayName: "Zombies",
                    route:"map",
                },
                {
                    menuId: 3,
                    displayName: "Weapons",
                    route:"map",
                },
                {
                    menuId: 4,
                    displayName: "Exo-Upgrades",
                    route:"map",
                },
                {
                    menuId: 5,
                    displayName: "Features",
                    route:"map",
                },
                {
                    menuId: 6,
                    displayName: "Characters",
                    route:"map",
                },
                {
                    menuId: 7,
                    displayName: "Drops",
                    route:"map",
                },
                {
                    menuId: 8,
                    displayName: "Song",
                    route:"map",
                },
                {
                    menuId: 9,
                    displayName: "Game Over, Man",
                    route:"map",
                },
                {
                    menuId: 10,
                    displayName: "Achievements/Trophys",
                    route:"map",
                }
                

            ]
        }
    }

})();