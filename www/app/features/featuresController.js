(function () {
    'use strict';

    window.agApp.controller('featuresController', Controller);


    function Controller(featuresService, $scope) {
        var vm = this;
        vm.features = [];

        Activate();

        function Activate() {
            $scope.mapMenu.selectedScreen = 'Features';
            vm.features = featuresService.GetFeatures();
        }
    }


})();