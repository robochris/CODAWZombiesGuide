(function () {
    'use strict';

    window.agApp.controller('thatfeatureController', Controller);


    function Controller(thatfeatureService, $stateParams) {
        var vm = this;
        vm.FeatureId = $stateParams.FeatureId;
        vm.feature = [];

        Activate();

        function Activate() {
            vm.feature = thatfeatureService.GetThatFeature(vm.FeatureId);
        }
    }


})();