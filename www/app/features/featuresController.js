(function () {
    'use strict';

    window.agApp.controller('featuresController', Controller);


    function Controller(featuresService, $scope, $stateParams) {
        var vm = this;
        vm.features = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Features';
            vm.features = featuresService.GetFeatures(vm.mapId);
        }
    }


})();