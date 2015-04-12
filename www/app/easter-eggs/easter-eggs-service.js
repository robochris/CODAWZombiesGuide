(function () {
        'use strict';

        window.agApp.service('easterEggsService', Service);

        function Service() {
            var service = {
                GetEasterEgg: GetEasterEgg
            };

            return service;

            function GetEasterEgg(mapId) {
                if (mapId == 3){
            return {
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