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
                    displayName: "Power Switch",
                },
                {
                    DropId: 2,
                    displayName: "Upgrade Station",
                },
                {
                    DropId: 3,
                    displayName: "Orbital Care Packages",
                },
                {
                    DropId: 4,
                    displayName: "Decontamination Zone",
                },
                {
                    DropId: 5,
                    displayName: "3D Printer",
                },
                {
                    DropId: 6,
                    displayName: "Trash Chute",
                },
                {
                    DropId: 7,
                    displayName: "Credit Dispenser",
                },
                

            ]
        }
    }

})();