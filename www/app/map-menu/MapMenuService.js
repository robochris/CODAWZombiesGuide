(function () {
    'use strict';

    window.agApp.service('MapMenuService', Service);

    function Service() {
        var service = {
            GetMenuItems: GetMenuItems
        };

        return service;

        function GetMenuItems() {
            return [
                {
                    menuId: 1,
                    displayName: "Map",
                    route:"map",
                },
                {
                    menuId: 2,
                    displayName: "Zombies",
                    route:"Zombies",
                },
                {
                    menuId: 3,
                    displayName: "Weapons",
                    route:"Weapons",
                },
                {
                    menuId: 4,
                    displayName: "Exo-Upgrades",
                    route:"ExoUpgrades",
                },
                {
                    menuId: 5,
                    displayName: "Features",
                    route:"map",
                },
                {
                    menuId: 6,
                    displayName: "Characters",
                    route:"Characters",
                },
                {
                    menuId: 7,
                    displayName: "Drops",
                    route:"Drops",
                },
                {
                    menuId: 8,
                    displayName: "Song",
                    route:"Song",
                },
                {
                    menuId: 9,
                    displayName: "Game Over, Man",
                    route:"GameOverMan",
                },
                {
                    menuId: 10,
                    displayName: "Achievements/Trophys",
                    route:"AchiecementsTrophys",
                }
                

            ]
        }
    }

})();