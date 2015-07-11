(function () {
    'use strict';

    window.agApp.service('easterEggsService', Service);

    function Service() {
        var service = {
            GetEasterEgg: GetEasterEgg
        };

        return service;

        function GetEasterEgg(mapId) {
            if (mapId == 4) {
                return {
                    EasterEggId: 3,
                    displayName: "Flotsam & Jetsam"
                }
            } else if (mapId == 3) {
                return {
                    EasterEggId: 2,
                    displayName: "MEAT IS MURDER"
                }
            } else if (mapId == 2) {
                return {
                    EasterEggId: 1,
                    displayName: "Game Over, Man"
                }
            }
        }
    }
})();