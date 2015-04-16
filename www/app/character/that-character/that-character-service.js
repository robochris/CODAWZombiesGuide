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
                }
            ]
            } else if (CharacterId == 2) {
                return [
                    {
                }
            ]
            } else if (CharacterId == 3) {
                return [
                    {
                }
            ]
            } else if (CharacterId == 4) {
                return [
                    {
                }
            ]

            } else if (CharacterId == 5) {
                return [
                    {
                }
            ]
            } else if (CharacterId == 6) {
                return [
                    {
                }
            ]
            } else if (CharacterId == 7) {
                return [
                    {
                }
            ]
            } else if (CharacterId == 8) {
                return [
                    {
                }
            ]
            }
        }
    }

})();