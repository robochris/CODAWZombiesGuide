(function () {
    'use strict';

    window.agApp.service('dropsService', Service);

    function Service() {
        var service = {
            GetDrops: GetDrops
        };

        return service;

        function GetDrops() {
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
                },
                
                

            ]
        }
    }

})();