(function () {
    'use strict';

    window.agApp.service('featuresService', Service);

    function Service() {
        var service = {
            GetFeatures: GetFeatures
        };

        return service;

        function GetFeatures(mapId) {
            if (mapId == 4) {
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
                    FeatureId: 12,
                    displayName: "Teleporter",
                },
                {
                    FeatureId: 7,
                    displayName: "ATM",
                },
                {
                    FeatureId: 9,
                    displayName: "Grenade Disposal Machine"
                },
                {
                    FeatureId: 10,
                    displayName: "Weapon Disposal Machine"
                },
                {
                    FeatureId: 11,
                    displayName: "Fishing Pole"
                },
                {
                    FeatureId: 13,
                    displayName: "Chompy"
                },


            ]
            } else if (mapId == 3) {
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