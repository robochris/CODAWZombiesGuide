(function () {
    'use strict';

    window.agApp.controller('thatfeatureController', Controller);


    function Controller(thatfeatureService, $stateParams, $scpoe) {
        var vm = this;
        vm.FeatureId = $stateParams.FeatureId;
        vm.feature = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Features';
            vm.feature = thatfeatureService.GetThatFeature(vm.FeatureId);
        }
    }


})();