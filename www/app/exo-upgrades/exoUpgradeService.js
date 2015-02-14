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
                    displayName: "Soldier",
                },
                {
                    ExoupgradeId: 2,
                    displayName: "Exo-Health",
                },

            ]
        }
    }

})();