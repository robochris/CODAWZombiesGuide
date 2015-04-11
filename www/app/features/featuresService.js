(function () {
    'use strict';

    window.agApp.service('featuresService', Service);

    function Service() {
        var service = {
            GetFeatures: GetFeatures
        };

        return service;

        function GetFeatures(mapId) {
            if (mapId == 3) {
            return [
                {
                    FeatureId: 1,
                    displayName: "Power Switch",
                },
                {
                    FeatureId: 2,
                    displayName: "Upgrade Station",
                },
                {
                    FeatureId: 3,
                    displayName: "Orbital Care Packages",
                },
                {
                    FeatureId: 4,
                    displayName: "Decontamination Zone",
                },
                {
                    FeatureId: 5,
                    displayName: "3D Printer",
                },
                {
                    FeatureId: 6,
                    displayName: "Trash Chute",
                },
                {
                    FeatureId: 7,
                    displayName: "ATM",
                },
                {
                    FeatureId: 8,
                    displayName: "Traps"
                }


            ]
            } else if (mapId == 2) {
                return [
                {
                    FeatureId: 1,
                    displayName: "Power Switch",
                },
                {
                    FeatureId: 2,
                    displayName: "Upgrade Station",
                },
                {
                    FeatureId: 3,
                    displayName: "Orbital Care Packages",
                },
                {
                    FeatureId: 4,
                    displayName: "Decontamination Zone",
                },
                {
                    FeatureId: 5,
                    displayName: "3D Printer",
                },
                {
                    FeatureId: 6,
                    displayName: "Trash Chute",
                },
                {
                    FeatureId: 7,
                    displayName: "ATM",
                },


            ]
            }
        }
    }

})();