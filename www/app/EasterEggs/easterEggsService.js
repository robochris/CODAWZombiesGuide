(function () {
    'use strict';

    window.agApp.service('easterEggsService', Service);

    function Service() {
        var service = {
            GetEasterEgg: GetEasterEgg
        };

        return service;

        function GetEasterEgg() {
            return [
                {
                    EasterEggId: 1,
                    displayName: "Game Over, Man",
                }

            ]
        }
    }

})();