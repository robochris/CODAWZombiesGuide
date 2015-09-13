(function () {
    'use strict';

    window.agApp.controller('thatfeatureController', Controller);


    function Controller( $stateParams, $scope) {
        var vm = this;
        vm.FeatureId = $stateParams.FeatureId;
        vm.feature = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.feature = GetThatFeature(vm.FeatureId);
            $scope.mapMenu.selectedScreen = 'Features';
        }
    }

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
})();