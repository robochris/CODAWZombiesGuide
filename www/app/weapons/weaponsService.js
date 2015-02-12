(function () {
    'use strict';

    window.agApp.service('weaponsService', Service);

    function Service() {
        var service = {
            GetWeapons: GetWeapons
        };

        return service;

        function GetWeapons() {
            return [
                {
                    WeaponId: 1,
                    displayName: "Bal-27",
                },
                {
                    WeaponId: 2,
                    displayName: "PDW",
                },

            ]
        }
    }

})();