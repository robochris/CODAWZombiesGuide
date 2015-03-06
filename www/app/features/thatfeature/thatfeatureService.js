(function () {
    'use strict';

    window.agApp.service('thatfeatureService', Service);

    function Service() {
        var service = {
            GetThatFeature: GetThatFeature
        };

        return service;

        function GetThatFeature(FeatureId) {
            
        }
    }
})();