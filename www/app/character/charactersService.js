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
                    displayName: "Oz",
                    
                },
                {
                    CharacterId: 2,
                    displayName: "Lilith",
                    
                },
                {
                    CharacterId: 3,
                    displayName: "Kahn",
                    
                },
                {
                    CharacterId: 4,
                    displayName: "Decker",
                    
                },
                {
                    CharacterId: 5,
                    displayName: "Angie",
                    
                },
                

            ]
        }
    }

})();