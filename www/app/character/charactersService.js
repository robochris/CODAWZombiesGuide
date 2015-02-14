(function () {
    'use strict';

    window.agApp.service('charactersService', Service);

    function Service() {
        var service = {
            GetCharacters: GetCharacters
        };

        return service;

        function GetCharacters() {
            return [
                {
                    CharacterId: 1,
                    displayName: "Resupply",
                },
                {
                    CharacterId: 2,
                    displayName: "DNA Bomb",
                },

            ]
        }
    }

})();