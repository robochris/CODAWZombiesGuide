(function () {
    'use strict';

    window.agApp.service('dropsService', Service);

    function Service() {
        var service = {
            GetDrops: GetDrops
        };

        return service;

        function GetDrops(mapId) {
            if (mapId == 2 || mapId == 3) {
                return [
                    {
                        DropId: 1,
                        displayName: "Resupply",
                },
                    {
                        DropId: 2,
                        displayName: "DNA Bomb",
                },
                    {
                        DropId: 3,
                        displayName: "Hyper-Damage",
                },
                    {
                        DropId: 4,
                        displayName: "Multiplier",
                },
                    {
                        DropId: 5,
                        displayName: "Security",
                },
                    {
                        DropId: 6,
                        displayName: "Full Reload",
                },
                    {
                        DropId: 7,
                        displayName: "Power Surge",
                }
                ]
            } else if (mapId == 4)
                return [
                    {
                        DropId: 1,
                        displayName: "Resupply",
                    },{
                        DropId: 2,
                        displayName: "DNA Bomb",
                    },{
                        DropId: 3,
                        displayName: "Hyper-Damage",
                    },{
                        DropId: 4,
                        displayName: "Multiplier",
                    },{
                        DropId: 5,
                        displayName: "Security",
                    },{
                        DropId: 6,
                        displayName: "Full Reload",
                    },{
                        DropId: 7,
                        displayName: "Power Surge",
                    },{
                        DropId: 8,
                        displayName: "Explosive Touch",
                    },{
                        DropId: 9,
                        displayName: "Open Fire",
                    },
                ]
        }
    }

})();