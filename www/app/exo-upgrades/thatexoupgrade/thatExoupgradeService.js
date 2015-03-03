(function () {
    'use strict';

    window.agApp.service('thatExoupgradeService', Service);

    function Service() {
        var service = {
            GetThatExo: GetThatExo
        };

        return service;

        function GetThatExo(ExoupgradeId) {
            if (ExoupgradeId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "Oz",
                }
            ]
            }
            if (ExoupgradeId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "this",
                }
            ]
            }
            if (ExoupgradeId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "Exo",
                }
            ]
            }
            if (ExoupgradeId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "cool",
                }
            ]
            }
            if (ExoupgradeId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "cool",
                }
            ]
            }
        }
    }
})();