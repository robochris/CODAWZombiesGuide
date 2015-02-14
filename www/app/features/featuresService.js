(function () {
    'use strict';

    window.agApp.service('featuresService', Service);

    function Service() {
        var service = {
            GetFeatures: GetFeatures
        };

        return service;

        function GetFeatures() {
            return [
                {
                    FeatureId: 1,
                    displayName: "Power Supply",
                },
                {
                    DropId: 2,
                    displayName: "Upgrade Station",
                },

            ]
        }
    }

})();