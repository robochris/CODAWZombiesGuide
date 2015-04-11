(function () {
    'use strict';

    window.agApp.service('thatCharacterService', Service);

    function Service() {
        var service = {
            GetThatCharacter: GetThatCharacter
        };

        return service;

        function GetThatCharacter(CharacterId) {
            if (CharacterId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "Oz",
                }
            ]
            } else if (CharacterId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "Lilith",
                }
            ]
            } else if (CharacterId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "Kahn",
                }
            ]
            } else if (CharacterId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "Decker",
                }
            ]

            } else if (CharacterId == 5) {
                return [
                    {
                        Id: 1,
                        displayName: "Angie",
                }
            ]
            } else if (CharacterId == 6) {
                return [
                    {
                        Id: 1,
                        displayName: "Survivors",
                }
            ]
            } else if (CharacterId == 7) {
                return [
                    {
                        Id: 1,
                        displayName: "Eagle One",
                }
            ]
            } else if (CharacterId == 8) {
                return [
                    {
                        Id: 1,
                        displayName: "Sentinel Leader",
                }
            ]
            }


        }
    }

})();