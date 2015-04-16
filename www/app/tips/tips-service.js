(function () {
    'use strict';

    window.agApp.service('tipsService', Service);

    function Service() {
        var service = {
            GetTip: GetTip
        };

        return service;

        function GetTip() {
        }
    }

})();