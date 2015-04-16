(function () {
    'use strict';

    window.agApp.service('exoUpradeService', Service);

    function Service() {
        var service = {
            GetExoUpgrades: GetExoUpgrades
        };

        return service;

        function GetExoUpgrades() {
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
    }

})();