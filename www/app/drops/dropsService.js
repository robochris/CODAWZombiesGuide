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

            ]
        }
    }

})();