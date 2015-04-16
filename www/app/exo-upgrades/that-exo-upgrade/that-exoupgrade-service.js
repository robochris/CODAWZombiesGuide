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
                }
            ]
            }
            if (ExoupgradeId == 2) {
                return [
                    {
                }
            ]
            }
            if (ExoupgradeId == 3) {
                return [
                    {
                }
            ]
            }
            if (ExoupgradeId == 4) {
                return [
                    {
                }
            ]
            }
            if (ExoupgradeId == 4) {
                return [
                    {
                }
            ]
            }
        }
    }
})();