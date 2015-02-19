(function () {
    'use strict';

    window.agApp.service('thatfeatureService', Service);

    function Service() {
        var service = {
            GetThatFeature: GetThatFeature
        };

        return service;

        function GetThatFeature(FeatureId) {
            if (FeatureId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "this",
                }
            ]
            }
            if (FeatureId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "is",
                }
            ]
            }
            if (FeatureId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "the",
                }
            ]
            }
            if (FeatureId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "feature",
                }
            ]
            }
        }
    }
})();