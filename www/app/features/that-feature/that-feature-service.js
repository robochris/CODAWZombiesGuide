(function () {
    'use strict';

    window.agApp.service('thatfeatureService', Service);

    function Service() {
        var service = {
            GetThatFeature: GetThatFeature
        };

        return service;

        function GetThatFeature(FeatureId) {
            if (FeatureId == 8){
            return [
                {
                    TrapId:1,
                    displayName:"Insta Gator"
                },{
                    TrapId:2,
                    displayName:"Orbital Strike"
                },{
                    TrapId:3,
                    displayName:"Electrified Floor"
                },{
                    TrapId:4,
                    displayName:"Automated Snipers"
                },{
                    TrapId:5,
                    displayName:"Camouflage Spray"
                },{
                    TrapId:6,
                    displayName:"Ambulance"
                },
            ]
            }
        }
    }
})();