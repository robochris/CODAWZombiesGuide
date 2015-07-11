(function () {
    'use strict';

    window.agApp.service('exoUpradeService', Service);

    function Service() {
        var service = {
            GetExoUpgrades: GetExoUpgrades
        };

        return service;

        function GetExoUpgrades(mapId) {
            if (mapId == 2 || mapId == 3) {
                return [
                    {
                        ExoupgradeId: 1,
                        displayName: "Exo-Soldier",
                },
                    {
                        ExoupgradeId: 2,
                        displayName: "Exo-Health",
                },
                    {
                        ExoupgradeId: 3,
                        displayName: "Exo-Reload",
                },
                    {
                        ExoupgradeId: 4,
                        displayName: "Exo-Slam",
                },
                    {
                        ExoupgradeId: 5,
                        displayName: "Exo-Medic",
                },
            ]
            }
            if (mapId == 4) {
                return [
                    {
                        ExoupgradeId: 1,
                        displayName: "Exo-Soldier",
                },
                    {
                        ExoupgradeId: 2,
                        displayName: "Exo-Health",
                },
                    {
                        ExoupgradeId: 3,
                        displayName: "Exo-Reload",
                },
                    {
                        ExoupgradeId: 4,
                        displayName: "Exo-Slam",
                },
                    {
                        ExoupgradeId: 5,
                        displayName: "Exo-Medic",
                },
                    {
                        ExoupgradeId: 6,
                        displayName: "Exo-Stockpile",
                },
            ]
            }
        }
    }

})();